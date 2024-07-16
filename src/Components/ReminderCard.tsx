import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"


function ReminderCardBox() {
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
  )
}

export default ReminderCardBox