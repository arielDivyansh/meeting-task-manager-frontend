import { Route, Routes } from "react-router-dom"
import Register from "./components/Register"
import TaskAssignment from "./pages/TaskAssignment"

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/task-assignment" element={<TaskAssignment/>}/>
      </Routes>
  )
}


export default App
