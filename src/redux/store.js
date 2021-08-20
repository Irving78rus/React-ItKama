import AllOrdersReducer from "./AllOrdersReducer";
import ProductReducer from "./ProductReducer";
 

let store = {
  _state: {
    Product: [
      {
        foto: "https://avatars.mds.yandex.net/get-zen_doc/1578824/pub_5ddd072f3efb4d2736dc4c99_5ddd07363676ed2b9e752095/scale_1200",
        price: "1200",
        phone: "+79817220312",
      },
      {
        foto: "https://avatars.mds.yandex.net/get-zen_doc/1578824/pub_5ddd072f3efb4d2736dc4c99_5ddd07363676ed2b9e752095/scale_1200",
        price: "2100",
        phone: "+79817220312",
      },
      {
        foto: "https://avatars.mds.yandex.net/get-zen_doc/1578824/pub_5ddd072f3efb4d2736dc4c99_5ddd07363676ed2b9e752095/scale_1200",
        price: "2100",
        phone: "+79817220312",
      },
    ],
    Orders: {
      CreatedOrders: [
        {
          NewOrderText: "ХОчу закакзать много товаров из икея",
          NewOrderDate: "11.11",
          NewOrderPhone: "+79817220312",
          NewOrderName: "Dima",
        },
      ],
      NewOrder: [
        {
          NewOrderText: "Надо закакзать много товаров из икея",
          NewOrderDate: "2021-04-24T16:02",
          NewOrderPhone: "+79817220312",
          NewOrderName: "Dima",
        },
      ],
    },
  },
   
  getState() {
    return this._state;
  },

   
  dispatch(action) {
    //{ type: 'ADD-ORDER'}

    this._state.Orders = AllOrdersReducer(this._state.Orders, action);
     this._state.Product = ProductReducer(this._state.Product, action);  //надо тут подумать
     
     
  },
};
 
export default store;
