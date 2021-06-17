import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Required')
    .min(2, "The name is too short!")
    .max(50, "The name is too long!"),
  email: yup
    .string()
    .email('Invalid email')
    .required('Required'),
  specialty: yup
    .string()
    .required('Required') 
})

export const specialtyOptions = [
  {value: 'psychologist', label: 'Psychologist'},
  {value: 'psychotherapist', label: 'Psychotherapist'},
  {value: 'psychiatrist', label: 'Psychiatrist'},    
];