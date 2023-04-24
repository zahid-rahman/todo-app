import { todoApi } from "@/services/todoApi";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [todoApi.reducerPath]: todoApi.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoApi.middleware),
})