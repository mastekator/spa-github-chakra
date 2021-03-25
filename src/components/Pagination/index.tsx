// App
import React, {ReactText, useMemo, memo} from 'react'

import {HStack, Box, Button} from '@chakra-ui/react'

type Props = {
    totalUsers: number
    currentPage?: ReactText
    perPage?: ReactText
    onPageChange: (arg0: ReactText, arg1: ReactText) => void
}

export const getPages = (length: number, currentPage: number, size: number): number[] => {
    if (length === 1) {
        return []
    }

    let start = Math.max(currentPage - size, 2)
    start = Math.min(length - 2 * size - 1, start)
    let pages: number[] = [1]
    for (let p = start; p <= start + 2 * size; p++) {
        if (p <= 1 || p >= length) {
            continue
        }
        pages = [...pages, p]
    }
    pages = [...pages, length]

    return pages
}

const Pagination: React.FC<Props> = (props) => {
    const {totalUsers, perPage = 10, currentPage = 1, onPageChange} = props
    const pagesItems = useMemo(() => getPages(totalUsers, +currentPage, 3), [totalUsers, currentPage])

    return (
        <HStack justifyContent="center" pb={8}>
            {pagesItems.map((pageNumber) => {
                return <Box key={pageNumber}
                            onClick={() => onPageChange(pageNumber, perPage)}
                            as={Button}
                            w="auto"
                            borderRadius="lg"
                            minW="40px"
                            h="40px"
                            d="flex"
                            px={5}
                            alignItems="center"
                            variant={pageNumber === +currentPage ? 'solid' : 'outline'}
                            colorschema='gray'
                            justifyContent="center">
                    {pageNumber}
                </Box>
            })}
        </HStack>
    )
}

export default memo(Pagination)
