from rest_framework import routers, urlpatterns

from .api import CategoryAPIAdmin, CategoryAPIPublic, ProductAPIAdmin, ProductAPIPublic, ReviewAPIAuth, ReviewAPIPublic, ShoppingCartItemAPIAuth
router = routers.DefaultRouter()
router.register('api/admin/products',ProductAPIAdmin,'admin_panel_product'),
router.register('api/admin/category',CategoryAPIAdmin,'admin_panel_category'),
router.register('api/auth/review',ReviewAPIAuth,'auth_review'),
router.register('api/auth/cart',ShoppingCartItemAPIAuth,'shopping_cart'),
router.register('api/products',ProductAPIPublic,'products'),
router.register('api/reviews',ReviewAPIPublic,'review'),
router.register('api/category',CategoryAPIPublic,'category')

urlpatterns = router.urls