import { useState } from 'react';
import BG5 from '../../assets/bg5.png';
import { createPortal } from 'react-dom';

export default function Gallery() {
  const [link, setLink] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const openModal = (item: string) => {
    setLink(item);
    setShowModal(true);
  };

  const modal =
    showModal &&
    createPortal(
      <div className="w-full h-screen bg-black/70 backdrop-blur-sm fixed z-50 top-0 left-0 flex justify-center items-center">
        <div className="xl:w-[40%] md:w-[70%] w-[90%] h-[70%] rounded-[14px] relative overflow-hidden flex justify-center items-center">
          <button
            onClick={() => {
              setShowModal(false);
              setLink('');
            }}
            className="w-10 h-10 rounded-full bg-black/80 absolute top-5 right-5 flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
              />
            </svg>
          </button>
          <iframe
            width="100%"
            height="100%"
            src={link}
            title="с 0 до Логиста +998887075888 #логистика"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>,
      document.body
    );

  return (
    <div
      id="gallery"
      className="relative rounded-[12px] md:rounded-[18px] border xl:rounded-[30px] overflow-hidden xl:py-[100px] md:py-10  pb-[60px]  pt-10"
    >
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
            <div className="xl:rounded-[30px] relative overflow-hidden rounded-[14px] bg-[#D5D5D5] flex justify-center items-center xl:h-[614px] md:h-[231px] h-[304px]">
              <div className="flex justify-center items-center w-full h-full absolute bg-black/55">
                <button
                  onClick={() =>
                    openModal('https://www.youtube.com/embed/_wF18D2HPHY')
                  }
                  className="w-12 h-12 xl:w-20 xl:h-20 flex justify-center items-center rounded-full bg-black/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="xl:w-10 xl:h-10"
                  >
                    <path
                      fill="#fff"
                      d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
                    />
                  </svg>
                </button>
              </div>
              <img
                src="https://img.youtube.com/vi/_wF18D2HPHY/hqdefault.jpg"
                alt=""
                width="100%"
                height="100%"
                className="object-cover h-full"
              />
            </div>
            <div className="xl:rounded-[30px] relative overflow-hidden rounded-[14px] bg-[#D5D5D5] flex justify-center items-center xl:h-[305px] md:h-[125px] h-[145px]">
              <div className="flex justify-center items-center w-full h-full absolute bg-black/55">
                <button
                  onClick={() =>
                    openModal('https://youtube.com/embed/iE3bJGgx7E0')
                  }
                  className="w-12 h-12 xl:w-20 xl:h-20 flex justify-center items-center rounded-full bg-black/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="xl:w-10 xl:h-10"
                  >
                    <path
                      fill="#fff"
                      d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
                    />
                  </svg>
                </button>
              </div>
              <img
                src="https://img.youtube.com/vi/iE3bJGgx7E0/hqdefault.jpg"
                alt=""
                width="100%"
                height="100%"
                className="object-cover h-full"
              />
            </div>
            <div className="xl:rounded-[30px] relative overflow-hidden rounded-[14px] bg-[#D5D5D5] flex justify-center items-center xl:h-[427px] md:h-[178px] h-[206px]">
              <div className="flex justify-center items-center w-full h-full absolute bg-black/55">
                <button
                  onClick={() =>
                    openModal('https://youtube.com/embed/nhpJdYGm34g')
                  }
                  className="w-12 h-12 xl:w-20 xl:h-20 flex justify-center items-center rounded-full bg-black/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="xl:w-10 xl:h-10"
                  >
                    <path
                      fill="#fff"
                      d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
                    />
                  </svg>
                </button>
              </div>
              <img
                src="https://img.youtube.com/vi/nhpJdYGm34g/hqdefault.jpg"
                alt=""
                width="100%"
                height="100%"
                className="object-cover h-full"
              />
            </div>
          </div>
          <div className="xl:space-y-2.5  md:space-y-2 space-y-1.5 xl:mt-[119px] mt-[72px]">
            <div className="xl:rounded-[30px] relative overflow-hidden rounded-[14px] bg-[#D5D5D5] flex justify-center items-center xl:h-[305px] md:h-[125px] h-[145px]">
              <div className="flex justify-center items-center w-full h-full absolute bg-black/55">
                <button
                  onClick={() =>
                    openModal('https://youtube.com/embed/reNyYJ0E704')
                  }
                  className="w-12 h-12 xl:w-20 xl:h-20 flex justify-center items-center rounded-full bg-black/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="xl:w-10 xl:h-10"
                  >
                    <path
                      fill="#fff"
                      d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
                    />
                  </svg>
                </button>
              </div>
              <img
                src="https://img.youtube.com/vi/reNyYJ0E704/hqdefault.jpg"
                alt=""
                width="100%"
                height="100%"
                className="object-cover h-full"
              />
            </div>
            <div className="xl:rounded-[30px] relative overflow-hidden rounded-[14px] bg-[#D5D5D5] flex justify-center items-center xl:h-[614px] md:h-[274px] h-[304px]">
              <div className="flex justify-center items-center w-full h-full absolute bg-black/55">
                <button
                  onClick={() =>
                    openModal('https://youtube.com/embed/sIyA61jo81s')
                  }
                  className="w-12 h-12 xl:w-20 xl:h-20 flex justify-center items-center rounded-full bg-black/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="xl:w-10 xl:h-10"
                  >
                    <path
                      fill="#fff"
                      d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
                    />
                  </svg>
                </button>
              </div>
              <img
                src="https://img.youtube.com/vi/sIyA61jo81s/hqdefault.jpg"
                alt=""
                width="100%"
                height="100%"
                className="object-cover h-full"
              />
            </div>
            <div className="xl:rounded-[30px] relative overflow-hidden rounded-[14px] bg-[#D5D5D5] flex justify-center items-center xl:h-[427px] md:h-[178px] h-[206px]">
              <div className="flex justify-center items-center w-full h-full absolute bg-black/55">
                <button
                  onClick={() =>
                    openModal('https://youtube.com/embed/EV_PwSOGfa4')
                  }
                  className="w-12 h-12 xl:w-20 xl:h-20 flex justify-center items-center rounded-full bg-black/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="xl:w-10 xl:h-10"
                  >
                    <path
                      fill="#fff"
                      d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
                    />
                  </svg>
                </button>
              </div>
              <img
                src="https://img.youtube.com/vi/EV_PwSOGfa4/hqdefault.jpg"
                alt=""
                width="100%"
                height="100%"
                className="object-cover h-full"
              />
            </div>
          </div>
          <div className="xl:space-y-2.5 md:space-y-2 space-y-1.5 xl:mt-[50px] mt-[28px]">
            <div className="xl:rounded-[30px] relative overflow-hidden rounded-[14px] bg-[#D5D5D5] flex justify-center items-center xl:h-[427px] md:h-[178px] h-[206px]">
              <div className="flex justify-center items-center w-full h-full absolute bg-black/55">
                <button
                  onClick={() =>
                    openModal('https://youtube.com/embed/6lWALl8K3DU')
                  }
                  className="w-12 h-12 xl:w-20 xl:h-20 flex justify-center items-center rounded-full bg-black/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="xl:w-10 xl:h-10"
                  >
                    <path
                      fill="#fff"
                      d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
                    />
                  </svg>
                </button>
              </div>
              <img
                src="https://img.youtube.com/vi/6lWALl8K3DU/hqdefault.jpg"
                alt=""
                width="100%"
                height="100%"
                className="object-cover h-full"
              />
            </div>
            <div className="xl:rounded-[30px] relative overflow-hidden rounded-[14px] bg-[#D5D5D5] flex justify-center items-center xl:h-[305px] md:h-[274px] h-[304px]">
              <div className="flex justify-center items-center w-full h-full absolute bg-black/55">
                <button
                  onClick={() =>
                    openModal('https://youtube.com/embed/5CvUaOKekns')
                  }
                  className="w-12 h-12 xl:w-20 xl:h-20 flex justify-center items-center rounded-full bg-black/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="xl:w-10 xl:h-10"
                  >
                    <path
                      fill="#fff"
                      d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
                    />
                  </svg>
                </button>
              </div>
              <img
                src="https://img.youtube.com/vi/5CvUaOKekns/hqdefault.jpg"
                alt=""
                width="100%"
                height="100%"
                className="object-cover h-full"
              />
            </div>
            <div className="xl:rounded-[30px] relative overflow-hidden rounded-[14px] bg-[#D5D5D5] flex justify-center items-center xl:h-[614px] md:h-[125px] h-[145px]">
              <div className="flex justify-center items-center w-full h-full absolute bg-black/55">
                <button
                  onClick={() =>
                    openModal('https://youtube.com/embed/Ocu6ZQ2EVnk')
                  }
                  className="w-12 h-12 xl:w-20 xl:h-20 flex justify-center items-center rounded-full bg-black/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="xl:w-10 xl:h-10"
                  >
                    <path
                      fill="#fff"
                      d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"
                    />
                  </svg>
                </button>
              </div>
              <img
                src="https://img.youtube.com/vi/Ocu6ZQ2EVnk/hqdefault.jpg"
                alt=""
                width="100%"
                height="100%"
                className="object-cover h-full"
              />
            </div>
          </div>
        </div>
      </div>
      {modal}
    </div>
  );
}
