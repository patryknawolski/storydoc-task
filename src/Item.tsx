import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogTitle,
  Icon,
  TextField,
} from "@mui/material";
import { styled, makeStyles } from "@mui/material/styles";
import React, { ComponentType, ReactNode, useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { EditableText } from "./EditableText";
import { EditButton } from "./EditButton";
import { listWithLabels } from "./mui-icons-list";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
  onIconChangeClick: (value: string) => void;
}

export const SimpleDialog: React.FC<SimpleDialogProps> = ({
  onClose,
  open,
  onIconChangeClick
}) => {
  const [icon, setIcon] = React.useState<{
    label: string;
    value: string;
  } | null>(null);

  const handleIconChangeClick = () => {
    if (icon === null) return
    onIconChangeClick(icon.value)
  }

  return (
    <Dialog
      PaperProps={{ sx: { overflow: "visible" } }}
      onClose={onClose}
      open={open}
    >
      <Box p={2}>
        <DialogTitle>Choose an icon</DialogTitle>
        <Box display="flex" alignItems="flex-end">
          <Autocomplete
            value={icon}
            onChange={(
              event,
              icon: { label: string; value: string } | null
            ) => {
              setIcon(icon);
            }}
            disablePortal
            id="combo-box-icons"
            options={listWithLabels}
            sx={{ width: 300 }}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                <Box display="flex" mr={1}>
                  <Icon>{option.value}</Icon>
                </Box>
                {option.label}
              </Box>
            )}
            renderInput={(params) => <TextField {...params} label="Icon" />}
          />
          <Box ml={2}>
            <Button variant="contained" size="large" disabled={icon === null} onClick={handleIconChangeClick}>
              Confirm
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

const IconWrapper = styled(Box)({
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
});

const IconButton = styled("div")({
  display: "flex",
  borderRadius: "50%",
  fontSize: 60,
});

const EditIcon = styled(ModeEditIcon)({
  fontSize: 36,
  cursor: "pointer",
});

export const Item: React.FC<{
  id: number;
  icon: string;
  text: string;
  additionalText: string;
  onIconChange: ({icon, id}: {icon: string; id: number}) => void;
}> = ({ id, icon, text, additionalText, onIconChange }) => {
  const [isEditIconModalOpen, setIsEditIconModalOpen] = useState(false);

  const handleIconClick = () => {
    setIsEditIconModalOpen(true);
  };

  const handleEditIconModalClose = () => {
    setIsEditIconModalOpen(false);
  };

  const handleEditIcon = (value: string) => {
    onIconChange({ icon: value, id: id })
    setIsEditIconModalOpen(false);
  }

  return (
    <>
      <IconWrapper>
        <EditButton icon onClick={handleIconClick}>
          <IconButton>
            <Icon fontSize="inherit">{icon}</Icon>
          </IconButton>
        </EditButton>
      </IconWrapper>
      <SimpleDialog
        open={isEditIconModalOpen}
        onClose={handleEditIconModalClose}
        onIconChangeClick={value => handleEditIcon(value)}
      />
      <Box display="flex" justifyContent="center" mt={1}>
        <EditableText
          initialText={text}
          component="h4"
          variant="h6"
          align="center"
          fontWeight={500}
        />
      </Box>
      <Box display="flex" justifyContent="center" mt={1}>
        <EditableText
          initialText={additionalText}
          component="p"
          align="center"
          fontWeight={500}
        />
      </Box>
    </>
  );
};
