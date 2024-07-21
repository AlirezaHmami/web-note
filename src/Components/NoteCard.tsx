import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

function NoteCardBox() {
  return (
    <Card className="h-64 bg-orange-100">
      <CardHeader>
      <CardTitle className="">
          Title : <CardDescription className="inline-block">title</CardDescription>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
}

export default NoteCardBox;
