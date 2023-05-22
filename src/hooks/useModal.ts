import { ModalContext } from "hocs/modalContext";
import { useContext } from "react";

const useModal = () => {
  const { isOpen, setModalIsOpen, setModalContent, setModalTitle } =
    useContext(ModalContext);

  const toggleModal = () => {
    setModalIsOpen(!isOpen);
  };

  return {
    isOpen,
    toggleModal,
    setModalContent,
    setModalTitle,
  };
};

export default useModal;
