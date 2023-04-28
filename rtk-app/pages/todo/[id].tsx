import { useTodoQuery, useUpdateTodoMutation } from '@/services/todoApi';
import { notifyError, notifySuccess } from '@/ui';
import Actionbar from '@/ui/Actionbar';
import { Input } from 'antd';
import { useFormik } from 'formik';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function EditTodoPage() {
    const router = useRouter();
    const id = router?.query?.id;
    const { data , error, isLoading, isFetching, isSuccess, refetch } = useTodoQuery(id);
    const [todoData, setTodoData] = useState(null);
    const [updateTodo] = useUpdateTodoMutation();
    console.log(data?.data)
    const [initialValue, setInitialValue] = useState({
        task: "",
        done: false
    })

    useEffect(() => {
		if (router.isReady) {
			// Code using query
            // refetch()
            setInitialValue({
                task: data?.data?.task,
                done: data?.data?.done,
            })
		}
	}, [router.isReady]);

    const { handleSubmit, handleChange, handleBlur, values } = useFormik({
        initialValues: initialValue,
        async onSubmit(values, action) {
            try {
                await updateTodo({
                    id,
                    values
                })
                notifySuccess("todo updated successfully");
                action.resetForm();
            }
            catch (error) {
                console.error(error);
                notifyError("something went wrong")
            }
        }
    });

    if(isLoading) return null;

    return (
        <form onSubmit={handleSubmit}>
            <Actionbar breadcrumbLinks={[{ href: "/", title: "Todo" }]} title="Edit todo" />

            <div>
                <Input name="task" onChange={handleChange} onBlur={handleBlur} value={values.task} />
            </div>
        </form>
    )
}

export default EditTodoPage