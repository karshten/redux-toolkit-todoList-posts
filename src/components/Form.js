import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/Todo/todoSlice'
import { v4 } from 'uuid'

const Form = () => {
    const dispatch = useDispatch()
    const [todoValue, setTodoValue] = useState('')

    const handleAddTodo = (e) => {
        const todo = {
            id: v4(),
            text: todoValue,
            completed: false
        }
        e.preventDefault()
        dispatch(addTodo(todo))
        setTodoValue('')
    }

    return (
        <form className='w-full flex' onSubmit={(e) =>
            handleAddTodo(e)
        }>
            <input
                type='text'
                placeholder='Type something...'
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
                className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <button
                type='submit'
                className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
            >
                Submit
            </button>
        </form>
    )
}

export default Form