import * as Yup from 'yup';

export const InternshipSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short!')
    .max(50, 'Name is too long!')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  number: Yup.string()
    .matches(/^\d{10}$/, 'Number must be exactly 10 digits')
    .required('Number is required'),
  role: Yup.string()
    
    .required('Role is required')
});
