import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";
import { NoteProvider } from "./context/NotesContext";

function App() {
  return (
    <>
      <NoteProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddNote />} />
            <Route path="/edit/:id" element={<EditNote />} />
          </Routes>
        </Router>
      </NoteProvider>
    </>
  );
}

export default App;
