import { Typography, TypographyProps } from "@mui/material";
import { ElementType, FC, ReactNode } from "react";
import { EditButton } from "./EditButton";

type EditableTextProps = TypographyProps & {
    component: ElementType
    text: string;
}

export const EditableText: FC<EditableTextProps> = ({text, component, variant, ...props}) => (
    <EditButton>
        <Typography contentEditable component={component} variant={variant} textTransform="none" m={0} px="6px" py="8px" minWidth="100%" {...props}>
            {text}
        </Typography>
    </EditButton>
)