import React from "react";
import { Button } from "./ui/button";
interface IModalReminder {
  onReminderModalClose: () => void;
}
function ModalReminder({ onReminderModalClose }: IModalReminder) {
  return (
    <div className="w-1/2 h-50 bg-gray-100 shadow-gray-700 shadow-lg rounded-lg overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div id="title" className="flex items-center justify-between p-1">
        <div
          className="w-5 h-5 rounded-full bg-red-500 hover:bg-red-600"
          onClick={onReminderModalClose}
        ></div>
        <p className="">Add Reminder</p>
        <p className=""> </p>
      </div>
      <div id="main" className="flex flex-col space-y-4 p-2">
        <span>
          <label htmlFor="title">Title : </label>
          <input
            id="title"
            type="text"
            placeholder="Enter the title of the reminder"
            className="w-2/3 outline-none border-gray-200 border-2 rounded-md py-1 px-2 m-1 focus:border-0  focus:ring-2 ring-gray-700 "
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
          />
        </span>

        <span className="flex items-center">
          <label htmlFor="content">Content :</label>
          <textarea
            id="content"
            className="resize-none outline-none  border-gray-200 border-2 rounded-md py-1 px-2 m-1 focus:border-0  focus:ring-2 ring-gray-700"
            rows={2}
            cols={65}
            name="content"
            placeholder="Enter the reminder content"
            // value={content}
            // onChange={(e) => setContent(e.target.value)}
          />
        </span>

        <span className="flex items-center">
          <label htmlFor="time">Time :</label>
          <div>
            <input
              id="time"
              className=" outline-none mr-3 border-gray-200 border-2 rounded-md py-1 px-2 m-1 focus:border-0  focus:ring-2 ring-gray-700"
              name="content"
              type="number"
              placeholder="hour"
              pattern="([01][0-9]|2[0-3])"
              min={0o0}
              max={23}
              // value={content}
              // onChange={(e) => setContent(e.target.value)}
            />
            :
            <input
              id="time"
              className=" outline-none ml-3 border-gray-200 border-2 rounded-md py-1 px-2 m-1 focus:border-0  focus:ring-2 ring-gray-700"
              name="content"
              type="number"
              placeholder="minutes"
              min={0o0}
              max={59}
              // value={content}
              // onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </span>

        <span className="flex items-center">
          <label htmlFor="date">Date :</label>
          <div>
            <input
              id="date"
              className=" outline-none mr-3 border-gray-200 border-2 rounded-md py-1 px-2 m-1 focus:border-0  focus:ring-2 ring-gray-700"
              name="content"
              type="number"
              placeholder="date"
              pattern="([01][0-9]|2[0-3])"
              min={1}
              max={31}
              // value={content}
              // onChange={(e) => setContent(e.target.value)}
            />
            :
            <input
              id="date"
              className=" outline-none mx-3 border-gray-200 border-2 rounded-md py-1 px-2 m-1 focus:border-0  focus:ring-2 ring-gray-700"
              name="content"
              type="number"
              placeholder="month"
              min={1}
              max={12}
              // value={content}
              // onChange={(e) => setContent(e.target.value)}
            />
            :
            <input
              id="date"
              className=" outline-none ml-3 border-gray-200 border-2 rounded-md py-1 px-2 m-1 focus:border-0  focus:ring-2 ring-gray-700"
              name="content"
              type="number"
              placeholder="year"
              min={2024}
              max={2100}
              // value={content}
              // onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </span>

        <Button
          className="bg-green-500 hover:bg-green-700"
          // onClick={handlSave}
        >
          Save
        </Button>
      </div>
      <div id="footer" className="p-1"></div>
      {/* {alert && (
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
      )} */}
    </div>
  );
}

export default ModalReminder;
