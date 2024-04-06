
export type LoginForm = {
    email:string
    password:string
}
export type AuthResponse = {
    accessToken: string
  }

  export type SignUpForm = {
    email:string
    password:string
    username?:string
  }