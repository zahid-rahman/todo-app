import React from 'react'
import { Link } from 'react-router-dom';
import { useSWRConfig } from 'swr';
import { todoAllUrl } from '../hooks/todo';
import { deleteTodo } from '../services/todo';

interface TodoProps {
    id: number;
    title: string;
    description: string;
    index: number;
    todos: ITodo[];
}

export interface ITodo {
    id: number;
    title: string;
    description: string;
}

const Todo = ({ id, title, description, index, todos }: TodoProps) => {
    const { mutate } = useSWRConfig()

    return (
        <tr key={index}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-6">
                {id}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{title}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-black">{description}</td>
            <td className="py-4 pr-4 text-right text-sm font-medium">
                <Link to={`/todo/${id}`} className="text-blue-600 hover:text-indigo-900">
                    Edit
                </Link>
                <button className="text-red-600 hover:text-indigo-900 ml-2" onClick={() => {
                    mutate(todoAllUrl, todos.filter(todo => todo.id !== id))
                    deleteTodo(id)
                    mutate(todoAllUrl)
                }}>
                    delete
                </button>
            </td>

        </tr>
    )
}

export default Todo