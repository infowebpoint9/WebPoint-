import { createContext, useContext, useState, useCallback } from "react";

const ModalContext = createContext({
    isOpen: false,
    openModal: () => {},
    closeModal: () => {},
});

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);

    return (
        <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useStoreModal = () => useContext(ModalContext);
