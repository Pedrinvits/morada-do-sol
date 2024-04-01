import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import MelSilvreImagem from '../../../public/mel-silvestre.png'
import Link from "next/link";

const Products = () => {
    return (
        <section className="container">
            <h1 className="text-orange-500 text-xl font-bold mt-4 mb-4">Produtos</h1>
            <div className="w-full flex flex-col gap-4 md:flex-row items-center justify-start">
                <div className="w-full sm:w-[250px] sm:max-h-[300px] p-6 rounded-2xl border-2 border-gray-100 bg-white shadow-2xl">
                    <Badge variant="secondary" className="bg-orange-500 text-white">-22%</Badge>
                    <div className="flex flex-col gap-4 h-full p-4">
                        <Image width={0} height={0} className="w-1/2 h-[40%] self-center" alt="mel silvestre" src={MelSilvreImagem} />
                        <h1 className="text-orange-500 text-xl font-bold">Mel Silvestre 500g</h1>
                        <div className="flex gap-2">
                            <p className="text-xs font-bold"><s>R$ 23,00</s></p>
                            <p className="text-sm font-bold text-orange-500">R$ 18,00</p>
                        </div>
                        <a className="self-center bg-orange-500 p-2 hover:bg-orange-400 rounded-xl text-white text-sm" href="/products/mel-silveste">Comprar Agora</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;