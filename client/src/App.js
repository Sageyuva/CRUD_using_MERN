import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import AddScreen from "./screens/AddScreen"
import EditScreen from "./screens/EditScreen"
const App = () => {
  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen/>} />
      <Route path="/adduser" element={<AddScreen/>} />
      <Route path="/edituser/:id" element={<EditScreen/>} />
      
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App