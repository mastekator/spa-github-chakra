// React
import React from 'react'
import {Button, Text, Heading, Box, VStack} from '@chakra-ui/react'

const Error: React.FC = () => {
    const refreshPage = () => {
        window.location.reload()
    }

    return (
        <Box p={8} textAlign="center">
            <VStack spacing={5}>
                <Heading>Ошибка</Heading>
                <Text>Что-то пошло не так, попробуйте еще раз</Text>
                <Button onClick={refreshPage}>Перезагрузить</Button>
            </VStack>
        </Box>
    )
}

export default Error
