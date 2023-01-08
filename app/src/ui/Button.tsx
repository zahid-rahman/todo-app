import React from 'react'

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    children: any;
    onClick?: (e: any) => void;
}

const Button = ({type, children, onClick}: ButtonProps) => {
  return (
    <button type={type} className="bg-black px-4 py-2.5 text-white rounded-md ml-2" onClick={onClick}>{children}</button>
  )
}

export default Button