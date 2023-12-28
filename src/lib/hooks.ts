import { useSearchParams, useRouter, usePathname } from 'next/navigation'

export const useFilters = () => {
  // funcion para setear params
  // funcion para eliminar params
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const { replace } = useRouter()
  const path = usePathname()

  const setFilter = ({ name, value }: { name: string; value: string }) => {
    params.set(name, value)
    replace(`${path}?${params.toString()}`)
  }

  const deleteFilter = ({ name }: { name: string }) => {
    params.delete(name)
    replace(`${path}?${params.toString()}`)
  }

  const getSearchParams = () => {
    const result = []
    for (const [key, value] of searchParams.entries()) {
      result.push({ name: key, value })
    }
    return result
  }

  return {
    setFilter,
    deleteFilter,
    getSearchParams
  }
}
