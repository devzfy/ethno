import Laptop from '../../assets/laptop.png';
import BG2 from '../../assets/bg2.png';
import Group from '../../assets/group.png';
export default function VideoPlayback() {
  return (
    <div>
      <div className="mt-[170px]">
        <div className="flex justify-center flex-col items-center">
          <p className="font-bold xl:text-xl font-primary xl:max-w-[762px] text-center">
            Посмотрите видео, в котором рассказываем про реальные зарплаты
            логистов и процесс работы на фрилансе
          </p>
          <img src={Laptop} alt="" className="xl:h-[693px] xl:ml-20" />
        </div>
        <div className="bg-white xl:rounded-[50px] xl:px-[119px] xl:pb-[100px] xl:pt-[409px] xl:-mt-80">
          <h1 className="xl:text-[80px] xl:leading-[67px] text-center mx-auto font-secondary font-medium xl:max-w-[1290px]">
            Более 2000 студентов прошли наши курсы и стали логистами
          </h1>
          <div className="flex justify-between xl:space-x-10 xl:mt-[90px] md:flex-col">
            <div className="xl:w-[65%] flex flex-wrap md:w-full">
              <div className="md:w-1/2 border-b-4 border-r-4 flex justify-center items-center flex-col">
                <h2 className="text-[#252323] xl:text-[82px] font-medium font-primary">
                  60/40%
                </h2>
                <p className="text-[#252323] xl:text-lg text-center font-primary font-semibold xl:pb-10">
                  60% практики <br /> и 40% теории на курсе
                </p>
              </div>
              <div className="md:w-1/2 border-b-4  flex justify-center items-center flex-col">
                <h2 className="text-[#252323] xl:text-[82px] font-medium font-primary">
                  95%
                </h2>
                <p className="text-[#252323] xl:text-lg text-center font-primary font-semibold xl:pb-10">
                  Слушателей отмечают удобство <br /> обучения на курса
                </p>
              </div>
              <div className="md:w-1/2 border-r-4 flex justify-center items-center flex-col">
                <h2 className="text-[#252323] xl:text-[82px] font-medium font-primary">
                  93%
                </h2>
                <p className="text-[#252323] xl:text-lg text-center font-primary font-semibold xl:pb-10">
                  Слушателей используют полученные <br /> знания на практике
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center items-center flex-col">
                <h2 className="text-[#252323] xl:text-[82px] font-medium font-primary">
                  80%
                </h2>
                <p className="text-[#252323] xl:text-lg text-center font-primary font-semibold xl:pb-10">
                  Выпускников продвинулись по <br /> карьерной лестнице
                </p>
              </div>
            </div>
            <div className="xl:w-[35%] relative xl:h-[524px] rounded-4xl overflow-hidden flex justify-center items-center flex-col gap-y-[61px]">
              <img
                src={BG2}
                alt=""
                className="absolute object-cover w-full h-full"
              />
              <img src={Group} alt="" className="relative" />
              <button className="xl:px-[60px] xl:py-[28px] xl:rounded-[50px] relative bg-[#F4D902] xl:text-[23px] font-bold">
                истории студентов
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
