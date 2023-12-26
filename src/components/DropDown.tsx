'use client'
type Breed = {
  name: string
  id: number
}

type DropDownProps = {
  options: Breed[]
  name: string
}

export default function DropDown({ name, options }: DropDownProps) {
  return (
    <div className="dropdown dropdown-bottom">
      <div tabIndex={0} role="button" className="btn m-1 capitalize w-full">{name}</div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        {
          options.map((breed) => (
            <li key={breed.id}><a>{breed.name}</a></li>
          ))
        }
      </ul>
    </div>
  )
}
