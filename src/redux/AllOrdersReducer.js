const ADD_ORDER = "ADD-ORDER";
const UpdateAllOrder = "UpdateAllOrder";

let initialState = {
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
}

const AllOrdersReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state,
    CreatedOrders:[...state.CreatedOrders],
    NewOrder : [...state.NewOrder],
  }
       
  switch (action.type) {
    case ADD_ORDER: 
      
      let CreateNewOrder = {
        NewOrderText: state.NewOrder[0].NewOrderText,
        NewOrderDate: state.NewOrder[0].NewOrderDate,
        NewOrderPhone: state.NewOrder[0].NewOrderPhone,
        NewOrderName: state.NewOrder[0].NewOrderName,
      };
      
        stateCopy.CreatedOrders.push(CreateNewOrder)
        stateCopy.NewOrder[0].NewOrderText = "";
        stateCopy.NewOrder[0].NewOrderDate = "";
        stateCopy.NewOrder[0].NewOrderPhone = "";
        stateCopy.NewOrder[0].NewOrderName = "";
      return stateCopy;
     

    case UpdateAllOrder: 
      
      
      stateCopy.NewOrder[0].NewOrderText = action.NewMessage;
      stateCopy.NewOrder[0].NewOrderDate = action.NewDate;
      stateCopy.NewOrder[0].NewOrderPhone = action.NewPhone;
      stateCopy.NewOrder[0].NewOrderName = action.NewName;
      return stateCopy;
     
    default:
      return state ;
  }
};

export const addOrderActionsCreater = () => {
  return {
    type: ADD_ORDER,
  };
};

export const UpdateAllOrderActionsCreater = (message, date, phone, name) => {
  return {
    type: UpdateAllOrder,
    NewMessage: message,
    NewDate: date,
    NewPhone: phone,
    NewName: name,
  };
};
export default AllOrdersReducer;
