# Generated by Django 4.1.4 on 2023-01-01 11:26

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.CharField(max_length=200)),
                ('createdAt', models.DateField(default=datetime.datetime(2023, 1, 1, 11, 26, 53, 486778))),
            ],
        ),
    ]
