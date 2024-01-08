import { Outlet, useNavigate } from "react-router-dom";

import "./navigation.styles.css";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="containerNavigationBar">
        <a onClick={() => navigate("/")}>Home</a>
        <a onClick={() => navigate("/pedidos")}>Comandas</a>
        <a onClick={() => navigate("/cozinha")}>Cozinha</a>
        <a onClick={() => navigate("/historico")}>Histórico</a>
      </section>
      <Outlet />
    </>
  );
};

export default Navigation;
