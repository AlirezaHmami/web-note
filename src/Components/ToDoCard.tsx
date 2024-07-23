import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { MdDelete, MdDone } from "react-icons/md";
import { completeTodo, removeToDo, todosState } from "@/features/counter/todosSlice";
import { useDispatch } from "react-redux";

function ToDoCard({ id, title, completed }: todosState) {
  const dispatch = useDispatch();
  const deleteTodoHandler = () => {
    dispatch(removeToDo(id));
  };
  const completTodoHandler = () => {
    dispatch(completeTodo(id));
  };
  return (
    <Card
      className={
        completed
          ? "w-2/3 flex items-center justify-between bg-gray-300 select-none"
          : "w-2/3 flex items-center justify-between select-none"
      }
    >
      <CardHeader>
        <CardTitle className={completed ? "italic text-gray-600" : ""}>
          {title}
        </CardTitle>
      </CardHeader>
      <div className="icon flex items-center h-full">
        <div className="bg-red-200 rounded-md cursor-pointer hover:bg-red-300 text-2xl p-1 mr-2">
          <MdDelete
            className={
              completed
                ? "text-opacity-50 hover:text-opacity-95 text-red-950"
                : "text-opacity-50 hover:text-opacity-95 text-gray-950"
            }
            onClick={deleteTodoHandler}
          />
        </div>
        <div className="bg-amber-200 rounded-md cursor-pointer hover:bg-amber-300 text-2xl p-1 mr-2">
          <MdDone
            className={
              completed
                ? "text-opacity-50 hover:text-opacity-95 text-amber-950"
                : "text-opacity-50 hover:text-opacity-95 text-gray-950"
            }
            onClick={completTodoHandler}
          />
        </div>
      </div>
    </Card>
  );
}

export default ToDoCard;
