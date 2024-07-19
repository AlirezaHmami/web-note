import ModalNote from "./Components/ModalNote";
import Navbar from "./Components/Navbar";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "./Components/ui/tabs";
import Notes from "./Views/Notes";
import Reminders from "./Views/Reminders";
import To_Dos from "./Views/To-Dos";
import { useState } from "react";
function App() {
  const [modalShow, setModalShow] = useState<boolean>(false)
  console.log(modalShow);
  
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
          <Notes onClick={() => setModalShow(!modalShow)}/>
        </TabsContent>
        <TabsContent value="Reminders" className="w-full">
          <Reminders />
        </TabsContent>
        <TabsContent value="To-Dos" className="w-full">
          <To_Dos />
        </TabsContent>
      </Tabs>
      {modalShow && <ModalNote onClose={() => setModalShow(!modalShow)}/>}
    </>
  );
}

export default App;
