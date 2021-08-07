export const EXAMPLE_ACTION_REQUEST = 'EXAMPLE_ACTION_REQUEST'
export const EXAMPLE_ACTION_SUCCEEDED = 'EXAMPLE_ACTION_SUCCEEDED'
export const EXAMPLE_ACTION_FAILED = 'EXAMPLE_ACTION_FAILED'

type ExampleActionType = {
  type: typeof EXAMPLE_ACTION_REQUEST
  payload: number
}
export const setExampleAction = (payload): ExampleActionType => ({
  type: EXAMPLE_ACTION_REQUEST,
  payload: payload,
})

type ExampleActionSucceededType = {
  type: typeof EXAMPLE_ACTION_SUCCEEDED
  payload: { count: number }
}
export const setExampleActionSucceeded = (
  payload
): ExampleActionSucceededType => ({
  type: EXAMPLE_ACTION_SUCCEEDED,
  payload: payload,
})
type ExampleActionFailedTypes = {
  type: typeof EXAMPLE_ACTION_FAILED
}
export const setExampleActionFailed = (): ExampleActionFailedTypes => ({
  type: EXAMPLE_ACTION_FAILED,
})

export type ExampleActionsTypes =
  | ExampleActionType
  | ExampleActionSucceededType
  | ExampleActionFailedTypes // | další type pro další action | ... | ...
