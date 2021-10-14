from django.db.models import fields
from rest_framework import serializers
from .models import *
import datetime


# Category Serializer
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

# Product Serializer
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('p_id','name','desc','cost_for_one','discount','image','size','color','category','avg_rating','stock_count')

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('r_id','msg','rating','product','created_at','created_by')

    def create(self, validated_data):
        ratings = [1.0,1.5,2.0,2.5,3.0,3.5,4.0,4.5,5.0]
        if(validated_data['rating'] not in ratings):
            raise ValueError('Rating Not Specifc')
        return super().create(validated_data)

class ShoppingCartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingCartItem
        fields = ['product','quantity']
class ShoppingCartItemRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingCartItem
        fields = ['product','quantity']
    product = ProductSerializer()


