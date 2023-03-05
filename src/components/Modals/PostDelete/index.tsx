import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material'

interface PostDelete {
  open: boolean
  onSuccess: () => void
  onClose: () => void
}

export const PostDelete = ({ open, onClose, onSuccess }: PostDelete) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Removing post</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This post will be deleted with all its contents. Remove?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>No</Button>
        <Button onClick={onSuccess}>Yes</Button>
      </DialogActions>
    </Dialog>
  )
}
