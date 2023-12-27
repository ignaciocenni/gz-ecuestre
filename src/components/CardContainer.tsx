import Card from "./Card"
import { Fragment } from "react"
import { type Horse } from "@/app/lib/types"

type CardContainerProps = {
  horses: Horse[]
}
export default function CardContainer({ horses }: CardContainerProps) {
  return (
    <section className="col-span-full lg:col-span-4 py-[4rem] flex flex-wrap  justify-center gap-2 border">
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
