import { notesState } from "@/features/counter/notesSlice";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "./ui/card";


function NoteCardBox({id , content , noteColor , title} : notesState) {
  return (
    <Card className={` bg-${noteColor}-100`}>
      <CardHeader>
      <CardTitle className="">
          Title : <CardDescription className="inline-block">{title}</CardDescription>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-6">{content}</p>
      </CardContent>
      <CardFooter>
        more
        delet
      </CardFooter>
    </Card>
  );
}

export default NoteCardBox;
