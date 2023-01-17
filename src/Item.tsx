import { Box, Button, SvgIconProps } from "@mui/material";
import { styled } from '@mui/material/styles';
import React, { ComponentType } from "react";
import { EditableText } from "./EditableText";
import { EditButton } from "./EditButton";

const IconWrapper = styled(Box)({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
})

const IconButton = styled('div')({
    display: 'flex',
    borderRadius: '50%',
    fontSize: 60,
})

export const Item: React.FC<{ 
    Icon: ComponentType<SvgIconProps>
    text: string;
    additionalText: string;
 }> = ({Icon, text, additionalText}) => {
    return (
        <>
            <IconWrapper>
                <EditButton icon>
                    <IconButton>
                        <Icon fontSize="inherit" />
                    </IconButton>
                </EditButton>
            </IconWrapper>
            <Box display="flex" justifyContent="center" mt={1}>
                <EditableText text={text} component="h4" variant="h6" align="center" fontWeight={500} />
            </Box>
            <Box display="flex" justifyContent="center" mt={1}>
                <EditableText text={additionalText} component="p" align="center" fontWeight={500} />
            </Box>
        </>
    )
};
