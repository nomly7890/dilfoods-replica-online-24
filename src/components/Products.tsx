import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { ArrowRightIcon } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const categories = [
  {
    name: "Base Gravies",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/aZsC0lEH.webp"
  },
  {
    name: "Chaap",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/G8RLxVv6.webp"
  },
  {
    name: "Flat Breads",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/fPuwdTeJ.webp"
  },
  {
    name: "Momos",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/YmDyErEy.webp"
  },
  {
    name: "More Items",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/plBdiEvZ.webp"
  },
  {
    name: "Non Veg Snacks",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/FbCNp4PO.webp"
  },
  {
    name: "Ready Gravies",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/FSdzaL7l.webp"
  },
  {
    name: "Rice Magic",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/TChHYvDr.webp"
  },
  {
    name: "Side Dish",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/vNCLNHzV.webp"
  },
  {
    name: "South Indian",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/yPdcgyzW.webp"
  },
  {
    name: "Traditional Sweets",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/vBWdlc8t.webp"
  },
  {
    name: "Veg Main Course",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/yYBCi3Y4.webp"
  },
  {
    name: "Veg Snacks",
    image: "https://cdn.dotpe.in/longtail/item_category/696120/ofjbfceH.webp"
  }
];

const Products = () => {
  // Function to chunk array into groups of 8
  const chunkArray = (arr: any[], size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const categoryChunks = chunkArray(categories, 8);

  return (
    <section className="py-16 bg-white" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dil-maroon mb-4">
            Our Food Categories
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[Autoplay({
            stopOnInteraction: false,
            delay: 3000,
          })]}
          className="w-full"
        >
          <CarouselContent>
            {categoryChunks.map((chunk, chunkIndex) => (
              <CarouselItem key={chunkIndex}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {chunk.map((category, index) => (
                    <Card key={index} className="group relative space-y-4 overflow-hidden">
                      <figure className="group-hover:opacity-90">
                        <img
                          className="aspect-square w-full object-cover"
                          src={category.image}
                          alt={category.name}
                        />
                      </figure>
                      <CardContent className="px-4 py-3">
                        <div>
                          <h3 className="text-lg font-semibold text-dil-maroon group-hover:text-dil-red transition-colors">
                            <a href="#" className="hover:text-dil-red">
                              <span aria-hidden="true" className="absolute inset-0" />
                              {category.name}
                            </a>
                          </h3>
                          {/* <p className="text-sm text-dil-gray mt-1 line-clamp-2">{category.description}</p> */}
                        </div>
                      </CardContent>
                      <CardFooter className="p-0 border-t">
                        <Button variant="ghost" className="w-full text-dil-purple hover:text-dil-orange">
                          <ArrowRightIcon className="h-4 w-4 mr-2" /> Order Now
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
          <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default Products;
