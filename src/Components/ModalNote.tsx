import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { addNote, notesState } from "@/features/notesSlice";
import { TiWarning } from "react-icons/ti";

function ModalNote({ onClose }: { onClose: () => void }) {
  const [title, setTitle] = useState<string>("");
  const [noteColor, setNoteColor] = useState<string>("gray");
  const [content, setContent] = useState<string>("");
  const [alert, setAlert] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handlSave = () => {
    if (title !== "" && content !== "") {
      const note: notesState = {
        id: Date.now(),
        title,
        content,
        noteColor,
      };
      dispatch(addNote(note));
      onClose();
    } else {
      setAlert(true);
    }
  };

  return (
    <div className="bg-gray-100 w-1/2 absolute top-1/2 left-1/2 right-auto bottom-auto -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out shadow-black shadow-lg rounded-lg overflow-hidden z-20">
      <div id="title" className="flex items-center justify-between p-1">
        <div
          className="w-5 h-5 rounded-full bg-red-500 hover:bg-red-600"
          onClick={onClose}
        ></div>
        <p className="">Add Note</p>
        <p className=""> </p>
      </div>
      <div id="main" className="flex flex-col space-y-4 p-2">
        <span>
          <label htmlFor="title">Title : </label>
          <input
            id="title"
            type="text"
            placeholder="Enter the title of the note"
            className="w-2/3 outline-none border-gray-200 border-2 rounded-md py-1 px-2 m-1 focus:border-0  focus:ring-2 ring-gray-700 "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </span>

        <div className="flex items-center">
          <label className="mr-3">Note color :</label>
          <div className="flex space-x-3">
            <div
              className={`bg-orange-100 hover:bg-orange-300 w-5 h-5 rounded-full border border-orange-600 cursor-pointer flex items-center justify-center`}
              onClick={() => setNoteColor("orange")}
            >
              {noteColor == "orange" && "\u2713"}
            </div>
            <div
              className={`bg-gray-100 hover:bg-gray-300 w-5 h-5 rounded-full border border-orange-600 cursor-pointer flex items-center justify-center`}
              onClick={() => setNoteColor("gray")}
            >
              {noteColor == "gray" && "\u2713"}
            </div>
            <div
              className={`bg-blue-100 hover:bg-blue-300 w-5 h-5 rounded-full border border-orange-600 cursor-pointer flex items-center justify-center`}
              onClick={() => setNoteColor("blue")}
            >
              {noteColor == "blue" && "\u2713"}
            </div>
            <div
              className={`bg-green-100 hover:bg-green-300 w-5 h-5 rounded-full border border-orange-600 cursor-pointer flex items-center justify-center`}
              onClick={() => setNoteColor("green")}
            >
              {noteColor == "green" && "\u2713"}
            </div>
            <div
              className={`bg-red-100 hover:bg-red-300 w-5 h-5 rounded-full border border-orange-600 cursor-pointer flex items-center justify-center`}
              onClick={() => setNoteColor("red")}
            >
              {noteColor == "red" && "\u2713"}
            </div>
            <div
              className={`bg-yellow-100 hover:bg-yellow-300 w-5 h-5 rounded-full border border-orange-600 cursor-pointer flex items-center justify-center`}
              onClick={() => setNoteColor("yellow")}
            >
              {noteColor == "yellow" && "\u2713"}
            </div>
            <div
              className={`bg-purple-100 hover:bg-purple-300 w-5 h-5 rounded-full border border-orange-600 cursor-pointer flex items-center justify-center`}
              onClick={() => setNoteColor("purple")}
            >
              {noteColor == "purple" && "\u2713"}
            </div>
          </div>
        </div>

        <label htmlFor="content">Content :</label>
        <textarea
          id="content"
          className="resize-none outline-none  border-gray-200 border-2 rounded-md py-1 px-2 m-1 focus:border-0  focus:ring-2 ring-gray-700"
          rows={8}
          cols={50}
          name="content"
          placeholder="Enter the content of the note"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <Button className="bg-green-500 hover:bg-green-700" onClick={handlSave}>
          Save
        </Button>
      </div>
      <div id="footer" className="p-1"></div>
      {alert && (
        <div className="absolute bg-gray-100 shadow-lg shadow-gray-900 rounded-lg w-1/2 h-1/3 z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-full h-full flex flex-col items-center justify-evenly">
            <TiWarning className="text-5xl text-amber-500" />
            <p>Inputs can't be empty</p>
            <Button
              className="bg-green-500 hover:bg-green-700 w-1/4"
              onClick={() => setAlert(false)}
            >
              OK
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalNote;
