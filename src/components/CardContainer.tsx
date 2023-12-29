import Card from "./Card"
import { Fragment } from "react"
import { type Horse } from "@/lib/types"

type CardContainerProps = {
  horses: Horse[]
}
export default function CardContainer({ horses }: CardContainerProps) {
  return (
    <section className="flex flex-wrap mb-10 xl:w-10/12  justify-center gap-1">
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
