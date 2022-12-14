import { Link, Navigate, Route, Routes } from "react-router-dom"
import { UserProvider } from "./context/UserProvider"
import { AboutPage, HomePage, LoginPage } from "./index"
import { NavBar } from "./NavBar"


export const MainApp = () => {
  return (
    <UserProvider>
     <h1>Main app</h1>
    <NavBar/>
    <Routes>
    <Route path="/" element= {<HomePage/>} />
    <Route path="/about" element= {<AboutPage/>} />
    <Route path="/login" element= {<LoginPage/>} />
    <Route path="/*" element={<Navigate to='/about' />} />

    </Routes>

    </UserProvider>
  )
}
