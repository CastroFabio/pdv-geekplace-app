import { Route, Routes } from "react-router-dom";

import OrderCard from "./components/orderCard/orderCard.component.jsx";
import OrderCustomer from "./components/orderCustomer/orderCustomer.component.jsx";
import OrderKitchen from "./components/orderKitchen/orderKitchen.component.jsx";
import Home from "./routes/home/home.component.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedidos" element={<OrderCard />} />
        <Route path="/pedidosCliente" element={<OrderCustomer />} />
        <Route path="/cozinha" element={<OrderKitchen />} />
      </Routes>
    </>
  );
}

export default App;
