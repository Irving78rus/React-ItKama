import React from "react";
import "../../../src/App.css";

function ButtonOrderCreate(props) {
  return (
    
      <a href="/AllOrder/OrderPush">
        <button className="red" type="button">
          Создать заказ
        </button>
      </a>
    
  );
}

export default ButtonOrderCreate;
