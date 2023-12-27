import { type Horse } from "@/app/lib/types"
import Image from "next/image"

type CardProps = {
  horse: Horse
}

export default function Card({ horse }: CardProps) {
  return (
    <article className="flex flex-col  rounded-xl gap-2 text-center h-[20rem] w-[18rem] bg-base-100 shadow-xl overflow-hidden">
      <Image
        className=" w-[18rem] h-[10rem]"
        src={'/caballo.jpg'}
        alt="caballo"
        width={400}
        height={400}
        quality={100}
      />
      <h2 className="mt-4">{horse.name}</h2>
      <div className="flex gap-4 justify-center">
        <h3 className="badge">{horse.breed}</h3>
        <div className="badge">{horse.age}</div>
      </div>
    </article>
  )
}
