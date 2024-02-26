import Diamond from "../Components/Diamond"
export default function Duration(){
    return(
        <section className="w-8/12 mx-auto">  
            <div className="grid grid-cols-2 "> 
            <span className="diamond">
                    <p className="text-violet-600">você só precisa de</p>
                    <div className="bg-violet-600 aspect-square text-center text-white flex justify-center items-center ">
                        <div className="rotate-45">
                        <span className="mb-10">
                            <h1 className="inter-900 text-8xl ">
                                16
                            </h1>
                            <p>semanas</p>
                        </span>
                        <p>
                            para lançar seu app de sucesso
                        </p>
                        </div>
                    </div>
            </span>
            <span className="diamond">
                    <p className="text-blue-600 text-end">são mais de</p>
                    <div className="bg-blue-600 aspect-square text-center text-white flex justify-center items-center ">
                        <div className="rotate-45">
                        <span className="mb-10">
                            <h1 className="inter-900 text-7xl ">
                                +1000
                            </h1>
                            <p>horas</p>
                        </span>
                        <p>
                        de conteúdo
                        com profissionais qualificados.
                        </p>
                        </div>
                    </div>
            </span>
            </div>
        </section>
    )

}