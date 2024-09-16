import HeaderComponent from "./components/headers"
import FooterComponent from "./components/footers"
import './assets/scss/App.scss'
import { AppRoutes } from "./routes"

export const App = () => {

  return (
    <AppRoutes
      header={<HeaderComponent />}
      children={<FooterComponent />}
      footer={<FooterComponent />}
    />
  )
}