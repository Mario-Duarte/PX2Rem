import { breakpoints } from "./breakpoints"

export const theme = {
    colors: {
        lightCopy: '#EEEEEE',
        darkCopy: '#555555',
        primaryColor: '#46393B',
        secondaryColor: '#264449',
        tertiaryColor: '#EEC0C6',
        otherColor: '#88E5F6',
        heartColor: '#C70E26',
        lightGradient: 'linear-gradient(45deg, #EEC0C6 0%, #88E5F6 100%)',
    },
    breakpoints,
    media: {
        sm: `@media (min-width: ${breakpoints.sm}px)`,
        lg: `@media (min-width: ${breakpoints.lg}px)`,
        xl: `@media (min-width: ${breakpoints.xl}px)`,
    }
}