import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navigator from './component/Navigator.tsx'
import { Home } from './pages/Home.tsx'
import { Presentation } from './pages/Presentation.tsx'
import { Formation } from './pages/Formation.tsx'
import { Projects } from './pages/Projects.tsx'
import { Contact } from './pages/Contact.tsx'

function App() {
  return (
    <>
      <Navigator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
