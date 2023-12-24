from django.shortcuts import render
from .models import Products
from django.http.response import JsonResponse
# Create your views here.

def products_list(request):
    data = Products.objects.values()
    return JsonResponse({"res":"success", "data": list(data)})