export default function Formulario(){
    return(
        <>
            <section className="bg-blue-700">
                <h1>Dê o primeiro passo para o lançamento de sua aplicação de sucesso!</h1>
                <form className="bg-slate-200 p-10" action="">
                    <div>
                        <label htmlFor="">Nome</label>
                        <input type="text" />
                        <label htmlFor="">Sobrenome</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label htmlFor="">Nome do negócio</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label htmlFor="">email institucional</label>
                        <input type="email"/>
                    </div>
                    <div>
                        <label htmlFor="">número de telefone</label>
                        <input type="phone"/>
                    </div>
                </form>
            </section>
        </>
    )
}