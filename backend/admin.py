from django.contrib import admin
from .models import Category, Product, Review, ShoppingCartItem
# Register your models here.

models = [
    Category,
    Product,
    Review,
    ShoppingCartItem
]

for model in models:
    admin.site.register(model)