import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import MelSilvreImagem from '../../../../public/mel-silvestre.png'

const Product = () => {
    return ( 
        <section className="container gap-4 flex flex-col">

            <div className="w-full flex flex-col gap-4 md:flex-row items-center justify-center">
                <div className="imagem w-full flex items-center justify-center">
                    <Image width={0} height={0} className="w-1/2 h-[40%] self-center" alt="mel silvestre" src={MelSilvreImagem} />
                </div>
                <div className="px-5 flex flex-col gap-6 py-6 w-full">
                    <div className="infos flex flex-col">
                        <h1 className="text-orange-500 text-xl font-bold">Mel Silvestre 500g</h1>
                        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis numquam minus atque minima quas optio officia suscipit consequuntur quisquam sunt. Perferendis quo vel iure ratione aliquid, itaque ipsa nulla perspiciatis.</p>
                    </div>
                    <div className="flex gap-2">
                        <p className="text-xs font-bold"><s>R$ 23,00</s></p>
                        <p className="text-xl font-bold text-orange-500">R$ 18,00</p>
                    </div>
                    <a className="w-full sm:w-1/2 self-center flex justify-center p-4 bg-orange-500 font-bold rounded-lg hover:bg-orange-400 cursor-pointer text-white" href="https://api.whatsapp.com/send/?phone=14996181450&text=Ol%C3%A1%2C+eu+gostaria+de+fazer+um+pedido.&type=phone_number&app_absent=0">Comprar</a>
                </div>
            </div>

            <div className="flex flex-col">
                <h1 className="text-orange-500 text-xl font-bold">Descrição</h1>
                <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi adipisci doloremque quam autem cumque in numquam temporibus placeat. Maiores dolor assumenda voluptates obcaecati, dignissimos aspernatur porro totam est consequatur minima.</p>
            </div>

            {/* Chamar um componente de produtos */}
        </section>
     );
}
 
export default Product;