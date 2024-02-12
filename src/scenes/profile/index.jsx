import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../Components/Dashboard/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Delete User" subtitle="Delete User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="User ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.UID}
                name="UID"
                error={!!touched.UID && !!errors.UID}
                helperText={touched.UID && errors.UID}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Report ID"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.R_ID}
                name="R_ID"
                error={!!touched.R_ID && !!errors.R_ID}
                helperText={touched.R_ID && errors.R_ID}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="User Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.U_Type}
                name="U_Type"
                error={!!touched.U_Type && !!errors.U_Type}
                helperText={touched.U_Type && errors.U_Type}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" style={{ backgroundColor: 'red' }}>
                Remove User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};



const checkoutSchema = yup.object().shape({
  UID: yup.number().required("required"),
  R_ID: yup.number().required("required"),
  U_Type: yup.string().required("required"),
  
});
const initialValues = {
  firstName: "",
  R_ID: "",
  U_Type: "",

};

export default Form;
