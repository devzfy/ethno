/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import FormBg from '../../assets/form.png';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', phone: '', comment: '' });
  };

  return (
    <div className="w-full  relative overflow-hidden" id="contact">
      <img
        src={FormBg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover "
      />

      <div className="relative container-secondary mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col md:flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Left side - Text */}
          <div className="w-full xl:w-1/2">
            <h2 className="md:max-w-[477px] xl:max-w-full md:text-center xl:text-left mx-auto xl:mx-0 xl:text-[72px] xl:leading-[68px] md:text-[37px] leading-[30px] font-secondary text-[30px] font-medium text-white">
              Заполните форму, ответим на все ваши вопросы
            </h2>
            <p className="max-w-[390px] font-primary xl:text-[20px] md:text-sm text-center xl:text-left mx-auto xl:mx-0 text-white font-bold xl:mt-10 md:mt-[30px]">
              Оставьте контакты и мы свяжемся с вами в ближайшее время
            </p>
          </div>

          {/* Right side - Form */}
          <div className="w-full xl:w-[612px] md:w-[424px] mx-auto xl:mx-0">
            <form onSubmit={handleSubmit} className="space-y-2.5">
              {/* Name field */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="ФИО"
                  className="w-full xl:text-[18px] leading-[22px] text-[16px] xl:px-10 px-5 xl:py-6 py-4 bg-[#CCCCCC4D] font-primary text-white font-semibold placeholder-[#CBCBCB] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#F4D902]"
                  required
                />
              </div>

              {/* Phone field */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+998 (--) --- -- --"
                  className="w-full xl:text-[18px] leading-[22px] text-[16px] xl:px-10 px-5 xl:py-6 py-4 bg-[#CCCCCC4D] font-primary text-white font-semibold placeholder-[#CBCBCB] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#F4D902]"
                  required
                />
              </div>

              {/* Comment field */}
              <div>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Комментарий"
                  rows={4}
                  className="xl:h-[140px] h-[106px] w-full xl:text-[18px] leading-[22px] text-[16px] xl:px-10 px-5 xl:py-6 py-4 bg-[#CCCCCC4D] font-primary text-white font-semibold placeholder-[#CBCBCB] rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#F4D902]"
                ></textarea>
              </div>

              {/* Submit button */}
              <div className="xl:mt-[50px] mt-10">
                <button
                  type="submit"
                  className="w-full md:py-[17px] text-[15px]  bg-[#F4D902]  text-[#252323] font-bold font-primary py-[28px]  rounded-[50px] transition-colors duration-300"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
