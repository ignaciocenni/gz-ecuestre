'use client'
import { useState } from 'react'
import ResponsivePagination from 'react-responsive-pagination'
import 'react-responsive-pagination/themes/classic.css'
import { useUrlSearchParams } from '@/lib/hooks'

export default function Pagination() {
  const totalPages = 5
  const [currentPage, setCurrentPage] = useState(1)
  const { setPage } = useUrlSearchParams()

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setPage(page)
  }
  return (
    <section className='mt-[6rem]'>
      <ResponsivePagination
        total={totalPages}
        current={currentPage}
        onPageChange={(page: number) => handlePageChange(page)}
      />
    </section>
  )
}
