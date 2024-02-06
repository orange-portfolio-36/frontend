
import { Box, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import {  ReactNode} from "react";

interface ModalGlobalProps {
  open: boolean;
  onClose: () => void
  header: ReactNode;
  content: ReactNode;
  footer: ReactNode;
}

export default function ModalGlobal({open, onClose, header, content, footer}: ModalGlobalProps){
  return(
    <Dialog open={open} onClose={onClose} maxWidth={'md'} fullWidth>
      <DialogTitle>{header}</DialogTitle>
      <Box padding={'20px'} >
        {content}
      </Box>
      <DialogActions>{footer}</DialogActions>
    </Dialog>
  )
}