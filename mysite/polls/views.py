from django.shortcuts import render_to_response
from polls.models import Poll
from django.http import HttpResponse
from django_pimentech import network
from django_pimentech.network import *
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers 
import json
#import simplejson
from pjBallot import ballotTree
from pjBallot import ParseModule

testservice = JSONRPCService()
#tree = ParseModule.initTree()


def convert_to_builtin_type(obj):
    # print 'default(', repr(obj), ')'
    # Convert objects to a dictionary of their representation
    d = { '__jsonclass__': "ballotTree." + obj.__class__.__name__}
    d.update(obj.__dict__)
    return d


@jsonremote(testservice)
def passBallot(response):
    tree = ParseModule.initTree()
	# import pdb
	# pdb.set_trace()
    treeJSON = json.dumps({'result': tree}, default=convert_to_builtin_type)
#	print treeJSON 
#    treeJSON = {"__jsonclass__": "ballotTree.Contest", "name": "President", "selectionList": {"__jsonclass__": "ballotTree.Candidate", "name": "Obama"}}
    # import sys, os
    # return os.path.dirname(ballotTree.__file__) #sys.path #json.dumps({'result': sys.path}) #treeJSON
    return treeJSON

# def passBallot(request):
#     tree = ParseModule.initTree()
#     response = HttpResponse(json.dumps(tree, default=convert_to_builtin_type))
#     return response

def index(request):
    latest_poll_list = Poll.objects.all().order_by('-pub_date')[:5]
    return render_to_response('polls/index.html', {'latest_poll_list': latest_poll_list})

def detail(request, poll_id):
    return HttpResponse("You're looking at poll %s." % poll_id)

def results(request, poll_id):
    return HttpResponse("You're looking at the results of poll %s." % poll_id)

def vote(request, poll_id):
    return HttpResponse("You're voting on poll %s." % poll_id)


@jsonremote(testservice)
def echo(response, msg):
    try:
        poll_id = int(msg)
    except ValueError:
        return "YOU must type an integer, you typed: %s" % msg
    p = Poll.objects.get(pk=poll_id)
    return p.question

@jsonremote(testservice)
def reverse(response, msg):
    ans = msg[::-1]
    return ans

@jsonremote(testservice)
def uppercase(response, msg):
    return msg.upper()

@jsonremote(testservice)
def lowercase(response, msg):
    return msg.lower()

@jsonremote(testservice)
def add(response, a, b):
    ans = int(a)+ int(b)
    return ans
