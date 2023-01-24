import { Box, Button, Dialog, DialogTitle, TextField, Typography, TypographyProps } from "@mui/material";
import { ElementType, FC, useState } from "react";
import { EditButton } from "./EditButton";

export interface EditTextDialogProps {
    text: string;
    open: boolean;
    onClose: (value: string) => void;
    onTextChangeClick: (value: string) => void;
  }

export const EditTextDialog: React.FC<EditTextDialogProps> = ({
    text,
    onClose,
    open,
    onTextChangeClick
  }) => {
    const [newText, setNewText] = useState<string>(text);
  
    const handleTextChangeClick = () => {
      if (newText.length === 0) return
      onTextChangeClick(newText)
    }
  
    return (
      <Dialog
        PaperProps={{ sx: { overflow: "visible" } }}
        onClose={onClose}
        open={open}
      >
        <Box p={2}>
          <DialogTitle>Change text</DialogTitle>
          <Box display="flex" alignItems="flex-end">
            <TextField value={newText} id="outlined-basic" label="Outlined" variant="outlined" onChange={event => setNewText(event.target.value)}/>
            <Box ml={2}>
              <Button variant="contained" size="large" disabled={newText.length === 0} onClick={handleTextChangeClick}>
                Confirm
              </Button>
            </Box>
          </Box>
        </Box>
      </Dialog>
    );
  };

type EditableTextProps = TypographyProps & {
    component: ElementType
    text: string
    onEdit: (text: string) => void;
}

export const EditableText: FC<EditableTextProps> = ({text, component, variant, onEdit, ...props}) => {
    const [isEditTextModalOpen, setIsEditTextModalOpen] = useState(false);

    const handleTextClick = () => {
        setIsEditTextModalOpen(true);
    };

    const handleEditTextModalClose = () => {
        setIsEditTextModalOpen(false);
    };

    const handleTextEdit = (newText: string) => {
        onEdit(newText);
        setIsEditTextModalOpen(false);
    }

    return (
        <>
            <EditButton onClick={handleTextClick}>
                <Typography component={component} variant={variant} textTransform="none" m={0} minWidth="100%" {...props} sx={{ py: '8px', px: '6px' }}>
                    {text}
                </Typography>
            </EditButton>
            <EditTextDialog open={isEditTextModalOpen} onClose={handleEditTextModalClose} text={text} onTextChangeClick={handleTextEdit} />
        </>
    );
}