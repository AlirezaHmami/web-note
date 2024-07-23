import ToDoCard from '@/Components/ToDoCard'
import { Button } from '@/Components/ui/button'
import React from 'react'

function To_Dos() {
  const tempTodos = [1,2,3,4,5]
  return (
    <div className="w-full border border-red-700 p-3 grid grid-cols-3">
      <div className="col-start-1 text-center pt-5">
      <div className="flex w-full max-w-sm items-center space-x-2 m-1">
          <input
            id="title"
            type="text"
            placeholder="write you're ToDo"
            className="w-full outline-none border-gray-200 border-2 rounded-md py-1 px-2 focus:border-0  focus:ring-2 ring-gray-700 "
          /><Button variant={"outline"}>+</Button></div>
          <div className='w-5/6 flex flex-col items-center space-y-3 mt-3 mx-auto'>
            <Button variant={"ghost"} className='w-full'>Show All</Button>
            <Button variant={"ghost"} className='w-full'>Show Completeds</Button>
            <Button variant={"ghost"} className='w-full'>Show Ongoings</Button>
          B</div>
      </div>
      <div className="col-start-2 col-span-2 items-center justify-center flex flex-col gap-3">
        {tempTodos.map(t=><ToDoCard key={t}></ToDoCard>)}
      </div>
    </div>
  )
}

export default To_Dos