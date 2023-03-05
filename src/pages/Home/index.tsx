import { Button, Container, Grid, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const Home = () => {
  const { t } = useTranslation()
  return (
    <Typography sx={{ backgroundColor: '#e0f2f1', height: '100%' }}>
      <Container sx={{ padding: 10, textAlign: 'center', height: '100vh', color: '#1565c0  ' }}>
        <Typography variant='h3' sx={{ marginBottom: 5 }}>
          {t('home.header')}{' '}
        </Typography>
        <Typography variant='overline'>{t('home.text')} </Typography>
      </Container>
    </Typography>
  )
}
