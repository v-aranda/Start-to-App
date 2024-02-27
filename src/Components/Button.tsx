import { BsFillRocketTakeoffFill } from "react-icons/bs";
export default function Button({children}:any){
    return (
        <a href="#Form">
            <button className="bg-green-400 
                            p-3 rounded-md 
                            text-black 
                            flex 
                            justify-center 
                            items-center 
                            
                            hover:bg-green-900
                            hover:text-white 
        ">
            <BsFillRocketTakeoffFill className="pr-1"/>
            {children}
        </button>
        </a>
    )
}