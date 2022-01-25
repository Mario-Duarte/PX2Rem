import {
    Header
} from './Title.styles';

export interface TitleProps {
    title: string;
}

export function Title({title}:TitleProps) {
    return(
        <Header>{title}</Header>
    );
}