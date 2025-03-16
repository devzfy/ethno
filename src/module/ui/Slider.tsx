'use client';

import { useRef, useEffect, useState } from 'react';
import Image1 from '../../assets/image1.jpeg';
import Image2 from '../../assets/image2.png';
import Image3 from '../../assets/image3.png';
import Image4 from '../../assets/image4.png';
import Image5 from '../../assets/image5.png';
export default function InfiniteImageMarquee() {
  // Sample images - replace with your actual image URLs
  const images = [
    { id: 1, src: Image1, alt: 'Image 1' },
    { id: 2, src: Image2, alt: 'Image 2' },
    { id: 3, src: Image3, alt: 'Image 3' },
    { id: 4, src: Image4, alt: 'Image 4' },
    { id: 5, src: Image5, alt: 'Image 5' },
    { id: 6, src: Image1, alt: 'Image 6' },
  ];

  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(0.5);

  // Initialize and handle resize
  useEffect(() => {
    const updateContainerWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setContainerWidth(width);

        // Adjust speed based on screen width
        if (window.innerWidth < 640) {
          setAnimationSpeed(0.3); // slower on mobile
        } else if (window.innerWidth < 1024) {
          setAnimationSpeed(0.4); // medium on tablet
        } else {
          setAnimationSpeed(0.5); // faster on desktop
        }
      }
    };

    updateContainerWidth();
    window.addEventListener('resize', updateContainerWidth);
    return () => window.removeEventListener('resize', updateContainerWidth);
  }, []);

  // Animation loop
  useEffect(() => {
    if (!containerWidth) return;

    let animationFrameId: number;
    let currentTranslateX = translateX;

    const animate = () => {
      currentTranslateX -= animationSpeed;

      // Reset position when first set of images has scrolled out of view
      if (currentTranslateX <= -containerWidth / 2) {
        currentTranslateX = 0;
      }

      setTranslateX(currentTranslateX);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [containerWidth, animationSpeed, translateX]);

  // Create a duplicate set of images for seamless looping
  const allImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden md:mb-[150px] mb-[80px]">
      <div ref={containerRef} className="relative">
        <div
          className="flex whitespace-nowrap"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {allImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="flex-shrink-0  md:mx-1 mx-[3px]"
            >
              <div className="relative  overflow-hidden xl:h-[447px] md:h-[340px] h-[230px]">
                <img
                  src={image.src || '/placeholder.svg'}
                  alt={image.alt}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
