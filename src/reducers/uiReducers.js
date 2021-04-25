import { loadingTypes } from "../types/loadingTypes";
import { errorTypes } from "../types/errorTypes";

const initialState = {
    loading: false,
    msgError: null
}

export const uiReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
        case loadingTypes.uiStartLogin:
            return {
                ...state,
                loading: true
            }
        case loadingTypes.uiFinishLogin:
            return {
                ...state,
                loading: false
            }
        case errorTypes.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }
        case errorTypes.uiRemoveError:
            return {
                ...state,
                msgError: null
            }
      default:
          return state;
  }
}