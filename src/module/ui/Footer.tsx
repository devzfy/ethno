import Logo from '../../assets/logo-3.png';

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Footer({ setShowModal }: Props) {
  return (
    <div className="bg-white xl:pt-[60px] xl:pb-[30px] md:pt-10 pb-2.5 pt-[30px] ">
      <div className="container-secondary pb-10 xl:pb-0 relative flex md:justify-between flex-col md:flex-row justify-center items-center md:items-start">
        <div>
          <img src={Logo} alt="" className="xl:w-auto md:w-[150px] w-[135px]" />
          <p className="xl:mt-[153px] md:mt-[106px] md:text-[15px] hidden md:block text-[12px] text-[#6A6A6A]">
            Условия использования <br /> Согласие на обработку персональных
            данных
          </p>
        </div>
        <div className="flex xl:flex-col md:flex-row md:gap-x-[80px] flex-col mt-[49px] mb-[64px] md:mt-0 md:mb-0">
          <div className="flex flex-col items-center md:block">
            <a
              href=""
              className="text-[#252323] font-primary xl:text-[18px] text-[16px] font-semibold block mb-[13px]"
            >
              О нас
            </a>
            <a
              href=""
              className="text-[#252323] font-primary xl:text-[18px] text-[16px] font-semibold block mb-[13px]"
            >
              Наши студенты
            </a>
            <a
              href=""
              className="text-[#252323] font-primary xl:text-[18px] text-[16px] font-semibold block mb-[13px]"
            >
              Программа
            </a>
          </div>
          <div className="flex flex-col items-center md:block">
            <a
              href=""
              className="text-[#252323] font-primary xl:text-[18px] text-[16px] font-semibold block mb-[13px]"
            >
              Отзывы
            </a>
            <a
              href=""
              className="text-[#252323] font-primary xl:text-[18px] text-[16px] font-semibold block mb-[13px]"
            >
              FAQ
            </a>
            <a
              href=""
              className="text-[#252323] font-primary xl:text-[18px] font-semibold block mb-[13px]"
            >
              Контакты
            </a>
          </div>
        </div>
        <p className="md:hidden w-full block  text-[12px] text-[#6A6A6A]">
          Условия использования <br /> Согласие на обработку персональных данных
        </p>
        <div className="flex-col gap-5 hidden xl:flex ">
          <a
            href="#contact"
            className="inline-block text-[#252323] rounded-[50px] text-[23px] py-7 px-[70px]  font-bold bg-[#F4D902]"
          >
            Записаться на пробное занятие!
          </a>
          <button
            onClick={() => setShowModal(true)}
            className="text-[#252323] rounded-[50px] text-[23px] px-[70px] py-7 font-bold  bg-[#F2F2F2]"
          >
            Получить консультацию
          </button>
        </div>
        <p className="md:text-lg text-[#6A6A6A] text-[12px] font-semibold font-primary right-10 md:left-4 xl:left-auto absolute bottom-0 md:font-medium">
          Создано{' '}
          <a
            href="https://bureaulamer.com/"
            target="_blank"
            className="font-semibold underline"
          >
            Bureau La'mer
          </a>{' '}
          за деньги Logist Academy
        </p>
      </div>
    </div>
  );
}
