import Header from "./components/header/Header";
import AddProduct from "./components/form/AddProduct";
import AddCart from "./components/form/AddCart";
import UserContextProvider from "./Store";
import Overlay from "./components/overlay/Overlay";
import CartOpenPage from "./components/cart/CartOpenPage";

function App() {
  return (
    <UserContextProvider>
      <Header />
      <AddProduct />
      <AddCart />
      <Overlay>
        <CartOpenPage />
      </Overlay>
    </UserContextProvider>
  );
}

export default App;
