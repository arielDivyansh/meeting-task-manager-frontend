import { Route, Routes } from "react-router-dom"
import Register from "./components/Register"

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
  )
}


export default App
