import { useState } from "react";
import ToDoCard from "@/Components/ToDoCard";
import { Button } from "@/Components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, todosState } from "@/features/todosSlice";
import { RootState } from "@/App/Store";

function To_Dos() {
  const todos = useSelector((state: RootState) => state.todos.values);
  const [todoText, setTodoText] = useState<string>("");
  const dispatch = useDispatch();

  const addToDoHandler = () => {
    if (todoText) {
      const todo: todosState = {
        id: Date.now(),
        title: todoText,
        completed: false,
      };
      dispatch(addToDo(todo));
      setTodoText("");
    }
  };

  // manage show items
  const [showAll, setShowAll] = useState<boolean>(true);
  const [showCompleteds, setShowCompleteds] = useState<boolean>(false);
  const [showOngoings, setShowOngoings] = useState<boolean>(false);

  const showAllHandler = () => {
    setShowAll(true);
    setShowCompleteds(false);
    setShowOngoings(false);
  };
  const showCompletedsHandler = () => {
    setShowAll(false);
    setShowCompleteds(true);
    setShowOngoings(false);
  };
  const showOngoingsHandler = () => {
    setShowAll(false);
    setShowCompleteds(false);
    setShowOngoings(true);
  };

  return (
    <div className="w-full p-3 grid grid-cols-3">
      <div className="col-start-1 text-center pt-5">
        <div className="flex w-full max-w-sm items-center space-x-2 m-1">
          <input
            id="title"
            type="text"
            placeholder="write you're ToDo"
            className="w-full outline-none border-gray-200 border-2 rounded-md py-1 px-2 focus:border-0  focus:ring-2 ring-gray-700 "
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addToDoHandler();
              }
            }}
          />
          <Button variant={"outline"} onClick={addToDoHandler}>
            +
          </Button>
        </div>

        <div className="w-5/6 flex flex-col items-center space-y-3 mt-3 mx-auto">
          <Button
            variant={showAll ? "outline" : "ghost"}
            className={
              showAll
                ? "w-full bg-gradient-to-r from-gray-300 to-white"
                : "w-full"
            }
            onClick={showAllHandler}
          >
            Show All
          </Button>
          <Button
            variant={showCompleteds ? "outline" : "ghost"}
            className={
              showCompleteds
                ? "w-full bg-gradient-to-r from-gray-300 to-white"
                : "w-full"
            }
            onClick={showCompletedsHandler}
          >
            Show Completeds
          </Button>
          <Button
            variant={showOngoings ? "outline" : "ghost"}
            className={
              showOngoings
                ? "w-full bg-gradient-to-r from-gray-300 to-white"
                : "w-full"
            }
            onClick={showOngoingsHandler}
          >
            Show Ongoings
          </Button>
        </div>
      </div>
      <div className="col-start-2 col-span-2 items-center justify-start flex flex-col gap-3">
        {showAll &&
          todos.map((todo) => <ToDoCard key={todo.id} {...todo}></ToDoCard>)}
        {showCompleteds &&
          todos
            .filter((todo) => todo.completed)
            .map((todo) => <ToDoCard key={todo.id} {...todo}></ToDoCard>)}
        {showOngoings &&
          todos
            .filter((todo) => !todo.completed)
            .map((todo) => <ToDoCard key={todo.id} {...todo}></ToDoCard>)}
      </div>
    </div>
  );
}

export default To_Dos;
