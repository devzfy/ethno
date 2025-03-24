import BG from '../../assets/mainbg.png';
import HeroBg from '../../assets/hero-bg.png';
import { useWindowSize } from '@uidotdev/usehooks';
export default function Banner() {
  const { width } = useWindowSize();
  return (
    <section className="relative   md:h-[649px] xl:h-[949px] h-[470px] rounded-b-[14px] rounded-bl-[14px] xl:rounded-b-[30px] xl:rounded-bl-[30px] md:rounded-b-[18px] md:rounded-bl-[18px] overflow-hidden">
      <div className="absolute w-full ">
        <img src={BG} alt="" width="100%" className="md:h-[949px] h-[670px]" />
      </div>
      <div className="container-secondary px-4 mx-auto xl:pt-[166px] pt-[60px] md:pt-[170px] xl:pb-[90px]">
        <div className="">
          <div className="">
            <h1 className="md:mb-8 mb-5 xl:text-[80px] 2xl:text-[90px] relative text-white xl:leading-[82px] md:text-[58px] md:leading-[57px] text-[31px] leading-[30px]">
              Курсы Логистики
              <br />
              <span className="">
                С нуля до
                <br />
                профессионала
              </span>
            </h1>
            <p className="text-white xl:text-xl xl:max-w-[800px] 2xl:max-w-[1009px] relative md:text-sm font-semibold max-w-[770px] md:max-w-[1009px]">
              Без громких обещаний — только навыки, с которыми вы уверенно
              выйдете на стабильный доход от 500 долларов и сможете грамотно
              управлять потоками и маршрутами.
            </p>
            <a
              href={
                width && width > 1280
                  ? '#contact'
                  : 'https://t.me/logist_academy'
              }
              className="inline-block text-sm bg-[#F4D902] text-black font-bold py-[18px] px-[30px] xl:py-[28px] xl:px-[60px]  rounded-full md:text-lg  relative md:mt-14 mt-8"
              target={width && width > 1280 ? '_parent' : '_blank'}
            >
              ХОЧУ НА КУРС
            </a>
          </div>
          <div className="absolute -right-10 -bottom-10 xl:top-[92px] md:-bottom-20 md:-right-15 xl:-bottom-auto md:top-auto xl:-right-50">
            <img
              src={HeroBg}
              alt="Логистика иллюстрация с складом, транспортом и глобальной сетью поставок"
              className="hidden xl:block h-[300px] md:w-[450px] md:h-[450px] xl:w-[600px] xl:h-[600px] 2xl:w-[700px] 2xl:h-[700px] w-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
