import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import FavodeMel from '../../../../public/favos-de-mel.png'

const Product = () => {
    return ( 
        <section className="container gap-4 flex flex-col">

            <div className="w-full flex flex-col gap-4 md:flex-row items-center justify-center">
                <div className="imagem w-full sm:w-1/2 flex items-center justify-center ">
                    <Image width={0} height={0} className="w-1/2 h-[40%] self-center" alt="mel silvestre" src={FavodeMel} />
                </div>
                <div className="px-5 flex flex-col gap-6 py-6 w-full sm:w-[40%] rounded-2xl border-2 border-gray-100 bg-white shadow-2xl">
                <Badge variant="secondary" className="bg-orange-500 text-white w-[60px]">-28%</Badge>
                    <div className="infos flex flex-col">
                        <h1 className="text-orange-500 text-xl font-bold">Favo de Mel</h1>
                        <p className="text-sm text-gray-600">Favo de Mel Puro natural</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-xs font-bold"><s>R$ 35,00</s></p>
                        <p className="text-xl font-bold text-orange-500">R$ 25,00</p>
                    </div>
                    <a className="w-full sm:w-1/2 self-center flex justify-center p-4 bg-orange-500 font-bold rounded-lg hover:bg-orange-400 cursor-pointer text-white" href="https://api.whatsapp.com/send/?phone=14996181450&text=Ol%C3%A1%2C+eu+gostaria+de+fazer+um+pedido.&type=phone_number&app_absent=0">Comprar</a>
                </div>
            </div>

            <div className="flex flex-col p-4 mt-4">
                <h1 className="text-orange-500 text-xl font-bold">Descrição</h1>
                <p className="text-sm text-gray-600">Mel puro, repleto de nutrientes e vitaminas. Pode ser ingerido normalmente, com torradas e queijos, no iogurte, com frutas e sem contar que fica lindo na decoração de uma sobremesa.</p>
            </div>
        </section>
     );
}
 
export default Product;