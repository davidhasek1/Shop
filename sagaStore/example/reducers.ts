import {EXAMPLE_ACTION_SUCCEEDED, ExampleActionsTypes} from 'sagaStore/actions'

const initialState = {
  count: 0,
}

const exampleReducer = (state = initialState, action: ExampleActionsTypes) => {
  switch (action.type) {
    case EXAMPLE_ACTION_SUCCEEDED:
      return {
        ...state,
        count: state.count + 1,
      }
    default:
      return state
  }
}

export default exampleReducer
