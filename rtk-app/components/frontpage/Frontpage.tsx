import { useAddTodoMutation, useDeleteTodoMutation, useTodosQuery } from '@/services/todoApi'
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Input, Button, Space, Table, Tag } from 'antd';
import { } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { notifyError, notifySuccess } from '@/ui';
import AppModal from '@/ui/Modal';
import Link from 'next/link';

function Frontpage() {
  const { data: todos, error, isLoading, isFetching, isSuccess } = useTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation()
  const [open, setOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");

  const columns: ColumnsType<any> = [
    {
      title: 'Task',
      dataIndex: 'task',
      key: 'task',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Done',
      dataIndex: 'done',
      key: 'done',
      render: (done) => {
        return (
          <>{done === true ? "Yes" : "No"}</>
        )
      }
    },
    {
      title: 'Created at',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link href={`/todo/${record._id}`}>
            <Button type="primary">edit</Button>
          </Link>
          <Button type="primary" danger onClick={() => {
            setOpen(true)
            setSelectedId(record._id)
          }}>delete</Button>
        </Space>
      ),
    },
  ];

  const { handleSubmit, handleChange, handleBlur, values } = useFormik({
    initialValues: {
      task: "",
      done: false,
    },
    async onSubmit(values, action) {
      try {
        const result = await addTodo(values).unwrap();
        console.log(result)
        // notifySuccess("todo added successfully");
        action.resetForm();
      }
      catch (error) {
        console.error(error);
        notifyError("something went wrong")
      }
   
    }
  });

  const deleteTodoHandler = async (id: string) => {
    try {
      await deleteTodo(id);
      notifySuccess('todo deleted successfully');
    }
    catch (error) {
      console.error(error);
      notifyError('something went wrong');
    }
  }

  if (isLoading) return null;

  return (
    <>
      <div style={{
        margin: "0px 0px 50px 0px"
      }}>
        <form onSubmit={handleSubmit}>
          <Input placeholder="Basic usage" name="task" onChange={handleChange} onBlur={handleBlur} value={values.task} />
          <Button htmlType="submit" type="primary" style={{
            margin: "10px 0px 0px 0px"

          }}>Add todo</Button>
        </form>
      </div>

      <Table columns={columns} dataSource={todos?.data} />

      <AppModal
        open={open}
        setOpen={setOpen}
        title="Delete todo"
        action={() => deleteTodoHandler(selectedId)}
        onCancel={() => {
          setSelectedId("")
        }}
      >
        <p>want to delete todo?</p>
      </AppModal>
    </>
  )
}

export default Frontpage