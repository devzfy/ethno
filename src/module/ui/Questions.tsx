import { createPortal } from 'react-dom';

import QuizComponent from '../../components/Quiz';
import { IModal } from '../types/FormType';

export default function QuizModal({ showModal, setShowModal }: IModal) {
  return (
    showModal &&
    createPortal(
      <QuizComponent onClose={() => setShowModal(false)} />,
      document.body
    )
  );
}
