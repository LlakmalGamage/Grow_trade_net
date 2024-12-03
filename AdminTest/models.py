from django.db import models

class InputData(models.Model):

    Nitrogen=models.FloatField()

    Phosphorus=models.FloatField()

    Potassium=models.FloatField()

    temperature=models.FloatField()

    Humidity=models.FloatField()

    PH=models.FloatField()

    RainFall=models.FloatField()



