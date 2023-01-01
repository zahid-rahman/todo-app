from django.db import models
import datetime
# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    createdAt = models.DateField(default=datetime.date.today)