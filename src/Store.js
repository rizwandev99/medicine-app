import { useState, createContext, useEffect } from "react";

export const UserContext = createContext({
  medArray: [],
  counter: 0,
  total: 0,
  addUser: () => {},
  addCart: () => {},
  increaseQty: () => {},
  decreaseQty: () => {},
  clearQty: () => {},
  // Overlay
  showOverlay: false,
  toggleOverlay: () => {},
});

const obj = [
  { name: "Paracetamol", desc: "It relieves fever", price: 50, qty: 0 },
  { name: "Coldoff", desc: "It relieves Cold", price: 30, qty: 0 },
  { name: "Avil", desc: "It relieves inflammation", price: 20, qty: 0 },
];

const UserContextProvider = (props) => {
  const [medArray, setMedArray] = useState(obj);
  const [counter, setCounter] = useState(0);
  const [total, setTotal] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  useEffect(() => {
    const totalCount = medArray.reduce((total, item) => total + item.qty, 0);
    setCounter(totalCount);
  }, [medArray]);

  useEffect(() => {
    const totalCount = medArray.reduce(
      (total, item) => total + item.qty * item.price,
      0
    );
    setTotal(() => totalCount);
  }, [medArray]);

  const addUser = (newItem) => {
    setMedArray([...medArray, newItem]);
  };

  const increaseQty = (index) => {
    setMedArray((prev) => {
      const newArray = [...prev];
      newArray[index] = { ...newArray[index], qty: newArray[index].qty + 1 }; // Update the quantity of the specific item
      return newArray;
    });
  };
  const decreaseQty = (index) => {
    setMedArray((prev) => {
      const newArray = [...prev];
      newArray[index] = { ...newArray[index], qty: newArray[index].qty - 1 }; // Update the quantity of the specific item
      return newArray;
    });
  };
  const clearQty = () => {
    setMedArray([]);
  };

  return (
    <>
      <UserContext.Provider
        value={{
          medArray,
          counter,
          total,
          addUser,
          increaseQty,
          decreaseQty,
          clearQty,
          // Overlay
          showOverlay,
          toggleOverlay,
        }}
      >
        {props.children}
      </UserContext.Provider>
    </>
  );
};

export default UserContextProvider;
