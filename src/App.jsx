import './App.css'
import Hero from './Hero'
import Proejcts from './Proejcts'
import { projects } from './data';

const App = () => {
  return (
    <main>
     <Hero />
     <Proejcts projects={projects}/>
    </main>
    
  )
}

export default App
