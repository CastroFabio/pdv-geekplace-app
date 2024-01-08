import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import "./orderCard.styles.css";

const ordersByName = [
  {
    id: 1,
    name: "Kaborge",
    produto1: "Sanduíche",
    preco1: 20,
    produto2: "Sorvete",
    preco2: 30,
  },
  {
    id: 2,
    name: "Careca",
    produto1: "Boster",
    preco1: 13,
    produto2: "Água",
    preco2: 20,
  },
  {
    id: 3,
    name: "Bolores",
    produto1: "Sopa",
    preco1: 10,
    produto2: "Pão",
    preco2: 4,
  },
];

const OrderCard = () => {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <>
      <section className="containerOrderBody">
        <h1>Comandas</h1>

        <button onClick={() => navigate("/criarComanda")}>Adicionar</button>
        <div className="containerOrderCardsBody">
          {ordersByName.map(
            ({ id, name, produto1, produto2, preco1, preco2 }) => {
              return (
                <div key={id} className="border orderCard">
                  <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
                  <ul>
                    <li>{produto1}</li>
                    <ul>
                      <li>R$ {preco1}</li>
                    </ul>
                    <li>
                      {produto2}
                      <ul>
                        <li>R$ {preco2}</li>
                      </ul>
                    </li>
                  </ul>
                  <p>Subtotal: R$ {preco1 + preco2}</p>
                  <div className=" containerActionButtons">
                    <button>Finalizar</button>
                    <button>Cancelar</button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </>
  );
};

export default OrderCard;
