import { useState } from 'react';
import Logo from '../assets/main-logo.png';
import Menu from '../assets/menu.svg';
import Close from '../assets/close.svg';
import Insta from '../assets/insta.svg';
import YouTuber from '../assets/youtube.svg';
import FB from '../assets/fb.svg';
import TG from '../assets/tg.svg';
import { useWindowSize } from '@uidotdev/usehooks';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useWindowSize();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#232323] xl:py-4 py-2.5 sticky top-0 z-[9000] w-full">
      <div className="container-secondary mx-auto px-4 flex justify-between items-center">
        <div className="flex xl:gap-20 2xl:gap-[131px] items-center">
          <a href="#">
            <img src={Logo} alt="" width={119} height={62} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex xl:space-x-7 2xl:space-x-11">
            <NavLinks />
          </nav>
        </div>

        {/* Contact & CTA */}
        <div className="md:flex md:items-center md:space-x-4 xl:space-x-8">
          <a
            href="tel:+998887075888"
            className="text-white  text-lg font-semibold xl:block hidden"
          >
            +998887075888
          </a>
          <a
            href={
              width && width > 1280 ? '#contact' : 'https://t.me/logist_academy'
            }
            className="bg-[#F4D902] hidden md:block xl:mr-0  text-black font-bold xl:py-[18px] xl:px-[30px] md:py-2.5 md:px-5 rounded-[50px] text-lg"
            target={width && width > 1280 ? '_parent' : '_blank'}
          >
            ХОЧУ НА КУРС
          </a>
          <button onClick={toggleMenu} className="xl:hidden block">
            <img src={Menu} alt="" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="xl:hidden md:block  w-full h-screen bg-[rgba(0,0,0,0.5)] bg-opacity-50 backdrop-blur-[5px] absolute z-50 top-0 left-0"
        >
          <div className="bg-[#141414] w-full flex justify-between items-center flex-col rounded-b-[12px] rounded-bl-[12px] absolute md:w-[429px] md:h-[625px] py-2.5 px-4 right-0 top-0  h-[538px]">
            <div className="flex justify-between items-center w-full">
              <img src={Logo} width={96} height={50} alt="" />
              <button onClick={toggleMenu} className="cursor-pointer">
                <img src={Close} alt="" />
              </button>
            </div>
            <div className="flex flex-col text-center gap-y-3">
              <NavLinks />
            </div>
            <div className="pb-12">
              <ul className="flex justify-center items-center gap-x-10">
                <li>
                  <a href="https://www.instagram.com/logist_academy?igsh=eTg3ZDB1b2tlcTAw">
                    <img src={Insta} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=pA6KFGgOgtk&t=23s">
                    <img src={YouTuber} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={FB} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://t.me/logist_academy">
                    <img src={TG} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function NavLinks() {
  return (
    <>
      <a
        href="#"
        className="text-white xl:text-lg text-[16px] font-semibold font-primary"
      >
        О нас
      </a>
      <a
        href="#student"
        className="text-white  xl:text-lg text-[16px] font-semibold font-primary"
      >
        Студенты
      </a>
      <a
        href="#program"
        className="text-white  xl:text-lg text-[16px] font-semibold font-primary"
      >
        Программа
      </a>
      <a
        href="#gallery"
        className="text-white  xl:text-lg text-[16px] font-semibold font-primary"
      >
        Отзывы
      </a>
      <a
        href="#faq"
        className="text-white  xl:text-lg text-[16px] font-semibold font-primary"
      >
        FAQ
      </a>
      <a
        href="#contact"
        className="text-white  xl:text-lg  text-[16px] font-semibold font-primary"
      >
        Контакты
      </a>
    </>
  );
}
