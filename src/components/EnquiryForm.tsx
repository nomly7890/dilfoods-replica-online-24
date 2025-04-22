"use client";

import type React from "react";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { X } from "lucide-react";

interface FormData {
  brandName: string;
  products: string[];
  quantities: string;
  contact: string;
  email: string;
}

export default function EnquiryForm({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    brandName: "",
    products: [],
    quantities: "",
    contact: "",
    email: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const foodCategories = [
    { id: "snacks", label: "Snacks" },
    { id: "base-gravies", label: "Base Gravies" },
    { id: "indian-desserts", label: "Indian Desserts" },
    { id: "ready-to-eat", label: "Ready to Eat Curries" },
    { id: "rice-products", label: "Rice Products" },
    { id: "beverages", label: "Beverages Premix" },
    { id: "pan-asian", label: "Pan Asian Food" },
    { id: "continental", label: "Continental Food" },
    { id: "indian-breads", label: "Indian Breads" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (categoryId: string) => {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.includes(categoryId)
        ? prev.products.filter((id) => id !== categoryId)
        : [...prev.products, categoryId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Add document to Firestore
      const docRef = await addDoc(collection(db, "enquiries"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
      // Reset form after successful submission
      setFormData({
        brandName: "",
        products: [],
        quantities: "",
        contact: "",
        email: "",
      });

      // Close dialog after 2 seconds
      setTimeout(() => {
        setSubmitted(false);
        setOpen(false);
      }, 2000);
    } catch (err) {
      console.error("Error submitting enquiry:", err);
      setError("Failed to submit enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="sm:max-w-[600px] p-0 overflow-hidden rounded-2xl border-none shadow-2xl max-h-[90vh]"
        aria-describedby="form-description"
      >
        {/* Close button */}
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-20">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="relative overflow-y-auto max-h-[80vh]">
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-100 rounded-full -ml-12 -mb-12 z-0"></div>

            <div className="p-8 relative z-10">
              <DialogHeader className="mb-8">
                <DialogTitle className="text-center text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                  Let's Connect
                </DialogTitle>
                <DialogDescription
                  id="form-description"
                  className="text-center text-gray-500 mt-2"
                >
                  Fill out the form below and we'll get back to you shortly
                </DialogDescription>
              </DialogHeader>

              {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="brandName"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    Brand Name <span className="text-rose-500 ml-1">*</span>
                  </Label>
                  <Input
                    id="brandName"
                    name="brandName"
                    value={formData.brandName}
                    onChange={handleInputChange}
                    placeholder="Enter your brand name"
                    className="rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500 transition-all"
                    required
                    disabled={loading}
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700 flex items-center">
                    Products of Interest{" "}
                    <span className="text-rose-500 ml-1">*</span>
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-gray-50 p-4 rounded-xl">
                    {foodCategories.map((category) => (
                      <div
                        key={category.id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={category.id}
                          checked={formData.products.includes(category.id)}
                          onCheckedChange={() =>
                            handleCheckboxChange(category.id)
                          }
                          className="text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                          disabled={loading}
                        />
                        <Label
                          htmlFor={category.id}
                          className="text-sm font-normal text-gray-600"
                        >
                          {category.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="quantities"
                    className="text-sm font-medium text-gray-700"
                  >
                    Approx. Monthly Quantities (kg)
                  </Label>
                  <Textarea
                    id="quantities"
                    name="quantities"
                    value={formData.quantities}
                    onChange={handleInputChange}
                    placeholder="Enter approximate quantities required per month"
                    className="rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500 min-h-[100px] transition-all"
                    disabled={loading}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="contact"
                      className="text-sm font-medium text-gray-700 flex items-center"
                    >
                      Contact Number{" "}
                      <span className="text-rose-500 ml-1">*</span>
                    </Label>
                    <Input
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      placeholder="Enter your contact number"
                      className="rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500 transition-all"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500 transition-all"
                      disabled={loading}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-lg py-3 transition-all duration-300 shadow-md hover:shadow-lg"
                  disabled={loading}
                >
                  {loading ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Enquiry <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        ) : (
          <div className="p-12 flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
            <p className="text-gray-500 text-center">
              Your enquiry has been submitted successfully. We'll get back to
              you shortly.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
