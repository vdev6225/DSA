import { createContext, useState } from "react";

export const store = createContext();

const Provider = ({ children }) => {
  const [show,setShow] = useState(false);
  const [modalType,setModalType] = useState("Login");
  return (
    <store.Provider
      value={{
        show,setShow,
        modalType,setModalType
      }}
    >
      {children}
    </store.Provider>
  );
};

export default Provider;
