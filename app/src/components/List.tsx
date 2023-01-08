import React from 'react'
import { HashLoader } from 'react-spinners';
import useSWR, { useSWRConfig } from 'swr';
import useTodos, { todoAllUrl } from '../hooks/todo';
import Todos from './Todos'

const List = () => {
    const { todos } = useTodos()
    const isLoading = !todos ? true : false;

    if (isLoading) return (
        <div className="overflow-y-hidden flex my-40">
            <div className="m-auto">
                <HashLoader size="40" loading color="#000" speedMultiplier={2} />
                <p>Loading</p>
            </div>
        </div>
    )

    return (
        <>
            <div className="flex flex-col p-2">
                <Todos todos={todos} />
            </div>
        </>
    )
}

export default List