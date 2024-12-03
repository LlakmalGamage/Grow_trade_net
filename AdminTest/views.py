from django.http import JsonResponse
from .models import InputData
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import joblib
import tensorflow as tf
from sklearn.preprocessing import StandardScaler
from rest_framework.views import APIView
import numpy as np
from sklearn.preprocessing import StandardScaler
import logging

logger = logging.getLogger(__name__)



     

class PredictAPIView(APIView):
    def post(self, request, *args, **kwargs):
        # Load the input data
        input_data = request.data

        # Log the received data
        logger.info("Received data from frontend: %s", input_data)
        input_data = request.data
        # Scale the input data using the saved scaler
        scaler = joblib.load(r'F:\Level 300\Project\django testing\admin test\ai_models\scaler_123.pkl')
        scaled_data = np.array([[input_data['Nitrogen'], input_data['Phosphorus'],input_data['Potassium'],input_data['temperature'],input_data['Humidity'],input_data['PH'],input_data['RainFall']]])
        scaled_data=scaler.transform(scaled_data)        
        # Load the pre-trained model
        model = tf.keras.models.load_model(r'F:\Level 300\Project\django testing\admin test\ai_models\crop_recommandation.h5')
        # Make predictions
        predictions = np.argmax(model.predict(scaled_data), axis=-1)
        
        prediction_number=predictions[0]
        crope=None
        match prediction_number:
          case 0:
            crope="Apple"
          case 1:
            crope="Banana"  
          case 2:
            crope="Blackgram"  
          case 3:
            crope="Chickpea"  
          case 4:
            crope="Coconut"  
          case 5:
            crope="Coffee"  
          case 6:
            crope="cotton"  
          case 7:
            crope="Grapes"  
          case 8:
            crope="Jute"  
          case 9:
            crope="Kidneybeans"
          case 10:
            crope="Lentil" 
          case 11:
            crope="Maize"   
          case 12:
            crope="Mango"   
          case 13:
            crope="Mothbeans"
          case 14:
            crope="Mungbean"
          case 15:
            crope="Muskmelon"
          case 16:
            crope="Orange"
          case 17:
            crope="Papaya"    
          case 18:
            crope="Pigeonpeas" 
          case 19:
            crope="Pomegranate"   
          case 20:
            crope="Rice"    
          case 21:
            crope="watermelon"  





        return Response({'prediction': crope}, status=status.HTTP_200_OK)
