import Card from "./Card"
import { Fragment } from "react"
import { type Horse } from "@/app/lib/types"

type CardContainerProps = {
  horses: Horse[]
}
export default function CardContainer({ horses }: CardContainerProps) {
  return (
    <section className="py-[4rem] flex flex-wrap justify-center gap-2 border overflow-hidden w-max h-screen">
      {
        horses.map((horse) => (
          <Fragment key={horse.id}>
            <Card horse={horse} />
          </Fragment>
        ))
      }
    </section>
  )
}
