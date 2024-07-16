import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'

function ToDoCard() {
  return (
    <Card className="w-1/2 flex items-center justify-between">
    <CardHeader>
    <CardTitle className="">
        Title
      </CardTitle>
    </CardHeader>
    <div className='icon flex'>
      <div className="bg-red-500 w-5">5</div>
      <div className="bg-amber-500 w-5">5</div>
    </div>
  </Card>
  )
}

export default ToDoCard