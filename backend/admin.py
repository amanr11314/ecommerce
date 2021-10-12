from django.contrib import admin
from .models import Category, Product, Review
# Register your models here.

models = [
    Category,
    Product,
    Review
]

for model in models:
    admin.site.register(model)