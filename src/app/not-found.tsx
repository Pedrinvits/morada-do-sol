import Link from 'next/link'
import { Frown } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
export default function NotFound() {
  return (
    <section className="container h-[17rem] space-y-6">
           <Button className='bg-orange-500 text-white hover:bg-orange-400'><Link href="/">Voltar para home</Link></Button>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Frown size={25} color='rgb(249 115 22'/>
            <h1 className="text-xl sm:text-3xl text-orange-500 font-bold">Ops ... Página Não Encontrada !</h1>
        </div>
    </section>
  )
}