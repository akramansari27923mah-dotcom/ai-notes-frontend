import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Sign from './pages/Sign'
import Input from './pages/Input'
import Result from './pages/Result'
import Protect from './components/Protect'
import Dashboard from './pages/Dashboard'
import Demo from './components/Demo'
import PrivacyPolicy from './components/PrivacyPolicy '
import Contact from './components/Contact'
import ChatWithAi from './pages/ChatWithAi'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign' element={<Sign />} />

        <Route path='/create' element=
          {
            <Protect>
              <Input />
            </Protect>
          }
        />

        <Route path='/result' element=
          {
            <Protect>
              <Result />
            </Protect>
          }
        />

        <Route path='/dashboard' element=
          {
            <Protect>
              <Dashboard />
            </Protect>
          }
        />

        <Route
          path='/demo'
          element={<Demo />}
        />

        <Route
          path='/privatePolicy'
          element={<PrivacyPolicy />}
        />

        <Route
          path='/contact'
          element={<Contact />}
        />

        <Route
          path='/chatWithAi'
          element={<ChatWithAi />}
        />
      </Routes>




    </div>
  )
}

export default App