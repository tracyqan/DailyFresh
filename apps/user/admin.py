from django.contrib import admin
from user.models import User
# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = [
        'username',
        'email',
        'password',
        'is_active',
        'is_superuser',
        'last_login',
        'create_time',
        'update_time',
        'is_delete',
    ]