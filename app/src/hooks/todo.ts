import useSWR from 'swr';
export const todoAllUrl = `http://localhost:8000/api/todo/all`
const useTodos = () => {
    
    const { data } = useSWR(todoAllUrl)
    return {
        todos: data?.data,
    }
}

export default useTodos;