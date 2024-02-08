import { configureStore } from '@reduxjs/toolkit'
import usereducer from './user/userSlice.js'

export const store = configureStore({
    reducer: {user : usereducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})