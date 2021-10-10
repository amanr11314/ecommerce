# Generated by Django 3.2.8 on 2021-10-10 06:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='color',
            field=models.CharField(blank=True, default='NONE', max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='discount',
            field=models.DecimalField(blank=True, decimal_places=2, default=0.0, max_digits=4, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='size',
            field=models.CharField(blank=True, default='NONE', max_length=250, null=True),
        ),
    ]
