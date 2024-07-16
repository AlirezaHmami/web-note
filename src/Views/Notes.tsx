import NoteCardBox from "@/Components/NoteCard";

function Notes() {
  const tmepNotes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="grid grid-cols-5 gap-3 w-full border border-red-700 p-3">
      {tmepNotes.map((t) => (
        <NoteCardBox key={t} />
      ))}
    </div>
  );
}

export default Notes;
