from django.db import models


class Task(models.Model):
    """
    A model for a to-do task.

    Fields:
        title: The title of the task.
        description: A description of the task.
        is_completed: A Boolean value indicating whether the task is complete.
        due_date: The due date for the task.
        created_at: The date and time the task was created.
        updated_at: The date and time the task was last updated.
    """

    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    is_completed = models.BooleanField(default=False)
    due_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
