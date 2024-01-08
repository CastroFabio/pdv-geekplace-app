import "./orderKitchen.styles.css";

const ordersByName = [
  {
    id: 1,
    name: "Kaborge",
    produto1: "Sanduíche",
    produto2: "Sorvete",
  },
  {
    id: 2,
    name: "Careca",
    produto1: "Boster",
    produto2: "Água",
  },
  {
    id: 3,
    name: "Bolores",
    produto1: "Sopa",
    produto2: "Pão",
  },
];

const OrderKitchen = () => {
  return (
    <>
      <section className="containerOrderKitchenBody">
        {ordersByName.map(({ id, name, produto1, produto2 }) => {
          return (
            <div key={id} className="border orderKitchenCard">
              <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
              <ul>
                <li>{produto1}</li>
                <li>{produto2}</li>
              </ul>
              <div className=" containerActionButtons">
                <button>Finalizar</button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default OrderKitchen;
