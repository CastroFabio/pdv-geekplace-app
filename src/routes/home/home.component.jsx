import { useNavigate } from "react-router-dom";
import "./home.styles.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="center containerHomePageBody">
        <section className="containerHomePageBody">
          <button
            className="buttonHomePage"
            onClick={() => navigate("/historico")}
          >
            Histórico
          </button>
          <button
            className="buttonHomePage"
            onClick={() => navigate("/pedidos")}
          >
            Comandas
          </button>
          <button
            className="buttonHomePage"
            onClick={() => navigate("/cozinha")}
          >
            Cozinha
          </button>
          <button
            className="buttonHomePage"
            onClick={() => navigate("/cadastroProdutos")}
          >
            Cadastro de Produtos
          </button>
          <button
            className="buttonHomePage"
            onClick={() => navigate("/cadastroClientes")}
          >
            Cadastro de Clientes
          </button>
        </section>
      </div>
    </>
  );
};

export default Home;
