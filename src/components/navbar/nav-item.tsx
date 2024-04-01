import Link from "next/link"
import {usePathname} from "next/navigation"
import { cn } from "@/lib/utils"

type NavItemProps = {
    label : string,
    href : string
}
   
export const Navitem = ({label , href} : NavItemProps) => {
    const pathName = usePathname()
    const isActive = pathName == href
    return (
        <Link href={href} className={cn("text-xl text-orange-500 font-bold", isActive && "border-b-2 border-orange-500")}>
            {label}
        </Link>
    )
}