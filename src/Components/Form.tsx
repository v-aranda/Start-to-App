import { Button,  Label, TextInput } from 'flowbite-react';
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import Terms from './Terms';

export default function Form() {
  return (

    <form  className="subscribe relative z-10 flex max-w-md flex-col gap-4 bg-slate-200 p-10">
      <header className='inter-600 text-center text-xl text-slate-800'>
        Preencha seus Dados
      </header>
      <div className='flex'>
        <div className="m-2 block">
          <Label htmlFor="FirstName" value="Nome" />
          <TextInput id="FirstName" type="text" placeholder="Ricardo" required />
        </div>
        
        
        <div className="m-2 block">
          <Label htmlFor="LastName" value="Sobrenome" />
          <TextInput id="LastName" type="text" placeholder="Oliveira" required />
        </div>
        

      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="BusinessName" value="Nome da empresa" />
        </div>
        <TextInput id="BusinessName" type="text" placeholder='StartToApp' required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Email institucional" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@outlook.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone1" value="N° de telefone" />
        </div>
        <TextInput id="phone1" type="tel" placeholder="(xx) xxxxx-xxxx" required />
      </div>
      
      
      <Button className='
        bg-green-400
        text-black
        hover:bg-violet-600
        hover:text-white' 
      type="submit">
        <BsFillRocketTakeoffFill className="pr-1"/>
        Start</Button>
        <div className="mb-2 block">
          <p className='text-center'>Ao pressionar "Start" você concorda com os <Terms/></p>
        </div>
    </form>
  );
}
