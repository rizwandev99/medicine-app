import { useState, createContext, useEffect } from "react";
import axios from "axios";

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
  const [medArray, setMedArray] = useState([]);
  const [counter, setCounter] = useState(0);
  const [total, setTotal] = useState(0);

  // Overlay setting
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };
  // Overlay finished

  // //Getting data from server
  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await fetch(
  //       "https://learnreact-medicine-app-default-rtdb.firebaseio.com/med.json"
  //     );
  //     // .then((res) => {
  //     //   if (res.ok) {
  //     //     console.log("Fetched Data successfully");
  //     //     return res.json();
  //     //   } else {
  //     //     throw new Error("Error in fetching");
  //     //   }
  //     // })
  //     // .then((data) => {
  //     //   console.log("Data from api", data);
  //     //   if (data.length > 0) {
  //     //     setMedArray(data);
  //     //   } else {
  //     //     setMedArray(obj);
  //     //   }
  //     // });
  //     const response = await request.json();
  //     console.log("MMM", response);
  //     setMedArray(() => response);
  //   }
  //   fetchData();
  // }, []);\

  // // Fetching Data with axios
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://learnreact-medicine-app-default-rtdb.firebaseio.com/med.json"
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //       if (response) {
  //         setMedArray(response.data);
  //       }
  //     });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://learnreact-medicine-app-default-rtdb.firebaseio.com/med.json"
        );
        if (response.data) {
          setMedArray(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error here, e.g., display an error message to the user
      }
    };

    fetchData();
  }, []);
  //
  useEffect(() => {
    const totalCount = medArray.reduce((total, item) => total + item.qty, 0);
    setCounter(totalCount);
  }, [medArray]);

  useEffect(() => {
    const totalCount = medArray.reduce(
      (total, item) => total + item.qty * item.price,
      0
    );
    setTotal(totalCount);
  }, [medArray]);

  useEffect(() => {
    fetch(
      "https://learnreact-medicine-app-default-rtdb.firebaseio.com/med.json",
      {
        method: "PUT",
        body: JSON.stringify(medArray),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }, [medArray]);

  const addUser = async (newItem) => {
    newItem.qty = 1;
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
