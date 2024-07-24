import { useState } from "react";
import NoteCardBox from "@/Components/NoteCard";
import { Button } from "@/Components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip";
import { FaPen } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "@/App/Store";
import FullViewNoteModal from "@/Components/FullViewNoteModal";
import { notesState } from "@/features/notesSlice";

function Notes({ onClick }: { onClick: () => void }) {
  const notes = useSelector((state: RootState) => state.notes.values);
  const [fullViewNoteModalShow, setFullViewNoteModalShow] =
    useState<boolean>(false);
  const [sendModalPropsItems, setSendModalPropsItems] = useState<notesState>();

  const handelModal = (id: number) => {
    setFullViewNoteModalShow(true);
    const selectedNote = notes.filter((note) => note.id === id);
    setSendModalPropsItems(selectedNote[0]);
  };

  return (
    <div className="grid grid-cols-5 gap-3 w-full p-3 relative">
      {notes.length == 0 ? (
        <p className="col-start-3 row-start-13 text-center italic font-bold text-slate-500">
          "Write you're first note!"
        </p>
      ) : (
        [...notes]
          .reverse()
          .map((note) => (
            <NoteCardBox
              key={note.id}
              {...note}
              onMoreBtn={() => handelModal(note.id)}
            />
          ))
      )}

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
      {fullViewNoteModalShow && (
        <FullViewNoteModal
          id={sendModalPropsItems?.id as number}
          title={sendModalPropsItems?.title as string}
          content={sendModalPropsItems?.content as string}
          noteColor={sendModalPropsItems?.noteColor as string}
          onCloseBtn={() => setFullViewNoteModalShow(false)}
        />
      )}
    </div>
  );
}

export default Notes;
