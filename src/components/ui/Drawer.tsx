'use client'
import { FcMenu } from "react-icons/fc";
import Filters from "../filters/Filters";
import { useState } from 'react'
import clsx from "clsx"

export default function Drawer() {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <section
      className={clsx(`text-negro text-4xl  inset-0`
        , { 'bg-black/30 backdrop-blur-sm fixed': isOpen === true }
      )}>
      <input
        onChange={(e) => setIsOpen(e.target.checked)}
        className="relative sr-only peer"
        type="checkbox"
        id="toggle"
        checked={isOpen}
      />
      <label
        htmlFor="toggle"
        className={`cursor-pointer active:scale-110 peer-checked:-rotate-90  
          transition-transform absolute top-3 delay-150 duration-300 xl:hidden left-1 `}
      >
        <FcMenu />
      </label>
      {isOpen && <button
        className="border -z-10 h-full w-full"
        onClick={() => setIsOpen(!isOpen)} />}
      <div
        className={`mt-[4.56rem] rounded-lg overflow-hidden top-0 absolute h-screen xl:h-[30rem] bg-orange-200 -left-[25rem] xl:left-0
        peer-checked:left-0 peer:transition ease-out delay-150 duration-300 shadow-xl  
        `}
      >
        <Filters />
      </div>
    </section>
  );
}
