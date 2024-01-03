'use client'
import FilterBadge from "./FilterBadges"
import { useUrlSearchParams } from "@/lib/hooks"

export default function FilterBadgesContainer() {
  const { getActiveFilters } = useUrlSearchParams()
  const searchParams = getActiveFilters()
  return (
    <ul className="flex flex-wrap gap-2">
      {
        searchParams.map(({ name, value }) => {
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
