import Duration from './Sections/Duration'
import Formulario from './Sections/Form'
import Grade from './Sections/Grade'
import Hero from './Sections/Hero'



function App() {

  return (
    <div className='px-8 lg:px-20'>
        <Hero/>
        <Duration/>
        <Grade/>
        <Formulario/>
    </div>
  )
}

export default App
