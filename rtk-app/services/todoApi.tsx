import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3303/api/todo" }),
    tagTypes: ['Todo'],
    endpoints: (builder) => ({
        todos: builder.query<any[], void>({
            query: () => '/find-all',
            providesTags: ['Todo']
        }),
        todo: builder.query<any, string>({
            query: (id) => `/find/${ id }`,
            providesTags: ['Todo']
        }),
        addTodo: builder.mutation<{}, any>({
            query: contact => ({
                url: '/create',
                method: 'POST',
                body: contact    
            }),
            invalidatesTags: ['Todo']
        }),
        updateTodo: builder.mutation<void, any>({
            query: ({id, ...rest}) => ({
                url: `/update/${ id }`,
                method: 'PUT',
                body: rest
            }),
            invalidatesTags: ['Todo']
        }),
        deleteTodo: builder.mutation<void, string>({
            query: (id) => ({
                url: `/delete/${ id }`,
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