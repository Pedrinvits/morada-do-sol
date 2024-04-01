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
  
const Navbar = () => {
    const NAV_ITEMS = [
        {
            label : "Quem Somos",
            href : "#"
        },
        {
            label : "Home",
            href : "#"
        },
        // {
        //     label : "HEALTHY LIVING",
        //     href : "#"
        // },
        // {
        //     label : "COMMUNITY",
        //     href : "#"
        // },{
        //     label : "ABOUT",
        //     href : "#"
        // },
        // ,{
        //     label : "STORE",
        //     href : "#"
        // },
    ]
    return (  
        <nav className="color-white p-5 m-4">
            <div className="flex items-center justify-between md:justify-around lg:justify-around">
                <Link href={'/'} className=" hover:text-[#E6533C] text-lg relative cursor-pointer">
                    LOGO
                </Link>

                <div className="hidden md:flex lg:flex items-center gap-4 text-sm relative cursor-pointer ">
                    {NAV_ITEMS.map(item => (
                        <Link href={`${item?.href}`} key={item?.label} className="hover:text-[#E6533C] text-xs ">
                                {item?.label}
                        </Link>
                    ))}
                </div>

                <Sheet>
                    <SheetTrigger className=" md:hidden">
                        <RxHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
                    </SheetTrigger>
                    <SheetContent className="">
                        <SheetHeader>
                            <SheetTitle className="">Morada do sol</SheetTitle>
                            <SheetDescription className="">
                                <div className="flex flex-col items-start mt-2 gap-4 text-sm relative cursor-pointer ">
                                    {NAV_ITEMS.map(item => (
                                        <Link href={`${item?.href}`} key={item?.label} className="hover:text-[#E6533C] p-2">
                                                {item?.label}
                                        </Link>
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