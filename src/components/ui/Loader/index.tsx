// React
import React from 'react'
import {Box, SkeletonCircle, SkeletonText, HStack, VStack} from '@chakra-ui/react'

const Loader = () => (
    <VStack spacing={3}>
        <Box w="full" padding="4" boxShadow="md">
            <HStack spacing={4}>
                <SkeletonCircle minW="16" size="16"/>
                <SkeletonText w="full" noOfLines={2} spacing="3"/>
            </HStack>
        </Box>
        <Box w="full" padding="4" boxShadow="md">
            <HStack spacing={4}>
                <SkeletonCircle minW="16" size="16"/>
                <SkeletonText w="full" noOfLines={2} spacing="3"/>
            </HStack>
        </Box>
        <Box w="full" padding="4" boxShadow="md">
            <HStack spacing={4}>
                <SkeletonCircle minW="16" size="16"/>
                <SkeletonText w="full" noOfLines={2} spacing="3"/>
            </HStack>
        </Box>
    </VStack>
)

export default Loader
