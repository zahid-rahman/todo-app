from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .models import Todo
from .serializer import TodoSerializer
from rest_framework.parsers import JSONParser
from rest_framework import status
from django.http import Http404

class TodoList(APIView):
    def get(self, request, format=None):
        try:
            todos = Todo.objects.all()
            todo_serializer = TodoSerializer(todos, many=True)
            return Response({
                "data": todo_serializer.data,
                "stautsCode": status.HTTP_200_OK
            })
        except Todo.DoesNotExist:
            return Response({
                "errors": todo_serializer.errors,
                "stautsCode": status.HTTP_400_BAD_REQUEST
            })

    def post(self, request, format=None):
        todo_data = JSONParser().parse(request)
        todo_serializer = TodoSerializer(data=todo_data)
        if todo_serializer.is_valid():
            todo_serializer.save()
            context = {
                "data": todo_serializer.data,
                "statusCode": status.HTTP_201_CREATED
            }
            return Response(context)

        return Response({
            "error": todo_serializer.errors,
            "statusCode": status.HTTP_400_BAD_REQUEST
        })


class TodoDetails(APIView):
    def get_object(self, pk):
        try:
            return Todo.objects.get(pk=pk)
        except Todo.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=True):
        try:
            todo = self.get_object(pk)
            todo_serializer = TodoSerializer(todo)
            return Response({
                "data": todo_serializer.data,
                "statusCode": status.HTTP_200_OK
            })

        except Todo.DoesNotExist:
            return Response({"error": "todo not found", "statusCode": status.HTTP_400_BAD_REQUEST})

    def patch(self, request, pk, format=None):
        todo = self.get_object(pk)
        serializer = TodoSerializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "data": serializer.data,
                "status": status.HTTP_200_OK
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        todo = self.get_object(pk)
        todo.delete()
        return Response({
            "data": "todo deleted successfully",
            "statusCode": status.HTTP_204_NO_CONTENT
        })