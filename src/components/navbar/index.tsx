"use client"
import Link from "next/link"
import {RxHamburgerMenu} from 'react-icons/rx'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from "next/image";
import Logo from '../../../public/logo.jpg'
import {usePathname} from "next/navigation"
import { cn } from "@/lib/utils"
import { Navitem } from "./nav-item";
const Navbar = () => {
    const NAV_ITEMS = [
        {
            label : "Quem Somos",
            href : "/QuemSomos"
        },
        {
            label : "Home",
            href : "/"
        },
    ]
    const pathName = usePathname()
    const isActive = pathName == '/QuemSomos'
    return (  
        <nav className="color-white p-5 m-4">
            <div className="flex items-center justify-between md:justify-around lg:justify-around">
                <Link href={'/'} className=" hover:text-[#ffde59] text-lg relative cursor-pointer">
                    <Image src={Logo} width={0} height={0} alt="logo" className="w-[50px] h-[50px] rounded-full"/>
                </Link>

                <div className="hidden md:flex lg:flex items-center gap-4 text-sm relative cursor-pointer" >
                    {NAV_ITEMS.map(item => (
                       <Navitem label={item.label} href={item.href}/>
                    ))}
                </div>

                <Sheet>
                    <SheetTrigger className=" md:hidden">
                        <RxHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
                    </SheetTrigger>
                    <SheetContent className="bg-[#ffde59] border-none">
                        <SheetHeader>
                            <SheetTitle className="text-xl text-orange-500 font-bold">Morada do sol</SheetTitle>
                            <SheetDescription className="text-xl">
                                <div className="flex flex-col items-start mt-2 gap-4 text-sm relative cursor-pointer ">
                                    {NAV_ITEMS.map(item => (
                                        <Navitem label={item.label} href={item.href}/>
                                    ))}
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>  
        </nav>
    );
}
 
export default Navbar;