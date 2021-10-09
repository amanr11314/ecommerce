from django.db import models
import string
import random

# Create your models here.
def __generate_unique_code(for_):
    LENGTH = 12

    ACCEPTED_MODELS = [
        'Product',
        'Category'
    ]

    if for_ not in ACCEPTED_MODELS:
        return

    while True:
        # random ID of length=LENGTH
        # id = ''.join(random.choices(string.ascii_letters, string.digits, k=LENGTH)[0])
        id = ''.join(random.choices([string.ascii_letters, string.digits],k = 12)[0])
        # # is unique and not in database
        if for_=='Product':
            if Product.objects.filter(p_id = id).count() == 0:
                break
        if for_=='Category':
            if Category.objects.filter(c_id = id).count() == 0:
                break
    return id

def generate_unique_pid():
    id = __generate_unique_code(for_='Product')
    return id

def generate_unique_cid():
    id = __generate_unique_code(for_='Category')
    return id


class Category(models.Model):
    c_id = models.CharField(max_length=12,default=generate_unique_cid,unique=True,primary_key=True)
    name = models.CharField(max_length=250,null=False)

class Product(models.Model):
    p_id = models.CharField(max_length=12,default=generate_unique_pid,unique=True,primary_key=True)
    name = models.CharField(max_length=250,null=False)
    desc = models.TextField()
    cost_for_one = models.DecimalField(max_digits=8,decimal_places=2,null=False)
    discount = models.DecimalField(max_digits=4,decimal_places=2,null=True,default=0.0)
    image = models.URLField(max_length=250)
    size = models.CharField(max_length=250,null=True,default='NONE')
    color = models.CharField(max_length=250,null=True,default='NONE')
    # provide a list of categories ot choose with
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    stock_count = models.PositiveIntegerField(null=False,default=1)
    
    @property
    def sold_count(self):
        """
        TODO:: Perform query on orders table and return the products sold count 
        """
        return 1
    created_at = models.DateTimeField(auto_now_add=True) # for ne arrivals




