import axiosInstance from "@/config/axiosinstande";
import { AuthResponse, LoginForm, SignUpForm } from "@/types/Auth";
import sleep from "@/ultis/sleep";

const loginForm = async(formValue: LoginForm):Promise<AuthResponse> => {
    await sleep(2000)
    const res = await axiosInstance.post<AuthResponse>('/login', formValue)
    return res.data
}

const signUpForm = async (formValue: SignUpForm):Promise<AuthResponse> => {
    await sleep(2000)
    const res = await axiosInstance.post<AuthResponse>('/register' , formValue)
    return res.data
}
export {loginForm,signUpForm }