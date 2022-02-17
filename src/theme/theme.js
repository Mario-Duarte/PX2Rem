import { breakpoints } from "./breakpoints"

export const theme = {
    color: {
        lightCopy: '#EEEEEE',
        darkCopy: '#555555',
        primaryColor: '#46393B',
        secondaryColor: '#264449',
        tertiaryColor: '#EEC0C6',
        heartColor: '#C70E26',
    },
    breakpoints: {
        breakpoints,
    },
    media: {
        sm: `(min-width: ${breakpoints.sm})`,
        lg: `(min-width: ${breakpoints.lg})`,
        xl: `(min-width: ${breakpoints.xl})`,
    }
}