from rest_framework import routers, urlpatterns
from .api import CategoryAPIAdmin, CategoryAPIPublic, ProductAPIAdmin, ProductAPIPublic
router = routers.DefaultRouter()
router.register('api/admin/products',ProductAPIAdmin,'admin_panel_product'),
router.register('api/admin/category',CategoryAPIAdmin,'admin_panel_category'),
router.register('api/products',ProductAPIPublic,'products'),
router.register('api/category',CategoryAPIPublic,'category')

urlpatterns = router.urls