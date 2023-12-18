import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();

  return (
    <>
      <section>
        <button onClick={() => navigate("/pedidosCliente")}>Kaborge</button>
        <button onClick={() => navigate("/pedidosCliente")}>Chico</button>
        <button onClick={() => navigate("/pedidosCliente")}>Neguinho</button>
        <button onClick={() => navigate("/pedidosCliente")}>Bolores</button>
        <button onClick={() => navigate("/pedidosCliente")}>Careca</button>
      </section>
    </>
  );
};

export default OrderCard;
