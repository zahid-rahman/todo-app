from django.urls import path, include
from api.views import * 
urlpatterns = [
    path('all', getAll),
    path('create', create)
]
