'use client';
import Insta from '../../assets/insta.svg';
import YouTube from '../../assets/youtube.svg';
import FB from '../../assets/fb.svg';
import TG from '../../assets/tg.svg';
export default function ContactMap() {
  return (
    <div className="xl:mt-[210px] xl:mb-[140px] md:mt-[110px] md:mb-[80px] mt-[90px] mb-[50px]">
      <div className="w-full xl:grid xl:grid-cols-12 md:grid-cols-1 container-secondary md:space-x-2.5">
        {/* Left side - Contact information */}
        <div className="col-span-1 xl:col-span-4 xl:block md:grid md:grid-cols-2 w-full md:w-auto md:space-x-2 xl:space-x-0 md:mb-2 xl:mb-0">
          {/* Address section */}
          <div className="bg-[#252323] xl:rounded-[30px] md:rounded-[18px] rounded-[14px] xl:mb-2.5 md:mb-0 mb-1.5">
            <h2 className="text-white xl:py-10 xl:pl-[50px] py-[30px] pl-[30px] font-bold xl:text-[50px] text-[26px]">
              АДРЕС
            </h2>
            <div className="w-full h-0.5 bg-white"></div>

            <div className="space-y-5 xl:py-10 xl:pl-[50px] py-[30px] pl-[30px]">
              <div className="flex items-center gap-[30px]">
                <div className="">
                  <svg
                    width="12"
                    height="24"
                    viewBox="0 0 12 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-5.14984e-05 7.52804V0.313477L11.7051 11.9999L-5.14984e-05 23.6863L-5.14984e-05 7.52804Z"
                      fill="#F4D902"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold xl:text-[22px] font-primary text-[15px]">
                    1 Филиал -{' '}
                    <span className="font-normal font-primary">
                      Улица Мукуми 142/1, Чиланзарский район, город Ташкент
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-[30px]">
                <div className="">
                  <svg
                    width="12"
                    height="24"
                    viewBox="0 0 12 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-5.14984e-05 7.52804V0.313477L11.7051 11.9999L-5.14984e-05 23.6863L-5.14984e-05 7.52804Z"
                      fill="#F4D902"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold xl:text-[22px] font-primary text-[15px]">
                    2 Филиал -
                    <span className="font-normal font-primary">
                      Улица Мукуми 40,
                    </span>
                  </p>
                  <p className="text-gray-300">город Андижан</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contacts section */}
          <div className="bg-[#252323] xl:rounded-[30px]  md:rounded-[18px] rounded-[14px]">
            <h2 className="text-white xl:py-10 xl:pl-[50px] py-[30px] pl-[30px] font-bold xl:text-[50px] md:text-[26px]">
              Контакты
            </h2>
            <div className="w-full h-0.5 bg-white"></div>

            <div className="space-y-[30px] xl:py-10 xl:pl-[50px] py-[30px] pl-[30px]">
              <div className="flex items-center gap-[30px]">
                <div className="">
                  <svg
                    width="12"
                    height="24"
                    viewBox="0 0 12 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-5.14984e-05 7.52804V0.313477L11.7051 11.9999L-5.14984e-05 23.6863L-5.14984e-05 7.52804Z"
                      fill="#F4D902"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold xl:text-[22px] font-primary text-[15px]">
                    Тел: +998887075888
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-[30px]">
                <div className="">
                  <svg
                    width="12"
                    height="24"
                    viewBox="0 0 12 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-5.14984e-05 7.52804V0.313477L11.7051 11.9999L-5.14984e-05 23.6863L-5.14984e-05 7.52804Z"
                      fill="#F4D902"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-10">
                  <a href="">
                    <img src={Insta} alt="" />
                  </a>
                  <a href="">
                    <img src={YouTube} alt="" />
                  </a>
                  <a href="">
                    <img src={FB} alt="" />
                  </a>
                  <a href="">
                    <img src={TG} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Map */}
        <div className="w-full xl:h-full md:h-[421px] h-[366px] col-span-1 xl:col-span-8 xl:rounded-[30px] md:rounded-[18px] overflow-hidden rounded-[14px] md:mt-0 mt-1.5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23975.163531184102!2d69.27008646555758!3d41.31113817538407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2sAmir%20Temur%20xiyoboni!5e0!3m2!1suz!2s!4v1742136081201!5m2!1suz!2s"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
