import { FaHeart, FaCode } from 'react-icons/fa';
import { Container } from './styles';

export function Footer() {
return (
    <Container>
    <p>Created by <a href='http://mariodesigns.co.uk/' target="_blank">Mario</a>&<a href='https://aleex-caires-portfolio.vercel.app/' target='_blank'>Alex</a>with &nbsp;<FaCode /> &nbsp; and &nbsp;<FaHeart color='red' /> </p>
    </Container>
)
};
