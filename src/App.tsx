import './App.css'
import Widget from './components/widget/Widget'

function App() {
  // const [count, setCount] = useState(0)
  const clientId = new URLSearchParams(window.location.search).get('clientId');
  console.log({ clientId })

  return (
    <Widget />
  )
}

export default App
