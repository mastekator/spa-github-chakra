// React
import React from 'react'

// Third-party
import {FaMoon, FaSun} from 'react-icons/fa'

// App
import {useColorMode, useColorModeValue, IconButton, IconButtonProps} from '@chakra-ui/react'

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
    const {toggleColorMode} = useColorMode()
    const text = useColorModeValue('dark', 'light')
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)

    return (
        <IconButton
            size="md"
            fontSize="lg"
            variant="ghost"
            color="current"
            marginLeft="2"
            onClick={toggleColorMode}
            icon={<SwitchIcon/>}
            aria-label={`Switch to ${text} mode`}
            {...props}
        />
    )
}
