import { useEffect, useState } from "react";

const AutoCarousel = ({
  images,
  title = "image",
}: {
  images: string[];
  title?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <img
      src={images[currentIndex] || "/placeholder.svg"}
      alt={title}
      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-lg"
    />
  );
};

export default AutoCarousel;
