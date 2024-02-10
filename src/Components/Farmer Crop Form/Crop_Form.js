import { Box, Button, TextField } from "@mui/material";
import { Formik } from 'formik';
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import '../../App.css';


const Listing = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleListingSubmit = (values) => {
    // Include selected image in form submission
    console.log({ ...values});
  };

  return (



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
                label="Nitrogen Content in soil"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Nitrogen}
                name="Nitrogen"
                error={!!touched.Nitrogen && !!errors.Nitrogen}
                helperText={touched.Nitrogen && errors.Nitrogen}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phosphorus Content in soil"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Phosphorus}
                name="Phosphorus"
                error={!!touched.Phosphorus && !!errors.Phosphorus}
                helperText={touched.Phosphorus && errors.Phosphorus}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Potassium Content in soil"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Potassium}
                name="Potassium"
                error={!!touched.Potassium && !!errors.Potassium}
                helperText={touched.Potassium && errors.Potassium}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Avarage Temperature in your area"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Temperature}
                name="Temperature"
                error={!!touched.Temperature && !!errors.Temperature}
                helperText={touched.Temperature && errors.Temperature}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Avarage Humidity in your area"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Humidity}
                name="Humidity"
                error={!!touched.Humidity && !!errors.Humidity}
                helperText={touched.Humidity && errors.Humidity}
                sx={{ gridColumn: "span 4" }}
              /> 

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="PH Value in the soil"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.PH}
                name="PH"
                error={!!touched.PH && !!errors.PH}
                helperText={touched.PH && errors.PH}
                sx={{ gridColumn: "span 4" }}
              /> 
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Anual RainFall in your Area:"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.RainFall}
                name="RainFall"
                error={!!touched.RainFall && !!errors.RainFall}
                helperText={touched.RainFall && errors.RainFall}
                sx={{ gridColumn: "span 4" }}
              /> 
  


            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Prediction
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      </div> 
    </Box>
    
  );
};



const checkoutSchema = yup.object().shape({
    Nitrogen: yup.number().positive().required("required"),
    Phosphorus: yup.number().positive().required("required"),
    Potassium: yup.number().positive().required("required"),
    Temperature: yup
  .number().positive()
    .required("required"),
    Humidity: yup.number().positive().required("required"),
    PH: yup.number().positive().required("required"),
    RainFall: yup.number().positive().required("required")

});

const initialValues = {
    Nitrogen: "",
    Phosphorus: "",
    Potassium: "",
    Temperature: "",
    Humidity: "",
    PH: "",
    RainFall: ""
};

export default Listing;