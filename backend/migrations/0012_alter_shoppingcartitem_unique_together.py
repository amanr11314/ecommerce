# Generated by Django 3.2.8 on 2021-10-13 17:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0011_alter_shoppingcartitem_unique_together'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='shoppingcartitem',
            unique_together=set(),
        ),
    ]
