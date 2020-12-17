import { createGlobalStyle, css } from 'styled-components'
import FiraCode from './FiraCode'
import PressStart2P from './PressStart2P'

const FontsLoading = createGlobalStyle`
    ${FiraCode.light};
    ${FiraCode.bold};
    ${PressStart2P.regular};
`

export const Heading = css``

export const Title = css`
    font-family: 'Press Start 2P', sans-serif;
    font-size: 3rem;
`
export const Subitle = css``

export const Body1 = css``

export const Body2 = css``

export const Caption = css``

export default FontsLoading
