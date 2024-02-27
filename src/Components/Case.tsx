
import { Card } from 'flowbite-react';

export default function Case({children,name,sub,src}:any) {
  return (
    <Card className="max-w-sm">
      
      <div className="flex flex-col items-center pb-10">
        <img
          alt="Foto de Aluno"
          height="96"
          src={src}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{sub}</span>
        <p className='text-center text-sm italic'>
            "{children}"
        </p>
      </div>
    </Card>
  );
}
