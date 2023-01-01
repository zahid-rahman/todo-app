from django.urls import path, include
from api.views import * 
urlpatterns = [
    path('all', TodoList.as_view()),
    path('create', TodoList.as_view()),
    path('<int:pk>', TodoDetails.as_view()),
    # path('/<int:pk>', update_todo),
    # path('/<int:pk>', delete_todo)
]
