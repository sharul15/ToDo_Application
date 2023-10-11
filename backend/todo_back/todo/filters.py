import django_filters
from .models import Task
from datetime import datetime, timezone


class TaskFilter(django_filters.FilterSet):
    """ """

    overdue = django_filters.BooleanFilter(method="filter_overdue")

    class Meta:
        model = Task
        fields = ["is_completed", "overdue"]

    def filter_overdue(self, queryset, name, value):
        """"""
        now = datetime.now(timezone.utc)

        if value:
            return queryset.filter(due_date__lt=now)

        return queryset.filter(due_date__gte=now)
