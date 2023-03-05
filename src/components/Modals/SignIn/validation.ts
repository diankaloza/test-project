import * as Yup from 'yup'

export const signInSchema = Yup.object({
  username: Yup.string().required('validations.required'),
  password: Yup.string().required('validations.required'),
})
