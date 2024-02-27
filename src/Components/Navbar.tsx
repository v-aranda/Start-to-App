import { Navbar } from 'flowbite-react';
import Button from './Button';
import Link from './Link';
import logo from '/logo.png'

export default function Navigation() {
  return (
    <Navbar className='fixed z-30
     bg-slate-200/50
      text-violet-800
       backdrop-grayscale
        backdrop-blur 
        backdrop-sepia
        w-full
        lg:w-8/12 
        lg:rounded-md' fluid>
      <Navbar.Brand  href="#">
        <img width={65} src={logo} alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Start To App</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className=''>
        <Link href="#Hero">Inicio</Link>
        <Link href="#Duração">Duração</Link>
        <Link href="#Sobre">Sobre</Link>
        <Button>Inscreva-se Já</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
