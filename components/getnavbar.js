"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import NavbarAlt from "@/components/navbaralt";

export default function GetNavbar(props) {
  const pathname = usePathname();
  const altnav = pathname === "/home/minimal";

  return (
    <>{altnav ? <NavbarAlt {...props} /> : <Navbar {...props} />}</>
  );
}
