from django.db import models

# Create your models here.

class Customer(models.Model):
    name = models.CharField(max_length=250)
    email = models.CharField(max_length=250)
    city = models.CharField(max_length=250)
    country = models.CharField(max_length=250)