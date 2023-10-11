from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer
from .filters import TaskFilter


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    ordering = ["-id"]
    search_fields = ["title", "description"]
    filterset_class = TaskFilter
