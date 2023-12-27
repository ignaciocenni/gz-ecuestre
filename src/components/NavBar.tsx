import Image from "next/image";
import Drawer from "./Drawer";

export default function NavBar() {
  return (
    <nav className="top-0 bg-blanco flex justify-around items-center fixed  h-[4rem] text-2xl border w-screen">
      <Drawer />
      <h1 className="text-marron" >GZ ECUESTRE</h1>
      <Image src='/Logo.png' alt="Logo" width={100} height={100} quality={100} />
    </nav>
  )
}
