import { Box, Button, TextField } from "@mui/material";
import { Formik } from 'formik';
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Listing = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const handleListingSubmit = async (values) => {
    try {

      const adjustedValues = {
        Nitrogen: Number(values.Nitrogen),
        Phosphorus: Number(values.Phosphorus),
        Potassium: Number(values.Potassium),
        temperature: Number(values.temperature),
        Humidity: Number(values.Humidity),
        PH: Number(values.PH),
        RainFall: Number(values.RainFall),
      };
      // Make an HTTP POST request to your backend API endpoint
      const response = await axios.post('http://127.0.0.1:9000/predict/', adjustedValues);
   
      // Check if the request is successful
      if (response.status === 200) {
        // Optionally, inspect the response data to make decisions
        console.log("Response data:", response.data);
  
        // If the response data meets certain conditions, navigate
        // For example, you might only want to navigate if the response contains certain values
        // This is just an example condition; adjust according to your actual response structure and requirements

      } else {
        // Handle non-200 response status codes
        console.error("Request failed with status:", response.status);
        // Optionally, provide feedback to the user
      }

      navigate('/farmers/prediction_output', { state: { prediction: response.data.prediction } });
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error submitting form:", error);
      // Optionally, provide feedback to the user
    }
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
                type="number"
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
                type="number"
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
                type="number"
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
                type="number"
                label="Avarage Temperature in your area"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.temperature}
                name="temperature"
                error={!!touched.temperature && !!errors.temperature}
                helperText={touched.temperature && errors.temperature}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
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
                type="number"
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
                type="number"
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
    temperature: yup
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
    temperature: "",
    Humidity: "",
    PH: "",
    RainFall: ""
};

export default Listing;