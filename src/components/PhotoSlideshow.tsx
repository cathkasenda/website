
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const photos = [
  "/lovable-uploads/d6a9bdbc-5280-4140-8db3-b438c771ad82.png",
  "/lovable-uploads/69ed15a0-8cf3-4824-8e81-a6a6137ca3e0.png",
  "/lovable-uploads/fb9efeb3-c87f-4d76-856d-a991538206b4.png",
  "/lovable-uploads/3d8fcd7a-2e64-43e9-b5c2-fce87e4619f5.png",
  "/lovable-uploads/f374e5be-6496-4606-bcda-31087efe6ef1.png",
  "/lovable-uploads/1844305a-0c85-4b56-9082-ed5dea0b17c2.png",
  "/lovable-uploads/7ad1dc08-c300-44b8-99de-320266199646.png",
  "/lovable-uploads/bbe98989-018f-409c-8e0d-f4d8fe91c577.png"
];

const PhotoSlideshow = () => {
  return (
    <section className="section-container">
      <h2 className="pixel-heading">PHOTO GALLERY</h2>
      
      <div className="relative mx-auto w-full max-w-4xl mt-8">
        <Carousel>
          <CarouselContent>
            {photos.map((photo, index) => (
              <CarouselItem key={index}>
                <div className="flex justify-center p-2">
                  <img 
                    src={photo} 
                    alt={`Gallery photo ${index + 1}`}
                    className="rounded-lg object-cover h-[300px] md:h-[500px] w-full pixel-border"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </section>
  );
};

export default PhotoSlideshow;
