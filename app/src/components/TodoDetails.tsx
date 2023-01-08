import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'

const TodoDetails = () => {
  const { id } = useParams()
  return (
    <>
    TodoDetails {id}
    </>
  )
}

export default TodoDetails