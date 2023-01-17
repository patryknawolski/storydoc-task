import { Button } from "@mui/material";
import { FC, ReactNode } from "react";

export const EditButton: FC<{ children: ReactNode, icon?: boolean }> = ({ children, icon }) => (
    <Button disableRipple color="inherit" sx={{ p: icon ? 1 : 0, borderRadius: icon ? '50%' : '', ':hover': { backgroundColor: 'rgba(0, 0, 0, 0.2);' } }}>
        {children}
    </Button>
)