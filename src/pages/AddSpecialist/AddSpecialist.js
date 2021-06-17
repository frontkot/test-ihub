import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Select from "react-select";
import { useDispatch } from 'react-redux';
import { addNewItem } from '../../store/all-items/operations';
import { validationSchema, specialtyOptions } from './utils';
import './AddSpecialist.scss';

const AddSpecialist = () => {
  const dispatch = useDispatch();
  const [selectValue, setSelectValue] = useState(null)

  const handleSubmit = async (item) => {
    const newItem = { 
        ...item, // distructure obj
        isFavourite: false, // add default isFavourite
        isDisfavourite: false, // add default isDisfavourite
        id: `${item.name.split(' ').join('')}-${item.specialty}` // add custom id
      }

    dispatch(addNewItem(newItem)) // add new item to store and to DB
    setSelectValue(null); // reset select
  }

  return (
    <Formik
      initialValues={{ name: '', email: '', specialty: null }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm(); // reset form
      }}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <Form className='add-form__container'>
          <label className='add-form__label'>Specialist name</label>
          <Field 
            type='text'
            name='name'
            placeholder='Add specialist name'
            className='add-form__input'
          />
          {errors.name && touched.name ? (
            <div className='add-form__error'>{errors.name}</div>
          ) : null}

          <label className='add-form__label'>Specialty</label>
          <Select
            name='specialty'
            options={specialtyOptions}
            placeholder='Choose specialty'
            value={selectValue}
            className='add-form__select'
            onChange={option => {
              setSelectValue({label: specialtyOptions.find(e => e.value === option.value).label, value: option.value}) // set selected value to state 
              setFieldValue('specialty', option.value) // set selected value to field
            }}
          />
          {errors.specialty && touched.specialty ? (
            <div className='add-form__error'>{errors.specialty}</div>
          ) : null}

          <label className='add-form__label'>Specialist email</label>
          <Field 
            type='email'
            name='email'
            placeholder='Add specialist email'
            label='Specialist email'
            className='add-form__input'
          />
          {errors.email && touched.email ? (
            <div className='add-form__error'>{errors.email}</div>
          ) : null}
          
          <Field 
            type='submit'
            name='submit'
            value='Add new specialist to DB'
            className='add-form__submit'
          />
        </Form>
      )}
    </Formik>
  );
};

export default AddSpecialist;