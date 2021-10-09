from django.db.models import fields
from rest_framework import serializers
from .models import *


# Category Serializer
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

# Product Serializer
class ProductSerializer(serializers.Serializer):
    class Meta:
        model = Product
        fields = ('p_id','name','desc','cost_for_one','discount','image','size','color','category','stock_count')

