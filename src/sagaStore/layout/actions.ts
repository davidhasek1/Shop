export const OPEN_PROD_DETAIL = 'OPEN_PROD_DETAIL'

export const LAYOUT_OPEN_MOBILE_MENU_REQUEST = 'LAYOUT_OPEN_MOBILE_MENU_REQUEST'
export const LAYOUT_OPEN_MOBILE_MENU_SUCCEEDED =
  'LAYOUT_OPEN_MOBILE_MENU_SUCCEEDED'
export const LAYOUT_OPEN_MOBILE_MENU_FAILED = 'LAYOUT_OPEN_MOBILE_MENU_FAILED'

type setOpenMobileMenuActionType = {
  type: typeof LAYOUT_OPEN_MOBILE_MENU_REQUEST
  payload: boolean
}

export const setOpenMobileMenuAction = (
  payload
): setOpenMobileMenuActionType => ({
  type: LAYOUT_OPEN_MOBILE_MENU_REQUEST,
  payload,
})

type setOpenMobileMenuActionSucceededType = {
  type: typeof LAYOUT_OPEN_MOBILE_MENU_SUCCEEDED
  payload: boolean
}

export const setOpenMobileMenuActionSucceeded = (
  payload
): setOpenMobileMenuActionSucceededType => ({
  type: LAYOUT_OPEN_MOBILE_MENU_SUCCEEDED,
  payload,
})

type setOpenMobileMenuActionFailedType = {
  type: typeof LAYOUT_OPEN_MOBILE_MENU_FAILED
  payload: boolean
}

export const setOpenMobileMenuActionFailed = (
  payload
): setOpenMobileMenuActionFailedType => ({
  type: LAYOUT_OPEN_MOBILE_MENU_FAILED,
  payload,
})

export const LAYOUT_CONFIRM_MODAL_REQUEST = 'LAYOUT_CONFIRM_MODAL_REQUEST'
export const LAYOUT_CONFIRM_MODAL_SUCEED = 'LAYOUT_CONFIRM_MODAL_SUCEED'
export const LAYOUT_CONFIRM_MODAL_FAILED = 'LAYOUT_CONFIRM_MODAL_FAILED'

type setConfirmModalType = {
  type: typeof LAYOUT_CONFIRM_MODAL_REQUEST
  payload: boolean
}
type setConfirmModalSuccedType = {
  type: typeof LAYOUT_CONFIRM_MODAL_SUCEED
  paylaod: boolean
}
type setConfirmModalFailedType = {
  type: typeof LAYOUT_CONFIRM_MODAL_FAILED
}
export const setConfirmModal = (payload): setConfirmModalType => ({
  type: LAYOUT_CONFIRM_MODAL_REQUEST,
  payload,
})
export const setConfirmModalSucceed = (paylaod): setConfirmModalSuccedType => ({
  type: LAYOUT_CONFIRM_MODAL_SUCEED,
  paylaod,
})
export const setConfirmModalFailed = (): setConfirmModalFailedType => ({
  type: LAYOUT_CONFIRM_MODAL_FAILED
})

export type LayoutActionsTypes =
  | setOpenMobileMenuActionType
  | setOpenMobileMenuActionSucceededType
  | setOpenMobileMenuActionFailedType
  | setConfirmModalType
  | setConfirmModalSuccedType
  | setConfirmModalFailedType
