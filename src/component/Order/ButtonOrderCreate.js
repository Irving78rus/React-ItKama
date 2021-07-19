import React from "react";
import "../../../src/App.css";

function ButtonOrderCreate(props) {
  return (
    <form className="form_order">
      <a href="/AllOrder/OrderPush">
        <button className="red" type="button">
          Создать заказ
        </button>
      </a>
    </form>
  );
}

export default ButtonOrderCreate;
