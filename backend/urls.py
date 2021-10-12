from rest_framework import routers, urlpatterns

from backend.models import Review
from .api import CategoryAPIAdmin, CategoryAPIPublic, ProductAPIAdmin, ProductAPIPublic, ReviewAPIAuth, ReviewAPIPublic
router = routers.DefaultRouter()
router.register('api/admin/products',ProductAPIAdmin,'admin_panel_product'),
router.register('api/admin/category',CategoryAPIAdmin,'admin_panel_category'),
router.register('api/auth/review',ReviewAPIAuth,'auth_review'),
router.register('api/products',ProductAPIPublic,'products'),
router.register('api/reviews',ReviewAPIPublic,'review'),
router.register('api/category',CategoryAPIPublic,'category')

urlpatterns = router.urls