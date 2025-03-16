import BG5 from '../../assets/bg5.png';
import Vector from '../../assets/Vector.png';
export default function Gallery() {
  return (
    <div className="relative rounded-[12px] md:rounded-[18px] border xl:rounded-[30px] overflow-hidden xl:py-[100px] md:py-10  pb-[60px]  pt-10">
      <img
        src={BG5}
        className="absolute w-full h-full object-cover top-0 left-0"
      />
      <div className="container-secondary relative">
        <div className="w-full flex justify-center">
          <span className="py-[14px] px-[26px] text-sm text-white  font-bold uppercase bg-[#2A2A2A] rounded-[30px]">
            отзывы
          </span>
        </div>
        <h1 className="text-white xl:text-[72px] md:text-[37px] md:leading-[34px] md:max-w-[574px] xl:leading-[67px] font-secondary text-center xl:max-w-[1500px] mx-auto xl:mt-[50px] md:mt-[40px] xl:mb-10 md:mb-[30px] mb-5 mt-10 text-[26px] leading-[30px]">
          Что говорят студенты после прохождения курса?
        </h1>
        <p className="text-white font-primary text-sm xl:text-xl md:text-sm text-center xl:max-w-[1088px] md:max-w-[574px] font-semibold mx-auto">
          Нашей академии уже 2 года, за это время наши курсы прошло больше 2000
          студентов.
        </p>
      </div>

      <div className="container-secondary">
        <div className="grid grid-cols-3 relative xl:mt-[120px] md:mt-[50px] mt-[60px] xl:space-x-2.5 md:space-x-2 space-x-1.5">
          <div className="xl:space-y-2.5 md:space-y-2 space-y-1.5">
            <div className="xl:rounded-[30px] rounded-[14px] bg-[#D5D5D5] flex justify-center items-center xl:h-[614px] md:h-[231px] h-[304px]">
              <img className="" src={Vector} alt="" />
            </div>
            <div className="xl:rounded-[30px] rounded-[14px] bg-[#D5D5D5] flex justify-center items-center xl:h-[305px] md:h-[125px] h-[145px]">
              <img className="" src={Vector} alt="" />
            </div>
            <div className="xl:rounded-[30px] rounded-[14px] bg-[#D5D5D5] flex justify-center items-center xl:h-[427px] md:h-[178px] h-[206px]">
              <img className="" src={Vector} alt="" />
            </div>
          </div>
          <div className="xl:space-y-2.5  md:space-y-2 space-y-1.5 xl:mt-[119px] mt-[72px]">
            <div className="xl:rounded-[30px] rounded-[14px] bg-[#D5D5D5] flex justify-center items-center xl:h-[305px] md:h-[125px] h-[145px]">
              <img className="" src={Vector} alt="" />
            </div>
            <div className="xl:rounded-[30px] rounded-[14px] bg-[#D5D5D5] flex justify-center items-center xl:h-[614px] md:h-[274px] h-[304px]">
              <img className="" src={Vector} alt="" />
            </div>
            <div className="xl:rounded-[30px] rounded-[14px] bg-[#D5D5D5] flex justify-center items-center xl:h-[427px] md:h-[178px] h-[206px]">
              <img className="" src={Vector} alt="" />
            </div>
          </div>
          <div className="xl:space-y-2.5 md:space-y-2 space-y-1.5 xl:mt-[50px] mt-[28px]">
            <div className="xl:rounded-[30px] rounded-[14px] bg-[#D5D5D5] flex justify-center items-center xl:h-[427px] md:h-[178px] h-[206px]">
              <img className="" src={Vector} alt="" />
            </div>
            <div className="xl:rounded-[30px] rounded-[14px] bg-[#D5D5D5] flex justify-center items-center xl:h-[305px] md:h-[274px] h-[304px]">
              <img className="" src={Vector} alt="" />
            </div>
            <div className="xl:rounded-[30px] rounded-[14px] bg-[#D5D5D5] flex justify-center items-center xl:h-[614px] md:h-[125px] h-[145px]">
              <img className="" src={Vector} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
