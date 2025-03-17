'use client';
import Marquee from 'react-fast-marquee';
import Image1 from '../../assets/img1.png';
import Image2 from '../../assets/img2.png';
import Image3 from '../../assets/img3.png';
import Image4 from '../../assets/img4.jpg';
import Image5 from '../../assets/img5.jpg';
import Image6 from '../../assets/img6.jpg';
import Image7 from '../../assets/img7.jpg';
export default function InfiniteImageMarquee() {
  // Sample images - replace with your actual image URLs
  const images = [
    { id: 1, src: Image1, alt: 'Image 1' },
    { id: 2, src: Image2, alt: 'Image 2' },
    { id: 3, src: Image3, alt: 'Image 3' },
    { id: 4, src: Image4, alt: 'Image 4' },
    { id: 5, src: Image5, alt: 'Image 5' },
    { id: 6, src: Image6, alt: 'Image 6' },
    { id: 7, src: Image7, alt: 'Image 7' },
  ];

  // Create a duplicate set of images for seamless looping
  const allImages = [...images, ...images];

  return (
    <div className="w-full overflow-hidden md:mb-[150px] mb-[80px]">
      <div className="relative">
        <div className="flex whitespace-nowrap">
          <Marquee>
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
          </Marquee>
        </div>
      </div>
    </div>
  );
}
