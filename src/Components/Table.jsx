import React from 'react'
import {BsFillTrashFill,BsFillPencilFill}
 from "react-icons/bs"
import "./Table.css"
const Table = () => {
  return (
    <div className='table-wrapper'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Categories</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>HOME</td>
                    <td>This is the main page</td>
                    <td>
                        <span className='label'>LIVE</span>
                    </td>
                    <td>
                        <span className='actions'>
                            <BsFillTrashFill className='delete-btn'/>
                            <BsFillPencilFill />
                        </span>
                    
                    </td>
                </tr>
                <tr>
                    <td>Task</td>
                    <td>This is the main page</td>
                    <td>
                        <span className="label-draft">Draft</span>
                    </td>
                    <td>
                        <span className='actions'>
                            <BsFillTrashFill className='delete-btn'/>
                            <BsFillPencilFill />
                        </span>
                    
                    </td>
                </tr>
            </tbody>
        </table>
      
    </div>
  )
}

export default Table
