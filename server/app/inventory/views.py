from django.shortcuts import render
from .models import Product
from django.http.response import JsonResponse
# Create your views here.

def products_list(request):
    data = Product.objects.values()
    return JsonResponse({"res":"success", "data": list(data)})