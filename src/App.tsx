import { TaskList } from './components/TaskList'
import { Header } from "./components/Header";
import './styles/global.scss'
import { Counter } from './components/Counter';


export function App() {
  return (
    <>
      <Header />
      <TaskList />
    </>
  )
}