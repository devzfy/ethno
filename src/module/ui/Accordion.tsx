'use client';

import { useState } from 'react';

export default function FAQAccordion() {
  const [openItem, setOpenItem] = useState();

  // FAQ data
  const faqItems = [
    {
      id: 0,
      question: 'Какую программу выбрать?',
      answer:
        'Мы предлагаем несколько программ обучения: Международная логистика, Американская логистика и Таможенное дело и ВЭД. Выбор зависит от ваших карьерных целей и интересов.',
    },
    {
      id: 1,
      question: 'Сколько длится курс?',
      answer:
        'Курс по Международной логистики рассчитан на 1 месяц обучения. Курс по Американской логистики рассчитан на 1.5 месяца. Курс по Таможенному делу и ВЭД (Декларация) длится 1.5. Занятия проводятся по 3 раза в неделю. Мы специально продумали темп, чтобы обучение было интенсивным, но без перегрузок.',
    },
    {
      id: 2,
      question: 'Есть ли рассрочка? Как вносить оплату?',
      answer:
        'Да, у нас есть возможность оплаты в рассрочку. Вы можете разделить оплату на несколько частей без переплаты. Подробные условия рассрочки обсуждаются индивидуально с менеджером.',
    },
    {
      id: 3,
      question: 'А если я совсем новичок, у меня получится?',
      answer:
        'Да, наши курсы разработаны таким образом, чтобы быть доступными даже для полных новичков. Мы начинаем с основ и постепенно переходим к более сложным темам. Наши преподаватели всегда готовы помочь и ответить на все вопросы.',
    },
    {
      id: 4,
      question: 'Есть ли пробное занятие?',
      answer:
        'Да, мы предлагаем бесплатное пробное занятие, чтобы вы могли познакомиться с форматом обучения и преподавателем перед тем, как принять решение о покупке курса.',
    },
    {
      id: 5,
      question: 'Поможете ли вы с трудоустройством?',
      answer:
        'Да, мы помогаем нашим выпускникам с трудоустройством. У нас есть партнерские отношения с компаниями в сфере логистики, и мы регулярно делимся вакансиями с нашими студентами. Также мы проводим консультации по составлению резюме и подготовке к собеседованиям.',
    },
  ];

  // Toggle accordion item
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleItem = (id: any) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="xl:my-[200px] md:my-[100px] my-[90px]">
      <div className="w-full mx-auto  container-secondary">
        <h1 className="font-medium text-[26px] leading-[30px] font-secondary text-center xl:text-[72px] xl:leading-[67px] text-[#252323] xl:max-w-[1050px] max-w-[300px] mx-auto xl:mb-[80px] md:mb-[50px] mb-10 md:text-[37px] md:leading-[37px]">
          Отвечаем на все ваши вопросы
        </h1>
        {faqItems.map(item => (
          <div
            key={item.id}
            className={`xl:mb-2.5 md:mb-2 mb-1.5  overflow-hidden bg-white  transition-all duration-300 ${
              openItem === item.id
                ? 'xl:rounded-[50px] rounded-[28px]'
                : 'xl:rounded-[60px] rounded-[70px]'
            }`}
          >
            <button
              className="w-full  xl:py-[16px] xl:pl-[60px] xl:pr-[18px] py-[6px] pl-[24px] pr-[7px] text-left flex justify-between items-center hover:bg-[#F4D902] cursor-pointer"
              onClick={() => toggleItem(item.id)}
            >
              <span className="font-semibold xl:text-2xl md:text-sm font-primary text-[#252323]">
                {item.question}
              </span>
              <span className="xl:min-w-[73px] xl:min-h-[73px] min-w-[47px] min-h-[47px] flex justify-center items-center rounded-full bg-[#F2F2F2]">
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openItem === item.id ? 'transform rotate-180' : ''
                  }`}
                  width="25"
                  height="12"
                  viewBox="0 0 25 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2832 0H25L12.5 12L0 0L17.2832 0Z"
                    fill="#252323"
                  />
                </svg>
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all  duration-300 ${
                openItem === item.id
                  ? 'max-h-96 opacity-100 xl:mt-5 xl:pl-[60px] xl:pb-10 pl-[24px] pb-[30px]'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="">
                <p className="text-[#252323] md:text-[12px] xl:text-[22px] xl:leading-[31px] xl:max-w-[1027px] md:max-w-[305px] font-primary">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
