import Button from '../Components/Button'
import heroImg from '../assets/hero_image.png'

export default function Hero(){
    return(
        <>
            <section className="grid grid-cols-2 ">
                <div className='flex flex-col justify-center'>
                    <p className="bg-white text-4xl ">
                        Lembra daquela sua ideia genial?<br/>tá na hora de dar um
                    </p>
                    <h1 className='inter-900 text-8xl text-violet-600 inter-900'>Start</h1>
                    <p className='text-lg pr-20 my-8'>
                        Descubra aqui o que estava faltando para sua ideia
                        de sucesso, tire seu sonho inovador do papel e 
                        entregue seu produto de sucesso para o mundo.</p>
                        <Button>Vamos Nessa!</Button>
                </div>
                
                <div>
                    <img src={heroImg} alt="foguete decolando" />
                </div>
            </section>
       
        </>
    )
}