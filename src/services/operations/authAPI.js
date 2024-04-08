import { toast } from "react-hot-toast"
import { setLoading, setToken } from "../../slices/authSlice"
import { setUser } from "../../slices/profileSlice"
import { endpoints } from "./apis"
import axios from "axios"

const {
  SIGNUP_API,
  LOGIN_API,
} = endpoints


export function signUp(
  UserName,
  Email,
  Password,
  ConfirmPassword,
  navigate,
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const body = JSON.stringify({ UserName, Email, Password, ConfirmPassword })

      const  response  = await axios.post(
        `${SIGNUP_API}`,
        body, config
      );

      console.log("before running")
      console.log("SIGNUP API RESPONSE............", response)
      console.log("after running")
    
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Signup Successful")
      navigate("/login")
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error("Signup Failed")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function login(Email, Password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const body = JSON.stringify({ Email, Password })
  
      const  response  = await axios.post(
        `${LOGIN_API}`,
        body, config
      );

      console.log("LOGIN API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Login Successful")
      dispatch(setToken(response.data.token))
      
      dispatch(setUser({ ...response.data.user }))
      
      localStorage.setItem("token", JSON.stringify(response.data.token))
      localStorage.setItem("user", JSON.stringify(response.data.user))
      navigate("/")
    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error("Login Failed")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUser(null))
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}

