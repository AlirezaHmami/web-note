import React from "react";
import { Button } from "./ui/button";
import { notesState, removeNote } from "@/features/counter/notesSlice";
import { useDispatch } from "react-redux";

interface IFullViewNoteModal extends notesState {
  onCloseBtn: () => void;
}

function FullViewNoteModal({
  id,
  content,
  noteColor,
  title,
  onCloseBtn,
}: IFullViewNoteModal) {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(removeNote(id));
    onCloseBtn();
  };

  return (
    <div className="bg-gray-100 border-gray-400 border-2 p-4 w-1/2 absolute top-1/2 left-1/2 right-auto bottom-auto -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out shadow-gray-500 shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center">
        <h3 className="text-lg font-bold">Title:&nbsp;</h3>
        <h4 className="text-lg font-semibold text-gray-600">{title}</h4>
      </div>
      <div
        className={`flex items-center bg-${noteColor}-100 rounded border-gray-300 border-2 p-2 m-3 overflow-y-auto overflow-x-hidden`}
      >
        <h4 className="text-lg font-semibold text-gray-900 h-[255px]">
          {content}
        </h4>
      </div>
      <div className="flex place-items-center justify-evenly mt-5">
        <Button variant={"destructive"} onClick={deleteHandler}>
          Delete
        </Button>
        <Button>Edit</Button>
        <Button onClick={onCloseBtn}>Close</Button>
      </div>
    </div>
  );
}

export default FullViewNoteModal;
