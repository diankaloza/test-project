import { yupResolver } from '@hookform/resolvers/yup'
import {
  Alert,
  Button,
  Snackbar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Box,
  Typography,
} from '@mui/material'
import { t } from 'i18next'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { I_SignUpForm } from './models'
import { signInSchema } from './validation'

import { useAppDispatch } from 'hooks/useAppDispatch'
import { profileActions } from 'store/profile/slice'

export const SignInModal = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<I_SignUpForm>({
    mode: 'onSubmit',
    resolver: yupResolver(signInSchema),
  })
  const [isWrongUser, setWrongUser] = useState(false)
  const [open, setOpen] = useState(false)

  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  const handleCloseWarning = () => {
    setWrongUser(false)
  }

  const handleSignUp: SubmitHandler<I_SignUpForm> = (values) => {
    if (values.username !== 'admin' || values.password !== '12345') {
      setWrongUser(true)
      return
    }
    navigate('/profile')
    dispatch(profileActions.signIn())
    setOpen(false)
  }

  return (
    <Typography>
      <Button size='medium' variant='outlined' onClick={handleOpenModal}>
        {t('header.buttonSignUp')}
      </Button>
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>Авторизація</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Для перегляду цієї сторінки необхідно ввести ім"я користувача та пароль
          </DialogContentText>
          <Box>
            <TextField
              type='text'
              margin='dense'
              fullWidth
              {...register('username')}
              placeholder='Username'
              variant='standard'
              error={Boolean(errors.username?.message)}
              helperText={t(errors.username?.message || '')}
            />

            <TextField
              type='password'
              margin='dense'
              fullWidth
              placeholder='Password'
              variant='standard'
              {...register('password')}
              error={Boolean(errors.username?.message)}
              helperText={t(errors.username?.message || '')}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Вийти</Button>
          <Button onClick={handleSubmit(handleSignUp)}>Увійти</Button>
        </DialogActions>
      </Dialog>
      {isWrongUser && (
        <Snackbar open={isWrongUser} autoHideDuration={6000} onClose={handleCloseWarning}>
          <Alert onClose={handleCloseWarning} severity='warning' sx={{ width: '100%' }}>
            Неправильно введено ім'я користувача або пароль
          </Alert>
        </Snackbar>
      )}
    </Typography>
  )
}
