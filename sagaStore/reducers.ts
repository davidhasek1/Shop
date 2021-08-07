import { combineReducers } from 'redux'
import example from 'sagaStore/example/reducers'
import layout from 'sagaStore/layout/reducers'
import cart from 'sagaStore/cart/reducers'
//import reducers from './xyreducer.ts'

export default combineReducers({ example, layout, cart })
