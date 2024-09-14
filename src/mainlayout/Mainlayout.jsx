import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import App from "../App"
import { Page } from "../Page"
import { Nav } from "../Nav"
import Menu from "../Menu";
export const Mainlayout = () => {
  return (
    <Router>
      <div className="header">
        <Menu />
      </div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/page" element={<Page />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
    </Router>

  )
}
