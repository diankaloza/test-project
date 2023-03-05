import { useDispatch } from 'react-redux'

import { AppDispatch } from '../store/posts'

export const useAppDispatch: () => AppDispatch = useDispatch
