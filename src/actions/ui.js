import { loadingTypes } from "../types/loadingTypes"
import { errorTypes } from "../types/errorTypes"


export const uiStartLoading = () => ({
    type: loadingTypes.uiStartLogin
})


export const uiFinishLoading = () => ({
    type: loadingTypes.uiFinishLogin
})


export const setError = (err) => ({
    type: errorTypes.uiSetError,
    payload: err
})


export const removeError = () => ({
    type: errorTypes.uiRemoveError
})