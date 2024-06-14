import Header from "./components/Header"
import './css/App.css'
import Lp from "./components/LandingPage"
import Beneficios from "./components/Servicos"
import Footer from "./components/Footer"
import Lp2 from "./components/Atuacao"
import Comments from "./components/SocialApprove"
import TrabalheConosco from "./components/TrabalheConosco"
function App() {
  return (
    <main>
      <Header />
      <Lp />
      <Comments />
      <Beneficios />
      <Lp2 />
      <TrabalheConosco />
      <Footer />
    </main>
  )


}

export default App
