import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./components/Tasks/context/GlobalState";

import TasksReducer from "./components/Tasks/TasksReducer";
import TaskForm from "./components/Tasks/Form/TaskForm";
import Heading from "./components/Tasks/header/Heading";

function AppReducers() {
  return (
    <GlobalProvider>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <Heading />
          <Routes>
            <Route path="/" element={<TasksReducer />} />
            <Route path="/add" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
          </Routes>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default AppReducers;