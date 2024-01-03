import Image from "next/image";
import Drawer from "./ui/Drawer";

export default function NavBar() {
  return (
    <nav
      className={`top-0 bg-blanco flex items-center
         fixed  h-[4.5rem] text-2xl shadow-xl  w-screen
         
         `}>
      <Drawer />
      <section
        className="flex items-center justify-between  w-full ml-[3rem] mr-[2rem]"
      >
        <div />
        <Image
          src="/text-logo.png"
          alt="Logo"
          width={170}
          height={170}
          quality={100}
        />
        <Image
          src="/logo.png"
          alt="Logo" width={50}
          height={50} quality={100}
        />
      </section>
    </nav>
  );
}
