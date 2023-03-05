import { Container, ImageListItem, Typography } from '@mui/material'

import { useTranslation } from 'react-i18next'

import psycology from 'assets/images/123.png'

export const Profile = () => {
  const { t } = useTranslation()

  return (
    <Typography align='center'>
      <Container>
        <ImageListItem sx={{ marginBottom: 2 }}>
          {' '}
          <img src={`${psycology}?w=164&h=164&fit=crop`} alt=' psyco' />
        </ImageListItem>

        <Typography variant='h4' component='h4' sx={{ marginBottom: 2 }}>
          {' '}
          {t('profile.header')}
        </Typography>
        <Typography variant='subtitle1'>{t('profile.text')}</Typography>
      </Container>
    </Typography>
  )
}
