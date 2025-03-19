import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useSnackbar } from 'notistack';

export const useSendTestResults = () => {
  const { enqueueSnackbar } = useSnackbar();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (values: { [key: string]: string }[]) => {
      let message = values
        .map(item => {
          const answerKey = Object.keys(item).find(
            key =>
              key.startsWith('a') &&
              !key.includes('name') &&
              !key.includes('phone')
          );
          const questionKey = Object.keys(item).find(key =>
            key.startsWith('q')
          );

          return questionKey && answerKey
            ? `❓ *${item[questionKey]}*\n✅ ${item[answerKey]}`
            : null;
        })
        .filter(Boolean)
        .join('\n\n');

      // Adding Contact Information
      const contact = values.find(obj => obj.a6_name && obj.a6_phone);
      if (contact) {
        message += `\n\n👨‍💼 *Пользователь:* ${contact.a6_name}\n☎️ *Телефон:* ${contact.a6_phone}`;
      }

      return await axios.post(
        `https://api.telegram.org/bot7864483318:AAFJp5CUf1jlu1nA7n_r0dUAhhhoOh9h174/sendMessage`, // Replace with your actual bot token
        {
          chat_id: '@logisticacadem', // Replace with your actual channel username
          text: message,
          parse_mode: 'Markdown',
        }
      );
    },
    onSuccess: () => {
      enqueueSnackbar('Успешно отправлено!', {
        variant: 'success',
        anchorOrigin: { vertical: 'top', horizontal: 'left' },
        autoHideDuration: 2000,
      });
    },
    onError: () => {
      enqueueSnackbar('Что-то пошло не так!', {
        variant: 'error',
        anchorOrigin: { vertical: 'top', horizontal: 'left' },
        autoHideDuration: 2000,
      });
    },
  });

  return { isPending, mutateAsync };
};
