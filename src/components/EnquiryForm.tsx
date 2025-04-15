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
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function EnquiryForm({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real application, you would handle form submission here
    setTimeout(() => {
      setSubmitted(false);
      setOpen(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden rounded-2xl border-none shadow-2xl">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-full -mr-16 -mt-16 z-0"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-100 rounded-full -ml-12 -mb-12 z-0"></div>

            <div className="p-8 relative z-10">
              <DialogHeader className="mb-8">
                <DialogTitle className="text-center text-3xl font-bold bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                  Let's Connect
                </DialogTitle>
                <p className="text-center text-gray-500 mt-2">
                  Fill out the form below and we'll get back to you shortly
                </p>
              </DialogHeader>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="brand-name"
                    className="text-sm font-medium text-gray-700 flex items-center"
                  >
                    Brand Name <span className="text-rose-500 ml-1">*</span>
                  </Label>
                  <Input
                    id="brand-name"
                    placeholder="Enter your brand name"
                    className="rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500 transition-all"
                    required
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
                          className="text-teal-600 border-gray-300 rounded focus:ring-teal-500"
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
                    placeholder="Enter approximate quantities required per month"
                    className="rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500 min-h-[100px] transition-all"
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
                      placeholder="Enter your contact number"
                      className="rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500 transition-all"
                      required
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
                      type="email"
                      placeholder="Enter your email address"
                      className="rounded-lg border-gray-200 focus:border-teal-500 focus:ring-teal-500 transition-all"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white rounded-lg py-3 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Submit Enquiry <Send className="ml-2 h-4 w-4" />
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
