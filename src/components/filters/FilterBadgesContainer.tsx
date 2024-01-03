'use client'
import FilterBadge from "./FilterBadges"
import { useUrlSearchParams } from "@/lib/hooks"

export default function FilterBadgesContainer() {
  const { getSearchParams } = useUrlSearchParams()
  const searchParams = getSearchParams()
  return (
    <ul className="flex flex-wrap gap-2">
      {
        searchParams.map(({ name, value }) => {
          if (name === 'page') return null
          return (
            <li key={name}>
              <FilterBadge name={name} value={value} />
            </li>
          )
        }
        )
      }
    </ul>
  )
}
