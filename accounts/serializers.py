from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# To keep username same as email for authentication 
# Handle this in frontend

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','first_name','last_name','email')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','first_name','last_name','email','password')
        extra_kwargs = {'password': {'write_only':True}}

    def create(self,validated_data):
        """
        TODO:: Hanlde Custom fields extra validation and raise exception
        """
        user = User.objects.create_user(
            validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
            password=validated_data['password'],
        )

        return user
        

# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self,data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError('Incorrect credentials')