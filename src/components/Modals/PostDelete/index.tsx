import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

interface I_PostDelete {
  open: boolean
  onSuccess: () => void
  onClose: () => void
}

export const PostDelete = ({ open, onClose, onSuccess }: I_PostDelete) => {
  const { t } = useTranslation()

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{t('postDelete.title')}</DialogTitle>
      <DialogContent>
        <DialogContentText>{t('postDelete.mainText')}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t('postDelete.buttonNo')}</Button>
        <Button onClick={onSuccess}>{t('postDelete.buttonYes')}</Button>
      </DialogActions>
    </Dialog>
  )
}
