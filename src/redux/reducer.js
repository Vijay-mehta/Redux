import { ADD_USER, DELETE_USER, EDIT_USER } from "./actionType";
const initialState = {
  users: [],
};

const userReducr = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((_,index)=>index !== action.payload),
      };
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user,index) =>
          index == action.payload.index ? {...state,...action.payload.user} : user
        ),
      };

    default:
      return state;
  }
};

export default userReducr;
