import React from 'react'

interface ButtonProps {
    children: any;
    onClick: (e: any) => void;
}

const Button = ({children, onClick}: ButtonProps) => {
  return (
    <button className="bg-black px-4 py-2.5 text-white rounded-md ml-2" onClick={onClick}>{children}</button>
  )
}

export default Button