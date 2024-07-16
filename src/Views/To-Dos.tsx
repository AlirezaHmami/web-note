import ToDoCard from '@/Components/ToDoCard'
import React from 'react'

function To_Dos() {
  const tempTodos = [1,2,3,4,5]
  return (
    <div className="w-full border border-red-700 p-3 flex">
      <div className="flex-1 items-center justify-center flex flex-col gap-3">
        {tempTodos.map(t=><ToDoCard key={t}></ToDoCard>)}
      </div>
      <div className="bg-blue-500">
        sets
      </div>
    </div>
  )
}

export default To_Dos