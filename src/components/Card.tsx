import { type Horse } from "@/app/lib/types"

type CardProps = {
  horse: Horse
}

export default function Card({ horse }: CardProps) {
  return (
    <article className="card h-[20rem] w-[17rem] bg-base-100 shadow-xl">
      <figure><img src="/caballo.jpg" alt="Shoes" /></figure>
      <section className="card-body">
        <h2 className="card-title">
          {horse.name}
        </h2>
        <footer className="card-actions justify-center ">
          <div className="badge badge-outline">{horse.breed}</div>
          <div className="badge badge-outline">{`${horse.age} años`}</div>
        </footer>
      </section>
    </article>
  )
}
