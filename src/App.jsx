import { Route, Routes } from "react-router-dom";

import OrderCard from "./components/orderCard/orderCard.component.jsx";
import OrderCustomer from "./components/orderCustomer/orderCustomer.component.jsx";
import OrderKitchen from "./components/orderKitchen/orderKitchen.component.jsx";
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.component.jsx";
import CreateOrderCard from "./components/createOrderCard/createOrderCard.component.jsx";
import Product from "./components/product/product.component.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Navigation />}>
          <Route path="/pedidos" element={<OrderCard />} />
          <Route path="/criarComanda" element={<CreateOrderCard />} />
          <Route path="/pedidosCliente" element={<OrderCustomer />} />
          <Route path="/cozinha" element={<OrderKitchen />} />
          <Route path="/cadastroProdutos" element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
