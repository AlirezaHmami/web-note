import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { MdAccessTime } from "react-icons/md";

function ReminderCardBox() {
  return (
    <Card className="bg-gray-50 border-l-4 overflow-hidden border-l-green-500 rounded-l-md flex">
      <div className="bg-indigo-950 ">
        <MdAccessTime className="text-5xl text-white mt-4 mx-1"/>
      </div>
      <div className="bg-stone-200 flex-1">
      <CardHeader>
        <CardTitle className="">Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Reminder Content</p>
      </CardContent>
      </div>
    </Card>
  );
}

export default ReminderCardBox;
