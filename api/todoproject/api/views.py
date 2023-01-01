from rest_framework.response import Response
from rest_framework.decorators import api_view

# get all todo list
@api_view(['GET'])
def getAll(request):
    context = [
        {
            "id": 1,
            "title": "Breakfast",
            "description": "Eating breakfast at 7am sharp"
        },
        {
            "id": 2,
            "title": "Lunch",
            "description": "Eating Lunch at 12pm sharp"
        },
        {
            "id": 3,
            "title": "Evening Snacks",
            "description": "Eating Evening Snacks at 5pm sharp"
        }
    ]
    return Response(context)


# create a todo
@api_view(['POST'])
def create(request):
    name = request.data['name']
    age = request.data['age']
    context = {
        "name": name,
        "age": age
    }

    return Response(context)
