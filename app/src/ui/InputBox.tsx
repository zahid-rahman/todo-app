import React from 'react'

interface InputBoxProps {
    type: string;
    placeholder: string;
}

const InputBox = ({ type, placeholder }: InputBoxProps) => {
  return (
    <input type={type} className="border-2 border-black rounded-md px-4 py-2 " placeholder={placeholder} />
  )
}

export default InputBox