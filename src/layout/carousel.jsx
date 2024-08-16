import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

function CarouselComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the images from the backend
    fetch("http://127.0.0.1:8000/ads/getDisplayAds") // Assuming your Laravel API endpoint is at this URL
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Log fetched data
        const imageUrls = data.map((ad) => ad.ad_img_url);
        setImages(imageUrls);
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <Carousel className="w-full max-w-[700px] h-[600px] bg-black">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className={index === currentIndex ? "block" : "hidden"}
          >
            <img
              src={src}
              alt={`Carousel Image ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ objectFit: "cover" }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Uncomment these if you want navigation buttons */}
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}

export default CarouselComponent;
