import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return ( 
        <footer className="w-full flex items-center justify-center bg-orange-500 flex-col gap-4 p-6 mt-10">
            <section className="container flex gap-6 items-center justify-start flex-col sm:flex-row">
                <div className="flex flex-col gap-4">
                    <h3 className="text-white text-xl">Entre em contato conosco</h3>
                    <div className="flex gap-4 items-center text-white text-xs"><FiPhone size={20} /><h3>(14) 9 9618-1450</h3></div>
                    <div className="flex gap-4 items-center text-white text-xs"><MdOutlineMailOutline size={20} /><h3>tiago.yamagutiportela00@gmail.com</h3></div>
                    <div className="flex gap-4 items-center text-white text-xs"><FaInstagram size={20} /><h3>@mel.silvestre_morada_do_sol</h3></div>
                </div>
            </section>
            <span className="flex items-center gap-1.5 text-xs sm:text-sm text-white mt-4">
                <strong className="font-medium transition-colors">{`Morada do Sol © ${new Date().getFullYear()}`}</strong>
            </span>
        </footer>
     );
}
 
export default Footer;