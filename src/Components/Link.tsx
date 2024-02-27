export default function Link({children,href}:{children:any,href:string}){
    return(
        <a className="flex  items-center font-bold" href={href}>
            {children}
        </a>
    )
}