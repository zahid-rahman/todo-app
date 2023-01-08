import { useFormik } from 'formik'
import InputBox from '../ui/InputBox';
import Button from '../ui/Button';
import Todos from './Todos';
import useTodos, { todoAllUrl } from '../hooks/todo';
import { create as createTodo } from '../services/todo';
import useSWR, { useSWRConfig } from 'swr'
import { HashLoader } from 'react-spinners';
const MainApp = () => {
    const { data } = useSWR(todoAllUrl);
    const { todos } = useTodos()
    const { mutate } = useSWRConfig()
    const isLoading = !todos ? true : false;

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
        },
        onSubmit: (values, formikHelper) => {
            mutate(todoAllUrl, [...data?.data, values])
            createTodo(values)
            mutate(todoAllUrl)
            formikHelper.resetForm()
        },
    });

    if (isLoading) return (
        <div className="overflow-y-hidden flex my-40">
            <div className="m-auto">
                <HashLoader size="40" loading color="#000" speedMultiplier={2} />
                <p>Loading</p>
            </div>
        </div>
    )

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="text-center">
                    <InputBox type="text" placeholder="Enter title" classNames='mr-2' name="title" onChange={formik.handleChange} />
                    <InputBox type="text" placeholder="Enter description" name="description" onChange={formik.handleChange} />
                    <Button type="submit">Add</Button>
                </div>
            </form>

            <div className="flex flex-col p-2">
                <Todos todos={todos} />
            </div>
        </div>
    )
}

export default MainApp