import HeaderComponent from "./components/headers"
import FooterComponent from "./components/footers"

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