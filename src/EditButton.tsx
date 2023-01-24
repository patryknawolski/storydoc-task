import { Button, ButtonProps, styled } from "@mui/material";
import { FC, ReactNode } from "react";

const StyledButton = styled(Button)({
    p: 1,
    borderRadius: '50%',

    ':hover': { 
        backgroundColor: 'rgba(0, 0, 0, 0.2);'
    }
})

export const EditButton: FC<{ children: ReactNode, icon?: boolean, onClick?: ButtonProps["onClick"] }> = ({ children, onClick }) => (
    <StyledButton disableRipple color="inherit" onClick={onClick}>
        {children}
    </StyledButton>
)