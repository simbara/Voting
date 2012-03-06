'''
made changes to 
-- fysom because of how pyjamas/pyjs/src/pyjs/builtin/pyjslib.py 
    does not delete function type attributes
-- python2.7/site-packages/django_pimentech/network.py 
    to avoid json encoding twice
-- pyjamas/pyjs/src/pyjs/lib/json.py in jsObjectToPyObject
    var class_name = @{{obj}}["__jsonclass__"][0] hacked to remove [0]
'''

import pyjd # this is dummy in pyjs.
from pyjamas.ui.RootPanel import RootPanel, RootPanelCls, manageRootPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.Button import Button
from pyjamas.ui.HTML import HTML
from pyjamas import Window
from pyjamas.ui import KeyboardListener
from pyjamas.ui.KeyboardListener import KeyboardHandler
#from pyjamas.ui import ClickListener
#from pyjamas.ui.ClickListener import ClickHandler
from pyjamas.ui.FocusPanel import FocusPanel
from pyjamas import DOM

import pygwt
from pyjamas.JSONService import JSONProxy
from pyjamas.ui.Label import Label
from pyjamas import JSONService
#sampleBallot.fsm.startVoting()
from ballotTree import Candidate, Race, Contest
from json import loads
from pyjamas.JSONService import JSONResponseTextHandler
#from sampleBallot import srace
import sampleBallot


def tester():
    return 'hello'

class PjBallot:
    def __init__(self):
        self.mainPanel = VerticalPanel()      
        self.button = Button('test', self.test)
        self.status = Label('hi')
        self.x = 1
        self.srace = Race("",[],[])
    
    def test(self):
        self.button.setText("No, really click me!")
#        Window.alert("Hello, AJAAAX!")
        self.contest.add(HTML('yay'))

    def onKeyDown(self, sender, keycode, modifiers):
        pass

    def onKeyUp(self, sender, keycode, modifiers):
        pass

    def onModuleLoad(self):
        self.remote_py = JSONService()       
        self.mainPanel.add(sampleBallot.name)
        self.mainPanel.add(sampleBallot.instructions)
        self.mainPanel.add(sampleBallot.contest)
        self.mainPanel.add(sampleBallot.candidate)
        self.mainPanel.add(sampleBallot.selection)        
        panel = FocusPanel(Widget=self.mainPanel)
        gp = RootPanelListener(panel)
        manageRootPanel(gp)
        RootPanel().add(panel)
        panel.setFocus(True)
#        self.remote_py.uppercase('yay', self)
        self.remote_py.passBallot(self)
            
    def onRemoteResponse(self, response, request_info): 
        self.srace = response  
        sampleBallot.sendRace(self.srace)
        sampleBallot.fsm.startVoting()
        sampleBallot.setContest()

    
    def onRemoteError(self):
        pass
        
class JSONService(JSONProxy):
    def __init__(self):
        JSONProxy.__init__(self, "http://127.0.0.1:8000/test-service/", ["passBallot", "echo", "reverse", "uppercase", "lowercase", "nonexistant"])        

class RootPanelListener(RootPanelCls, KeyboardHandler):
    def __init__(self, Parent, *args, **kwargs):
        self.Parent = Parent
        self.focussed = False
        self.Parent.setFocus(False)
        RootPanelCls.__init__(self, *args, **kwargs)
        KeyboardHandler.__init__(self)
      
        self.addKeyboardListener(self)
        
    def onKeyDown(self, sender, keyCode, modifiers = None):
        sampleBallot.onKeyPress(sender, keyCode, modifiers)
          
if __name__ == '__main__':
#    pyjd.setup("public/Hello.html?fred=foo#me")
    app = PjBallot()
    app.onModuleLoad()
