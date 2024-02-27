import Form from "../Components/Form"
import ico1 from "../assets/form_icon.png"
import ico2 from "../assets/form_icon2.png"
export default function Form_sec(){
    return(
        <>  
            <section  className="px-5 bg-gradient-to-t from-indigo-600  lg:py-20 lg:min-h-full m-0 flex flex-col justify-center items-center">
            
                <h1 id="Form" className="inter-900  text-2xl lg:text-4xl lg:py-20 text-violet-800 text-center">Dê o primeiro passo para o lançamento <br/>de sua aplicação de sucesso!</h1>
                <div  className="relative my-20  ">
                    <img className="ico2 z-0 hidden lg:block" src={ico2} alt="" />
                    <Form/>
                    <img className="ico1 z-20 hidden lg:block" src={ico1} alt="" />
                </div>
            </section>
        </>
    )
}