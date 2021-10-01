import AllOrdersReducer, { addOrderActionsCreater } from "./AllOrdersReducer";

test("length  CreatedOrders should be incremented", () => {
  //1 test data
  let action = addOrderActionsCreater("message", "date", "phone", "name");
  let state = {
    CreatedOrders: [
      {
        NewOrderText: "ХОчу закакзать много товаров из икея",
        NewOrderDate: "11.11",
        NewOrderPhone: "+79817220312",
        NewOrderName: "Dima",
      },
      {
        NewOrderText: "ХОчу закакзать много товаров из икея",
        NewOrderDate: "11.11",
        NewOrderPhone: "+79817220312",
        NewOrderName: "Dima",
      },
    ],
  };
  //2. action
  let newState = AllOrdersReducer(state, action);
  //3. ожидание
  expect(newState.CreatedOrders.length).toBe(3);
  expect(newState.CreatedOrders[2].NewOrderText).toBe("message");
});
