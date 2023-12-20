import { Route, Routes } from "react-router-dom";

import OrderCard from "./components/orderCard/orderCard.component.jsx";
import OrderCustomer from "./components/orderCustomer/orderCustomer.component.jsx";
import OrderKitchen from "./components/orderKitchen/orderKitchen.component.jsx";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.component.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Navigation />}>
          <Route path="/pedidos" element={<OrderCard />} />
          <Route path="/pedidosCliente" element={<OrderCustomer />} />
          <Route path="/cozinha" element={<OrderKitchen />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
