'use client';

import BG4 from '../../assets/bg4.png';
import Logo from '../../assets/logo-black.png';
export default function ConsultationRequest() {
  return (
    <div className="mt-[86px] md:mt-[110px] xl:mt-[140px]">
      <div className="relative w-full overflow-hidden container-secondary bg-[#141414] xl:rounded-[30px] border md:rounded-[18px]   md:h-[500px] rounded-[14px] ">
        <img src={BG4} alt="" className="w-full h-full absolute " />

        <div className="relative xl:pl-[70px] xl:pb-[60px] xl:pr-[69px] xl:pt-[61px] md:pl-[40px] md:pb-[50px] md:pr-[60px] md:pt-[61px] flex xl:justify-between flex-col xl:flex-row md:px-0 md:py-0 px-[15px] py-[50px]">
          {/* Left side - Heading */}
          <div className="mb-10 md:mb-0">
            <h2 className="text-[30px] xl:max-w-[950px] leading-[30px] md:text-[47px] md:leading-[47px] xl:text-[72px] xl:leading-[60px] font-bold text-white xl:mb-[136px] mb-10">
              Оставьте заявку на консультацию
            </h2>

            <button className=" bg-[#F4D902] text-[#252323] xl:text-2xl text-[12px] font-bold xl:px-[60px] xl:py-[28px] px-[30px] py-[18px] rounded-[50px]">
              ЗАДАТЬ ВОПРОС
            </button>
          </div>

          {/* Right side - Chat bubble and logo */}
          <div className="relative flex items-end md:items-stretch md:justify-end flex-col md:flex-row xl:block">
            {/* Logo */}
            <div className="xl:w-[217px] xl:h-[217px] md:w-[150px] w-[84px] h-[84px] md:-mt-[78px] xl:-mt-0 md:-mr-[30px] xl:-mr-0 md:h-[150px] rounded-full bg-[#FFFFFF80] flex justify-center items-center mb-[18px] md:mb-0">
              <img
                src={Logo}
                alt=""
                className="md:w-[100px] xl:w-auto w-[60px]"
              />
            </div>

            {/* Chat bubble */}
            <div className="md:absolute xl:w-[462px] md:w-[338px] bg-[#F1F1F1] xl:px-10 xl:py-[30px] xl:right-30 md:right-10 md:-bottom-[148px] xl:rounded-bl-[30px] xl:rounded-br-[30px] xl:rounded-tl-[30px] md:rounded-bl-[18px] md:rounded-br-[18px] md:rounded-tl-[18px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[16px] xl:-bottom-10 p-[30px] ">
              <h3 className="font-semibold xl:text-xl text-lg md:text-[16px] text-[#252323] font-primary xl:mb-2">
                Мохина
              </h3>
              <p className="text-[#252323] xl:text-xl text-sm font-primary font-medium">
                Привет! Я менеджер отдела заботы Logist Academy. Напишите мне,
                чтобы узнать о курсах подробнее и получить ответы на ваши
                вопросы!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
