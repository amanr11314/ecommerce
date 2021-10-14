from django.db import models
from django.contrib.auth.models import User
import string
import random

# Create your models here.
def __generate_unique_code(for_):
    LENGTH = 12

    ACCEPTED_MODELS = [
        'Product',
        'Category',
        'Review'
    ]

    if for_ not in ACCEPTED_MODELS:
        return

    while True:
        # random ID of length=LENGTH
        id = ''.join(random.choices(string.ascii_letters+string.digits,k=LENGTH))
        # # is unique and not in database
        if for_=='Product':
            if Product.objects.filter(p_id = id).count() == 0:
                break
        if for_=='Category':
            if Category.objects.filter(c_id = id).count() == 0:
                break
        if for_=='Review':
            if Review.objects.filter(r_id = id).count() == 0:
                break
    return id

def generate_unique_pid():
    id = __generate_unique_code(for_='Product')
    return id

def generate_unique_cid():
    id = __generate_unique_code(for_='Category')
    return id

def generate_unique_rid():
    id = __generate_unique_code(for_='Review')
    return id


class Category(models.Model):
    c_id = models.CharField(max_length=12,default=generate_unique_cid,unique=True,primary_key=True)
    name = models.CharField(max_length=250,null=False)

class Product(models.Model):
    p_id = models.CharField(max_length=12,default=generate_unique_pid,unique=True,primary_key=True)
    name = models.CharField(max_length=250,null=False)
    desc = models.TextField()
    cost_for_one = models.DecimalField(max_digits=8,decimal_places=2,null=False)
    discount = models.DecimalField(max_digits=4,decimal_places=2,null=True,default=0.0,blank=True)
    image = models.URLField(max_length=250)
    size = models.CharField(max_length=250,null=True,default='NONE',blank=True)
    color = models.CharField(max_length=250,null=True,default='NONE',blank=True)
    # provide a list of categories ot choose with
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    stock_count = models.PositiveIntegerField(null=False,default=1)

    @property
    def avg_rating(self):
        # get all reviews of this product then average them
        reviews_by_id = Review.objects.filter(product = self)
        if reviews_by_id.count() == 0:
            return 1.0
        __avg_rating = reviews_by_id.aggregate(rating_avg = models.Avg('rating'))
        return __avg_rating['rating_avg']
    
    @property
    def sold_count(self):
        """
        TODO:: Perform query on orders table and return the products sold count 
        """
        return 1
    created_at = models.DateTimeField(auto_now_add=True) # for new arrivals

class Review(models.Model):
    r_id = models.CharField(max_length=12,default=generate_unique_rid,unique=True,primary_key=True)
    msg = models.TextField()
    # RATING_CHOICES = [(1.0,1.0), (1.5,1.5),( 2.0,2.0), (2.5,2.5),( 3.0,3.0),( 3.5,3.5),( 4.0,4.0), (4.5,4.5),( 5.0,5.0)]
    # rating = models.DecimalField(max_digits=2, decimal_places=1, choices=RATING_CHOICES, null=False, default=1.0)
    rating = models.DecimalField(max_digits=2, decimal_places=1, null=False, default=1.0)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.CharField(max_length=200,null=True)

class ShoppingCartItem(models.Model):
    # TODO:: MAKE UNIQUE ROW FOR USER-PRODUCT COMBINED
    user = models.ForeignKey(User,related_name="cart",on_delete=models.CASCADE,null=True)
    product = models.ForeignKey(Product,on_delete=models.CASCADE,null=True)
    quantity = models.PositiveIntegerField(default=0)
    @property
    def get_item_id(self):
        return str(self.user) + '$' + self.product

    



