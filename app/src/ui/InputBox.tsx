import React from 'react'
import classnames from 'classnames';

interface InputBoxProps extends React.HTMLProps<HTMLInputElement>{
    type: string;
    classNames?: string;
}

const InputBox = ({ type, classNames, ...props }: InputBoxProps) => {
  return (
    <input type={type} className={classnames("border-2 border-black rounded-md px-4 py-2 ", classNames)}  {...props}/>
  )
}

export default InputBox