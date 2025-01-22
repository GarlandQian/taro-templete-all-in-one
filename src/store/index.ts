import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { thunk } from 'redux-thunk'

import reducer from './reducers'

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
})

export type RootState = ReturnType<typeof store.getState> // 定义 RootState 类型
export type AppDispatch = typeof store.dispatch // 定义 Dispatch 类型

export default store
