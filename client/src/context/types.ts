export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  account: string
  password: string
  rememberMe?: boolean
}

export type RegisterParams = {
  email: string
  password: string
  username: string
}

// export type UserDataType = {
//   _id: string
//   role: string
//   email: string
//   fullName: string
//   username: string
//   password: string
//   avatar?: string | null
//   address?: string | null
// }

export type UserDataType = {
  username: string
  email: string
  avatar: string
  address?: string | null
  role: string
  createdAt: string
  _id: string
}

export type ForgotPassParams = {
  email: string
}

export type ResetPassParams = {
  code: number
  newPassword: string
}

export type AuthValuesType = {
  loading: boolean
  logout: (value: string) => void
  user: UserDataType | null
  setLoading: (value: boolean) => void
  setUser: (value: UserDataType | null) => void
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void
  register: (params: RegisterParams, errorCallback?: ErrCallbackType) => void
  forgotPassword: (params: ForgotPassParams, errorCallback?: ErrCallbackType) => void
  resetPassword: (params: ResetPassParams, errorCallback?: ErrCallbackType) => void
}
