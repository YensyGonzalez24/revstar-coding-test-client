import { useState, createContext, ReactNode } from "react";
import { modalContextType } from "utils/proptypes";

const ModalContext = createContext<modalContextType>({
    isOpen: false,
    content: null,
    title: '',
    setModalIsOpen: ()=>{},
    setModalContent: ()=>{},
    setModalTitle:  ()=>{},
});

const ModalProvider = ({children}: any) =>{
    const [isOpen, setIsOpen] = useState<boolean | null>(false);
    const [content, setContent] = useState<ReactNode | null>(null);
    const [title, setTitle] = useState<string>("");

    const contextValues = {
        isOpen: isOpen,
        content: content,
        title: title,
        setModalIsOpen: setIsOpen,
        setModalContent: setContent,
        setModalTitle: setTitle,
      }

    return (
        <ModalContext.Provider value={contextValues}>
            <div className={`${isOpen ? 'absolute' : 'hidden'} h-screen w-screen bg-gray-500 bg-opacity-30 z-10 flex items-center justify-center`}>
                <div className="w-full max-w-screen-md bg-white rounded-3xl pb-4">
                    <div className="w-full flex justify-center py-4 text-lg font-bold">{title}</div>
                    <div className="flex-1 flex items-center justify-center">
                        {content}
                    </div>
                </div>
            </div>
            {children}
        </ModalContext.Provider>
    )
}

export {ModalProvider, ModalContext};