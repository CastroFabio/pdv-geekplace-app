import { useNavigate } from "react-router-dom";
import "./home.styles.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="center ">
        <section className="">
          <button onClick={() => navigate("/historico")} className="">
            Histórico
          </button>
          <button onClick={() => navigate("/pedidos")} className="">
            Comandas
          </button>
          <button onClick={() => navigate("/cozinha")} className="">
            Cozinha
          </button>
          <button onClick={() => navigate("/cadastroProdutos")} className="">
            Cadastro de Produtos
          </button>
          <button onClick={() => navigate("/cadastroClientes")} className="">
            Cadastro de Clientes
          </button>
        </section>
      </div>
    </>
  );
};

export default Home;
