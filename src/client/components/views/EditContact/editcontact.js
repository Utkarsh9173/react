import React,{useEffect,useState}  from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useHistory,useParams} from 'react-router-dom'
import { getContact } from '../Contacts/action';
import "./style.scss";


const EditContact = () => {
  let history=useHistory();
  let {id}=useParams();


  useEffect(() => {
    
    getContact(id);
    //console.log(props);
  }, []);
   // we will use async/await to fetch this data

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone:'',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone:Yup.number(),
    //   .max(10,'Must be 10 digits')
    //   .required(),
    }),
  
    onSubmit: values => {
      console.log(values);
    
     // addUserData(values);
     
      //setTimeout( history.push("/contacts"), 3000);
      setTimeout(function(){  history.push("/contacts");}, 1000);
    },
  });

//   async function addUserData(values) {  
//     const data = values;
//     console.log(data);
     
//   }
  
  return (
    <div className="card mx-auto card-width border-info" >
  <div className="card-header">
    <h4>Edit User</h4>
  </div>
  <div className="card-body">
  <form onSubmit={formik.handleSubmit}>
  <div className="form-group">
      <label htmlFor="firstName">First Name</label>
      <input
         id="firstName"
         name="firstName"
         type="text"
         placeholder="First Name"
         className="form-control"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.firstName}
       />
       {formik.touched.firstName && formik.errors.firstName ? (
         <div>{formik.errors.firstName}</div>
       ) : null}
      
    </div>
    <div className="form-group">
      <label htmlFor="inputPassword4">Last Name</label>
  
      <input
         id="lastName"
         name="lastName"
         type="text"
         placeholder="LastName"
         className="form-control"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.lastName}
       />
       {formik.touched.lastName && formik.errors.lastName ? (
         <div>{formik.errors.lastName}</div>
       ) : null}
    </div>
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input
         id="email"
         name="email"
         type="email"
         placeholder="Enter Email"
         className="form-control"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
       />
       {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>
       ) : null}
 </div>
 <div className="form-group">
    <label htmlFor="phone">Phone</label>
    <input
         id="phone"
         name="phone"
         type="number"
         placeholder="Enter Phone Number"
         className="form-control"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.phone}
       />
       {formik.touched.phone && formik.errors.phone ? (
         <div>{formik.errors.phone}</div>
       ) : null}
 </div>
 <button type="submit" className="btn btn-primary btn-block">Edit User</button>
 </form>
  </div>
</div>
  );
};
export default EditContact;