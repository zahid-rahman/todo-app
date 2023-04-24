import { useTodosQuery } from '@/services/todoApi'
import { useFormik } from 'formik';
import React from 'react'
import { Input, Button } from 'antd'
function Frontpage() {

  const { data, error, isLoading, isFetching, isSuccess } = useTodosQuery();



  const { handleSubmit, handleChange, handleBlur, values } = useFormik({
    initialValues: {
      task: "",
      done: false,
    },
    onSubmit(values) {

    }
  })

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <Input placeholder="Basic usage" />;
          <Button htmlType="submit" type="primary">Primary Button</Button>
        </form>
      </div>
      <table>
        <thead>
          <td>Task</td>
          <td>Done</td>
          <td>created at</td>
          <td>Action</td>
        </thead>
        <tbody>
          {data?.map((todo, index) => {
            return (
              <tr key={index}>
                <td>{todo.task}</td>
                <td>{todo.done === true ? "done" : "not finished"}</td>
                <td>{todo.createdAt}</td>
                <td>
                  <Button type="primary">
                    Edit
                  </Button>
                  <Button type="primary" danger>
                    Delete
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default Frontpage