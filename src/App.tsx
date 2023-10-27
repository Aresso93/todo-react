import './App.css'
import { TodoList } from './pages/todo-list'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './shared/navbar';
import { TodoNew } from './pages/todo-new';

function App() {
  return (
    <>
      <Navbar/>
      <TodoNew/>
  
      <TodoList/>
      
    </>
  )
}

export default App