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
  onIconChangeClick: (value: {
    label: string;
    value: string;
  }) => void;
}

export const SimpleDialog: React.FC<SimpleDialogProps> = ({
  onClose,
  open,
  onIconChangeClick
}) => {
  const [value, setValue] = React.useState<{
    label: string;
    value: string;
  } | null>(null);

  const handleIconChangeClick = () => {
    if (value === null) return
    onIconChangeClick(value)
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
            value={value}
            onChange={(
              event,
              newValue: { label: string; value: string } | null
            ) => {
              setValue(newValue);
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
            <Button variant="contained" size="large" disabled={value === null} onClick={handleIconChangeClick}>
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
  icon: string;
  text: string;
  additionalText: string;
}> = ({ icon, text, additionalText }) => {
  const [isEditIconModalOpen, setIsEditIconModalOpen] = useState(false);

  const handleIconClick = () => {
    setIsEditIconModalOpen(true);
  };

  const handleEditIconModalClose = () => {
    setIsEditIconModalOpen(false);
  };

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
        onIconChangeClick={handleEditIconModalClose}
      />
      <Box display="flex" justifyContent="center" mt={1}>
        <EditableText
          text={text}
          component="h4"
          variant="h6"
          align="center"
          fontWeight={500}
        />
      </Box>
      <Box display="flex" justifyContent="center" mt={1}>
        <EditableText
          text={additionalText}
          component="p"
          align="center"
          fontWeight={500}
        />
      </Box>
    </>
  );
};
