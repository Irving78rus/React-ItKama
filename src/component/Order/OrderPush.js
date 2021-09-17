import React from "react";
import { Field, reduxForm } from "redux-form";
import "../../../src/App.css";
import { NavLink } from 'react-router-dom';
import { maxLengthCreator, required } from "../../utils/validators";
import { Input, Textarea } from "../Preloader/FormControls";


const maxLength10 = maxLengthCreator(10)
const OrderForm = (props) => {
  return (
    <form className="form_order" onSubmit={props.handleSubmit}>
      <label> <NavLink className="nav-link" to={'/AllOrder'}>Назад</NavLink></label>
       <Field
        className="formclass"
        placeholder="Описание заказа"
        name={"TextOrder"}
        validate ={[required,maxLength10]}
        component={Textarea}
      />
      <label>
        <Field
          className="input-order"
          placeholder="Имя"
          name={"UserName"}
          validate ={[required,maxLength10]}
          component={Input}
        />
      </label>
      <label>
        <Field
          className="input-order"
          placeholder="Телефон"
          name={"UserPhone"}
          validate ={[required,maxLength10]}
          component={Input}
        />
      </label>
      <label>
        <Field
          className="input-order"
          placeholder="дата заказа"
          name={"DateOrder"}
          validate ={[required,maxLength10]}
          component={Input}
        />
      </label>
      <button className="red"  >
        Опубликовать
      </button>
    </form>
  );
};


function OrderPush(props) {
  const onSubmit = (formData) => {
     
    let message = formData.TextOrder;
    let date = formData.DateOrder;
    let phone = formData.UserPhone;
    let name = formData.UserName;
    
      // props.UpdateAllOrder(message, date, phone, name);
    props.addOrder(message, date, phone, name);
  
  } 

  return (
    <div>
     
             
            <CreateOrderReduxForm onSubmit={onSubmit} />
    </div>
  );
}

const CreateOrderReduxForm = reduxForm({ form: "CreateOrder" })(OrderForm);
export default OrderPush;
