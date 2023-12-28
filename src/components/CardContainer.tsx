import Card from "./Card"
import { Fragment } from "react"
import { type Horse } from "@/lib/types"

type CardContainerProps = {
  horses: Horse[]
}
export default function CardContainer({ horses }: CardContainerProps) {
  return (
    <section className="lg:col-span-4  flex flex-wrap  justify-center gap-1 border">
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
