export interface UserResponseType {
  id: number
  email: string
  token: string
}

export interface UserRequestType {
  email: string
  password: string
}
