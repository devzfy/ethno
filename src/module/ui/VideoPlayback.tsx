import Laptop from '../../assets/laptop.png';
import BG2 from '../../assets/bg2.png';
import Group from '../../assets/group.png';
export default function VideoPlayback() {
  return (
    <div>
      <div className="mt-[170px]">
        <div className="flex justify-center flex-col items-center">
          <p className="font-bold xl:text-xl text-sm font-primary xl:max-w-[762px] md:max-w-[590px] text-center mb-10 md:mb-0">
            Посмотрите видео, в котором рассказываем про реальные зарплаты
            логистов и процесс работы на фрилансе
          </p>
          <img src={Laptop} alt="" className="xl:h-[693px] xl:ml-20 md:ml-10" />
        </div>
        <div
          id="student"
          className="bg-white xl:rounded-[50px] md:rounded-[22px] rounded-[12px] xl:px-[119px] md:px-5 xl:pb-[100px] md:pb-[70px] xl:pt-[409px] md:pt-[295px] pt-[170px] xl:-mt-80 md:-mt-52 -mt-28"
        >
          <h1 className="xl:text-[80px] md:text-[37px] text-[28px] leading-[30px] max-w-full md:leading-[30px] xl:leading-[67px] text-center mx-auto font-secondary font-medium xl:max-w-[1290px] md:max-w-[650px] ">
            Более 2000 студентов прошли наши курсы и стали логистами
          </h1>
          <div className="flex justify-between xl:space-x-10 xl:mt-[90px] mt-[50px] md:mt-[60px] flex-col xl:flex-row">
            <div className="xl:w-[65%] flex flex-wrap w-full">
              <div className="md:w-1/2 w-full border-b-4 md:border-r-4 flex justify-center items-center flex-col">
                <h2 className="text-[#252323] xl:text-[82px] text-[60px] font-medium font-primary">
                  60/40%
                </h2>
                <p className="text-[#252323] xl:text-lg text-sm text-center font-primary font-semibold pb-10">
                  60% практики <br /> и 40% теории на курсе
                </p>
              </div>
              <div className="md:w-1/2 pt-10 md:pt-0 w-full border-b-4  flex justify-center items-center flex-col">
                <h2 className="text-[#252323] xl:text-[82px] text-[60px] font-medium font-primary">
                  95%
                </h2>
                <p className="text-[#252323] xl:text-lg md:text-sm text-center font-primary font-semibold pb-10">
                  Слушателей отмечают удобство <br /> обучения на курса
                </p>
              </div>
              <div className="md:w-1/2 w-full pt-10 md:pt-0 border-b-4 md:border-b-0 md:border-r-4 flex justify-center items-center flex-col">
                <h2 className="text-[#252323] xl:text-[82px] text-[60px] font-medium font-primary">
                  93%
                </h2>
                <p className="text-[#252323] xl:text-lg text-sm text-center font-primary font-semibold pb-10">
                  Слушателей используют полученные <br /> знания на практике
                </p>
              </div>
              <div className="md:w-1/2 pt-10 md:pt-0 w-full flex justify-center items-center flex-col">
                <h2 className="text-[#252323] xl:text-[82px] text-[60px] font-medium font-primary">
                  80%
                </h2>
                <p className="text-[#252323] xl:text-lg text-sm text-center font-primary font-semibold pb-10">
                  Выпускников продвинулись по <br /> карьерной лестнице
                </p>
              </div>
            </div>
            <div className="mt-10  xl:w-[35%] md:w-[492px] w-[90%] mx-auto xl:mx-auto md:mt-[50px] xl:mt-0 relative xl:h-[524px] h-[286px] rounded-4xl overflow-hidden flex justify-center items-center flex-col gap-y-[61px] mb-[60px] md:mb-0">
              <img
                src={BG2}
                alt=""
                className="absolute object-cover w-full h-full "
              />
              <img
                src={Group}
                alt=""
                className="relative  w-[226px] h-[111px] xl:w-auto xl:h-auto"
              />
              <a
                href="#gallery"
                className="inline-block xl:px-[60px] xl:py-[28px] px-[30px] py-[18px]  rounded-[50px] relative bg-[#F4D902] xl:text-[23px] text-[12px] font-bold font-thirty"
              >
                истории студентов
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
