import { remindersState, removeReminder } from "@/features/remindersSlice";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { MdAccessTime } from "react-icons/md";
import { useDispatch } from "react-redux";

function ReminderCardBox({
  id,
  title,
  content,
  date,
  hour,
  min,
  month,
  year,
}: remindersState) {
  const dispatch = useDispatch()
  const handelDeleteReminder = () => {
    dispatch(removeReminder(id))
  }

  return (
    <Card className="bg-stone-200 border-l-4 overflow-hidden border-l-green-500 rounded-l-md flex shadow-md shadow-gray-300 hover:bg-stone-500 cursor-pointer transition-colors duration-300 ease-in-out group z-0" onClick={handelDeleteReminder}>
      <div className="bg-indigo-950 group-hover:bg-rose-800 flex flex-col items-center justify-evenly h-36 px-1 text-white ">
        <MdAccessTime className="text-5xl mt-4" />
        <p>
          {hour}:{min}
        </p>
        <p>
          {date}/{month}/{year}
        </p>
      </div>
      <div className=" flex-1">
        <CardHeader>
          <CardTitle className="">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
      </div>
    </Card>
  );
}

export default ReminderCardBox;
