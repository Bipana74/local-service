from django.urls import path
from . import views
urlpatterns = [
    path('', views.home_view, name='home'),
    path('services/', views.services_view, name='services'),
    path('aboutus/', views.aboutus_view, name='aboutus'),
    path('login/', views.login_view, name='login'),
    path('contact/', views.contact_view, name='contact'),
    path('register/', views.register_view, name='register'),
    path('table/', views.table_view, name='table'),
]
