import Button from '../Components/Button'
import heroImg from '../assets/hero_image.png'

export default function Hero(){
    return(
        <>
            <section id='Hero' className="pt-20 grid sm:grid-cols-2 ">
                <div className='flex flex-col justify-center'>
                    <p className="bg-white text-2xl lg:text-2xl ">
                        Lembra daquela sua ideia genial?<br/>tá na hora de dar um
                    </p>
                    <h1 className='inter-900 text-6xl lg:text-8xl text-violet-600 inter-900'>Start</h1>
                    <p className='text-md lg:text-lg lg:pr-20 my-8'>
                        Descubra aqui o que estava faltando para sua ideia
                        de sucesso, tire seu sonho inovador do papel e 
                        entregue seu produto de sucesso para o mundo.</p>
                        <Button>Vamos Nessa!</Button>
                </div>
                
                <div className='py-10'>
                    <img src={heroImg} alt="foguete decolando" />
                </div>
            </section>
       
        </>
    )
}