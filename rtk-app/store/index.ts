import { todoApi } from "@/services/todoApi";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    todoApi: todoApi.reducer,
  })

export type RootState = ReturnType<typeof rootReducer>;

export const store: any = configureStore({
    // reducer: {
    //     // Add the generated reducer as a specific top-level slice
    //     [todoApi.reducerPath]: todoApi.reducer
    // },
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoApi.middleware),
})