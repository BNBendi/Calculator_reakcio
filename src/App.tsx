import './App.css';
import CalcComp from './components/CalcComp';
import Mode from './components/Mode';

function App() {

  return (
    <section className='h-screen flex flex-col items-center justify-center gap-6 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300'>
      <Mode />
      <CalcComp />
    </section>
  )
}

export default App
