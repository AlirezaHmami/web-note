import React from "react";
import { Button } from "./ui/button";

function ModalNote({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-gray-100 w-1/2 absolute top-1/2 left-1/2 right-auto bottom-auto -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out shadow-black shadow-lg rounded-lg overflow-hidden">
      <div id="title" className="flex items-center justify-between p-1">
        <div className="w-5 h-5 rounded-full bg-red-500 hover:bg-red-600" onClick={onClose}>
        </div>
        <p className="">Add Note</p>
        <p className=""> </p>
      </div>
      <div id="main" className="flex flex-col space-y-4 p-2">
        <span >
          <label htmlFor="title">Title : </label>
          <input
            id="title"
            type="text"
            placeholder="Enter the title of the note"
            className="w-2/3 outline-none border-gray-200 border-2 rounded-md py-1 px-2 m-1 focus:border-0  focus:ring-2 ring-gray-700 "
          />
        </span>



        <label htmlFor="content">Content :</label>
        <textarea
          id="content"
          className="resize-none outline-none  border-gray-200 border-2 rounded-md py-1 px-2 m-1 focus:border-0  focus:ring-2 ring-gray-700"
          rows={10}
          cols={50}
          name="content"
          placeholder="Enter the content of the note"
        />

        <Button className="bg-green-500 hover:bg-green-700">Save</Button>
      </div>
      <div id="footer" className="p-1"></div>
    </div>
  );
}

export default ModalNote;
