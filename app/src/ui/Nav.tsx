import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className="text-center my-5">
                <Link to="/" className='ml-2 border rounded-md px-3 py-1'>Home</Link>
                <Link to="/todo/list" className='ml-2 border rounded-md px-3 py-1'>List</Link>
            </div>
        </>
    )
}

export default Nav