'use client';

import { useState } from 'react';

export default function FAQAccordion() {
  const [openItem, setOpenItem] = useState();

  // FAQ data
  const faqItems = [
    {
      id: 0,
      question: 'Какую программу выбрать?',
      answer: `Если вы новичок, то рекомендуем получить консультацию от наших менеджеров и
посетить наши бесплатные пробне уроки. Мы предлагаем курсы по Международной
логистике , Американской логистике , Таможенное дело и ВЭД ( Декларация ). После консультации мы поможем вам определить, с чего начать, исходя из вашего опыта и
целей`,
    },
    {
      id: 1,
      question: 'Сколько длится курс?',
      answer: `Курс Американской логистики длится 1 месяц обучения . Курс по
Американской логистики рассчитан на 1 месяца . Курс по Таможенному делу и ВЭД (
Декларация ) длится 1. Занятия проводятся по 3 раза в неделю. Мы специально
продумали темп, чтобы обучение было интенсивным, но без перегрузок`,
    },
    {
      id: 2,
      question: 'Есть ли рассрочка? Как вносить оплату?',
      answer: `Да, мы предлагаем гибкие условия: можно внести оплату сразу или оформить
рассрочку. Подробности и варианты обсудим с вами при регистрации`,
    },
    {
      id: 3,
      question: 'А если я совсем новичок, у меня получится?',
      answer: `Конечно. Мы не просто даем теорию — мы сопровождаем вас на каждом этапе. Даже
если вы впервые слышите слова «логистика», у нас вы шаг за шагом освоите все
необходимое для старта в профессии.`,
    },
    {
      id: 4,
      question: 'Есть ли пробное занятие?',
      answer: `Каждый желающий может посетить пробное (бесплатное) занятие, чтобы понять
соответствует ли курс ожиданиям.`,
    },
    {
      id: 5,
      question: 'Поможете ли вы с трудоустройством?',
      answer: `Уже во время курса вам представятся специальные каналы с вакансиями компаний
которым требуются диспетчеры , во время курса вас обучат как составлять грамотное
CV и какие вопросы вам будут задавать на собеседовании
8 из 10 наших студентов устраиваются на работу уже во время обучения`,
    },
  ];

  // Toggle accordion item
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleItem = (id: any) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="xl:my-[200px] md:my-[100px] my-[90px]" id="faq">
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
