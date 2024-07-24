import { notesState } from "@/features/notesSlice";
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
import { useDispatch } from "react-redux";
import { removeNote } from "@/features/notesSlice";

interface INoteCardBox extends notesState {
  onMoreBtn: () => void;
}

function NoteCardBox({
  id,
  content,
  noteColor,
  title,
  onMoreBtn,
}: INoteCardBox) {
  const dispatch = useDispatch();

  const removrHandler = () => {
    dispatch(removeNote(id));
  };
  return (
    <Card className={` bg-${noteColor}-100 select-none`}>
      <CardHeader>
        <CardTitle className="">
          Title:
          <CardDescription className="inline-block">
            &nbsp;{title}
          </CardDescription>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-6 h-[144px]">{content}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <CgMoreO
          className="text-2xl cursor-pointer text-black text-opacity-30 hover:text-opacity-70"
          onClick={onMoreBtn}
        />
        <MdDelete
          className="text-2xl cursor-pointer text-black text-opacity-30 hover:text-opacity-70"
          onClick={removrHandler}
        />
      </CardFooter>
    </Card>
  );
}

export default NoteCardBox;
