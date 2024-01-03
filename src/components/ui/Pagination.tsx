'use client'
import { useState } from 'react'
import ResponsivePagination from 'react-responsive-pagination'

export default function Pagination() {
  const totalPages = 5
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // ... do something with `page`
  }
  return (
    <ResponsivePagination
      total={totalPages}
      current={currentPage}
      onPageChange={(page: number) => handlePageChange(page)}
    />
  )
}
