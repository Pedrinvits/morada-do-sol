import Image from "next/image";
import MelSilvreImagem from '../../../public/mel-silvestre.png'
import Link from "next/link";
const Categories = () => {
    return (  
     
        <section className="container">
            <h1 className="text-orange-500 text-xl font-bold mb-4">Categorias</h1>
            <div className="w-full flex flex-col gap-4 md:flex-row items-center justify-start">
                <Link href={'/products/mel-silvestre'}>
                    <div className="w-full sm:w-[250px] sm:max-h-[300px] p-4 rounded-2xl border border-gray-100 bg-[rgb(255,222,89)] hover:bg-[rgb(245,223,134)]">
                    <div className="flex flex-col gap-4 h-full">
                        <h2 className="text-xl text-green-700 p-2 font-bold">Mel Silvreste</h2>
                        <Image width={0} height={0} className="w-full h-[70%] self-center" alt="mel silvestre" src={MelSilvreImagem} />
                    </div>
                    </div>
                </Link>
            </div>
        </section>  
      
    );
}
 
export default Categories;