'use client';

import { useState } from 'react';
import LogisticsMenu from '../../components/Selecter';
import BG3 from '../../assets/bg3.png';
type Tab = {
  id: string;
  title: string;
};

type Module = {
  id: number;
  title: string;
  subtitle: string;
  topics: string[];
  result: string;
};

export default function CurriculumSection() {
  const [activeTab, setActiveTab] = useState('international');

  const tabs: Tab[] = [
    { id: 'international', title: 'Международная логистика' },
    { id: 'american', title: 'Американская логистика' },
    { id: 'customs', title: 'Таможенное дело и ВЭД' },
  ];

  const modules: Module[] = [
    {
      id: 1,
      title: 'Модуль 1.',
      subtitle: 'Вводный. Основы. логистики',
      topics: [
        'Что такое логистика? Как она работает?',
        'Самый важный навык логиста',
        'Какие бывают платформы? Сколько они стоят?',
        'Из чего итого, состоит работа логиста?',
        'Мифы и реальность',
        'Стран импортеров дистрибуторов',
      ],
      result:
        'Понимание, какие навыки помогают успешно для успешной работы логистом. Знание основных принципов работы логистики. Понимание для из чего состоит работа логиста и как оценить заказчика',
    },
    {
      id: 2,
      title: 'Модуль 2.',
      subtitle: 'Начало. работы. в логистике',
      topics: [
        'Документы (КОММЕРЧЕСКИЙ/ИНВОЙС) для БРОКЕРА-организация, фин.',
        'Как делать анализ рынка и стоимости грузоперевозок?',
        'Разные ошибки диспетчеров и как их не допускать',
        'Правила работы с клиентами',
        'Критерии для поиска грузов и грузоперевозчиков',
        'Виды грузов и перевозки АВТО, АВИА',
      ],
      result:
        'Умение блокировать клиента и понимать его задачи. Умение проводить базовый анализ рынка. Знание и решение базовых ошибок и правил. Умение составить маршрут перевозки.',
    },
    {
      id: 3,
      title: 'Модуль 3.',
      subtitle: 'Практика. Как заработать. в логистике?',
      topics: [
        'Как и где искать клиентов на фрилансе?',
        'Как правильно рассчитывать стоимость брокера и свою комиссию?',
        'Как правильно оформлять документы?',
        'Как общаться с водителями и грузоперевозчиком?',
        'Практический разбор общения и переговоров',
      ],
      result:
        'Понимание, как правильно рассчитывать стоимость услуг. Возможность приступить к работе в компанию или организовать свой бизнес. Умение составить свою работу и показать клиенту свой профессионализм.',
    },
  ];

  return (
    <div className="xl:mt-[160px] md:mt-[110px]">
      <div className="w-full flex justify-center">
        <span className="py-[14px] px-[26px] text-sm  font-bold uppercase bg-white rounded-[30px]">
          Программа курсов
        </span>
      </div>
      <h1 className="xl:text-[72px] md:text-[37px] md:leading-[34px] md:max-w-[574px] xl:leading-[67px] font-secondary text-center xl:max-w-[1500px] mx-auto xl:mt-[50px] md:mt-[40px] xl:mb-10 md:mb-[30px]">
        Мы даем навыки, которые реально пригодятся в работе
      </h1>
      <p className="font-primary xl:text-xl md:text-sm text-center xl:max-w-[1088px] md:max-w-[574px] font-semibold mx-auto">
        Программа курса построена по формату работы над реальным проектом на
        фрилансе и в найме и дает сильную базу в логистике. Практика включает в
        себя модуль по продажам и поиску клиента. Новички смогут взять первого
        клиента на 2-й неделе обучения.
      </p>
      <div className="container-secondary">
        <div className="w-full xl:mt-[60px] md:mt-[50px]">
          <div className="bg-white rounded-[30px] p-[10px]  grid-cols-3 space-x-2.5 mb-[30px] xl:grid hidden">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-[68px] py-[34px] text-[21px] text-[#141414] font-primary font-bold rounded-[30px] transition-all
                ${activeTab === tab.id ? 'bg-[#F4D902] text-black' : 'bg-[#F1F1F1] text-gray-800 hover:bg-gray-300'}`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="block xl:hidden">
            <LogisticsMenu />
          </div>

          {/* Modules */}
          <div className="space-y-2.5">
            {modules.map(module => (
              <div
                key={module.id}
                className="flex flex-col md:flex-row space-x-2.5 h-[524px]"
              >
                <div className="md:w-1/4 relative overflow-hidden md:rounded-[30px]">
                  <div className="absolute h-full">
                    <img
                      src={BG3}
                      alt=""
                      className="w-full min-h-full object-cover"
                    />
                  </div>

                  <div className="absolute z-10 bottom-[50px] left-[50px]">
                    <h3 className="xl:text-[36px] xl:leading-[66px] text-[#F4D902] font-secondary font-medium">
                      {module.title}
                    </h3>
                    <h4 className="text-white text-xl font-bold leading-tight">
                      {module.subtitle.split('.').map((part, i) => (
                        <span
                          key={i}
                          className="block xl:text-[36px] md:text-2xl xl:leading-[38px] font-secondary"
                        >
                          {part.trim()}
                        </span>
                      ))}
                    </h4>
                  </div>
                </div>

                {/* Right Panel - Content */}
                <div className="md:w-3/4 bg-white xl:rounded-[30px]">
                  <div className="flex justify-between items-start flex-col h-full">
                    <div className="xl:pt-[50px] xl:pl-[50px] flex xl:gap-x-[167px]">
                      <h5 className="font-medium text-[#2A2A2A] xl:text-[26px] md:text-xl font-secondary">
                        Темы
                      </h5>
                      <ul className="space-y-1">
                        {module.topics.map((topic, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block w-1 h-1 rounded-full bg-black mt-2 mr-2"></span>
                            <span className="xl:text-lg md:sm text-[#252323] font-semibold font-primary">
                              {topic}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="xl:pl-[50px] xl:pb-[72px] xl:pt-[30px] border-t-4 border-[#F1F1F1] flex items-start xl:gap-[101px]">
                      <h5 className="text-[#B92B2D] text-[26px] font-secondary font-medium">
                        Результат
                      </h5>
                      <p className="text-[#252323] font-semibold xl:text-lg xl:max-w-[717px]">
                        {module.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
