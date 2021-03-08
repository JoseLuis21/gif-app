import { authTypes } from "../types/authTypes";


export const authReducers = ( state = {}, action ) => {
  switch ( action.type ) {
      case authTypes.login:
          return {
              uid: action.payload.uid,
              name: action.payload.displayName,
          }
      case authTypes.logout:
          return { }
      default:
          return state;
  }
}
