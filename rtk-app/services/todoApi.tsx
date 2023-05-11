import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper'

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3303/api/todo" }),
    tagTypes: ['Todo'],
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
          return action.payload[reducerPath]
        }
      },
    endpoints: (builder) => ({
        todos: builder.query<any, void>({
            query: () => '/find-all',
            providesTags: ['Todo']
        }),
        todo: builder.query<any, any>({
            query: (id: any) => `/find/${id}`,
            providesTags: ['Todo']
        }),
        addTodo: builder.mutation<{}, any>({
            query: todo => ({
                url: '/create',
                method: 'POST',
                body: todo
            }),
            invalidatesTags: ['Todo'],
        }),
        updateTodo: builder.mutation<void, any>({
            query: ({ id, ...rest }) => ({
                url: `/update/${id}`,
                method: 'PUT',
                body: rest
            }),
            invalidatesTags: ['Todo']
        }),
        deleteTodo: builder.mutation<void, string>({
            query: (id: any) => ({
                url: `/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Todo']
        })
    })
})

export const {
    useTodosQuery,
    useTodoQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation
} = todoApi;
