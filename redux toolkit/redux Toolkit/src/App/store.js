 import { configureStore } from "@reduxjs/toolkit";
import  todoReducer from '../featuers/todo/todoslice'
 export const store = configureStore ({

reducer: todoReducer

 })