from django.urls import path
from .views import products_list

urlpatterns = [
    path('list', products_list)
]