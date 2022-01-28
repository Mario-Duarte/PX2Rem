import {
    SampleAreaContainer,
    Title,
    TextArea,
} from './SampleArea.styles';

export interface SampleAreaProps {
    fontSize: number;
}

export function SampleArea({fontSize}:SampleAreaProps) {
    return(
        <SampleAreaContainer>
            <Title>Sample text:</Title>
            <TextArea fontSize={fontSize} rows={4}>
                Lorem ipsum dolor sit amet
            </TextArea>
        </SampleAreaContainer>
    );
}