from django.shortcuts import render.HttpResponse

def localservicedirectory(request):
    return HttpResponse(request,'index.html')