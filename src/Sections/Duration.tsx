import Button from "../Components/Button"

export default function Duration(){
    return(
        <section id="Duração" className=" sm:w-12/12 mx-auto flex flex-col items-center justify-center">  
            <div className="grid sm:grid-cols-2 mb-20"> 
            <span className="diamond">
                    <p className=" text-violet-600">Você só precisa de</p>
                    <div className="diamond-square text-violet-600 border-8 border-violet-600 aspect-square text-center bg-white flex justify-center items-center p-10 ">
                        <div className="content">
                        <span className="mb-10">
                            <h1 className="inter-900 text-8xl ">
                                16
                            </h1>
                            <p>semanas</p>
                        </span>
                        <p>
                            Para lançar seu app de sucesso
                        </p>
                        </div>
                    </div>
            </span>

            <span className="diamond">
                    <p className="text-blue-700 sm:text-end">São mais de</p>
                    <div className="diamond-square text-blue-700 border-8 border-blue-700 aspect-square text-center bg-white flex justify-center items-center p-10">
                        <div className="content">
                        <span className="mb-10">
                            <h1 className="inter-900 text-7xl ">
                                +1000
                            </h1>
                            <p>horas de conteúdo</p>
                        </span>
                        <p>
                        
                        Com profissionais qualificados.
                        </p>
                        </div>
                    </div>
            </span>
            </div>
            <div>
            <Button>Não perca tempo!</Button>
            </div>
        </section>

    )

}