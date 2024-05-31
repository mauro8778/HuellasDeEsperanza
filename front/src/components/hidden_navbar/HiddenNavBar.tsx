'use client'
import { usePathname } from "next/navigation"
import {  } from "react"


export const HiddenNavBar = ({Children}:any) => {

    const pathname = usePathname()

    return (
        <div className={
            pathname === '/' ? 'hidden' : ''
        }>
            {Children}
        </div>
    )
}
export default HiddenNavBar