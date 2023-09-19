import './App.css'
import ButtomFatec from './components/ButtomFatec'
import InputUser from './components/InputFatec'
import NomeFatec from './components/NomeFatec'

function App() {
  return (
    <>
      <NomeFatec />
      <InputUser placeholder='Usuário' type='string' /> 
      <InputUser placeholder='Senha' type='password' />
      <InputUser placeholder='Telefone' type='string' />
      <ButtomFatec type='submit' label='Entrar em contato' />
    </>
  )
}

export default App
