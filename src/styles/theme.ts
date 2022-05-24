import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        yellow: {
            "400": "#FFBA08"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global:{
            body: {
                bg: 'white',
                color: 'gray.700'
            }
        }
    }
})