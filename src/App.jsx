
import { useSelector } from 'react-redux'
import './App.css'
import Auth from './pages/Auth/Auth'
import Layout from './pages/Layout/Layout'

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  return (
    <>
      {
        isLoggedIn ? <Layout /> : <Auth />
      }
    </>
  )
}

export default App
