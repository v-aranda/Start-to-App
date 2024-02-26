import { BsFillRocketTakeoffFill } from "react-icons/bs";
export default function Button({children}:any){
    return (
        <button className="bg-green-400 p-3 rounded-md text-black flex justify-center items-center mr-auto">
            <BsFillRocketTakeoffFill className="pr-1"/>
            {children}
        </button>
    )
}