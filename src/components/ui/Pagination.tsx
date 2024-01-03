'use client'
import { useState } from 'react'
import ResponsivePagination from 'react-responsive-pagination'
import 'react-responsive-pagination/themes/classic.css'
import { useUrlSearchParams } from '@/lib/hooks'
import { useSearchParams } from 'next/navigation'

export default function Pagination() {
  const { setPage } = useUrlSearchParams()
  const totalPages = 5
  const searchParams = useSearchParams()
  let initialPage = searchParams.get('page')
  if (initialPage && Number(initialPage) > totalPages || Number(initialPage) < 1) {
    initialPage = null
    setPage(1)
  }
  const [currentPage, setCurrentPage] = useState<number | string>(initialPage ?? 1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setPage(page)
  }

  return (
    <section className='mt-[6rem]'>
      <ResponsivePagination
        total={totalPages}
        current={typeof currentPage === 'string' ? Number(currentPage) : currentPage}
        onPageChange={(page: number) => handlePageChange(page)}
      />
    </section>
  )
}
