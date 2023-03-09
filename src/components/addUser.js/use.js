// import { Box } from "@mui/system";
// import React, { useState } from "react";

// const StepOne = ({ user, handleChange, errors }) => {
//   return (
//     <div>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={user.name}
//           onChange={handleChange}
//         />
//       </label>
//       {errors.name && <div>{errors.name}</div>}
//       <label>
//         Email:
//         <input
//           type="text"
//           name="email"
//           value={user.email}
//           onChange={handleChange}
//         />
//       </label>
//       {errors.email && <div>{errors.email}</div>}
//     </div>
//   );
// };

// const StepTwo = ({ user, handleChange, errors }) => {
//   return (
//     <div>
//       <label>
//         Gender:
//         <input
//           type="text"
//           name="gender"
//           value={user.gender}
//           onChange={handleChange}
//         />
//       </label>
//       {errors.gender && <div>{errors.gender}</div>}
//       <label>
//         Phone:
//         <input
//           type="text"
//           name="phone"
//           value={user.phone}
//           onChange={handleChange}
//         />
//       </label>
//       {errors.phone && <div>{errors.phone}</div>}
//     </div>
//   );
// };

// const StepperForm = ({ initialUser, onSubmit }) => {
//   const [user, setUser] = useState(initialUser);
//   const [activeStep, setActiveStep] = useState(0);
//   const [errors, setErrors] = useState({});

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

//   const handleNext = () => {
//     const validationErrors = validateUser(user, activeStep);
//     if (Object.keys(validationErrors).length === 0) {
//       setErrors({});
//       if (activeStep === 0) {
//         setActiveStep(1);
//       } else {
//         onSubmit(user);
//       }
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const handleBack = () => {
//     setActiveStep(0);
//   };

//   const validateUser = (user, step) => {
//     const errors = {};

//     if (step === 0) {
//       if (!user.name) {
//         errors.name = "Name is required";
//       }
//       if (!user.email) {
//         errors.email = "Email is required";
//       } else if (!/\S+@\S+\.\S+/.test(user.email)) {
//         errors.email = "Email is invalid";
//       }
//     } else {
//       if (!user.gender) {
//         errors.gender = "Gender is required";
//       }
//       if (!user.phone) {
//         errors.phone = "Phone is required";
//       } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(user.phone)) {
//         errors.phone = "Phone is invalid";
//       }
//     }

//     return errors;
//   };

//   return (
//     <div>
//         <Box sx={{ width: '100%' }}>
//       {activeStep === 0 && (
//         <StepOne user={user} handleChange={handleChange} errors={errors} />
//       )}
//       {activeStep === 1 && (
//         <StepTwo user={user} handleChange={handleChange} errors={errors} />
//       )}
//       <button onClick={handleBack} disabled={activeStep === 0}>
//         Back
//       </button>
//       <button onClick={handleNext}>
//         {activeStep === 0 ? "Next" : "Submit"}
//       </button>
//       </Box>
//     </div>
//   );
// };

// export