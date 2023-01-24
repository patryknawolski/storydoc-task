import { Button, ButtonProps } from "@mui/material";
import { FC, ReactNode } from "react";

export const EditButton: FC<{ children: ReactNode, icon?: boolean, onClick?: ButtonProps["onClick"] }> = ({ children, icon, onClick }) => (
    <Button color="inherit" sx={{ p: icon ? 1 : 0, borderRadius: icon ? '50%' : '2px' , ':hover': { backgroundColor: 'rgba(0, 0, 0, 0.2);' } }} onClick={onClick}>
        {children}
    </Button>
)