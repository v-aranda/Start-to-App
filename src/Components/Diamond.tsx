export default function Diamond({numero,legenda1,legenda2}:{numero:string,legenda1:string,legenda2:string}){
    return(

      <>
        
        <span className="diamond">
                    <p className="text-violet-600">você só precisa de</p>
                    <div className="bg-violet-600 aspect-square text-center text-white flex justify-center items-center ">
                        <div className="rotate-45">
                        <span className="">
                            <h1 className="inter-900 text-8xl pb-5">
                                {numero}
                            </h1>
                            <p>{legenda1}</p>
                        </span>
                        <p>
                            {legenda2}
                        </p>
                        </div>
                    </div>
        </span>
      </>
     
  
    )

}