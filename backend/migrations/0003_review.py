# Generated by Django 3.2.8 on 2021-10-12 06:43

import backend.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('backend', '0002_auto_20211010_1130'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('r_id', models.CharField(default=backend.models.generate_unique_rid, max_length=12, primary_key=True, serialize=False, unique=True)),
                ('msg', models.TextField()),
                ('rating', models.DecimalField(choices=[(1.0, 1.0), (1.5, 1.5), (2.0, 2.0), (2.5, 2.5), (3.0, 3.0), (3.5, 3.5), (4.0, 4.0), (4.5, 4.5), (5.0, 5.0)], decimal_places=1, default=1.0, max_digits=1)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend.product')),
            ],
        ),
    ]
