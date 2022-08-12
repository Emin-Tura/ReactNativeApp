import React from 'react';

function Reducer(state, action) {
  switch (action.type) {
    case 'ADD_NAME':
      const {name} = action.payload;
      const newList = [...state.nameList, name];
      return {...state, nameList: newList};
    case 'CLEAR_LIST':
      return {...state, nameList: []};
    case 'USER_NAME':
      return {...state, userName: action.payload.userName};
    default:
      return state;
  }
}

export default Reducer;
