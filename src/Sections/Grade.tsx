import discoverying from '../assets/discover_img.png'
import delivering from '../assets/delivery_img.png'
import Button from '../Components/Button'

export default function Grade(){
    return(
        <>
        
        <section id='Sobre' className='flex flex-col items-center'>
            <h1 className="text-center text-xl font-bold">
                Durante o Curso
                <br />
                <span className="inter-900 text-blue-700 text-5xl lg:text-6xl">Você Aprenderá</span>
            </h1>
            <div className="grid lg:grid-cols-2 lg:w-9/12">
                <div className='p-8'>
                    <img src={discoverying} alt="Homem buscando informações de negócio em um computador" />
                    <h1 className='text-center text-2xl font-bold text-violet-700'>Discovering</h1>
                    <ul className='list-disc text-xl'>
                        <li>
                            Descoberta de Problema;
                        </li>
                        <li>
                            Jornadas de cliente e usuário;
                        </li>
                        <li>
                            Pesquisas de mercado;
                        </li>
                        <li>
                            Criação e utilização de modelos de negócio;
                        </li>
                        <li>
                            Coleta e tratamento de dados;
                        </li>
                        <li>
                            Criação e validação de ideias de protótipos;
                        </li>
                        <li>
                            Design de UI.
                        </li>
                    </ul>
                </div>
                <div className='p-8'>
                    <img src={delivering} alt="Homem buscando informações de negócio em um computador" />
                    <h1 className='text-center text-2xl font-bold text-blue-700'>Delivering</h1>

                    <ul className='list-disc text-xl '>
                        <li>
                            Descoberta de Problema;
                        </li>
                        <li>
                            Jornadas de cliente e usuário;
                        </li>
                        <li>
                            Pesquisas de mercado;
                        </li>
                        <li>
                            Criação e utilização de modelos de negócio;
                        </li>
                        <li>
                            Coleta e tratamento de dados;
                        </li>
                        <li>
                            Criação e validação de ideias de protótipos;
                        </li>
                        <li>
                            Design de UI.
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Button >Começar Agora!</Button>
            </div>
        </section>
        </>
    )
}