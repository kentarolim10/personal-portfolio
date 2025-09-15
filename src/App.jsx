import './App.css'
import IntroSection from './IntroSection'
import PrimarySection from './PrimarySection'
import About from './About'

function App() {

  return (
    <main className='font-baskervville text-2xl w-full p-8 flex justify-around'>
      <div className='w-full md:max-w-[60%]'>
        <IntroSection></IntroSection>
        <About></About>
        <PrimarySection></PrimarySection>
      </div>
    </main>
  )
}

export default App
