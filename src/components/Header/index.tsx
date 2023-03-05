import { Box, Button, Container, Grid } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { LinkStyle } from './styles'

import { SignInModal } from 'components/Modals/SignIn'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { profileActions } from 'store/profile/slice'

export const Header = () => {
  const dispatch = useAppDispatch()
  const { isAuth } = useAppSelector((state) => state.profile)
  const { t, i18n } = useTranslation()

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language)
  }

  const handleLogout = () => {
    dispatch(profileActions.logout())
  }

  return (
    <Box sx={{ p: 3, borderBottom: '1px solid #b2ebf2' }}>
      <Container>
        <Grid container justifyContent='center' alignItems='center'>
          <Grid item xs={2}>
            <LinkStyle to={'/'}>{t('header.textMain')}</LinkStyle>
          </Grid>
          <Grid item xs={2}>
            <LinkStyle to={'/news'}>{t('header.textNews')}</LinkStyle>
          </Grid>
          <Grid item xs={2}>
            {isAuth ? (
              <LinkStyle to={'/profile'}>{t('header.profile')}</LinkStyle>
            ) : (
              <SignInModal />
            )}
          </Grid>
          <Grid item xs={2}>
            {isAuth && (
              <Button size='large' variant='outlined' onClick={handleLogout}>
                {t('header.buttonLogOut')}
              </Button>
            )}
          </Grid>
          <Grid item xs={2}>
            <Button size='large' onClick={() => changeLanguage('en')}>
              ENG
            </Button>
            <Button disabled>|</Button>
            <Button size='large' onClick={() => changeLanguage('ua')}>
              UA
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
