import { notesState } from "@/features/counter/notesSlice";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { MdDelete } from "react-icons/md";
import { CgMoreO } from "react-icons/cg";

function NoteCardBox({ id, content, noteColor, title }: notesState) {
  return (
    <Card className={` bg-${noteColor}-100 `}>
      <CardHeader>
        <CardTitle className="">
          Title :
          <CardDescription className="inline-block">{title}</CardDescription>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-6 h-[144px]">{content}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <CgMoreO className="text-2xl cursor-pointer text-black text-opacity-30 hover:text-opacity-70" />
        <MdDelete className="text-2xl cursor-pointer text-black text-opacity-30 hover:text-opacity-70"  />
      </CardFooter>
    </Card>
  );
}

export default NoteCardBox;
