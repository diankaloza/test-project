import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
  Container,
} from '@mui/material'

import { useEffect, useState } from 'react'

import { PostDelete } from 'components/Modals/PostDelete'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { I_Post } from 'models/post'

import { deletePost, getPosts, resetPosts } from 'store/posts/slice'

import { Status } from 'store/posts/types'

const limitPosts = 9

export const News = () => {
  const dispatch = useAppDispatch()
  const { posts, status } = useAppSelector((state) => state.posts)
  const [page, setPage] = useState(1)
  const [openedDeleteModal, setOpenDeleteModal] = useState(false)
  const [currentPostId, setCurrentPostId] = useState(0)

  const handleOpenModal = (postId: number) => {
    setCurrentPostId(postId)
    setOpenDeleteModal(true)
  }

  const handleCloseModal = () => {
    setOpenDeleteModal(false)
  }

  const handleDeletePost = () => {
    dispatch(deletePost(currentPostId))
    handleCloseModal()
  }

  const handleLoadMore = () => {
    setPage((prev) => prev + 1)
  }

  useEffect(() => {
    dispatch(getPosts({ limit: limitPosts, page }))
  }, [dispatch, page])

  useEffect(() => {
    return () => {
      dispatch(resetPosts())
    }
  }, [dispatch])

  if (status === Status.LOADING) {
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    )
  }

  return (
    <Container sx={{ p: 2, backgroundColor: '#e0f2f1' }}>
      <Grid container spacing={2} justifyContent='center' alignItems='center'>
        {posts.map((post: I_Post) => (
          <Grid key={post.id} item md={4}>
            <Card>
              <CardContent sx={{ height: 200, color: '#1565c0 ' }}>
                <Typography variant='h5' component='div'>
                  {post.title}
                </Typography>
                <Typography variant='body2'>{post.body}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleOpenModal(post.id)} size='large'>
                  {' '}
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <PostDelete
        onSuccess={handleDeletePost}
        onClose={handleCloseModal}
        open={openedDeleteModal}
      />
      <Button
        variant='contained'
        color='info'
        size='large'
        onClick={handleLoadMore}
        sx={{ margin: 2 }}
      >
        Завантажити ще
      </Button>
    </Container>
  )
}
