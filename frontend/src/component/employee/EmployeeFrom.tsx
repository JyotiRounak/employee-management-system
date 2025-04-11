import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Employee } from '../../types/employee';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../reduxStore/store';
import { createEmployee } from '../../reduxStore/employeeSlice';

export const EmployeeFrom: React.FC= () => {
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik<Employee>({

    initialValues: {
      name: '',
      email: '',
      role: '',
      department: '',
      phone: '',
      address: '',
      designation: '',
      join_date: ''
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  role: Yup.string().required("Role is required"),
  designation: Yup.string(), // ✅ correct spelling
  department: Yup.string(),
  phone: Yup.string(),
  address: Yup.string(),
  join_date: Yup.date().required("Date is required") // ✅ correct spelling
}),

    onSubmit: async(values, { resetForm } ) =>{
      try {
        await dispatch(createEmployee(values));
        console.log(values)
        resetForm();
      } catch (error) {
        console.log("error", error)
      }
    }

  });
  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
    <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustom01">
        <Form.Label>Name</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.touched.name && !!formik.errors.name}
        />
        <Form.Control.Feedback type='invalid'>{formik.errors.name}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom02">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={!!formik.touched.email && !!formik.errors.email}
          />
          <Form.Control.Feedback type='invalid'>{formik.errors.email}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
        <Form.Label>Role</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="text"
            placeholder="Role"
            name="role"
            value={formik.values.role}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
            aria-describedby="inputGroupPrepend"
            required
            isInvalid={!!formik.touched.role && !!formik.errors.role}
            />
            <Form.Control.Feedback type='invalid'>{formik.errors.role}</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="validationCustom03">
        <Form.Label>Desgination</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Designation"
        name="designation"
        value={formik.values.designation}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required 
        isInvalid={!!formik.touched.designation && !!formik.errors.designation}
          />
          <Form.Control.Feedback type='invalid'>{formik.errors.designation}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="3" controlId="validationCustom04">
        <Form.Label>Department</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Department"
        name="department"
        value={formik.values.department}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required 
        isInvalid={!!formik.touched.department && !!formik.errors.department}
          />
          <Form.Control.Feedback type='invalid'>{formik.errors.department}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="3" controlId="validationCustom05">
        <Form.Label>Phone</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Phone"
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
         required 
         isInvalid={!!formik.touched.phone && !!formik.errors.phone}
          />
          <Form.Control.Feedback type='invalid'>{formik.errors.phone}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="3" controlId="validationCustom05">
        <Form.Label>Address</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Address"
        name="address"
        value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} 
          required 
          isInvalid={!!formik.touched.address && !!formik.errors.address}
          />
          <Form.Control.Feedback type='invalid'>{formik.errors.address}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="3" controlId="validationCustom05">
        <Form.Label>Joining Date</Form.Label>
        <Form.Control 
        type="text"
         placeholder="Joining Date" 
         name="join_date"
         value={formik.values.join_date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
         required 
         isInvalid={!!formik.touched.join_date && !!formik.errors.join_date}
          />
          <Form.Control.Feedback type='invalid'>{formik.errors.join_date}</Form.Control.Feedback>
      </Form.Group>
    </Row>
    
    <Button type="submit"  disabled={formik.isSubmitting}>
      {formik.isSubmitting ? "Submitting..." : "Submit"}
    </Button>
  </Form>

  )
}
