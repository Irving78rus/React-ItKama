import React from "react";
 
import "../../../src/App.css";

function OrderPush(props) {
     
  let textOrder = React.createRef();
  let nameOrder = React.createRef();
  let telOrder = React.createRef();
  let dateOrder = React.createRef();
  let onAddOrder = () => {
    props.addOrder( );
     
  };
  let CreateNewOrder = () => {
    let message = textOrder.current.value;
    let date = dateOrder.current.value;
    let phone = telOrder.current.value;
    let name = nameOrder.current.value;
    props.UpdateAllOrder(message, date, phone, name )

  };
  
  return (
    <div>
      <form className="form_order">
        <label>
          <a className="nav-link" href="/AllOrder">
            Назад
          </a>
        </label>

        <textarea
          onChange={CreateNewOrder}
          className="formclass"
          placeholder="Описание заказа"
          ref={textOrder}
          value={props.NewOrder[0].NewOrderText}
        ></textarea>
        <label>
          <input
            onChange={CreateNewOrder}
            ref={nameOrder}
            value={props.NewOrder[0].NewOrderName}
            className="input-order"
            type="text"
            placeholder="Имя"
          />
        </label>
        <label>
          <input
            onChange={CreateNewOrder}
            ref={telOrder}
            value={props.NewOrder[0].NewOrderPhone}
            className="input-order"
            type="tel"
            placeholder="Телефон"
          />
        </label>
        <label>
          <input
            onChange={CreateNewOrder}
            ref={dateOrder}
            value={props.NewOrder[0].NewOrderDate}
            className="input-order"
            type="datetime-local"
            placeholder="дата заказа"
          />
        </label>
        {/* <a href="/AllOrder"> */}
        <button onClick={onAddOrder} className="red" type="button">
          Опубликовать
        </button>
        {/* </a> */}
      </form>
    </div>
  );
}

export default OrderPush;
