'use client';
import Quiz from '../assets/quiz.png';
import Logo from '../assets/logo-black.png';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSendTestResults } from '../module/hooks/useSendTestResult';

type FormValues = {
  answers: { value: string; additionalValue?: string }[];
};

interface Props {
  onClose: () => void;
}

export default function QuizComponent({ onClose }: Props) {
  // State to track if quiz has started
  const [quizStarted, setQuizStarted] = useState(false);
  const { isPending, mutateAsync } = useSendTestResults();
  // Sample questions data
  const questions = [
    {
      id: 1,
      title: 'В какое время вам удобно учиться ?',
      options: ['Утром', 'Вечером', 'В любое время'],
      type: 'radio',
    },
    {
      id: 2,
      title: 'Знаете ли вы Английский язык ?',
      options: ['Да', 'Нет'],
      type: 'radio',
    },
    {
      id: 3,
      title: 'Какой формат обучения вам подходит ?',
      options: ['Онлайн', 'Оффлайн', 'Не имеет значения'],
      type: 'radio',
    },
    {
      id: 4,
      title: 'Какой курс вас интересует ?',
      options: [
        'Международная логистика',
        'Американская логистика',
        'Таможенное дело и ВЭД',
        'Еще не выбрал(-а)',
      ],
      type: 'radio',
    },
    {
      id: 5,
      title: 'В каком городе проживаете ?',
      type: 'text',
      placeholder: 'Введите ваш город',
    },

    {
      id: 6,
      title: 'Ваши контактные данные',
      type: 'contact',
      fields: [
        { name: 'name', label: 'Имя', placeholder: 'Введите ваше имя' },
        {
          name: 'phone',
          label: 'Телефон',
          placeholder: 'Введите ваш номер телефона',
        },
      ],
    },
  ];

  // State for current question index and results display
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Current question
  const currentQuestion = questions[currentQuestionIndex];

  // Initialize react-hook-form
  const { control, watch } = useForm<FormValues>({
    defaultValues: {
      answers: Array(questions.length).fill({ value: '' }),
    },
  });

  // Watch the current answer to enable/disable the Next button
  const watchedAnswers = watch('answers');

  // Check if current question is answered
  const isCurrentQuestionAnswered = () => {
    const currentAnswer = watchedAnswers[currentQuestionIndex];

    if (currentQuestion.type === 'contact') {
      return currentAnswer.value && currentAnswer.additionalValue;
    }

    return currentAnswer && currentAnswer.value;
  };

  // Navigate to next question
  const handleNext = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Form is finished, log the results to console
      const results = formatResults();
      console.log(results);
      await mutateAsync(results);
      setShowResults(true);
    }
  };

  // Navigate to previous question
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Format results as requested
  const formatResults = () => {
    return questions.map((question, index) => {
      const answer = watchedAnswers[index];

      if (question.type === 'contact') {
        return {
          [`q${index + 1}`]: question.title,
          [`a${index + 1}_name`]: answer?.value || '',
          [`a${index + 1}_phone`]: answer?.additionalValue || '',
        };
      }

      return {
        [`q${index + 1}`]: question.title,
        [`a${index + 1}`]: answer?.value || '',
      };
    });
  };

  // Welcome page component
  const WelcomePage = () => (
    <div className="w-full h-screen flex justify-center items-center fixed top-0 left-0 z-50 bg-[#41414199] backdrop-blur-[10px]">
      <div className="relative  max-w-[90%] max-h-[370px] mx-auto bg-[#141414] rounded-[16px] md:rounded-[30px] overflow-hidden  md:max-w-[700px] md:max-h-[500px] xl:w-[860px] h-full xl:max-h-[590px]  xl:pr-10 xl:pl-[80px] xl:pt-[80px] md:pt-[50px] md:pl-[50px] md:pr-[30px] pb-[50px] box-border pt-[30px] pl-[30px] pr-[20px]">
        <img
          src={Quiz || '/placeholder.svg'}
          alt=""
          width="100%"
          height="100%"
          className="absolute top-0 left-0 object-cover w-full h-full"
        />
        <h1 className="max-w-[539px] md:text-[30px] xl:text-[38px] text-lg mb-5  md:leading-[38px] relative font-secondary text-white md:mb-10 xl:mb-[66px]">
          Давайте узнаем какой курс подходит Вам больше всего!
        </h1>

        <div className="relative flex justify-between items-start">
          <button
            onClick={() => setQuizStarted(true)}
            className="inline-block bg-[#F4D902] cursor-pointer font-primary mb-2.5 md:mb-0 text-[#252323] font-bold  text-sm py-[18px] px-[46px] rounded-[50px] xl:text-[23px] xl:py-[20px] xl:px-[61px] "
          >
            Начать
          </button>
          <div className="relative">
            <div className="flex justify-center items-center w-[90px] h-[90px] md:w-[135px] md:h-[135px] rounded-full bg-[#FFFFFF80]">
              <img
                src={Logo || '/placeholder.svg'}
                alt=""
                className="md:w-[90px] w-[50px]"
              />
            </div>
            <div className="absolute rounded-b-[16px] md:rounded-b-[30px] md:right-20 md:top-28 right-10 top-20  rounded-tl-[18px] md:rounded-tl-[30px] p-5 md:p-[30px] bg-white ">
              <span className="block md:mb-2 mb-1 font-semibold font-primary text-[15px] text-[#252323]">
                Мохина
              </span>
              <p className="block md:w-[362px] w-[250px] font-primary  box-border font-semibold font-primary text-[12px] md:text-[15px] text-[#252323]">
                Прохождение теста займет всего пару минут! Ответьте на вопросы,
                и мы подберем для вас идеальную программу обучения. Если
                возникнут вопросы, я всегда на связи!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  if (!quizStarted) {
    return <WelcomePage />;
  }

  // Show results page
  if (showResults) {
    return (
      <div className="w-full h-screen flex justify-center items-center fixed top-0 left-0 z-50 bg-[#41414199] backdrop-blur-[10px]">
        <div className="relative  mx-auto bg-[#141414] rounded-[30px] overflow-hidden  w-[90%] max-h-[400px] md:w-[860px] h-full md:max-h-[590px]  box-border">
          <img
            src={Quiz || '/placeholder.svg'}
            alt=""
            width="100%"
            height="100%"
            className="absolute top-0 left-0 object-cover w-full h-full"
          />
          <div className="relative flex md:ml-50 md:-mt-30 ml-30 -mt-32 justify-center items-center flex-col w-full h-full">
            <div className="flex relative  justify-center items-center md:w-[135px] md:h-[135px] w-[90px] h-[90px] rounded-full bg-[#FFFFFF80]">
              <img
                src={Logo || '/placeholder.svg'}
                alt=""
                className="md:w-[90px] w-[70px]"
              />
              <div className="absolute top-20 right-10 md:top-30 md:right-20 rounded-b-[16px] md:rounded-b-[30px] rounded-tl-[16px] md:rounded-tl-[30px] p-[20px] md:p-[30px] bg-white ">
                <span className="block mb-2 font-semibold font-primary text-[15px] text-[#252323]">
                  Мохина
                </span>
                <p className="block w-[240px] md:w-[362px] font-primary  box-border font-semibold font-primary text-sm md:text-[15px] text-[#252323]">
                  Вы успешно прошли тест на подбор курса, у нас уже есть
                  результаты мы свяжемся с вами в ближайшее время и обязательно
                  проконсультируем
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => onClose()}
            className="ml-[40px] mt-10 md:ml-[190px] md:-mt-10 inline-block relative bg-[#F4D902] cursor-pointer font-primary mb-2.5 md:mb-0 text-[#252323] font-bold  text-sm py-[18px] px-[46px] rounded-[50px] xl:text-[23px] xl:py-[20px] xl:px-[61px] "
          >
            Закрывать
          </button>
        </div>
      </div>
    );
  }

  // Show quiz questions
  return (
    <div className="w-full h-screen flex justify-center items-center fixed top-0 left-0 z-50 bg-[#41414199] backdrop-blur-[10px]">
      <div className="md:w-[90%] w-[90%] xl:w-[890px] rounded-[30px] overflow-hidden bg-white  box-border md:px-[70px] md:pt-[70px] md:pb-[50px] px-[30px] pt-[30px] pb-[20px]">
        <form>
          {/* Question counter */}
          <div className="mb-5 md:mb-10 font-secondary text-white bg-[#222222] rounded-[20px] md:rounded-[58px] text-sm md:text-[22px] leading-[42px] font-medium md:py-2.5 md:px-[30px] py-1 px-[20px] inline-block">
            Вопрос {currentQuestionIndex + 1}/{questions.length}
          </div>

          {/* Question title */}
          <h2 className="md:text-2xl text-lg font-primary font-semibold md:mb-[30px] mb-5">
            {currentQuestion.title}
          </h2>

          {/* Answer options based on question type */}
          <div className="space-y-3 mb-6">
            {currentQuestion.type === 'radio' && (
              <Controller
                name={`answers.${currentQuestionIndex}.value`}
                control={control}
                render={({ field }) => (
                  <>
                    {currentQuestion.options?.map((option, index) => (
                      <label
                        key={index}
                        className="flex items-center px-[22px] md:py-[15px] cursor-pointer hover:bg-[#F1F1F1] rounded-[8px]"
                      >
                        <input
                          type="radio"
                          name={`question-${currentQuestionIndex}`}
                          value={option}
                          checked={field.value === option}
                          onChange={() => field.onChange(option)}
                          className="mr-2.5 h-4 w-4 appearance-none rounded-full border border-black ring-1 ring-black checked:bg-black checked:ring-1 checked:ring-offset-2 focus:outline-none"
                        />
                        <span className="text-[16px] font-semibold text-[#141414] font-primary">
                          {option}
                        </span>
                      </label>
                    ))}
                  </>
                )}
              />
            )}

            {currentQuestion.type === 'text' && (
              <Controller
                name={`answers.${currentQuestionIndex}.value`}
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder={currentQuestion.placeholder}
                    value={field.value}
                    onChange={e => field.onChange(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                    name={`question-${currentQuestionIndex}`}
                    required
                  />
                )}
              />
            )}

            {currentQuestion.type === 'contact' && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-[16px] font-semibold text-[#141414] font-primary">
                    {currentQuestion.fields && currentQuestion.fields[0].label}
                  </label>
                  <Controller
                    name={`answers.${currentQuestionIndex}.value`}
                    control={control}
                    render={({ field }) => (
                      <input
                        type="text"
                        placeholder={
                          currentQuestion.fields &&
                          currentQuestion.fields[0].placeholder
                        }
                        value={field.value}
                        onChange={e => field.onChange(e.target.value)}
                        className="w-full p-3 border rounded-lg"
                        required
                      />
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[16px] font-semibold text-[#141414] font-primary">
                    {currentQuestion.fields && currentQuestion.fields[1].label}
                  </label>
                  <Controller
                    name={`answers.${currentQuestionIndex}.additionalValue`}
                    control={control}
                    render={({ field }) => (
                      <input
                        type="tel"
                        placeholder={
                          currentQuestion.fields &&
                          currentQuestion.fields[1].placeholder
                        }
                        value={field.value || ''}
                        onChange={e => field.onChange(e.target.value)}
                        className="w-full p-3 border rounded-lg"
                      />
                    )}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between md:mt-10 md:mt-[68px]">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className={`md:py-3.5 md:px-10 md:rounded-[50px] md:text-lg py-2 px-5 rounded-[20px] text-sm font-semibold text-[#565656] bg-[#F2F2F2] ${
                currentQuestionIndex === 0
                  ? 'cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              Назад
            </button>
            <button
              type="button"
              onClick={() => {
                handleNext();
              }}
              disabled={!isCurrentQuestionAnswered()}
              className={`md:py-3.5 md:px-10 md:rounded-[50px] md:text-lg py-2 px-5 rounded-[20px] text-sm font-semibold cursor-pointer text-[#252323] bg-[#F4D902]`}
            >
              {currentQuestionIndex === questions.length - 1
                ? isPending
                  ? 'Загрузка...'
                  : 'Закончить'
                : 'Далее'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
