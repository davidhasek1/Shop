import * as types from '../types'


export const openProductDetail = (isOpen: boolean) => async dispatch => {
 dispatch({
   type: types.OPEN_PROD_DETAIL,
   payload: isOpen
 })
}