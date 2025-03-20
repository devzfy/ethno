'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image1 from '../../assets/img1.png';
import Image3 from '../../assets/img3.png';
import Image4 from '../../assets/img4.jpg';
import Image5 from '../../assets/img5.jpg';
import Image6 from '../../assets/img6.jpg';
import Image7 from '../../assets/img7.jpg';
export default function InfiniteImageMarquee() {
  // Sample images - replace with your actual image URLs
  const images = [
    { id: 1, src: Image1, alt: 'Image 1' },
    { id: 3, src: Image3, alt: 'Image 3' },
    { id: 4, src: Image4, alt: 'Image 4' },
    { id: 5, src: Image5, alt: 'Image 5' },
    { id: 6, src: Image6, alt: 'Image 6' },
    { id: 7, src: Image7, alt: 'Image 7' },
  ];

  // Create a duplicate set of images for seamless looping
  const allImages = [...images, ...images];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="w-full overflow-hidden md:mb-[150px] mb-[80px]">
      <div className="mb-[50px] xl:mb-20">
        <div className="container-secondary relative">
          <h1 className="text-[#252323] xl:text-[72px] md:text-[37px] md:leading-[34px] md:max-w-[574px] xl:leading-[67px] font-secondary text-center xl:max-w-[1500px] mx-auto xl:mt-[50px] md:mt-[40px] xl:mb-10 md:mb-[30px] mb-5 mt-10 text-[26px] leading-[30px]">
            Доверие, подкрепленное знаниями
          </h1>
          <p className="text-[#252323] font-primary text-sm xl:text-xl md:text-sm text-center xl:max-w-[1088px] md:max-w-[574px] font-semibold mx-auto">
            Наши сертификаты подтверждают качество обучения, а дипломы
            преподавателей — их экспертность. Учитесь у лучших и получайте
            признанный результат
          </p>
        </div>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay
        ssr
        infinite
        autoPlaySpeed={2000}
      >
        {allImages.map((image, index) => (
          <div key={`${image.id}-${index}`} className="md:mx-1 mx-[3px]">
            <div className="relative  overflow-hidden  xl:h-[447px] md:h-[340px] h-[230px]">
              <img
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                className="object-contain h-full w-full"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
