import './App.css'
import { TodoList } from './pages/todo-list'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './shared/navbar';


function App() {
  

  return (
    <>
      <Navbar/>
      
  
      <TodoList/>
      
    </>
  )
}

export default App
