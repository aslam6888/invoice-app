from django.db import models
from app.core.models import Customer
from app.inventory.models import Product
# Create your models here.

class Invoice(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    subtotal = models.FloatField()
    discount = models.FloatField()
    total = models.FloatField()


class InvoiceItem(models.Model):
    invoice = models.ForeignKey(Invoice, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_inv')
