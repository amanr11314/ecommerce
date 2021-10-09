from rest_framework import viewsets, permissions

from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer

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

# Product API Public GET request
class ProductAPIPublic(viewsets.ReadOnlyModelViewSet):

    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all()
        # p_id = self.request.query_params.get('p_id',None)
        # c_id = self.request.query_params.get('category',None)
        # if p_id is not None:
        #     queryset = queryset.filter(p_id = p_id)
        #     return queryset
        # elif c_id is not None:
        #     queryset = queryset.filter(c_id = c_id)
        #     return queryset
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




