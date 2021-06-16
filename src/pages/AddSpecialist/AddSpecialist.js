import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Select from "react-select";
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { addNewItem } from '../../store/all-items/actions';

const validationSchema = yup.object().shape({
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

const AddSpecialist = () => {
  const dispatch = useDispatch();
  const [selectValue, setSelectValue] = useState(null)
  const specialtyOptions = [
    {value: 'psychologist', label: 'Psychologist'},
    {value: 'psychotherapist', label: 'Psychotherapist'},
    {value: 'psychiatrist', label: 'Psychiatrist'},    
  ];

  const handleSubmit = (item) => {
    dispatch(addNewItem({...item, isFavourite: false, isDisfavourite: false}));
    setSelectValue(null);
  }

  return (
    <Formik
      initialValues={{ name: '', email: '', specialty: null }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <Form className='add-spec__form'>
          <label className='add-spec__label'>Specialist name</label>
          <Field 
            type='text'
            name='name'
            placeholder='Add specialist name'
            className='add-spec__input'
          />
          {errors.name && touched.name ? (
            <div>{errors.name}</div>
          ) : null}
          <label className='add-spec__label'>Specialty</label>
          <Select
            name='specialty'
            options={specialtyOptions}
            placeholder='Choose specialty'
            value={selectValue}
            className='add-spec__select'
            onChange={option => {
              setSelectValue({label: specialtyOptions.find(e => e.value === option.value).label, value: option.value})  
              setFieldValue('specialty', option.value)
            }}
          />
          {errors.specialty && touched.specialty ? (
            <div>{errors.specialty}</div>
          ) : null}
          <label className='add-spec__label'>Specialist email</label>
          <Field 
            type='email'
            name='email'
            placeholder='Add specialist email'
            label='Specialist email'
            className='add-spec__input'
          />
          {errors.email && touched.email ? (
            <div>{errors.email}</div>
          ) : null}
          <Field 
            type='submit'
            name='submit'
            value='Add new specialist to DB'
            className='add-spec__submit'
          />
        </Form>
      )}

      
    </Formik>
  );
};

export default AddSpecialist;