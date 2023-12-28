import Image from "next/image";
import Drawer from "./Drawer";

export default function NavBar() {
  return (
    <>
      <nav className="top-0 bg-blanco flex justify-around items-center fixed  h-[4.7rem] text-2xl border-red-900 border w-screen">
        <Drawer />
        <Image src="/text-logo.png" alt="Logo" width={170} height={170} quality={100} className=" border-red-900 border" />
        {/*<h1 className="text-marron">GZ ECUESTRE</h1>*/}
        <Image src="/logo.png" alt="Logo" width={50} height={50} quality={100} className=" border-red-900 border" />
      </nav>
    </>
  );
}
