import React from "react";

const Product = () => {
  return (
    <>
      <h1>Product</h1>
      <form>
        <label>Nome</label> <br />
        <input type="text" />
        <br />
        <label>Tipo</label>
        <div className="App">
          <h3>Select Pizza Size</h3>

          <input type="radio" name="topping" value="Regular" id="regular" />
          <label htmlFor="regular">Regular</label>

          <input type="radio" name="topping" value="Medium" id="medium" />
          <label htmlFor="medium">Medium</label>

          <input type="radio" name="topping" value="Large" id="large" />
          <label htmlFor="large">Large</label>
        </div>
      </form>
    </>
  );
};

export default Product;
