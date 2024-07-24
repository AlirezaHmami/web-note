import ModalReminder from "@/Components/ModalReminder";
import ReminderCardBox from "@/Components/ReminderCard";
import { Button } from "@/Components/ui/button";
import { useState } from "react";
import useDateAndTime from "@/Hooks/useDateAndTime";
import { useSelector } from "react-redux";
import { RootState } from "@/App/Store";

function Reminders() {
  const [modalReminderShow, setModalReminderShow] = useState<boolean>(false);
  const dateTime = useDateAndTime()
  const tmepNotes = [1, 2, 3, 4, 5, 6];
  const reminders = useSelector((state:RootState)=>state.reminders.values)

  return (
    <>
      <header className="h-14 mb-3 rounded-lg bg-gradient-to-r from-rose-500 to-indigo-700 p-3 flex items-center justify-between relative">
        <div>
          <p className="text-white font-semibold "> Date : {dateTime.toLocaleDateString()}</p>
          <p className="text-white font-semibold "> Time : {dateTime.toLocaleTimeString()}</p>
        </div>
        <Button className="bg-white text-indigo-700 hover:bg-indigo-950 hover:text-white transition-colors duration-300 ease-in" onClick={()=>setModalReminderShow(true)}>Set new Reminder</Button>
        {modalReminderShow && (
          <ModalReminder
            onReminderModalClose={() => setModalReminderShow(false)}
          />
        )}
        </header>
      <div className="grid grid-cols-3 gap-5 w-full borderp-3 relative">
        {reminders.map((reminder) => (
          <ReminderCardBox key={reminder.id} {...reminder} />
        ))}
      </div>
    </>
  );
}

export default Reminders;
