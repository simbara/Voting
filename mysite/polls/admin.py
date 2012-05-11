from polls.models import Poll
from polls.models import Choice
from django.contrib import admin

admin.site.register(Poll)

admin.site.register(Choice)