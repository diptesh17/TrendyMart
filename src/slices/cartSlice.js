import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"


const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, actions) => {
      state.push(actions.payload)

    },
    remove: (state, actions) => {
      return state.filter((item) => item.id !== actions.payload)
    },
  },
})

export const { add, remove } = cartSlice.actions
export default cartSlice.reducer
