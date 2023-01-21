//context api & redux are not the same thing but it is the same pattern
//reducer is the logic that updates the cart

export const initialState = {
  basket: [],
//   user: null,
};

const reducer = (state, action) => {
    console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        // whatever the state originally was
        ...state,
        //whatever the basket originally was plus the action item
        basket: [...state.basket, action.item],
      };
      default:
        return state;
  }
};

export default reducer