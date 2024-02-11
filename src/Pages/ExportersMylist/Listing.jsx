import { Box, Button, TextField } from "@mui/material";
import { Formik } from 'formik';
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import '../../App.css';
import Navbar from "../../Components/ExportersAfterLoginNavbar/Navbar";
import Main from "../../Components/ListPage/list"

const Listing = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleListingSubmit = (values) => {
    // Include selected image in form submission
    console.log({ ...values});
  };

  return (

    <>
    <Navbar />

    <Box m="20px">
     <div className="form-container"> 
      <Formik
        onSubmit={handleListingSubmit}
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
                type="text"
                label="Addverticement Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.adname}
                name="adname"
                error={!!touched.adname && !!errors.adname}
                helperText={touched.adname && errors.adname}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Crope Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.crope_type}
                name="crope_type"
                error={!!touched.crope_type && !!errors.crope_type}
                helperText={touched.crope_type && errors.crope_type}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="location"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ad_location}
                name="ad_location"
                error={!!touched.ad_location && !!errors.ad_location}
                helperText={touched.ad_location && errors.ad_location}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Unit Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.unit_price}
                name="unit_price"
                error={!!touched.unit_price && !!errors.unit_price}
                helperText={touched.unit_price && errors.unit_price}
                sx={{ gridColumn: "span 4" }}
              /> 
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      </div> 
    </Box>
    <Main/>
    

    </>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  adname: yup.string().required("required"),
  crope_type: yup.string().required("required"),
  ad_location: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  description: yup.string().required("required"),
  unit_price: yup.string().required("required"),


});

const initialValues = {
  adname: "",
  crope_type: "",
  ad_location: "",
  contact: "",
  description: "",
  unit_price: "",
};

export default Listing;