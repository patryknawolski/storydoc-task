import { Button, styled, Typography, TypographyProps } from "@mui/material";
import { ElementType, FC, ReactNode, useRef } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

type EditableTextProps = TypographyProps & {
    component: ElementType
    initialText: string
}

const StyledContentEditable = styled(ContentEditable)({
    paddingLeft: 6,
    padddingRight: 6,
    paddingTop: 8,
    paddingBottom: 8,

    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.2);',
        borderRadius: 2
    }
})

export const EditableText: FC<EditableTextProps> = ({initialText, component, variant, ...props}) => {
    const text = useRef(initialText);

    const handleChange = (evt: ContentEditableEvent) => {
        text.current = evt.target.value;
    };

    const handleBlur = () => {
        console.log(text.current);
    };

    return (
        <Typography component={component} variant={variant} textTransform="none" m={0} minWidth="100%" {...props}>
            <StyledContentEditable html={text.current} onBlur={handleBlur} onChange={handleChange} />
        </Typography>
    );
}