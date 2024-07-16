import Navbar from "./Components/Navbar";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "./Components/ui/tabs";
import Notes from "./Views/Notes";
import Reminders from "./Views/Reminders";
import To_Dos from "./Views/To-Dos";

function App() {
  return (
    <>
      <Navbar />
      <Tabs
        defaultValue="Notes"
        className="w-[90vw] mx-auto flex flex-col items-center justify-start"
      >
        <TabsList className="w-1/2">
          <TabsTrigger className="w-1/3" value="Notes">
            Notes
          </TabsTrigger>
          <TabsTrigger className="w-1/3" value="Reminders">
            Reminders
          </TabsTrigger>
          <TabsTrigger className="w-1/3" value="To-Dos">
            To-Dos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Notes" className="w-full">
          <Notes />
        </TabsContent>
        <TabsContent value="Reminders">
          <Reminders />
        </TabsContent>
        <TabsContent value="To-Dos">
          <To_Dos />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default App;
