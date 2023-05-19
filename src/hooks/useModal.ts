import { ModalContext } from "hocs/modalContext";
import { useContext, useEffect } from "react";
import { useModalProptypes } from "utils/proptypes";

const useModal = () => {
  const { isOpen, setModalIsOpen, setModalContent, setModalTitle } =
    useContext(ModalContext);

  const toggleModal = () => {
    setModalIsOpen(!isOpen);
  };

  return {
    toggleModal,
    setModalContent,
    setModalTitle,
    isOpen,
  };
};

export default useModal;
