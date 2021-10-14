from functools import partial
from rest_framework import status, viewsets, permissions
from rest_framework.response import Response

from .models import Category, Product, Review
from .serializers import CategorySerializer, ProductSerializer, ReviewSerializer, ShoppingCartItemRetrieveSerializer, ShoppingCartItemSerializer

# Product API Admin rights
class ProductAPIAdmin(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAdminUser,
        permissions.IsAuthenticated
    ]
    serializer_class = ProductSerializer

    def perform_create(self, serializer):
        serializer.save()

# Category API Admin rights
class CategoryAPIAdmin(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAdminUser,
        permissions.IsAuthenticated
    ]

    serializer_class = CategorySerializer

    def perform_create(self, serializer):
        serializer.save()
class ReviewAPIAuth(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = ReviewSerializer

    def perform_create(self, serializer):
        # serializer.save()
        current_user_name = self.request.user.__getattribute__('first_name')
        serializer.save(created_by=current_user_name)
    
    def create(self, request, *args, **kwargs):
        try:
            value = super().create(request, *args, **kwargs)
            return value
            # if ValueError('Rating Not Specifc'):
            #     return Response({"detail":"Rating Not Specific"},status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response({"detail":"Rating Not Specific"},status=status.HTTP_400_BAD_REQUEST)

    def perform_destroy(self, instance):
        pass
    
    def perform_update(self, serializer):
        pass

# Product API Public GET request
class ProductAPIPublic(viewsets.ReadOnlyModelViewSet):

    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all()
        p_id = self.request.query_params.get('p_id',None)
        c_id = self.request.GET.get('category',None)
        # c_id = self.request.query_params.get('category',None)
        if p_id is not None:
            queryset = queryset.filter(p_id = p_id)
            return queryset
        elif c_id is not None:
            queryset = queryset.filter(category = c_id)
            return queryset
        return queryset

# Category API Public GET request
class CategoryAPIPublic(viewsets.ReadOnlyModelViewSet):
    serializer_class = CategorySerializer

    def get_queryset(self):
        queryset = Category.objects.all()
        c_id = self.request.query_params.get('c_id',None)
        if c_id is not None:
            queryset = queryset.filter(c_id = c_id)
            return queryset
        return queryset

class ReviewAPIPublic(viewsets.ReadOnlyModelViewSet):

    serializer_class = ReviewSerializer

    def get_queryset(self):
        r_id = self.request.query_params.get('r_id',None)
        p_id = self.request.GET.get('product',None)
        if r_id is not None:
            queryset = Review.objects.filter(r_id = r_id)
            return queryset
        elif p_id is not None:
            queryset = Review.objects.filter(product = p_id)
            return queryset
        return []

class ShoppingCartItemAPIAuth(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    # serializer_class = ShoppingCartItemSerializer
    def get_serializer_class(self):
        if self.action == 'list':
            return ShoppingCartItemRetrieveSerializer
        if self.action == 'retrieve':
            return ShoppingCartItemRetrieveSerializer
        return ShoppingCartItemSerializer

    def get_queryset(self):
        return self.request.user.cart.all()
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    # def update(self, request, *args, **kwargs):
    #     partial = True
    #     instac
    #     return super().update(request, *args, **kwargs)







