import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

function ReminderCardBox() {
  return (
    <Card className="bg-gray-50 border-l-4 overflow-hidden border-l-green-500 rounded-l-md flex">
      <div className="bg-red-500 flex-1">1</div>
      <div className="bg-yellow-500">
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
