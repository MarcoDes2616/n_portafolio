import './App.css'
import NavBar from './sections/NavBar'
import Header from './sections/Header'
import { useTranslation } from 'react-i18next'

function App() {
  const [t, i18n] = useTranslation('global')

  const headerText = t("header", { returnObjects: true })
  
  return (
    <div className='container_app'>
      <NavBar i18n={i18n} />
      <Header text={headerText} />
    </div>
  )
}

export default App
