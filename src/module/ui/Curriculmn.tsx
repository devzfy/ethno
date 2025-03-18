'use client';

import { useMemo, useState } from 'react';
import LogisticsMenu from '../../components/Selecter';
import BG3 from '../../assets/bg3.png';
import { modules, tabs, modulesSecond, modulesThird } from '../libs/db';

export default function CurriculumSection() {
  const [activeTab, setActiveTab] = useState('international');

  const filterData = useMemo(() => {
    if (activeTab === 'international') {
      return modules;
    } else if (activeTab === 'american') {
      return modulesSecond;
    }
    return modulesThird;
  }, [activeTab]);
  console.log(filterData);

  return (
    <div className="xl:mt-[160px] md:mt-[110px] mt-[90px]" id="program">
      <div className="w-full flex justify-center">
        <span className="py-[14px] px-[26px] text-sm  font-bold uppercase bg-white rounded-[30px]">
          Программа курсов
        </span>
      </div>
      <h1 className="xl:text-[72px] md:text-[37px] md:leading-[34px] md:max-w-[574px] xl:leading-[67px] font-secondary text-center xl:max-w-[1500px] mx-auto xl:mt-[50px] md:mt-[40px] xl:mb-10 md:mb-[30px] mb-5 mt-10 text-[26px] leading-[30px]">
        Мы даем навыки, которые реально пригодятся в работе
      </h1>
      <p className="font-primary text-sm xl:text-xl md:text-sm text-center xl:max-w-[1088px] md:max-w-[574px] font-semibold mx-auto">
        Программа курса построена по формату работы над реальным проектом на
        фрилансе и в найме и дает сильную базу в логистике. Практика включает в
        себя модуль по продажам и поиску клиента. Новички смогут взять первого
        клиента на 2-й неделе обучения.
      </p>
      <div className="container-secondary">
        <div className="w-full xl:mt-[60px] md:mt-[50px] mt-[50px]">
          <div className="bg-white rounded-[30px] p-[10px]  grid-cols-3 space-x-2.5 mb-[30px] xl:grid hidden">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-[68px] py-[34px] text-[21px] text-[#141414] font-primary font-bold rounded-[30px] transition-all
                ${
                  activeTab === tab.id
                    ? 'bg-[#F4D902] text-black'
                    : 'bg-[#F1F1F1] text-gray-800 hover:bg-gray-300'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="block xl:hidden">
            <LogisticsMenu setActiveTab={setActiveTab} />
          </div>

          {/* Modules */}
          <div className="space-y-2.5">
            {filterData.map(module => (
              <div
                key={module.id}
                className="flex flex-col md:flex-row space-x-2.5 xl:h-[524px] md:h-[561px] "
              >
                <div className="xl:w-2/5 md:w-[45%] bg-[#141414] w-full h-[286px] md:h-full relative overflow-hidden xl:rounded-[30px] md:rounded-[18px] rounded-[14px] mb-2 md:mb-auto">
                  <div className="absolute h-full w-full">
                    <img
                      src={BG3}
                      alt=""
                      className="w-full min-h-full object-cover"
                    />
                  </div>

                  <div className="absolute z-10 left-[30px] bottom-[30px] xl:bottom-[50px] md:bottom-10 md:left-[24px] xl:left-[50px]">
                    <h3 className="xl:text-[36px] md:text-[24px] md:leading-[27px] xl:leading-[66px] text-[#F4D902] font-secondary font-medium text-[26px] leading-[30px]">
                      {module.title}
                    </h3>
                    <h4 className="text-white text-xl font-bold leading-tight">
                      {module.subtitle.split('.').map((part, i) => (
                        <span
                          key={i}
                          className="block xl:text-[36px] md:text-2xl xl:leading-[38px] text-[26px] leading-[30px] font-secondary"
                        >
                          {part.trim()}
                        </span>
                      ))}
                    </h4>
                  </div>
                </div>

                {/* Right Panel - Content */}
                <div className="xl:w-full md:w-[65%] bg-white xl:rounded-[30px] md:rounded-[18px] rounded-[14px] ">
                  <div className="flex justify-between items-start flex-col h-full">
                    <div className="xl:pt-[50px] xl:pl-[50px] pt-[30px] pl-[28px] flex xl:gap-x-[167px] md:gap-0 flex-col xl:flex-row">
                      <h5 className="font-medium mb-5 xl:mb-0 text-[#2A2A2A] xl:text-[26px] md:text-xl text-[22px] leading-[30px] font-secondary">
                        Темы
                      </h5>
                      <ul className="space-y-1 pr-2.5 md:pr-0 pb-10 md:pb-0">
                        {module.topics.map((topic, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block w-1 h-1 rounded-full bg-black mt-2 mr-2"></span>
                            <span className="xl:text-lg text-sm text-[#252323] font-semibold font-primary">
                              {topic}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="xl:pl-[50px] xl:pb-[72px] pl-[28px] md:pb-[30px] md:pt-[30px] pb-[40px] pt-[40px] pr-6 md:pr-0  border-t-4 border-[#F1F1F1] flex items-start xl:gap-[101px] flex-col xl:flex-row">
                      <h5 className="text-[#B92B2D] md:text-[20px] text-[22px] leading-[30px] xl:text-[26px] font-secondary font-medium xl:pb-0 pb-5">
                        Результат
                      </h5>
                      <p className="text-[#252323] font-semibold xl:text-lg text-sm xl:max-w-[717px] md:max-w-[361px]">
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
