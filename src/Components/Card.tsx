import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

function CardBox() {
  return (
    <Card className="h-64 bg-orange-100">
      <CardHeader>
        <CardTitle>Title : </CardTitle>
        <CardDescription>title</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}

export default CardBox;
