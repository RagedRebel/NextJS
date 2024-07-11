"use client";
import { usePathname } from "next/navigation";
export default function Post() {
const pathname = usePathname();
return <p>{pathname}</p>;//pathname is creating new pages of the same style 
//for the respective paths 
}