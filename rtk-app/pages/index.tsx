import { todoApi, useAddTodoMutation, useDeleteTodoMutation, useTodoQuery, useTodosQuery } from '@/services/todoApi'
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Input, Button, Space, Table, Tag } from 'antd';
import { } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { notifyError, notifySuccess } from '@/ui';
import AppModal from '@/ui/Modal';
import Link from 'next/link';
import Head from 'next/head';
import { store } from '@/store';
import { useRouter } from 'next/router';

function Frontpage({ todoList }: any) {
  // console.log('server side data', todos?.data)
  const [theData, setTheData] = React.useState(todoList);
  const router = useRouter();
  const [addTodo] = useAddTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation()
  const [open, setOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");
  const { data = theData } = useTodosQuery();

  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const refreshData = () => {
    router.replace(router.asPath);
    setIsRefreshing(true);
    setTheData(todoList)
  };

  React.useEffect(() => {
    setIsRefreshing(false);
  }, [theData]);

  console.log("server side data",todoList?.data)


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
        await addTodo(values).unwrap();
        notifySuccess("todo added successfully");
        // todoApi.endpoints.todos;
        // refetch();
        refreshData()
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
      refreshData()
      notifySuccess('todo deleted successfully');
    }
    catch (error) {
      console.error(error);
      notifyError('something went wrong');
    }
  }

  // if (isLoading) return null;

  return (
    <>
      <Head>
        <title>Todo app</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

      <Table columns={columns} dataSource={data?.data} />

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

export default Frontpage;

export async function getServerSideProps(ctx: any) {
  const action = todoApi.endpoints.todos.initiate();
  const result = await store.dispatch(action);
  const todosState = todoApi.endpoints.todos.select()(store.getState());
  const todos = JSON.parse(JSON.stringify(todosState));

  console.log(todos.data);

  return {
    props: {
      todoList: todos.data
    },
  }
}
