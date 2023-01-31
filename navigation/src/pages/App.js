import Navbar from "../components/Navbar";
import Route from "../components/Route";
import AccordianPage from "./AccordianPage";
import ButtonPage from "./ButtonPage";
import DropdownPage from "./DropdownPage";
import ModalPage from "./ModalPage";
import TablePage from "./TablePage";
import SortableTablePage from "./SortableTablePage";

// This is a giant example of manual routing behavior, used with Link and the nav contexts.
const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Navbar />
      <div className="col-span-5">
        <Route path="/accordian">
          <AccordianPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/sortable-table">
          <SortableTablePage />
        </Route>
      </div>
    </div>
  );
};

export default App;
