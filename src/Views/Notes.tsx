import NoteCardBox from "@/Components/NoteCard";
import { Button } from "@/Components/ui/button";
import { FaPen } from "react-icons/fa6";

function Notes() {
  const tmepNotes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="grid grid-cols-5 gap-3 w-full border border-red-700 p-3 relative">
      {tmepNotes.map((t) => (
        <NoteCardBox key={t} />
      ))}

        <Button className="w-14 h-14 rounded-full fixed right-20 bottom-3">
          <FaPen className="text-lg"/>
        </Button>

    </div>
  );
}

export default Notes;
