import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '../store/posts'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
