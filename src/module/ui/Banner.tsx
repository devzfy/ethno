import BG from '../../assets/mainbg.png';
import HeroBg from '../../assets/hero-bg.png';
export default function Banner() {
  return (
    <section className="relative  md:h-[949px] h-[811px] rounded-b-[14px] rounded-bl-[14px] xl:rounded-b-[30px] xl:rounded-bl-[30px] md:rounded-b-[18px] md:rounded-bl-[18px] overflow-hidden">
      <div className="absolute w-full ">
        <img src={BG} alt="" width="100%" className="md:h-[949px] h-[811px]" />
      </div>
      <div className="container-secondary px-4 mx-auto xl:pt-[266px] pt-[150px] md:pt-[170px] xl:pb-[90px]">
        <div className="">
          <div className="">
            <h1 className="md:mb-8 mb-5 xl:text-[90px] relative text-white xl:leading-[82px] md:text-[58px] md:leading-[57px] text-[31px] leading-[30px]">
              Курсы Логистики
              <br />
              <span className="">
                С нуля до
                <br />
                профессионала
              </span>
            </h1>
            <p className="text-white xl:text-xl relative md:text-sm font-semibold max-w-[770px] md:max-w-[1009px]">
              Без громких обещаний — только навыки, с которыми вы уверенно
              выйдете на стабильный доход от 500 долларов и сможете грамотно
              управлять потоками и маршрутами.
            </p>
            <a
              href="#contact"
              className="inline-block text-sm bg-[#F4D902] text-black font-bold py-[18px] px-[30px] xl:py-[28px] xl:px-[60px]  rounded-full md:text-lg  relative md:mt-14 mt-12"
            >
              ХОЧУ НА КУРС
            </a>
          </div>
          <div className="absolute -right-10 -bottom-10 xl:top-[92px] md:-bottom-20 md:-right-15 xl:-bottom-auto md:top-auto xl:-right-50">
            <img
              src={HeroBg}
              alt="Логистика иллюстрация с складом, транспортом и глобальной сетью поставок"
              className="h-[300px] md:w-[450px] md:h-[450px] xl:w-[700px] xl:h-[700px] w-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
