import Button from '@/components/Button';
import Link from 'next/link';
import { BsCalendar } from 'react-icons/bs';
import { PiMapPinLineBold } from 'react-icons/pi';

export default function Home() {
  return (
    <section className='space-y-8 text-base font-medium'>
      <div className='space-y-2'>
        <p className='flex items-center gap-5'>
          <BsCalendar className='text-2xl' /> 17 fev • 21:30 até 22 fev • 10:00
        </p>
        <p className='flex items-center gap-5'>
          <PiMapPinLineBold className='text-2xl' /> Sitio Juvak, Tanguá - RJ
        </p>
      </div>
      <div>
        <h2 className='text-2xl'><strong>Descrição do evento</strong></h2>
        <p>Saída: 17/02 às 21h30 <br /> Retorno: 22/02 às 10h00</p>
        <p>Local de saída: Igreja CENE em Mutondo</p>
      </div>
      <div>
        <h2 className='text-2xl'><strong>Valor</strong> - R$ 170,00</h2>
        <p>Alojamento, alimentação, transporte ida para o sitio, retorno para a igreja e camisa branca do evento</p>
      </div>
      <div>
        <h2 className='text-2xl'><strong>Contatos</strong></h2>
        <p>Pr. Rodrigo Marques (21) 97029-3107 <br /> Renata (21)97024-1782</p>
      </div>
      <div>
        <Link href={'/Guidelines'}>
          <Button>Orientações importantes</Button>
        </Link>
      </div>
    </section>
  )
}
