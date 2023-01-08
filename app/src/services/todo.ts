import axios from 'axios';

export const create = async (body: any) => {
    const url = 'http://localhost:8000/api/todo/create';
    const response = await axios.post(url, body)
    return response
}


export const deleteTodo = async (id: number) => {
    const url = `http://localhost:8000/api/todo/${id}`;
    const response = await axios.delete(url)
    return response
}
