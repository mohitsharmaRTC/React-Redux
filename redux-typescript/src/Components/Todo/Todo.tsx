import React, { useState, useEffect } from 'react'
import './Todo.css'

export default function TodoApp () {
    const [data, setData] = useState([])
    const [inputValue, setInputValue] = useState('')

    return(
        <div className='todo_app'>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <ul>
                <li>
                    List Item <span>Remove</span>
                </li>
            </ul>
        </div>
    )
}