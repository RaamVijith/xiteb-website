import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import { Route, Routes } from 'react-router-dom'
import ProjectsPage from "./pages/ProjectsPage"
import ContactPage from "./pages/ContactPage"

const App = () => {
  return (
    <div>
    <Header />
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App