const ADD_ORDER = "ADD-ORDER";
 
let initialState = {
  CreatedOrders: [
    {
      NewOrderText: "ХОчу закакзать много товаров из икея",
      NewOrderDate: "11.11",
      NewOrderPhone: "+79817220312",
      NewOrderName: "Dima",
      
    },
  ],
  
}

const AllOrdersReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state,
    CreatedOrders:[...state.CreatedOrders],
    
  }
  
  switch (action.type) {
    case ADD_ORDER: 
   
      let CreateNewOrder = {
        NewOrderText: action.message,
        NewOrderDate: action.date,
        NewOrderPhone: action.phone,
        NewOrderName: action.name,
         
      };
      console.log(CreateNewOrder);
        stateCopy.CreatedOrders.push(CreateNewOrder)
         
      return stateCopy;
     

     
     
    default:
      return state ;
  }
};

export const addOrderActionsCreater = (message, date, phone, name) => {
  
  return {
    type: ADD_ORDER, message, date, phone, name
  };
};
 
export default AllOrdersReducer;
