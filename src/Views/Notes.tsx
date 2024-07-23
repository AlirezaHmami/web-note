import NoteCardBox from "@/Components/NoteCard";
import { Button } from "@/Components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip";
import { FaPen } from "react-icons/fa6";
import {useSelector} from "react-redux"
import { RootState } from "@/App/Store"

function Notes({ onClick }: { onClick: () => void }) {
  const notes = useSelector((state:RootState)=>state.notes.values)

  return (
    <div className="grid grid-cols-5 gap-3 w-full p-3 relative">
      {[...notes].reverse().map((note) => (
        <NoteCardBox key={note.id} title={note.title} content={note.content} noteColor={note.noteColor} id={note.id} />
      ))}

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={onClick}
              className="w-14 h-14 rounded-full fixed right-20 bottom-3"
            >
              <FaPen className="text-lg" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add a note</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default Notes;
