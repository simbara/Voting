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
        self.contest = HorizontalPanel()
        self.contest.setStyleName('words')
        self.selection = HorizontalPanel()
        self.selection.setStyleName('words')
        self.button = Button('test', self.test)
        self.status = Label('hi')
        self.x = 1
        self.srace = Race("",[],[])
    
    def test(self):
        self.button.setText("No, really click me!")
#        Window.alert("Hello, AJAAAX!")
        self.contest.add(HTML('yay'))

    def nextContest(self):
        self.x += 1
        self.contest.clear()
        self.contest.add(HTML('<b /> Contest: %d' % self.x))

    def nextSelection(self):
        self.x += 1
        self.selection.clear()
        self.selection.add(HTML('<b /> Selection: %d' % self.x))
    
    def onKeyDown(self, sender, keycode, modifiers):
        pass

    def onKeyUp(self, sender, keycode, modifiers):
        pass

    def onKeyPress(self, sender, keycode, modifiers):
        DOM.eventPreventDefault(DOM.eventGetCurrentEvent()) #not needed
        if keycode == KeyboardListener.KEY_UP:
            self.nextContest()
        if keycode == KeyboardListener.KEY_DOWN:
            self.nextContest()
        if keycode == KeyboardListener.KEY_LEFT:
            self.nextSelection()
        if keycode == KeyboardListener.KEY_RIGHT:
            self.nextSelection()

    def onModuleLoad(self):
        self.remote_py = JSONService()
        h = HTML("<b />Contest: ")
        self.contest.add(h)
        l = HTML("<b />Selection: ")
        self.selection.add(l)
#        self.mainPanel.add(self.button)
        self.mainPanel.add(self.contest)
        self.mainPanel.add(self.selection)
        self.mainPanel.add(self.status)
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
        name = self.srace.works
        self.mainPanel.add(HTML('pleasework %s' % name))
        inst = sampleBallot.getInstruction()
        self.mainPanel.add(HTML('pleasework %s' % inst))
        sampleBallot.fsm.startVoting()

    
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
        app.onKeyPress(sender, keyCode, modifiers)
          
if __name__ == '__main__':
#    pyjd.setup("public/Hello.html?fred=foo#me")
    app = PjBallot()
    app.onModuleLoad()
