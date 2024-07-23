import ModalReminder from "@/Components/ModalReminder";
import ReminderCardBox from "@/Components/ReminderCard";
import { Button } from "@/Components/ui/button";
import { useState } from "react";

function Reminders() {
  const [modalReminderShow, setModalReminderShow] = useState<boolean>(false);
  const tmepNotes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <header className="bg-red-700 h-14 rounded-lg">
        mohtava
        <Button onClick={()=>setModalReminderShow(true)}>Set new Reminder</Button>
        </header>
      <div className="grid grid-cols-5 gap-3 w-full border border-red-700 p-3 relative">
        {tmepNotes.map((t) => (
          <ReminderCardBox key={t} />
        ))}
        {modalReminderShow && (
          <ModalReminder
            onReminderModalClose={() => setModalReminderShow(false)}
          />
        )}
      </div>
    </>
  );
}

export default Reminders;
