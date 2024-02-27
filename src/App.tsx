import Duration from './Sections/Duration'
import Form_sec from './Sections/Form_sec'
import Grade from './Sections/Grade'
import Hero from './Sections/Hero'
import Navigation from './Components/Navbar'
import Cases from './Sections/Cases'


function App() {

  return (
    <>
      <div className='relative flex flex-col items-center'>
        <Navigation/></div>
        <Hero/>
        <Duration/>
        <Grade/>
        <Cases/>
        <Form_sec/>
    </>
    
  )
}

export default App
