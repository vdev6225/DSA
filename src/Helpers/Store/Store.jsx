import { createContext, useState } from "react";

export const store = createContext();

const Provider = ({ children }) => {
  const [show,setShow] = useState(false);
  const [modalType,setModalType] = useState("Login");
  const [magazineType,setMagazineType] = useState("Podcast");
  const [defSecEduType,setDefSecEduType] = useState("Insignia");
  const [defSecEduData, setDefSecEduData] = useState([]);
  const [defSecEduFilteredData, setDefSecEduFilteredData] = useState([]);
  return (
    <store.Provider
      value={{
        show,setShow,
        modalType,setModalType,
        magazineType,setMagazineType,
        defSecEduType,setDefSecEduType,
        defSecEduData, setDefSecEduData,
        defSecEduFilteredData, setDefSecEduFilteredData
      }}
    >
      {children}
    </store.Provider>
  );
};

export default Provider;
