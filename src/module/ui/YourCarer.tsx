import Step from '../../assets/step.png';

export default function CareerBanner() {
  return (
    <div className=" mt-[80px] mb-[120px] md:mt-[110px] md:mb-[169px] xl:mt-[140px] xl:mb-[200px]">
      <div className="w-full container-secondary rounded-[14px] xl:rounded-[30px] md:rounded-[18px] bg-[#141414] relative overflow-hidden px-5 py-12 md:px-[61px] md:py-[50px] xl:py-[90px]">
        <img
          src={Step}
          className="absolute w-full h-full object-cover"
          alt=""
        />
        <div className="relative flex justify-center items-center flex-col">
          <h2 className="text-center mx-auto font-secondary font-medium text-white xl:text-[72px] md:text-[47px] text-[30px] xl:leading-[66px] md:leading-[47px] leading-[30px] xl:max-w-[1200px] md:max-w-[537px] max-w-[343px] mb-[50px] md:mb-10 xl:mb-[80px]">
            Простой шаг к вашей карьере!
          </h2>

          <div className="flex flex-col md:flex-row md:gap-2.5">
            <a
              href="#contact"
              className="inline-block bg-[#F4D902] font-primary mb-2.5 md:mb-0 text-[#252323] font-bold  text-sm py-[18px] px-[46px] rounded-[50px] xl:text-[23px] xl:py-[28px] xl:px-[51px] "
            >
              Записаться на пробное занятие!
            </a>

            <button className="bg-[#fff] text-[#252323] font-primary font-bold  text-sm py-[18px] px-[46px] rounded-[50px] xl:text-[23px] xl:py-[28px] xl:px-[51px] ">
              Получить бесплатную консультацию
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
