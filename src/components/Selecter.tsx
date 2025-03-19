'use client';

import { useState } from 'react';

export default function LogisticsMenu({
  setActiveTab,
}: {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const menuItems = [
    { id: 'international', label: 'Международная логистика' },
    { id: 'american', label: 'Американская логистика' },
    { id: 'customs', label: 'Таможенное дело и ВЭД' },
  ];

  const handleSelect = (index: number, label: string) => {
    setSelected(index);
    setIsOpen(false);
    setActiveTab(label);
  };

  return (
    <div className="w-[90%] mx-auto relative mb-5">
      <span className="text-sm font-semibold text-[#9D9D9D] block mb-3">
        Выберите курс*
      </span>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#F4D902] pl-[22px] pr-[6px] py-[6px] font-primary flex justify-between items-center rounded-[8px]"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <h2 className="text-black text-sm  font-bold">
          {menuItems[selected].label}
        </h2>
        <div className="w-[42px] h-[42px] flex justify-center rounded-[6px] items-center bg-[#F1F1F199]">
          <svg
            className={`w-4 h-4 transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
            width="15"
            height="7"
            viewBox="0 0 15 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.6301 7H0L7.5 0L15 7H4.6301Z" fill="#252323" />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute  mt-2 md:w-[305px] w-[272px] bg-white rounded-lg right-0 shadow-lg z-20 py-1 max-h-60 overflow-auto"
          role="listbox"
        >
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleSelect(index, item.id)}
              className={`px-6 py-4 cursor-pointer transition-colors flex justify-between items-center ${
                index === selected ? 'bg-gray-100' : 'hover:bg-gray-50'
              }`}
              role="option"
              aria-selected={index === selected}
            >
              <span className="text-[#141414] text-sm font-bold font-primary">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
