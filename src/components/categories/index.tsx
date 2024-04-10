import Image from "next/image";
import MelSilvreImagem from '../../../public/mel-silvestre.png'
import Propolis from '../../../public/propolis.png'
import FavodeMel from '../../../public/favos-de-mel.png'
import Link from "next/link";
const Categories = () => {
    return (  
     
        <section className="container">
            <h1 className="text-orange-500 text-xl font-bold mb-4">Categorias</h1>
            <div className="w-full flex flex-col gap-4 md:flex-row items-center justify-start">
                <Link href={'/products/mel-silvestre'}>
                    <div className="w-full sm:w-[300px] sm:h-[450px] p-4 rounded-2xl border  bg-[#F28705]">
                    <div className="flex flex-col gap-4 h-full">
                        <h2 className="text-xl text-[#F2E205] p-2 font-bold">Mel Silvreste</h2>
                        <Image width={0} height={0} className="self-center" alt="mel silvestre" quality={1} src={MelSilvreImagem} />
                    </div>
                    </div>
                </Link>
                <Link href={'/products/propolis'}>
                    <div className="w-full sm:w-[300px] sm:h-[450px] p-4 rounded-2xl border  bg-[#F28705]">
                    <div className="flex flex-col gap-4 h-full">
                        <h2 className="text-xl text-[#F2E205] p-2 font-bold">Própolis</h2>
                        <Image width={0} height={0} className="self-center" alt="mel silvestre" quality={1} src={Propolis} />
                    </div>
                    </div>
                </Link>
                <Link href={'/products/favo-de-mel'}>
                    <div className="w-full sm:w-[300px] sm:h-[450px] p-4 rounded-2xl border  bg-[#F28705]">
                    <div className="flex flex-col gap-4 h-full justify-between">
                        <h2 className="text-xl text-[#F2E205] p-2 font-bold">Favo de Mel</h2>
                        <Image width={0} height={0} className="self-center w-[200px]" alt="mel silvestre" src={FavodeMel} />
                    </div>
                    </div>
                </Link>
            </div>
        </section>  
      
    );
}
 
export default Categories;