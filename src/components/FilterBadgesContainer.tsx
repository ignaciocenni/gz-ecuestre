'use client'
import FilterBadge from "./FilterBadges"
import { useFilters } from "@/lib/hooks"

export default function FilterBadgesContainer() {
  const { getSearchParams } = useFilters()
  const searchParams = getSearchParams()
  return (
    <ul className="flex flex-wrap gap-2">
      {
        searchParams.map(({ name, value }) => (
          <li key={name}>
            <FilterBadge name={name} value={value} />
          </li>
        ))
      }
    </ul>
  )
}
