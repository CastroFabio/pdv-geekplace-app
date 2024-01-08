import React from "react";
import "./createOrderCard.styles.css";
import { useNavigate } from "react-router-dom";

const CreateOrderCard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Criar uma comanda</h1>
      <form>
        <label>Nome</label>
        <br />
        <input type="text" />
        <br />
        <button onClick={() => navigate("/pedidos")}>Criar</button>
      </form>
    </div>
  );
};

export default CreateOrderCard;
