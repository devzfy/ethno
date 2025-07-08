import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { FormType } from '../types/FormType';
import { useSnackbar } from 'notistack';

export const useSendRequest = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: (values: FormType) =>
      axios
        .post(
          `https://api.telegram.org/bot7940676655:AAE3Ctdz703qIFfREw_GLhUAyyGVFW-WR-M/sendMessage`,
          {
            chat_id: '@logisticacadem',
            parse_mode: 'Markdown',
            text: `
            📧 *Новое приложение:*
👤 *Ф.И.О*: ${values.fullName}
☎️ *Телефон*: ${values.phone}
💬 *Комментарий*: ${values.comment}`,
          }
        )
        .then(() =>
          enqueueSnackbar('Успешно отправлено!', {
            variant: 'success',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            autoHideDuration: 2000,
          })
        ),
    onSuccess: () =>
      enqueueSnackbar('Успешно отправлено!', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        autoHideDuration: 2000,
      }),
    onError: () =>
      enqueueSnackbar('Что-то пошло не так!', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        autoHideDuration: 2000,
      }),
  });

  return { isPending, mutateAsync };
};
