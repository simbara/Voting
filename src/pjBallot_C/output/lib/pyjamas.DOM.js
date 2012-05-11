/* start module: pyjamas.DOM */
$pyjs.loaded_modules['pyjamas.DOM'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.DOM'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.DOM'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.DOM"];
	$m.__repr__ = function() { return "<module: pyjamas.DOM>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.DOM';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas']['DOM'] = $pyjs.loaded_modules['pyjamas.DOM'];
	$m.__track_lines__[1] = 'pyjamas.DOM.py, line 1:\n    # Copyright 2006 James Tauber and contributors';
	$m.__track_lines__[19] = 'pyjamas.DOM.py, line 19:\n    import pyjd';
	$m.__track_lines__[21] = 'pyjamas.DOM.py, line 21:\n    if pyjd.is_desktop:';
	$m.__track_lines__[22] = 'pyjamas.DOM.py, line 22:\n    from pyjamas.Window import onResize, onClosing, onClosed';
	$m.__track_lines__[23] = 'pyjamas.DOM.py, line 23:\n    from __pyjamas__ import JS, doc, get_main_frame, wnd';
	$m.__track_lines__[25] = 'pyjamas.DOM.py, line 25:\n    currentEvent = None';
	$m.__track_lines__[27] = 'pyjamas.DOM.py, line 27:\n    sCaptureElem = None';
	$m.__track_lines__[28] = 'pyjamas.DOM.py, line 28:\n    sEventPreviewStack = []';
	$m.__track_lines__[30] = 'pyjamas.DOM.py, line 30:\n    listeners = {}';
	$m.__track_lines__[32] = 'pyjamas.DOM.py, line 32:\n    from pyjamas.ui import Event';
	$m.__track_lines__[33] = 'pyjamas.DOM.py, line 33:\n    from pyjamas.ui.Event import (';
	$m.__track_lines__[56] = 'pyjamas.DOM.py, line 56:\n    def get_listener(item):';
	$m.__track_lines__[57] = 'pyjamas.DOM.py, line 57:\n    if item is None:';
	$m.__track_lines__[58] = 'pyjamas.DOM.py, line 58:\n    return None';
	$m.__track_lines__[59] = 'pyjamas.DOM.py, line 59:\n    if hasattr(item, "__instance__"):';
	$m.__track_lines__[60] = 'pyjamas.DOM.py, line 60:\n    ret = listeners.get(item.__instance__)';
	$m.__track_lines__[62] = 'pyjamas.DOM.py, line 62:\n    ret = listeners.get(hash(item))';
	$m.__track_lines__[63] = 'pyjamas.DOM.py, line 63:\n    return ret';
	$m.__track_lines__[66] = 'pyjamas.DOM.py, line 66:\n    def set_listener(item, listener):';
	$m.__track_lines__[67] = 'pyjamas.DOM.py, line 67:\n    if hasattr(item, "__instance__"):';
	$m.__track_lines__[68] = 'pyjamas.DOM.py, line 68:\n    listeners[item.__instance__] = listener';
	$m.__track_lines__[70] = 'pyjamas.DOM.py, line 70:\n    listeners.pop(hash(item))';
	$m.__track_lines__[72] = 'pyjamas.DOM.py, line 72:\n    listeners[hash(item)] = listener';
	$m.__track_lines__[75] = 'pyjamas.DOM.py, line 75:\n    hack_timer_workaround_bug_button = None';
	$m.__track_lines__[78] = 'pyjamas.DOM.py, line 78:\n    def init():';
	$m.__track_lines__[79] = 'pyjamas.DOM.py, line 79:\n    mf = get_main_frame()';
	$m.__track_lines__[80] = 'pyjamas.DOM.py, line 80:\n    mf._addWindowEventListener("click", browser_event_cb)';
	$m.__track_lines__[81] = 'pyjamas.DOM.py, line 81:\n    mf._addWindowEventListener("change", browser_event_cb)';
	$m.__track_lines__[82] = 'pyjamas.DOM.py, line 82:\n    mf._addWindowEventListener("mouseout", browser_event_cb)';
	$m.__track_lines__[83] = 'pyjamas.DOM.py, line 83:\n    mf._addWindowEventListener("mousedown", browser_event_cb)';
	$m.__track_lines__[84] = 'pyjamas.DOM.py, line 84:\n    mf._addWindowEventListener("mouseup", browser_event_cb)';
	$m.__track_lines__[85] = 'pyjamas.DOM.py, line 85:\n    mf._addWindowEventListener("resize", browser_event_cb)';
	$m.__track_lines__[86] = 'pyjamas.DOM.py, line 86:\n    mf._addWindowEventListener("keyup", browser_event_cb)';
	$m.__track_lines__[87] = 'pyjamas.DOM.py, line 87:\n    mf._addWindowEventListener("keydown", browser_event_cb)';
	$m.__track_lines__[88] = 'pyjamas.DOM.py, line 88:\n    mf._addWindowEventListener("keypress", browser_event_cb)';
	$m.__track_lines__[89] = 'pyjamas.DOM.py, line 89:\n    mf._addWindowEventListener("mousewheel", browser_event_cb)';
	$m.__track_lines__[91] = 'pyjamas.DOM.py, line 91:\n    def _init_testing():';
	$m.__track_lines__[92] = 'pyjamas.DOM.py, line 92:\n    body = doc().getElementsByTagName("body")[0]';
	$m.__track_lines__[93] = 'pyjamas.DOM.py, line 93:\n    mf._addEventListener(body, "click", cb)';
	$m.__track_lines__[94] = 'pyjamas.DOM.py, line 94:\n    mf._addEventListener(body, "change", cb)';
	$m.__track_lines__[95] = 'pyjamas.DOM.py, line 95:\n    mf._addEventListener(body, "mouseout", cb)';
	$m.__track_lines__[96] = 'pyjamas.DOM.py, line 96:\n    mf._addEventListener(body, "mousedown", cb)';
	$m.__track_lines__[97] = 'pyjamas.DOM.py, line 97:\n    mf._addEventListener(body, "mouseup", cb)';
	$m.__track_lines__[98] = 'pyjamas.DOM.py, line 98:\n    mf._addEventListener(body, "mousemove", cb)';
	$m.__track_lines__[99] = 'pyjamas.DOM.py, line 99:\n    mf._addEventListener(body, "resize", cb)';
	$m.__track_lines__[100] = 'pyjamas.DOM.py, line 100:\n    mf._addEventListener(body, "keyup", cb)';
	$m.__track_lines__[101] = 'pyjamas.DOM.py, line 101:\n    mf._addEventListener(body, "keydown", cb)';
	$m.__track_lines__[102] = 'pyjamas.DOM.py, line 102:\n    mf._addEventListener(body, "keypress", cb)';
	$m.__track_lines__[104] = 'pyjamas.DOM.py, line 104:\n    def _dispatchWindowEvent(sender, evt, useCap):';
	$m.__track_lines__[105] = 'pyjamas.DOM.py, line 105:\n    pass';
	$m.__track_lines__[108] = 'pyjamas.DOM.py, line 108:\n    def _dispatchEvent(sender, evt, useCap):';
	$m.__track_lines__[110] = 'pyjamas.DOM.py, line 110:\n    if evt is None:';
	$m.__track_lines__[111] = 'pyjamas.DOM.py, line 111:\n    evt = wnd().event';
	$m.__track_lines__[113] = 'pyjamas.DOM.py, line 113:\n    try:';
	$m.__track_lines__[114] = 'pyjamas.DOM.py, line 114:\n    sender = get_main_frame().gobject_wrap(sender) # webkit HACK!';
	$m.__track_lines__[115] = 'pyjamas.DOM.py, line 115:\n    evt = get_main_frame().gobject_wrap(evt) # webkit HACK!';
	$m.__track_lines__[117] = 'pyjamas.DOM.py, line 117:\n    pass';
	$m.__track_lines__[118] = 'pyjamas.DOM.py, line 118:\n    listener = None';
	$m.__track_lines__[119] = 'pyjamas.DOM.py, line 119:\n    curElem = sender';
	$m.__track_lines__[122] = 'pyjamas.DOM.py, line 122:\n    cap = getCaptureElement()';
	$m.__track_lines__[123] = 'pyjamas.DOM.py, line 123:\n    listener = get_listener(cap)';
	$m.__track_lines__[124] = 'pyjamas.DOM.py, line 124:\n    if cap and (listener is not None):';
	$m.__track_lines__[126] = 'pyjamas.DOM.py, line 126:\n    dispatchEvent(evt, cap, listener)';
	$m.__track_lines__[127] = 'pyjamas.DOM.py, line 127:\n    evt.stopPropagation()';
	$m.__track_lines__[128] = 'pyjamas.DOM.py, line 128:\n    return';
	$m.__track_lines__[130] = 'pyjamas.DOM.py, line 130:\n    while curElem and (get_listener(curElem) is None):';
	$m.__track_lines__[132] = 'pyjamas.DOM.py, line 132:\n    curElem = getParent(curElem)';
	$m.__track_lines__[133] = 'pyjamas.DOM.py, line 133:\n    if curElem and getNodeType(curElem) != 1:';
	$m.__track_lines__[134] = 'pyjamas.DOM.py, line 134:\n    curElem = None';
	$m.__track_lines__[136] = 'pyjamas.DOM.py, line 136:\n    listener = get_listener(curElem)';
	$m.__track_lines__[137] = 'pyjamas.DOM.py, line 137:\n    if listener is not None:';
	$m.__track_lines__[138] = 'pyjamas.DOM.py, line 138:\n    dispatchEvent(evt, curElem, listener)';
	$m.__track_lines__[141] = 'pyjamas.DOM.py, line 141:\n    def _dispatchCapturedMouseEvent(evt):';
	$m.__track_lines__[144] = 'pyjamas.DOM.py, line 144:\n    if not _dispatchCapturedEvent(evt):';
	$m.__track_lines__[145] = 'pyjamas.DOM.py, line 145:\n    return';
	$m.__track_lines__[146] = 'pyjamas.DOM.py, line 146:\n    cap = getCaptureElement()';
	$m.__track_lines__[147] = 'pyjamas.DOM.py, line 147:\n    listener = get_listener(cap)';
	$m.__track_lines__[148] = 'pyjamas.DOM.py, line 148:\n    if cap and (listener is not None):';
	$m.__track_lines__[149] = 'pyjamas.DOM.py, line 149:\n    dispatchEvent(evt, cap, listener)';
	$m.__track_lines__[151] = 'pyjamas.DOM.py, line 151:\n    evt.stopPropagation()';
	$m.__track_lines__[154] = 'pyjamas.DOM.py, line 154:\n    def _dispatchCapturedMouseoutEvent(evt):';
	$m.__track_lines__[155] = 'pyjamas.DOM.py, line 155:\n    cap = getCaptureElement()';
	$m.__track_lines__[157] = 'pyjamas.DOM.py, line 157:\n    if cap is None:';
	$m.__track_lines__[158] = 'pyjamas.DOM.py, line 158:\n    return';
	$m.__track_lines__[160] = 'pyjamas.DOM.py, line 160:\n    if eventGetToElement(evt):';
	$m.__track_lines__[161] = 'pyjamas.DOM.py, line 161:\n    return';
	$m.__track_lines__[165] = 'pyjamas.DOM.py, line 165:\n    setCapture(None)';
	$m.__track_lines__[166] = 'pyjamas.DOM.py, line 166:\n    listener = get_listener(cap)';
	$m.__track_lines__[167] = 'pyjamas.DOM.py, line 167:\n    if listener is None:';
	$m.__track_lines__[168] = 'pyjamas.DOM.py, line 168:\n    return';
	$m.__track_lines__[171] = "pyjamas.DOM.py, line 171:\n    lcEvent = doc().createEvent('UIEvent')";
	$m.__track_lines__[172] = "pyjamas.DOM.py, line 172:\n    lcEvent.initUIEvent('losecapture', False, False, wnd(), 0)";
	$m.__track_lines__[173] = 'pyjamas.DOM.py, line 173:\n    dispatchEvent(lcEvent, cap, listener)';
	$m.__track_lines__[176] = 'pyjamas.DOM.py, line 176:\n    def browser_event_cb(view, event, from_window):';
	$m.__track_lines__[178] = 'pyjamas.DOM.py, line 178:\n    global sCaptureElem';
	$m.__track_lines__[180] = 'pyjamas.DOM.py, line 180:\n    if event is None:';
	$m.__track_lines__[181] = 'pyjamas.DOM.py, line 181:\n    event = wnd().event';
	$m.__track_lines__[183] = 'pyjamas.DOM.py, line 183:\n    try:';
	$m.__track_lines__[184] = 'pyjamas.DOM.py, line 184:\n    event = get_main_frame().gobject_wrap(event) # webkit HACK!';
	$m.__track_lines__[186] = 'pyjamas.DOM.py, line 186:\n    pass';
	$m.__track_lines__[189] = 'pyjamas.DOM.py, line 189:\n    et = eventGetType(event)';
	$m.__track_lines__[191] = 'pyjamas.DOM.py, line 191:\n    if et == "resize":';
	$m.__track_lines__[192] = 'pyjamas.DOM.py, line 192:\n    onResize()';
	$m.__track_lines__[193] = 'pyjamas.DOM.py, line 193:\n    return';
	$m.__track_lines__[194] = "pyjamas.DOM.py, line 194:\n    if et == 'mouseout':";
	$m.__track_lines__[196] = 'pyjamas.DOM.py, line 196:\n    _dispatchCapturedMouseoutEvent(event)';
	$m.__track_lines__[197] = "pyjamas.DOM.py, line 197:\n    if (et == 'keyup' or et == 'keydown' or";
	$m.__track_lines__[199] = 'pyjamas.DOM.py, line 199:\n    return _dispatchCapturedEvent(event)';
	$m.__track_lines__[201] = 'pyjamas.DOM.py, line 201:\n    return _dispatchCapturedMouseEvent(event)';
	$m.__track_lines__[204] = 'pyjamas.DOM.py, line 204:\n    def _dispatchCapturedEvent(event):';
	$m.__track_lines__[206] = 'pyjamas.DOM.py, line 206:\n    if not previewEvent(event):';
	$m.__track_lines__[208] = 'pyjamas.DOM.py, line 208:\n    event.stopPropagation()';
	$m.__track_lines__[209] = 'pyjamas.DOM.py, line 209:\n    eventPreventDefault(event)';
	$m.__track_lines__[210] = 'pyjamas.DOM.py, line 210:\n    return False';
	$m.__track_lines__[211] = 'pyjamas.DOM.py, line 211:\n    return True';
	$m.__track_lines__[214] = 'pyjamas.DOM.py, line 214:\n    def addEventPreview(preview):';
	$m.__track_lines__[215] = 'pyjamas.DOM.py, line 215:\n    sEventPreviewStack.append(preview)';
	$m.__track_lines__[218] = 'pyjamas.DOM.py, line 218:\n    def appendChild(parent, child):';
	$m.__track_lines__[220] = 'pyjamas.DOM.py, line 220:\n    parent.appendChild(child)';
	$m.__track_lines__[222] = 'pyjamas.DOM.py, line 222:\n    def removeChild(parent, child):';
	$m.__track_lines__[224] = 'pyjamas.DOM.py, line 224:\n    parent.removeChild(child)';
	$m.__track_lines__[227] = 'pyjamas.DOM.py, line 227:\n    def replaceChild(parent, newChild, oldChild):';
	$m.__track_lines__[228] = 'pyjamas.DOM.py, line 228:\n    parent.replaceChild(newChild, oldChild)';
	$m.__track_lines__[231] = 'pyjamas.DOM.py, line 231:\n    def buttonClick(element):';
	$m.__track_lines__[232] = "pyjamas.DOM.py, line 232:\n    evt = doc().createEvent('MouseEvents')";
	$m.__track_lines__[233] = 'pyjamas.DOM.py, line 233:\n    evt.initMouseEvent("click", True, True, wnd(), 1, 0, 0, 0, 0, False,';
	$m.__track_lines__[235] = 'pyjamas.DOM.py, line 235:\n    element.dispatchEvent(evt)';
	$m.__track_lines__[238] = 'pyjamas.DOM.py, line 238:\n    def compare(elem1, elem2):';
	$m.__track_lines__[239] = 'pyjamas.DOM.py, line 239:\n    if hasattr(elem1, "isSameNode"):';
	$m.__track_lines__[240] = 'pyjamas.DOM.py, line 240:\n    return elem1.isSameNode(elem2)';
	$m.__track_lines__[241] = 'pyjamas.DOM.py, line 241:\n    return elem1 == elem2';
	$m.__track_lines__[244] = 'pyjamas.DOM.py, line 244:\n    def createAnchor():';
	$m.__track_lines__[245] = 'pyjamas.DOM.py, line 245:\n    return createElement("A")';
	$m.__track_lines__[248] = 'pyjamas.DOM.py, line 248:\n    def createButton():';
	$m.__track_lines__[249] = 'pyjamas.DOM.py, line 249:\n    return createElement("button")';
	$m.__track_lines__[252] = 'pyjamas.DOM.py, line 252:\n    def createCol():';
	$m.__track_lines__[253] = 'pyjamas.DOM.py, line 253:\n    return createElement("col")';
	$m.__track_lines__[256] = 'pyjamas.DOM.py, line 256:\n    def createDiv():';
	$m.__track_lines__[257] = 'pyjamas.DOM.py, line 257:\n    return createElement("div")';
	$m.__track_lines__[260] = 'pyjamas.DOM.py, line 260:\n    def createElement(tag):';
	$m.__track_lines__[261] = 'pyjamas.DOM.py, line 261:\n    return doc().createElement(tag)';
	$m.__track_lines__[264] = 'pyjamas.DOM.py, line 264:\n    def createFieldSet():';
	$m.__track_lines__[265] = 'pyjamas.DOM.py, line 265:\n    return createElement("fieldset")';
	$m.__track_lines__[268] = 'pyjamas.DOM.py, line 268:\n    def createForm():';
	$m.__track_lines__[269] = 'pyjamas.DOM.py, line 269:\n    return createElement("form")';
	$m.__track_lines__[272] = 'pyjamas.DOM.py, line 272:\n    def createIFrame():';
	$m.__track_lines__[273] = 'pyjamas.DOM.py, line 273:\n    return createElement("iframe")';
	$m.__track_lines__[276] = 'pyjamas.DOM.py, line 276:\n    def createImg():';
	$m.__track_lines__[277] = 'pyjamas.DOM.py, line 277:\n    return createElement("img")';
	$m.__track_lines__[280] = 'pyjamas.DOM.py, line 280:\n    def createInputCheck():';
	$m.__track_lines__[281] = 'pyjamas.DOM.py, line 281:\n    return createInputElement("checkbox")';
	$m.__track_lines__[284] = 'pyjamas.DOM.py, line 284:\n    def createInputElement(elementType):';
	$m.__track_lines__[285] = 'pyjamas.DOM.py, line 285:\n    e = createElement("input")';
	$m.__track_lines__[286] = 'pyjamas.DOM.py, line 286:\n    e.type = elementType';
	$m.__track_lines__[287] = 'pyjamas.DOM.py, line 287:\n    return e';
	$m.__track_lines__[290] = 'pyjamas.DOM.py, line 290:\n    def createInputPassword():';
	$m.__track_lines__[291] = 'pyjamas.DOM.py, line 291:\n    return createInputElement("password")';
	$m.__track_lines__[294] = 'pyjamas.DOM.py, line 294:\n    def createInputRadio(group):';
	$m.__track_lines__[295] = "pyjamas.DOM.py, line 295:\n    e = createInputElement('radio')";
	$m.__track_lines__[296] = 'pyjamas.DOM.py, line 296:\n    e.name = group';
	$m.__track_lines__[297] = 'pyjamas.DOM.py, line 297:\n    return e';
	$m.__track_lines__[300] = 'pyjamas.DOM.py, line 300:\n    def createInputText():';
	$m.__track_lines__[301] = 'pyjamas.DOM.py, line 301:\n    return createInputElement("text")';
	$m.__track_lines__[304] = 'pyjamas.DOM.py, line 304:\n    def createLabel():';
	$m.__track_lines__[305] = 'pyjamas.DOM.py, line 305:\n    return createElement("label")';
	$m.__track_lines__[308] = 'pyjamas.DOM.py, line 308:\n    def createLegend():';
	$m.__track_lines__[309] = 'pyjamas.DOM.py, line 309:\n    return createElement("legend")';
	$m.__track_lines__[312] = 'pyjamas.DOM.py, line 312:\n    def createOptions():';
	$m.__track_lines__[313] = 'pyjamas.DOM.py, line 313:\n    return createElement("options")';
	$m.__track_lines__[316] = 'pyjamas.DOM.py, line 316:\n    def createSelect():';
	$m.__track_lines__[317] = 'pyjamas.DOM.py, line 317:\n    return createElement("select")';
	$m.__track_lines__[320] = 'pyjamas.DOM.py, line 320:\n    def createSpan():';
	$m.__track_lines__[321] = 'pyjamas.DOM.py, line 321:\n    return createElement("span")';
	$m.__track_lines__[324] = 'pyjamas.DOM.py, line 324:\n    def createTable():';
	$m.__track_lines__[325] = 'pyjamas.DOM.py, line 325:\n    return createElement("table")';
	$m.__track_lines__[328] = 'pyjamas.DOM.py, line 328:\n    def createTBody():';
	$m.__track_lines__[329] = 'pyjamas.DOM.py, line 329:\n    return createElement("tbody")';
	$m.__track_lines__[332] = 'pyjamas.DOM.py, line 332:\n    def createTD():';
	$m.__track_lines__[333] = 'pyjamas.DOM.py, line 333:\n    return createElement("td")';
	$m.__track_lines__[336] = 'pyjamas.DOM.py, line 336:\n    def createTextArea():';
	$m.__track_lines__[337] = 'pyjamas.DOM.py, line 337:\n    return createElement("textarea")';
	$m.__track_lines__[340] = 'pyjamas.DOM.py, line 340:\n    def createTH():';
	$m.__track_lines__[341] = 'pyjamas.DOM.py, line 341:\n    return createElement("th")';
	$m.__track_lines__[344] = 'pyjamas.DOM.py, line 344:\n    def createTR():';
	$m.__track_lines__[345] = 'pyjamas.DOM.py, line 345:\n    return createElement("tr")';
	$m.__track_lines__[348] = 'pyjamas.DOM.py, line 348:\n    def eventStopPropagation(evt):';
	$m.__track_lines__[349] = 'pyjamas.DOM.py, line 349:\n    evt.stopPropagation()';
	$m.__track_lines__[352] = 'pyjamas.DOM.py, line 352:\n    def eventCancelBubble(evt, cancel):';
	$m.__track_lines__[353] = 'pyjamas.DOM.py, line 353:\n    evt.cancelBubble = cancel';
	$m.__track_lines__[356] = 'pyjamas.DOM.py, line 356:\n    def eventGetAltKey(evt):';
	$m.__track_lines__[357] = 'pyjamas.DOM.py, line 357:\n    return evt.altKey';
	$m.__track_lines__[360] = 'pyjamas.DOM.py, line 360:\n    def eventGetButton(evt):';
	$m.__track_lines__[361] = 'pyjamas.DOM.py, line 361:\n    return evt.button';
	$m.__track_lines__[364] = 'pyjamas.DOM.py, line 364:\n    def eventGetClientX(evt):';
	$m.__track_lines__[365] = 'pyjamas.DOM.py, line 365:\n    return evt.clientX';
	$m.__track_lines__[368] = 'pyjamas.DOM.py, line 368:\n    def eventGetClientY(evt):';
	$m.__track_lines__[369] = 'pyjamas.DOM.py, line 369:\n    return evt.clientY';
	$m.__track_lines__[372] = 'pyjamas.DOM.py, line 372:\n    def eventGetCtrlKey(evt):';
	$m.__track_lines__[373] = 'pyjamas.DOM.py, line 373:\n    return evt.ctrlKey';
	$m.__track_lines__[376] = 'pyjamas.DOM.py, line 376:\n    def eventGetFromElement(evt):';
	$m.__track_lines__[377] = 'pyjamas.DOM.py, line 377:\n    try:';
	$m.__track_lines__[378] = 'pyjamas.DOM.py, line 378:\n    return evt.fromElement';
	$m.__track_lines__[380] = 'pyjamas.DOM.py, line 380:\n    return None';
	$m.__track_lines__[383] = 'pyjamas.DOM.py, line 383:\n    def eventGetKeyCode(evt):';
	$m.__track_lines__[384] = 'pyjamas.DOM.py, line 384:\n    return evt.which or evt.keyCode or 0';
	$m.__track_lines__[387] = 'pyjamas.DOM.py, line 387:\n    def eventGetRepeat(evt):';
	$m.__track_lines__[388] = 'pyjamas.DOM.py, line 388:\n    return evt.repeat';
	$m.__track_lines__[391] = 'pyjamas.DOM.py, line 391:\n    def eventGetScreenX(evt):';
	$m.__track_lines__[392] = 'pyjamas.DOM.py, line 392:\n    return evt.screenX';
	$m.__track_lines__[395] = 'pyjamas.DOM.py, line 395:\n    def eventGetScreenY(evt):';
	$m.__track_lines__[396] = 'pyjamas.DOM.py, line 396:\n    return evt.screenY';
	$m.__track_lines__[399] = 'pyjamas.DOM.py, line 399:\n    def eventGetShiftKey(evt):';
	$m.__track_lines__[400] = 'pyjamas.DOM.py, line 400:\n    return evt.shiftKey';
	$m.__track_lines__[403] = 'pyjamas.DOM.py, line 403:\n    def eventGetCurrentTarget(event):';
	$m.__track_lines__[404] = 'pyjamas.DOM.py, line 404:\n    return event.currentTarget';
	$m.__track_lines__[407] = 'pyjamas.DOM.py, line 407:\n    def eventGetTarget(event):';
	$m.__track_lines__[408] = 'pyjamas.DOM.py, line 408:\n    return event.target';
	$m.__track_lines__[411] = 'pyjamas.DOM.py, line 411:\n    def eventGetToElement(evt):';
	$m.__track_lines__[412] = 'pyjamas.DOM.py, line 412:\n    type = eventGetType(evt)';
	$m.__track_lines__[413] = "pyjamas.DOM.py, line 413:\n    if type == 'mouseout':";
	$m.__track_lines__[414] = 'pyjamas.DOM.py, line 414:\n    return evt.relatedTarget';
	$m.__track_lines__[416] = 'pyjamas.DOM.py, line 416:\n    return evt.target';
	$m.__track_lines__[417] = 'pyjamas.DOM.py, line 417:\n    return None';
	$m.__track_lines__[420] = 'pyjamas.DOM.py, line 420:\n    def eventGetType(event):';
	$m.__track_lines__[421] = 'pyjamas.DOM.py, line 421:\n    return event.type';
	$m.__track_lines__[423] = 'pyjamas.DOM.py, line 423:\n    def eventGetTypeInt(event):';
	$m.__track_lines__[424] = 'pyjamas.DOM.py, line 424:\n    return Event.eventmap.get(str(event.type), 0)';
	$m.__track_lines__[427] = 'pyjamas.DOM.py, line 427:\n    def eventGetTypeString(event):';
	$m.__track_lines__[428] = 'pyjamas.DOM.py, line 428:\n    return eventGetType(event)';
	$m.__track_lines__[431] = 'pyjamas.DOM.py, line 431:\n    def eventPreventDefault(evt):';
	$m.__track_lines__[432] = 'pyjamas.DOM.py, line 432:\n    evt.preventDefault()';
	$m.__track_lines__[435] = 'pyjamas.DOM.py, line 435:\n    def eventSetKeyCode(evt, key):';
	$m.__track_lines__[436] = 'pyjamas.DOM.py, line 436:\n    evt.keyCode = key';
	$m.__track_lines__[439] = 'pyjamas.DOM.py, line 439:\n    def eventToString(evt):';
	$m.__track_lines__[440] = 'pyjamas.DOM.py, line 440:\n    return evt.toString()';
	$m.__track_lines__[443] = 'pyjamas.DOM.py, line 443:\n    def iframeGetSrc(elem):';
	$m.__track_lines__[444] = 'pyjamas.DOM.py, line 444:\n    return elem.src';
	$m.__track_lines__[447] = 'pyjamas.DOM.py, line 447:\n    def getAbsoluteLeft(elem):';
	$m.__track_lines__[448] = 'pyjamas.DOM.py, line 448:\n    left = 0';
	$m.__track_lines__[449] = 'pyjamas.DOM.py, line 449:\n    curr = elem';
	$m.__track_lines__[450] = 'pyjamas.DOM.py, line 450:\n    while curr.offsetParent:';
	$m.__track_lines__[451] = 'pyjamas.DOM.py, line 451:\n    left -= curr.scrollLeft';
	$m.__track_lines__[452] = 'pyjamas.DOM.py, line 452:\n    curr = curr.parentNode';
	$m.__track_lines__[454] = 'pyjamas.DOM.py, line 454:\n    while elem:';
	$m.__track_lines__[455] = 'pyjamas.DOM.py, line 455:\n    left += elem.offsetLeft - elem.scrollLeft';
	$m.__track_lines__[456] = 'pyjamas.DOM.py, line 456:\n    elem = elem.offsetParent';
	$m.__track_lines__[458] = 'pyjamas.DOM.py, line 458:\n    return left';
	$m.__track_lines__[461] = 'pyjamas.DOM.py, line 461:\n    def getAbsoluteTop(elem):';
	$m.__track_lines__[462] = 'pyjamas.DOM.py, line 462:\n    top = 0';
	$m.__track_lines__[463] = 'pyjamas.DOM.py, line 463:\n    curr = elem';
	$m.__track_lines__[464] = 'pyjamas.DOM.py, line 464:\n    while curr.offsetParent:';
	$m.__track_lines__[465] = 'pyjamas.DOM.py, line 465:\n    top -= curr.scrollTop';
	$m.__track_lines__[466] = 'pyjamas.DOM.py, line 466:\n    curr = curr.parentNode';
	$m.__track_lines__[468] = 'pyjamas.DOM.py, line 468:\n    while elem:';
	$m.__track_lines__[469] = 'pyjamas.DOM.py, line 469:\n    top += elem.offsetTop - elem.scrollTop';
	$m.__track_lines__[470] = 'pyjamas.DOM.py, line 470:\n    elem = elem.offsetParent';
	$m.__track_lines__[472] = 'pyjamas.DOM.py, line 472:\n    return top';
	$m.__track_lines__[475] = 'pyjamas.DOM.py, line 475:\n    def getAttribute(elem, attr):';
	$m.__track_lines__[476] = 'pyjamas.DOM.py, line 476:\n    attr = getattr(elem, attr)';
	$m.__track_lines__[477] = 'pyjamas.DOM.py, line 477:\n    if attr is None:';
	$m.__track_lines__[478] = 'pyjamas.DOM.py, line 478:\n    return None';
	$m.__track_lines__[479] = 'pyjamas.DOM.py, line 479:\n    return str(attr)';
	$m.__track_lines__[482] = 'pyjamas.DOM.py, line 482:\n    def getElemAttribute(elem, attr):';
	$m.__track_lines__[483] = 'pyjamas.DOM.py, line 483:\n    mf = get_main_frame()';
	$m.__track_lines__[484] = 'pyjamas.DOM.py, line 484:\n    if not elem.hasAttribute(attr):';
	$m.__track_lines__[485] = 'pyjamas.DOM.py, line 485:\n    return str(getattr(elem, mf.mash_attrib(attr)))';
	$m.__track_lines__[486] = 'pyjamas.DOM.py, line 486:\n    return str(elem.getAttribute(attr))';
	$m.__track_lines__[489] = 'pyjamas.DOM.py, line 489:\n    def getBooleanAttribute(elem, attr):';
	$m.__track_lines__[490] = 'pyjamas.DOM.py, line 490:\n    mf = get_main_frame()';
	$m.__track_lines__[491] = 'pyjamas.DOM.py, line 491:\n    return bool(getattr(elem, mf.mash_attrib(attr)))';
	$m.__track_lines__[494] = 'pyjamas.DOM.py, line 494:\n    def getBooleanElemAttribute(elem, attr):';
	$m.__track_lines__[495] = 'pyjamas.DOM.py, line 495:\n    if not elem.hasAttribute(attr):';
	$m.__track_lines__[496] = 'pyjamas.DOM.py, line 496:\n    return None';
	$m.__track_lines__[497] = 'pyjamas.DOM.py, line 497:\n    return bool(elem.getAttribute(attr))';
	$m.__track_lines__[500] = 'pyjamas.DOM.py, line 500:\n    def getCaptureElement():';
	$m.__track_lines__[501] = 'pyjamas.DOM.py, line 501:\n    global sCaptureElem';
	$m.__track_lines__[502] = 'pyjamas.DOM.py, line 502:\n    return sCaptureElem';
	$m.__track_lines__[505] = 'pyjamas.DOM.py, line 505:\n    def getChild(elem, index):';
	$m.__track_lines__[509] = 'pyjamas.DOM.py, line 509:\n    count = 0';
	$m.__track_lines__[510] = 'pyjamas.DOM.py, line 510:\n    child = elem.firstChild';
	$m.__track_lines__[511] = 'pyjamas.DOM.py, line 511:\n    while child:';
	$m.__track_lines__[512] = 'pyjamas.DOM.py, line 512:\n    next = child.nextSibling';
	$m.__track_lines__[513] = 'pyjamas.DOM.py, line 513:\n    if child.nodeType == 1:';
	$m.__track_lines__[514] = 'pyjamas.DOM.py, line 514:\n    if index == count:';
	$m.__track_lines__[515] = 'pyjamas.DOM.py, line 515:\n    return child';
	$m.__track_lines__[516] = 'pyjamas.DOM.py, line 516:\n    count += 1';
	$m.__track_lines__[517] = 'pyjamas.DOM.py, line 517:\n    child = next';
	$m.__track_lines__[518] = 'pyjamas.DOM.py, line 518:\n    return None';
	$m.__track_lines__[521] = 'pyjamas.DOM.py, line 521:\n    def getChildCount(elem):';
	$m.__track_lines__[526] = 'pyjamas.DOM.py, line 526:\n    count = 0';
	$m.__track_lines__[527] = 'pyjamas.DOM.py, line 527:\n    child = elem.firstChild';
	$m.__track_lines__[528] = 'pyjamas.DOM.py, line 528:\n    while child:';
	$m.__track_lines__[529] = 'pyjamas.DOM.py, line 529:\n    if child.nodeType == 1:';
	$m.__track_lines__[530] = 'pyjamas.DOM.py, line 530:\n    count += 1';
	$m.__track_lines__[531] = 'pyjamas.DOM.py, line 531:\n    child = child.nextSibling';
	$m.__track_lines__[532] = 'pyjamas.DOM.py, line 532:\n    return count';
	$m.__track_lines__[535] = 'pyjamas.DOM.py, line 535:\n    def getChildIndex(parent, toFind):';
	$m.__track_lines__[541] = 'pyjamas.DOM.py, line 541:\n    count = 0';
	$m.__track_lines__[542] = 'pyjamas.DOM.py, line 542:\n    child = parent.firstChild';
	$m.__track_lines__[543] = 'pyjamas.DOM.py, line 543:\n    while child:';
	$m.__track_lines__[544] = 'pyjamas.DOM.py, line 544:\n    if child == toFind:';
	$m.__track_lines__[545] = 'pyjamas.DOM.py, line 545:\n    return count';
	$m.__track_lines__[546] = 'pyjamas.DOM.py, line 546:\n    if child.nodeType == 1:';
	$m.__track_lines__[547] = 'pyjamas.DOM.py, line 547:\n    count += 1';
	$m.__track_lines__[548] = 'pyjamas.DOM.py, line 548:\n    child = child.nextSibling';
	$m.__track_lines__[550] = 'pyjamas.DOM.py, line 550:\n    return -1';
	$m.__track_lines__[553] = 'pyjamas.DOM.py, line 553:\n    def getElementById(id):';
	$m.__track_lines__[557] = 'pyjamas.DOM.py, line 557:\n    return doc().getElementById(id)';
	$m.__track_lines__[560] = 'pyjamas.DOM.py, line 560:\n    def getEventListener(element):';
	$m.__track_lines__[564] = 'pyjamas.DOM.py, line 564:\n    return get_listener(element)';
	$m.__track_lines__[566] = 'pyjamas.DOM.py, line 566:\n    eventbitsmap = {}';
	$m.__track_lines__[569] = 'pyjamas.DOM.py, line 569:\n    def getEventsSunk(element):';
	$m.__track_lines__[574] = 'pyjamas.DOM.py, line 574:\n    return eventbitsmap.get(element, 0)';
	$m.__track_lines__[577] = 'pyjamas.DOM.py, line 577:\n    def getFirstChild(elem):';
	$m.__track_lines__[578] = 'pyjamas.DOM.py, line 578:\n    child = elem and elem.firstChild';
	$m.__track_lines__[579] = 'pyjamas.DOM.py, line 579:\n    while child and child.nodeType != 1:';
	$m.__track_lines__[580] = 'pyjamas.DOM.py, line 580:\n    child = child.nextSibling';
	$m.__track_lines__[581] = 'pyjamas.DOM.py, line 581:\n    return child';
	$m.__track_lines__[584] = 'pyjamas.DOM.py, line 584:\n    def getInnerHTML(element):';
	$m.__track_lines__[585] = 'pyjamas.DOM.py, line 585:\n    try:';
	$m.__track_lines__[586] = 'pyjamas.DOM.py, line 586:\n    return element and element.innerHtml # webkit. erk.';
	$m.__track_lines__[588] = 'pyjamas.DOM.py, line 588:\n    return element and element.innerHTML # hulahop / xul.  yuk.';
	$m.__track_lines__[591] = 'pyjamas.DOM.py, line 591:\n    def getInnerText(element):';
	$m.__track_lines__[594] = "pyjamas.DOM.py, line 594:\n    text = ''";
	$m.__track_lines__[595] = 'pyjamas.DOM.py, line 595:\n    child = element.firstChild';
	$m.__track_lines__[596] = 'pyjamas.DOM.py, line 596:\n    while child:';
	$m.__track_lines__[597] = 'pyjamas.DOM.py, line 597:\n    if child.nodeType == 1:';
	$m.__track_lines__[598] = 'pyjamas.DOM.py, line 598:\n    text += getInnerText(child)';
	$m.__track_lines__[600] = 'pyjamas.DOM.py, line 600:\n    text += child.nodeValue';
	$m.__track_lines__[601] = 'pyjamas.DOM.py, line 601:\n    child = child.nextSibling';
	$m.__track_lines__[602] = 'pyjamas.DOM.py, line 602:\n    return text';
	$m.__track_lines__[605] = 'pyjamas.DOM.py, line 605:\n    def getIntAttribute(elem, attr):';
	$m.__track_lines__[606] = 'pyjamas.DOM.py, line 606:\n    return int(getattr(elem, attr))';
	$m.__track_lines__[609] = 'pyjamas.DOM.py, line 609:\n    def getIntElemAttribute(elem, attr):';
	$m.__track_lines__[610] = 'pyjamas.DOM.py, line 610:\n    if not elem.hasAttribute(attr):';
	$m.__track_lines__[611] = 'pyjamas.DOM.py, line 611:\n    return None';
	$m.__track_lines__[612] = 'pyjamas.DOM.py, line 612:\n    return int(elem.getAttribute(attr))';
	$m.__track_lines__[615] = 'pyjamas.DOM.py, line 615:\n    def getIntStyleAttribute(elem, attr):';
	$m.__track_lines__[616] = 'pyjamas.DOM.py, line 616:\n    return getIntAttribute(elem.style, attr)';
	$m.__track_lines__[619] = 'pyjamas.DOM.py, line 619:\n    def getNextSibling(elem):';
	$m.__track_lines__[620] = 'pyjamas.DOM.py, line 620:\n    sib = elem.nextSibling';
	$m.__track_lines__[621] = 'pyjamas.DOM.py, line 621:\n    while sib and sib.nodeType != 1:';
	$m.__track_lines__[622] = 'pyjamas.DOM.py, line 622:\n    sib = sib.nextSibling';
	$m.__track_lines__[623] = 'pyjamas.DOM.py, line 623:\n    return sib';
	$m.__track_lines__[626] = 'pyjamas.DOM.py, line 626:\n    def getNodeType(elem):';
	$m.__track_lines__[627] = 'pyjamas.DOM.py, line 627:\n    return elem.nodeType';
	$m.__track_lines__[630] = 'pyjamas.DOM.py, line 630:\n    def getParent(elem):';
	$m.__track_lines__[631] = 'pyjamas.DOM.py, line 631:\n    parent = elem.parentNode';
	$m.__track_lines__[632] = 'pyjamas.DOM.py, line 632:\n    if parent is None:';
	$m.__track_lines__[633] = 'pyjamas.DOM.py, line 633:\n    return None';
	$m.__track_lines__[634] = 'pyjamas.DOM.py, line 634:\n    if getNodeType(parent) != 1:';
	$m.__track_lines__[635] = 'pyjamas.DOM.py, line 635:\n    return None';
	$m.__track_lines__[636] = 'pyjamas.DOM.py, line 636:\n    return parent';
	$m.__track_lines__[639] = 'pyjamas.DOM.py, line 639:\n    def getStyleAttribute(elem, attr):';
	$m.__track_lines__[640] = 'pyjamas.DOM.py, line 640:\n    try:';
	$m.__track_lines__[641] = "pyjamas.DOM.py, line 641:\n    if hasattr(elem.style, 'getProperty'):";
	$m.__track_lines__[642] = 'pyjamas.DOM.py, line 642:\n    return elem.style.getProperty(mash_name_for_glib(attr))';
	$m.__track_lines__[643] = 'pyjamas.DOM.py, line 643:\n    return elem.style.getAttribute(attr)';
	$m.__track_lines__[645] = 'pyjamas.DOM.py, line 645:\n    return getattr(elem.style, attr, None)';
	$m.__track_lines__[648] = 'pyjamas.DOM.py, line 648:\n    def insertChild(parent, toAdd, index):';
	$m.__track_lines__[649] = 'pyjamas.DOM.py, line 649:\n    count = 0';
	$m.__track_lines__[650] = 'pyjamas.DOM.py, line 650:\n    child = parent.firstChild';
	$m.__track_lines__[651] = 'pyjamas.DOM.py, line 651:\n    before = None';
	$m.__track_lines__[652] = 'pyjamas.DOM.py, line 652:\n    while child:';
	$m.__track_lines__[653] = 'pyjamas.DOM.py, line 653:\n    if child.nodeType == 1:';
	$m.__track_lines__[654] = 'pyjamas.DOM.py, line 654:\n    if (count == index):';
	$m.__track_lines__[655] = 'pyjamas.DOM.py, line 655:\n    before = child';
	$m.__track_lines__[656] = 'pyjamas.DOM.py, line 656:\n    break';
	$m.__track_lines__[658] = 'pyjamas.DOM.py, line 658:\n    count += 1';
	$m.__track_lines__[659] = 'pyjamas.DOM.py, line 659:\n    child = child.nextSibling';
	$m.__track_lines__[661] = 'pyjamas.DOM.py, line 661:\n    if before is None:';
	$m.__track_lines__[662] = 'pyjamas.DOM.py, line 662:\n    parent.appendChild(toAdd)';
	$m.__track_lines__[664] = 'pyjamas.DOM.py, line 664:\n    parent.insertBefore(toAdd, before)';
	$m.__track_lines__[667] = 'pyjamas.DOM.py, line 667:\n    class IterChildrenClass:';
	$m.__track_lines__[669] = 'pyjamas.DOM.py, line 669:\n    def __init__(self, elem):';
	$m.__track_lines__[670] = 'pyjamas.DOM.py, line 670:\n    self.parent = elem';
	$m.__track_lines__[671] = 'pyjamas.DOM.py, line 671:\n    self.child = elem.firstChild';
	$m.__track_lines__[672] = 'pyjamas.DOM.py, line 672:\n    self.lastChild = None';
	$m.__track_lines__[674] = 'pyjamas.DOM.py, line 674:\n    def next(self):';
	$m.__track_lines__[675] = 'pyjamas.DOM.py, line 675:\n    if not self.child:';
	$m.__track_lines__[676] = 'pyjamas.DOM.py, line 676:\n    raise StopIteration';
	$m.__track_lines__[677] = 'pyjamas.DOM.py, line 677:\n    self.lastChild = self.child';
	$m.__track_lines__[678] = 'pyjamas.DOM.py, line 678:\n    self.child = getNextSibling(self.child)';
	$m.__track_lines__[679] = 'pyjamas.DOM.py, line 679:\n    return self.lastChild';
	$m.__track_lines__[681] = 'pyjamas.DOM.py, line 681:\n    def remove(self):';
	$m.__track_lines__[682] = 'pyjamas.DOM.py, line 682:\n    self.parent.removeChild(self.lastChild)';
	$m.__track_lines__[684] = 'pyjamas.DOM.py, line 684:\n    def __iter__(self):';
	$m.__track_lines__[685] = 'pyjamas.DOM.py, line 685:\n    return self';
	$m.__track_lines__[688] = 'pyjamas.DOM.py, line 688:\n    def iterChildren(elem):';
	$m.__track_lines__[693] = 'pyjamas.DOM.py, line 693:\n    return IterChildrenClass(elem)';
	$m.__track_lines__[696] = 'pyjamas.DOM.py, line 696:\n    class IterWalkChildren:';
	$m.__track_lines__[698] = 'pyjamas.DOM.py, line 698:\n    def __init__(self, elem):';
	$m.__track_lines__[699] = 'pyjamas.DOM.py, line 699:\n    self.parent = elem';
	$m.__track_lines__[700] = 'pyjamas.DOM.py, line 700:\n    self.child = getFirstChild(elem)';
	$m.__track_lines__[701] = 'pyjamas.DOM.py, line 701:\n    self.lastChild = None';
	$m.__track_lines__[702] = 'pyjamas.DOM.py, line 702:\n    self.stack = []';
	$m.__track_lines__[704] = 'pyjamas.DOM.py, line 704:\n    def next(self):';
	$m.__track_lines__[705] = 'pyjamas.DOM.py, line 705:\n    if not self.child:';
	$m.__track_lines__[706] = 'pyjamas.DOM.py, line 706:\n    raise StopIteration';
	$m.__track_lines__[707] = 'pyjamas.DOM.py, line 707:\n    self.lastChild = self.child';
	$m.__track_lines__[708] = 'pyjamas.DOM.py, line 708:\n    firstChild = getFirstChild(self.child)';
	$m.__track_lines__[709] = 'pyjamas.DOM.py, line 709:\n    nextSibling = getNextSibling(self.child)';
	$m.__track_lines__[710] = 'pyjamas.DOM.py, line 710:\n    if firstChild is not None:';
	$m.__track_lines__[711] = 'pyjamas.DOM.py, line 711:\n    if nextSibling is not None:';
	$m.__track_lines__[712] = 'pyjamas.DOM.py, line 712:\n    self.stack.append((nextSibling, self.parent))';
	$m.__track_lines__[713] = 'pyjamas.DOM.py, line 713:\n    self.parent = self.child';
	$m.__track_lines__[714] = 'pyjamas.DOM.py, line 714:\n    self.child = firstChild';
	$m.__track_lines__[716] = 'pyjamas.DOM.py, line 716:\n    self.child = nextSibling';
	$m.__track_lines__[718] = 'pyjamas.DOM.py, line 718:\n    (self.child, self.parent) = self.stack.pop()';
	$m.__track_lines__[720] = 'pyjamas.DOM.py, line 720:\n    self.child = None';
	$m.__track_lines__[721] = 'pyjamas.DOM.py, line 721:\n    return self.lastChild';
	$m.__track_lines__[723] = 'pyjamas.DOM.py, line 723:\n    def remove(self):';
	$m.__track_lines__[724] = 'pyjamas.DOM.py, line 724:\n    self.parent.removeChild(self.lastChild)';
	$m.__track_lines__[726] = 'pyjamas.DOM.py, line 726:\n    def __iter__(self):';
	$m.__track_lines__[727] = 'pyjamas.DOM.py, line 727:\n    return self';
	$m.__track_lines__[730] = 'pyjamas.DOM.py, line 730:\n    def walkChildren(elem):';
	$m.__track_lines__[736] = 'pyjamas.DOM.py, line 736:\n    return IterWalkChildren(elem)';
	$m.__track_lines__[739] = 'pyjamas.DOM.py, line 739:\n    def isOrHasChild(parent, child):';
	$m.__track_lines__[740] = 'pyjamas.DOM.py, line 740:\n    while child:';
	$m.__track_lines__[741] = 'pyjamas.DOM.py, line 741:\n    if compare(parent, child):';
	$m.__track_lines__[742] = 'pyjamas.DOM.py, line 742:\n    return True';
	$m.__track_lines__[743] = 'pyjamas.DOM.py, line 743:\n    child = child.parentNode';
	$m.__track_lines__[744] = 'pyjamas.DOM.py, line 744:\n    if not child:';
	$m.__track_lines__[745] = 'pyjamas.DOM.py, line 745:\n    return False';
	$m.__track_lines__[746] = 'pyjamas.DOM.py, line 746:\n    if child.nodeType != 1:';
	$m.__track_lines__[747] = 'pyjamas.DOM.py, line 747:\n    child = None';
	$m.__track_lines__[748] = 'pyjamas.DOM.py, line 748:\n    return False';
	$m.__track_lines__[751] = 'pyjamas.DOM.py, line 751:\n    def releaseCapture(elem):';
	$m.__track_lines__[753] = 'pyjamas.DOM.py, line 753:\n    global sCaptureElem';
	$m.__track_lines__[754] = 'pyjamas.DOM.py, line 754:\n    if sCaptureElem and compare(elem, sCaptureElem):';
	$m.__track_lines__[755] = 'pyjamas.DOM.py, line 755:\n    sCaptureElem = None';
	$m.__track_lines__[756] = 'pyjamas.DOM.py, line 756:\n    releaseCapture_impl(elem)';
	$m.__track_lines__[757] = 'pyjamas.DOM.py, line 757:\n    return';
	$m.__track_lines__[760] = 'pyjamas.DOM.py, line 760:\n    def releaseCapture_impl(elem): pass';
	$m.__track_lines__[762] = 'pyjamas.DOM.py, line 762:\n    def removeEventPreview(preview):';
	$m.__track_lines__[763] = 'pyjamas.DOM.py, line 763:\n    sEventPreviewStack.remove(preview)';
	$m.__track_lines__[766] = 'pyjamas.DOM.py, line 766:\n    def getOffsetHeight(elem):';
	$m.__track_lines__[767] = 'pyjamas.DOM.py, line 767:\n    return elem.offsetHeight';
	$m.__track_lines__[770] = 'pyjamas.DOM.py, line 770:\n    def getOffsetWidth(elem):';
	$m.__track_lines__[771] = 'pyjamas.DOM.py, line 771:\n    return elem.offsetWidth';
	$m.__track_lines__[774] = 'pyjamas.DOM.py, line 774:\n    def scrollIntoView(elem):';
	$m.__track_lines__[775] = 'pyjamas.DOM.py, line 775:\n    left = elem.offsetLeft';
	$m.__track_lines__[776] = 'pyjamas.DOM.py, line 776:\n    top = elem.offsetTop';
	$m.__track_lines__[777] = 'pyjamas.DOM.py, line 777:\n    width = elem.offsetWidth';
	$m.__track_lines__[778] = 'pyjamas.DOM.py, line 778:\n    height = elem.offsetHeight';
	$m.__track_lines__[780] = 'pyjamas.DOM.py, line 780:\n    if elem.parentNode != elem.offsetParent:';
	$m.__track_lines__[781] = 'pyjamas.DOM.py, line 781:\n    left -= elem.parentNode.offsetLeft';
	$m.__track_lines__[782] = 'pyjamas.DOM.py, line 782:\n    top -= elem.parentNode.offsetTop';
	$m.__track_lines__[784] = 'pyjamas.DOM.py, line 784:\n    cur = elem.parentNode';
	$m.__track_lines__[785] = 'pyjamas.DOM.py, line 785:\n    while cur and cur.nodeType == 1:';
	$m.__track_lines__[786] = "pyjamas.DOM.py, line 786:\n    if hasattr(cur, 'style') and hasattr(cur.style, 'overflow') and \\";
	$m.__track_lines__[788] = 'pyjamas.DOM.py, line 788:\n    if left < cur.scrollLeft:';
	$m.__track_lines__[789] = 'pyjamas.DOM.py, line 789:\n    cur.scrollLeft = left';
	$m.__track_lines__[790] = 'pyjamas.DOM.py, line 790:\n    if left + width > cur.scrollLeft + cur.clientWidth:';
	$m.__track_lines__[791] = 'pyjamas.DOM.py, line 791:\n    cur.scrollLeft = (left + width) - cur.clientWidth';
	$m.__track_lines__[792] = 'pyjamas.DOM.py, line 792:\n    if top < cur.scrollTop:';
	$m.__track_lines__[793] = 'pyjamas.DOM.py, line 793:\n    cur.scrollTop = top';
	$m.__track_lines__[794] = 'pyjamas.DOM.py, line 794:\n    if top + height > cur.scrollTop + cur.clientHeight:';
	$m.__track_lines__[795] = 'pyjamas.DOM.py, line 795:\n    cur.scrollTop = (top + height) - cur.clientHeight';
	$m.__track_lines__[797] = 'pyjamas.DOM.py, line 797:\n    offsetLeft = cur.offsetLeft';
	$m.__track_lines__[798] = 'pyjamas.DOM.py, line 798:\n    offsetTop = cur.offsetTop';
	$m.__track_lines__[799] = 'pyjamas.DOM.py, line 799:\n    if cur.parentNode != cur.offsetParent:';
	$m.__track_lines__[800] = 'pyjamas.DOM.py, line 800:\n    if hasattr(cur.parentNode, "offsetLeft"):';
	$m.__track_lines__[801] = 'pyjamas.DOM.py, line 801:\n    offsetLeft -= cur.parentNode.offsetLeft';
	$m.__track_lines__[802] = 'pyjamas.DOM.py, line 802:\n    if hasattr(cur.parentNode, "offsetTop"):';
	$m.__track_lines__[803] = 'pyjamas.DOM.py, line 803:\n    offsetTop -= cur.parentNode.offsetTop';
	$m.__track_lines__[805] = 'pyjamas.DOM.py, line 805:\n    left += offsetLeft - cur.scrollLeft';
	$m.__track_lines__[806] = 'pyjamas.DOM.py, line 806:\n    top += offsetTop - cur.scrollTop';
	$m.__track_lines__[807] = 'pyjamas.DOM.py, line 807:\n    cur = cur.parentNode';
	$m.__track_lines__[810] = "pyjamas.DOM.py, line 810:\n    def mash_name_for_glib(name, joiner='-'):";
	$m.__track_lines__[811] = "pyjamas.DOM.py, line 811:\n    res = ''";
	$m.__track_lines__[812] = 'pyjamas.DOM.py, line 812:\n    for c in name:';
	$m.__track_lines__[813] = 'pyjamas.DOM.py, line 813:\n    if c.isupper():';
	$m.__track_lines__[814] = 'pyjamas.DOM.py, line 814:\n    res += joiner + c.lower()';
	$m.__track_lines__[816] = 'pyjamas.DOM.py, line 816:\n    res += c';
	$m.__track_lines__[817] = 'pyjamas.DOM.py, line 817:\n    return res';
	$m.__track_lines__[820] = 'pyjamas.DOM.py, line 820:\n    def removeAttribute(element, attribute):';
	$m.__track_lines__[821] = 'pyjamas.DOM.py, line 821:\n    element.removeAttribute(attribute)';
	$m.__track_lines__[824] = 'pyjamas.DOM.py, line 824:\n    def setAttribute(element, attribute, value):';
	$m.__track_lines__[825] = 'pyjamas.DOM.py, line 825:\n    setattr(element, attribute, value)';
	$m.__track_lines__[828] = 'pyjamas.DOM.py, line 828:\n    def setElemAttribute(element, attribute, value):';
	$m.__track_lines__[829] = 'pyjamas.DOM.py, line 829:\n    element.setAttribute(attribute, value)';
	$m.__track_lines__[832] = 'pyjamas.DOM.py, line 832:\n    def setBooleanAttribute(elem, attr, value):';
	$m.__track_lines__[833] = 'pyjamas.DOM.py, line 833:\n    mf = get_main_frame()';
	$m.__track_lines__[834] = 'pyjamas.DOM.py, line 834:\n    setattr(elem, mf.mash_attrib(attr), value)';
	$m.__track_lines__[837] = 'pyjamas.DOM.py, line 837:\n    def setCapture(elem):';
	$m.__track_lines__[838] = 'pyjamas.DOM.py, line 838:\n    global sCaptureElem';
	$m.__track_lines__[839] = 'pyjamas.DOM.py, line 839:\n    sCaptureElem = elem';
	$m.__track_lines__[841] = 'pyjamas.DOM.py, line 841:\n    setCapture_impl(elem)';
	$m.__track_lines__[844] = 'pyjamas.DOM.py, line 844:\n    def setCapture_impl(elem): pass';
	$m.__track_lines__[846] = 'pyjamas.DOM.py, line 846:\n    def setEventListener(element, listener):';
	$m.__track_lines__[853] = 'pyjamas.DOM.py, line 853:\n    set_listener(element, listener)';
	$m.__track_lines__[856] = 'pyjamas.DOM.py, line 856:\n    def createTextNode(txt):';
	$m.__track_lines__[857] = 'pyjamas.DOM.py, line 857:\n    return doc().createTextNode(txt)';
	$m.__track_lines__[860] = 'pyjamas.DOM.py, line 860:\n    def setInnerHTML(element, html):';
	$m.__track_lines__[861] = 'pyjamas.DOM.py, line 861:\n    try:';
	$m.__track_lines__[862] = 'pyjamas.DOM.py, line 862:\n    element.innerHtml = html # webkit. yuk.';
	$m.__track_lines__[864] = 'pyjamas.DOM.py, line 864:\n    element.innerHTML = html # hulahop / xul.  yukk.';
	$m.__track_lines__[867] = 'pyjamas.DOM.py, line 867:\n    def setInnerText(elem, text):';
	$m.__track_lines__[869] = 'pyjamas.DOM.py, line 869:\n    while elem.firstChild is not None:';
	$m.__track_lines__[870] = 'pyjamas.DOM.py, line 870:\n    elem.removeChild(elem.firstChild)';
	$m.__track_lines__[871] = "pyjamas.DOM.py, line 871:\n    elem.appendChild(createTextNode(text or ''))";
	$m.__track_lines__[874] = 'pyjamas.DOM.py, line 874:\n    def setIntElemAttribute(elem, attr, value):';
	$m.__track_lines__[875] = 'pyjamas.DOM.py, line 875:\n    elem.setAttribute(attr, str(value))';
	$m.__track_lines__[878] = 'pyjamas.DOM.py, line 878:\n    def setIntAttribute(elem, attr, value):';
	$m.__track_lines__[879] = 'pyjamas.DOM.py, line 879:\n    setattr(elem, attr, int(value))';
	$m.__track_lines__[882] = 'pyjamas.DOM.py, line 882:\n    def setIntStyleAttribute(elem, attr, value):';
	$m.__track_lines__[883] = 'pyjamas.DOM.py, line 883:\n    mf = get_main_frame()';
	$m.__track_lines__[884] = "pyjamas.DOM.py, line 884:\n    if hasattr(elem.style, 'setProperty'):";
	$m.__track_lines__[885] = 'pyjamas.DOM.py, line 885:\n    elem.style.setProperty(mf.mash_attrib(attr), str(value), "")';
	$m.__track_lines__[887] = 'pyjamas.DOM.py, line 887:\n    elem.style.setAttribute(mf.mash_attrib(attr), str(value), "")';
	$m.__track_lines__[890] = 'pyjamas.DOM.py, line 890:\n    def setOptionText(select, text, index):';
	$m.__track_lines__[891] = 'pyjamas.DOM.py, line 891:\n    option = select.options.item(index)';
	$m.__track_lines__[892] = 'pyjamas.DOM.py, line 892:\n    option.textContent = text';
	$m.__track_lines__[895] = 'pyjamas.DOM.py, line 895:\n    def setStyleAttribute(element, name, value):';
	$m.__track_lines__[896] = "pyjamas.DOM.py, line 896:\n    if hasattr(element.style, 'setProperty'):";
	$m.__track_lines__[897] = 'pyjamas.DOM.py, line 897:\n    element.style.setProperty(mash_name_for_glib(name), value, "")';
	$m.__track_lines__[899] = 'pyjamas.DOM.py, line 899:\n    element.style.setAttribute(name, value, "")';
	$m.__track_lines__[901] = 'pyjamas.DOM.py, line 901:\n    def setStyleAttributes(element, **kwargs):';
	$m.__track_lines__[905] = 'pyjamas.DOM.py, line 905:\n    for attr, val in kwargs.items():';
	$m.__track_lines__[906] = "pyjamas.DOM.py, line 906:\n    if hasattr(element.style, 'setProperty'):";
	$m.__track_lines__[907] = 'pyjamas.DOM.py, line 907:\n    element.style.setProperty(mash_name_for_glib(attr), val, "")';
	$m.__track_lines__[909] = 'pyjamas.DOM.py, line 909:\n    element.style.setAttribute(attr, val, "")';
	$m.__track_lines__[911] = 'pyjamas.DOM.py, line 911:\n    def sinkEvents(element, bits):';
	$m.__track_lines__[918] = 'pyjamas.DOM.py, line 918:\n    mask = getEventsSunk(element) ^ bits';
	$m.__track_lines__[919] = 'pyjamas.DOM.py, line 919:\n    eventbitsmap[element] = bits';
	$m.__track_lines__[920] = 'pyjamas.DOM.py, line 920:\n    if not mask:';
	$m.__track_lines__[921] = 'pyjamas.DOM.py, line 921:\n    return';
	$m.__track_lines__[923] = 'pyjamas.DOM.py, line 923:\n    bits = mask';
	$m.__track_lines__[925] = 'pyjamas.DOM.py, line 925:\n    if not bits:';
	$m.__track_lines__[926] = 'pyjamas.DOM.py, line 926:\n    return';
	$m.__track_lines__[927] = 'pyjamas.DOM.py, line 927:\n    mf = get_main_frame()';
	$m.__track_lines__[928] = 'pyjamas.DOM.py, line 928:\n    if hasattr(mf, "_addEventListener"):';
	$m.__track_lines__[929] = 'pyjamas.DOM.py, line 929:\n    aev = mf._addEventListener';
	$m.__track_lines__[931] = 'pyjamas.DOM.py, line 931:\n    aev = mf.addEventListener';
	$m.__track_lines__[933] = 'pyjamas.DOM.py, line 933:\n    cb = _dispatchEvent';
	$m.__track_lines__[936] = 'pyjamas.DOM.py, line 936:\n    sinkEventsMozilla(element, bits)';
	$m.__track_lines__[938] = 'pyjamas.DOM.py, line 938:\n    bit = 1';
	$m.__track_lines__[939] = 'pyjamas.DOM.py, line 939:\n    while bits:';
	$m.__track_lines__[940] = 'pyjamas.DOM.py, line 940:\n    if bit > bits:';
	$m.__track_lines__[941] = 'pyjamas.DOM.py, line 941:\n    raise RuntimeError("sinkEvents: bit outruns bits")';
	$m.__track_lines__[942] = 'pyjamas.DOM.py, line 942:\n    if (bits & bit):';
	$m.__track_lines__[943] = 'pyjamas.DOM.py, line 943:\n    for event_name in Event.eventbits[bit][1]:';
	$m.__track_lines__[944] = 'pyjamas.DOM.py, line 944:\n    aev(element, event_name, cb)';
	$m.__track_lines__[945] = 'pyjamas.DOM.py, line 945:\n    bits ^= bit';
	$m.__track_lines__[946] = 'pyjamas.DOM.py, line 946:\n    bit <<= 1';
	$m.__track_lines__[948] = 'pyjamas.DOM.py, line 948:\n    def sinkEventsMozilla(element, bits):';
	$m.__track_lines__[949] = 'pyjamas.DOM.py, line 949:\n    pass';
	$m.__track_lines__[951] = 'pyjamas.DOM.py, line 951:\n    def toString(elem):';
	$m.__track_lines__[952] = 'pyjamas.DOM.py, line 952:\n    temp = elem.cloneNode(True)';
	$m.__track_lines__[953] = 'pyjamas.DOM.py, line 953:\n    tempDiv = createDiv()';
	$m.__track_lines__[954] = 'pyjamas.DOM.py, line 954:\n    tempDiv.appendChild(temp)';
	$m.__track_lines__[955] = 'pyjamas.DOM.py, line 955:\n    outer = getInnerHTML(tempDiv)';
	$m.__track_lines__[956] = 'pyjamas.DOM.py, line 956:\n    setInnerHTML(temp, "")';
	$m.__track_lines__[957] = 'pyjamas.DOM.py, line 957:\n    return outer';
	$m.__track_lines__[961] = 'pyjamas.DOM.py, line 961:\n    def dispatchEvent(event, element, listener):';
	$m.__track_lines__[962] = 'pyjamas.DOM.py, line 962:\n    dispatchEventImpl(event, element, listener)';
	$m.__track_lines__[965] = 'pyjamas.DOM.py, line 965:\n    def previewEvent(evt):';
	$m.__track_lines__[967] = 'pyjamas.DOM.py, line 967:\n    if len(sEventPreviewStack) == 0:';
	$m.__track_lines__[968] = 'pyjamas.DOM.py, line 968:\n    return True';
	$m.__track_lines__[969] = 'pyjamas.DOM.py, line 969:\n    preview = sEventPreviewStack[-1]';
	$m.__track_lines__[970] = 'pyjamas.DOM.py, line 970:\n    ret = preview.onEventPreview(evt)';
	$m.__track_lines__[971] = 'pyjamas.DOM.py, line 971:\n    if ret:';
	$m.__track_lines__[972] = 'pyjamas.DOM.py, line 972:\n    return True';
	$m.__track_lines__[975] = 'pyjamas.DOM.py, line 975:\n    if evt:';
	$m.__track_lines__[976] = 'pyjamas.DOM.py, line 976:\n    eventCancelBubble(evt, True)';
	$m.__track_lines__[977] = 'pyjamas.DOM.py, line 977:\n    eventPreventDefault(evt)';
	$m.__track_lines__[979] = 'pyjamas.DOM.py, line 979:\n    return ret';
	$m.__track_lines__[983] = 'pyjamas.DOM.py, line 983:\n    def dispatchEventAndCatch(evt, elem, listener, handler):';
	$m.__track_lines__[984] = 'pyjamas.DOM.py, line 984:\n    pass';
	$m.__track_lines__[986] = 'pyjamas.DOM.py, line 986:\n    currentEvent = None';
	$m.__track_lines__[989] = 'pyjamas.DOM.py, line 989:\n    def dispatchEventImpl(event, element, listener):';
	$m.__track_lines__[990] = 'pyjamas.DOM.py, line 990:\n    global sCaptureElem';
	$m.__track_lines__[991] = 'pyjamas.DOM.py, line 991:\n    global currentEvent';
	$m.__track_lines__[992] = 'pyjamas.DOM.py, line 992:\n    if element == sCaptureElem:';
	$m.__track_lines__[993] = 'pyjamas.DOM.py, line 993:\n    if eventGetType(event) == "losecapture":';
	$m.__track_lines__[995] = 'pyjamas.DOM.py, line 995:\n    sCaptureElem = None';
	$m.__track_lines__[997] = 'pyjamas.DOM.py, line 997:\n    prevCurrentEvent = currentEvent';
	$m.__track_lines__[998] = 'pyjamas.DOM.py, line 998:\n    currentEvent = event';
	$m.__track_lines__[999] = 'pyjamas.DOM.py, line 999:\n    listener.onBrowserEvent(event)';
	$m.__track_lines__[1000] = 'pyjamas.DOM.py, line 1000:\n    currentEvent = prevCurrentEvent';
	$m.__track_lines__[1003] = 'pyjamas.DOM.py, line 1003:\n    def eventGetCurrentEvent():';
	$m.__track_lines__[1004] = 'pyjamas.DOM.py, line 1004:\n    return currentEvent';
	$m.__track_lines__[1007] = 'pyjamas.DOM.py, line 1007:\n    def insertListItem(select, item, value, index):';
	$m.__track_lines__[1008] = 'pyjamas.DOM.py, line 1008:\n    option = createElement("OPTION")';
	$m.__track_lines__[1009] = 'pyjamas.DOM.py, line 1009:\n    setInnerText(option, item)';
	$m.__track_lines__[1010] = 'pyjamas.DOM.py, line 1010:\n    if value is not None:';
	$m.__track_lines__[1011] = 'pyjamas.DOM.py, line 1011:\n    setAttribute(option, "value", value)';
	$m.__track_lines__[1012] = 'pyjamas.DOM.py, line 1012:\n    if index == -1:';
	$m.__track_lines__[1013] = 'pyjamas.DOM.py, line 1013:\n    appendChild(select, option)';
	$m.__track_lines__[1015] = 'pyjamas.DOM.py, line 1015:\n    insertChild(select, option, index)';
	$m.__track_lines__[1018] = 'pyjamas.DOM.py, line 1018:\n    def getBodyOffsetTop():';
	$m.__track_lines__[1019] = 'pyjamas.DOM.py, line 1019:\n    return 0';
	$m.__track_lines__[1022] = 'pyjamas.DOM.py, line 1022:\n    def getBodyOffsetLeft():';
	$m.__track_lines__[1023] = 'pyjamas.DOM.py, line 1023:\n    return 0';
	$m.__track_lines__[1025] = 'pyjamas.DOM.py, line 1025:\n    def eventGetMouseWheelVelocityY(evt):';
	$m.__track_lines__[1028] = 'pyjamas.DOM.py, line 1028:\n    pass';
	$m.__track_lines__[1031] = 'pyjamas.DOM.py, line 1031:\n    if not pyjd.is_desktop:';
	$m.__track_lines__[1032] = 'pyjamas.DOM.py, line 1032:\n    init()';


	$pyjs.track.module='pyjamas.DOM';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=19;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas');
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=21;
	if ((function(){try{try{$pyjs.in_try_except += 1;
		return $p['bool']($p['getattr']($m['pyjd'], 'is_desktop'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) {
		$pyjs.track.lineno=22;
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['onResize'] = $p['___import___']('pyjamas.Window.onResize', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['onClosing'] = $p['___import___']('pyjamas.Window.onClosing', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
		$m['onClosed'] = $p['___import___']('pyjamas.Window.onClosed', 'pyjamas', null, false);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.lineno=23;
		$pyjs.track.lineno=25;
		$m['currentEvent'] = null;
	}
	$pyjs.track.lineno=27;
	$m['sCaptureElem'] = null;
	$pyjs.track.lineno=28;
	$m['sEventPreviewStack'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
	$pyjs.track.lineno=30;
	$m['listeners'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
	$pyjs.track.lineno=32;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=33;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ONBLUR'] = $p['___import___']('pyjamas.ui.Event.ONBLUR', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ONCHANGE'] = $p['___import___']('pyjamas.ui.Event.ONCHANGE', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ONCLICK'] = $p['___import___']('pyjamas.ui.Event.ONCLICK', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ONCONTEXTMENU'] = $p['___import___']('pyjamas.ui.Event.ONCONTEXTMENU', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ONDBLCLICK'] = $p['___import___']('pyjamas.ui.Event.ONDBLCLICK', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ONERROR'] = $p['___import___']('pyjamas.ui.Event.ONERROR', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ONFOCUS'] = $p['___import___']('pyjamas.ui.Event.ONFOCUS', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ONKEYDOWN'] = $p['___import___']('pyjamas.ui.Event.ONKEYDOWN', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ONKEYPRESS'] = $p['___import___']('pyjamas.ui.Event.ONKEYPRESS', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ONKEYUP'] = $p['___import___']('pyjamas.ui.Event.ONKEYUP', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ONLOAD'] = $p['___import___']('pyjamas.ui.Event.ONLOAD', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ONLOSECAPTURE'] = $p['___import___']('pyjamas.ui.Event.ONLOSECAPTURE', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ONMOUSEDOWN'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEDOWN', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ONMOUSEMOVE'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEMOVE', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ONMOUSEOUT'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEOUT', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ONMOUSEOVER'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEOVER', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ONMOUSEUP'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEUP', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ONSCROLL'] = $p['___import___']('pyjamas.ui.Event.ONSCROLL', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['ONINPUT'] = $p['___import___']('pyjamas.ui.Event.ONINPUT', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=56;
	$m['get_listener'] = function(item) {
		var ret;
		$pyjs.track={module:'pyjamas.DOM',lineno:56};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=56;
		$pyjs.track.lineno=57;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((item === null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
			$pyjs.track.lineno=58;
			$pyjs.track.lineno=58;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=59;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['hasattr'](item, '__instance__');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
			$pyjs.track.lineno=60;
			ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['listeners']['get']($p['getattr'](item, '__instance__'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
		}
		else {
			$pyjs.track.lineno=62;
			ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['listeners']['get']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hash'](item);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
		}
		$pyjs.track.lineno=63;
		$pyjs.track.lineno=63;
		var $pyjs__ret = ret;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['get_listener'].__name__ = 'get_listener';

	$m['get_listener'].__bind_type__ = 0;
	$m['get_listener'].__args__ = [null,null,['item']];
	$pyjs.track.lineno=66;
	$m['set_listener'] = function(item, listener) {

		$pyjs.track={module:'pyjamas.DOM',lineno:66};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=66;
		$pyjs.track.lineno=67;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['hasattr'](item, '__instance__');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
			$pyjs.track.lineno=68;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['listeners'].__setitem__($p['getattr'](item, '__instance__'), listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((listener === null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
			$pyjs.track.lineno=70;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['listeners']['pop']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hash'](item);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
		}
		else {
			$pyjs.track.lineno=72;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['listeners'].__setitem__((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hash'](item);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})(), listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['set_listener'].__name__ = 'set_listener';

	$m['set_listener'].__bind_type__ = 0;
	$m['set_listener'].__args__ = [null,null,['item'],['listener']];
	$pyjs.track.lineno=75;
	$m['hack_timer_workaround_bug_button'] = null;
	$pyjs.track.lineno=78;
	$m['init'] = function() {
		var mf;
		$pyjs.track={module:'pyjamas.DOM',lineno:78};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=78;
		$pyjs.track.lineno=79;
		mf = (function(){try{try{$pyjs.in_try_except += 1;
		return (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
		$pyjs.track.lineno=80;
		(function(){try{try{$pyjs.in_try_except += 1;
		return mf['_addWindowEventListener']('click', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
		$pyjs.track.lineno=81;
		(function(){try{try{$pyjs.in_try_except += 1;
		return mf['_addWindowEventListener']('change', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
		$pyjs.track.lineno=82;
		(function(){try{try{$pyjs.in_try_except += 1;
		return mf['_addWindowEventListener']('mouseout', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
		$pyjs.track.lineno=83;
		(function(){try{try{$pyjs.in_try_except += 1;
		return mf['_addWindowEventListener']('mousedown', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
		$pyjs.track.lineno=84;
		(function(){try{try{$pyjs.in_try_except += 1;
		return mf['_addWindowEventListener']('mouseup', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
		$pyjs.track.lineno=85;
		(function(){try{try{$pyjs.in_try_except += 1;
		return mf['_addWindowEventListener']('resize', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
		$pyjs.track.lineno=86;
		(function(){try{try{$pyjs.in_try_except += 1;
		return mf['_addWindowEventListener']('keyup', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
		$pyjs.track.lineno=87;
		(function(){try{try{$pyjs.in_try_except += 1;
		return mf['_addWindowEventListener']('keydown', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
		$pyjs.track.lineno=88;
		(function(){try{try{$pyjs.in_try_except += 1;
		return mf['_addWindowEventListener']('keypress', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
		$pyjs.track.lineno=89;
		(function(){try{try{$pyjs.in_try_except += 1;
		return mf['_addWindowEventListener']('mousewheel', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	$pyjs.track.lineno=91;
	$m['_init_testing'] = function() {
		var body;
		$pyjs.track={module:'pyjamas.DOM',lineno:91};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=91;
		$pyjs.track.lineno=92;
		body = $doc['getElementsByTagName']('body').__getitem__(0);
		$pyjs.track.lineno=93;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m.mf['_addEventListener'](body, 'click', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
		$pyjs.track.lineno=94;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m.mf['_addEventListener'](body, 'change', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
		$pyjs.track.lineno=95;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m.mf['_addEventListener'](body, 'mouseout', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
		$pyjs.track.lineno=96;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m.mf['_addEventListener'](body, 'mousedown', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
		$pyjs.track.lineno=97;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m.mf['_addEventListener'](body, 'mouseup', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
		$pyjs.track.lineno=98;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m.mf['_addEventListener'](body, 'mousemove', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
		$pyjs.track.lineno=99;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m.mf['_addEventListener'](body, 'resize', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
		$pyjs.track.lineno=100;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m.mf['_addEventListener'](body, 'keyup', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
		$pyjs.track.lineno=101;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m.mf['_addEventListener'](body, 'keydown', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
		$pyjs.track.lineno=102;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m.mf['_addEventListener'](body, 'keypress', (typeof cb == "undefined"?$m.cb:cb));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['_init_testing'].__name__ = '_init_testing';

	$m['_init_testing'].__bind_type__ = 0;
	$m['_init_testing'].__args__ = [null,null];
	$pyjs.track.lineno=104;
	$m['_dispatchWindowEvent'] = function(sender, evt, useCap) {

		$pyjs.track={module:'pyjamas.DOM',lineno:104};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=104;
		$pyjs.track.lineno=105;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['_dispatchWindowEvent'].__name__ = '_dispatchWindowEvent';

	$m['_dispatchWindowEvent'].__bind_type__ = 0;
	$m['_dispatchWindowEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
	$pyjs.track.lineno=108;
	$m['_dispatchEvent'] = function(sender, evt, useCap) {
		var curElem,$and3,$and1,$and2,cap,$and4,$and5,$and6,listener,$pyjs_try_err;
		$pyjs.track={module:'pyjamas.DOM',lineno:108};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=108;
		$pyjs.track.lineno=110;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((evt === null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})()) {
			$pyjs.track.lineno=111;
			evt = $p['getattr']($wnd, 'event');
		}
		else {
			$pyjs.track.lineno=113;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				$pyjs.track.lineno=114;
				sender = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $m.get_main_frame();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()['gobject_wrap'](sender);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
				$pyjs.track.lineno=115;
				evt = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $m.get_main_frame();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()['gobject_wrap'](evt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
			} catch($pyjs_try_err) {
				$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
				$pyjs.__active_exception_stack__ = null;
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.DOM';
				if (true) {
					$pyjs.track.lineno=117;
				}
			}
		}
		$pyjs.track.lineno=118;
		listener = null;
		$pyjs.track.lineno=119;
		curElem = sender;
		$pyjs.track.lineno=122;
		cap = (function(){try{try{$pyjs.in_try_except += 1;
		return (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
		$pyjs.track.lineno=123;
		listener = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['get_listener'](cap);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
		$pyjs.track.lineno=124;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](($p['bool']($and1=cap)?(listener !== null):$and1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()) {
			$pyjs.track.lineno=126;
			(function(){try{try{$pyjs.in_try_except += 1;
			return (typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, cap, listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
			$pyjs.track.lineno=127;
			(function(){try{try{$pyjs.in_try_except += 1;
			return evt['stopPropagation']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
			$pyjs.track.lineno=128;
			$pyjs.track.lineno=128;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=130;
		while ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](($p['bool']($and3=curElem)?((function(){try{try{$pyjs.in_try_except += 1;
		return $m['get_listener'](curElem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})() === null):$and3));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()) {
			$pyjs.track.lineno=132;
			curElem = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof getParent == "undefined"?$m.getParent:getParent)(curElem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
		}
		$pyjs.track.lineno=133;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](($p['bool']($and5=curElem)?!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
		return (typeof getNodeType == "undefined"?$m.getNodeType:getNodeType)(curElem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})(), 1):$and5));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()) {
			$pyjs.track.lineno=134;
			curElem = null;
		}
		$pyjs.track.lineno=136;
		listener = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['get_listener'](curElem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
		$pyjs.track.lineno=137;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((listener !== null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()) {
			$pyjs.track.lineno=138;
			(function(){try{try{$pyjs.in_try_except += 1;
			return (typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, curElem, listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['_dispatchEvent'].__name__ = '_dispatchEvent';

	$m['_dispatchEvent'].__bind_type__ = 0;
	$m['_dispatchEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
	$pyjs.track.lineno=141;
	$m['_dispatchCapturedMouseEvent'] = function(evt) {
		var listener,$and8,cap,$and7;
		$pyjs.track={module:'pyjamas.DOM',lineno:141};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=141;
		$pyjs.track.lineno=144;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
		return (typeof _dispatchCapturedEvent == "undefined"?$m._dispatchCapturedEvent:_dispatchCapturedEvent)(evt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()) {
			$pyjs.track.lineno=145;
			$pyjs.track.lineno=145;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=146;
		cap = (function(){try{try{$pyjs.in_try_except += 1;
		return (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
		$pyjs.track.lineno=147;
		listener = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['get_listener'](cap);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
		$pyjs.track.lineno=148;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](($p['bool']($and7=cap)?(listener !== null):$and7));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()) {
			$pyjs.track.lineno=149;
			(function(){try{try{$pyjs.in_try_except += 1;
			return (typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, cap, listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
			$pyjs.track.lineno=151;
			(function(){try{try{$pyjs.in_try_except += 1;
			return evt['stopPropagation']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['_dispatchCapturedMouseEvent'].__name__ = '_dispatchCapturedMouseEvent';

	$m['_dispatchCapturedMouseEvent'].__bind_type__ = 0;
	$m['_dispatchCapturedMouseEvent'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=154;
	$m['_dispatchCapturedMouseoutEvent'] = function(evt) {
		var listener,lcEvent,cap;
		$pyjs.track={module:'pyjamas.DOM',lineno:154};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=154;
		$pyjs.track.lineno=155;
		cap = (function(){try{try{$pyjs.in_try_except += 1;
		return (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
		$pyjs.track.lineno=157;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((cap === null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()) {
			$pyjs.track.lineno=158;
			$pyjs.track.lineno=158;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=160;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
		return (typeof eventGetToElement == "undefined"?$m.eventGetToElement:eventGetToElement)(evt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})()) {
			$pyjs.track.lineno=161;
			$pyjs.track.lineno=161;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=165;
		(function(){try{try{$pyjs.in_try_except += 1;
		return (typeof setCapture == "undefined"?$m.setCapture:setCapture)(null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
		$pyjs.track.lineno=166;
		listener = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['get_listener'](cap);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
		$pyjs.track.lineno=167;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((listener === null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()) {
			$pyjs.track.lineno=168;
			$pyjs.track.lineno=168;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=171;
		lcEvent = $doc['createEvent']('UIEvent');
		$pyjs.track.lineno=172;
		lcEvent['initUIEvent']('losecapture', false, false, $wnd, 0);
		$pyjs.track.lineno=173;
		(function(){try{try{$pyjs.in_try_except += 1;
		return (typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(lcEvent, cap, listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['_dispatchCapturedMouseoutEvent'].__name__ = '_dispatchCapturedMouseoutEvent';

	$m['_dispatchCapturedMouseoutEvent'].__bind_type__ = 0;
	$m['_dispatchCapturedMouseoutEvent'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=176;
	$m['browser_event_cb'] = function(view, event, from_window) {
		var $or4,$or1,$or3,$or2,$pyjs_try_err,et;
		$pyjs.track={module:'pyjamas.DOM',lineno:176};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=176;
		$pyjs.track.lineno=178;
		$pyjs.track.lineno=180;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((event === null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})()) {
			$pyjs.track.lineno=181;
			event = $p['getattr']($wnd, 'event');
		}
		else {
			$pyjs.track.lineno=183;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				$pyjs.track.lineno=184;
				event = (function(){try{try{$pyjs.in_try_except += 1;
				return (function(){try{try{$pyjs.in_try_except += 1;
				return $m.get_main_frame();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()['gobject_wrap'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
			} catch($pyjs_try_err) {
				$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
				$pyjs.__active_exception_stack__ = null;
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.DOM';
				if (true) {
					$pyjs.track.lineno=186;
				}
			}
		}
		$pyjs.track.lineno=189;
		et = (function(){try{try{$pyjs.in_try_except += 1;
		return (typeof eventGetType == "undefined"?$m.eventGetType:eventGetType)(event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
		$pyjs.track.lineno=191;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](et, 'resize'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()) {
			$pyjs.track.lineno=192;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['onResize']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
			$pyjs.track.lineno=193;
			$pyjs.track.lineno=193;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=194;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](et, 'mouseout'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()) {
			$pyjs.track.lineno=196;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['_dispatchCapturedMouseoutEvent'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
		}
		$pyjs.track.lineno=197;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](($p['bool']($or1=$p['op_eq'](et, 'keyup'))?$or1:($p['bool']($or2=$p['op_eq'](et, 'keydown'))?$or2:($p['bool']($or3=$p['op_eq'](et, 'keypress'))?$or3:$p['op_eq'](et, 'change')))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()) {
			$pyjs.track.lineno=199;
			$pyjs.track.lineno=199;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof _dispatchCapturedEvent == "undefined"?$m._dispatchCapturedEvent:_dispatchCapturedEvent)(event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		else {
			$pyjs.track.lineno=201;
			$pyjs.track.lineno=201;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['_dispatchCapturedMouseEvent'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['browser_event_cb'].__name__ = 'browser_event_cb';

	$m['browser_event_cb'].__bind_type__ = 0;
	$m['browser_event_cb'].__args__ = [null,null,['view'],['event'],['from_window']];
	$pyjs.track.lineno=204;
	$m['_dispatchCapturedEvent'] = function(event) {

		$pyjs.track={module:'pyjamas.DOM',lineno:204};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=204;
		$pyjs.track.lineno=206;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
		return (typeof previewEvent == "undefined"?$m.previewEvent:previewEvent)(event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()) {
			$pyjs.track.lineno=208;
			(function(){try{try{$pyjs.in_try_except += 1;
			return event['stopPropagation']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
			$pyjs.track.lineno=209;
			(function(){try{try{$pyjs.in_try_except += 1;
			return (typeof eventPreventDefault == "undefined"?$m.eventPreventDefault:eventPreventDefault)(event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
			$pyjs.track.lineno=210;
			$pyjs.track.lineno=210;
			var $pyjs__ret = false;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=211;
		$pyjs.track.lineno=211;
		var $pyjs__ret = true;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['_dispatchCapturedEvent'].__name__ = '_dispatchCapturedEvent';

	$m['_dispatchCapturedEvent'].__bind_type__ = 0;
	$m['_dispatchCapturedEvent'].__args__ = [null,null,['event']];
	$pyjs.track.lineno=214;
	$m['addEventPreview'] = function(preview) {

		$pyjs.track={module:'pyjamas.DOM',lineno:214};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=214;
		$pyjs.track.lineno=215;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['sEventPreviewStack']['append'](preview);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['addEventPreview'].__name__ = 'addEventPreview';

	$m['addEventPreview'].__bind_type__ = 0;
	$m['addEventPreview'].__args__ = [null,null,['preview']];
	$pyjs.track.lineno=218;
	$m['appendChild'] = function(parent, child) {

		$pyjs.track={module:'pyjamas.DOM',lineno:218};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=218;
		$pyjs.track.lineno=220;
		(function(){try{try{$pyjs.in_try_except += 1;
		return parent['appendChild'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['appendChild'].__name__ = 'appendChild';

	$m['appendChild'].__bind_type__ = 0;
	$m['appendChild'].__args__ = [null,null,['parent'],['child']];
	$pyjs.track.lineno=222;
	$m['removeChild'] = function(parent, child) {

		$pyjs.track={module:'pyjamas.DOM',lineno:222};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=222;
		$pyjs.track.lineno=224;
		(function(){try{try{$pyjs.in_try_except += 1;
		return parent['removeChild'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['removeChild'].__name__ = 'removeChild';

	$m['removeChild'].__bind_type__ = 0;
	$m['removeChild'].__args__ = [null,null,['parent'],['child']];
	$pyjs.track.lineno=227;
	$m['replaceChild'] = function(parent, newChild, oldChild) {

		$pyjs.track={module:'pyjamas.DOM',lineno:227};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=227;
		$pyjs.track.lineno=228;
		(function(){try{try{$pyjs.in_try_except += 1;
		return parent['replaceChild'](newChild, oldChild);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['replaceChild'].__name__ = 'replaceChild';

	$m['replaceChild'].__bind_type__ = 0;
	$m['replaceChild'].__args__ = [null,null,['parent'],['newChild'],['oldChild']];
	$pyjs.track.lineno=231;
	$m['buttonClick'] = function(element) {
		var evt;
		$pyjs.track={module:'pyjamas.DOM',lineno:231};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=231;
		$pyjs.track.lineno=232;
		evt = $doc['createEvent']('MouseEvents');
		$pyjs.track.lineno=233;
		evt['initMouseEvent']('click', true, true, $wnd, 1, 0, 0, 0, 0, false, false, false, false, 0, element);
		$pyjs.track.lineno=235;
		(function(){try{try{$pyjs.in_try_except += 1;
		return element['dispatchEvent'](evt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['buttonClick'].__name__ = 'buttonClick';

	$m['buttonClick'].__bind_type__ = 0;
	$m['buttonClick'].__args__ = [null,null,['element']];
	$pyjs.track.lineno=238;
	$m['compare'] = function(elem1, elem2) {

		$pyjs.track={module:'pyjamas.DOM',lineno:238};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=238;
		$pyjs.track.lineno=239;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['hasattr'](elem1, 'isSameNode');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})()) {
			$pyjs.track.lineno=240;
			$pyjs.track.lineno=240;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return elem1['isSameNode'](elem2);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=241;
		$pyjs.track.lineno=241;
		var $pyjs__ret = $p['op_eq'](elem1, elem2);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['compare'].__name__ = 'compare';

	$m['compare'].__bind_type__ = 0;
	$m['compare'].__args__ = [null,null,['elem1'],['elem2']];
	$pyjs.track.lineno=244;
	$m['createAnchor'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:244};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=244;
		$pyjs.track.lineno=245;
		$pyjs.track.lineno=245;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return (typeof createElement == "undefined"?$m.createElement:createElement)('A');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createAnchor'].__name__ = 'createAnchor';

	$m['createAnchor'].__bind_type__ = 0;
	$m['createAnchor'].__args__ = [null,null];
	$pyjs.track.lineno=248;
	$m['createButton'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:248};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=248;
		$pyjs.track.lineno=249;
		$pyjs.track.lineno=249;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return (typeof createElement == "undefined"?$m.createElement:createElement)('button');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createButton'].__name__ = 'createButton';

	$m['createButton'].__bind_type__ = 0;
	$m['createButton'].__args__ = [null,null];
	$pyjs.track.lineno=252;
	$m['createCol'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:252};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=252;
		$pyjs.track.lineno=253;
		$pyjs.track.lineno=253;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return (typeof createElement == "undefined"?$m.createElement:createElement)('col');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createCol'].__name__ = 'createCol';

	$m['createCol'].__bind_type__ = 0;
	$m['createCol'].__args__ = [null,null];
	$pyjs.track.lineno=256;
	$m['createDiv'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:256};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=256;
		$pyjs.track.lineno=257;
		$pyjs.track.lineno=257;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return (typeof createElement == "undefined"?$m.createElement:createElement)('div');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createDiv'].__name__ = 'createDiv';

	$m['createDiv'].__bind_type__ = 0;
	$m['createDiv'].__args__ = [null,null];
	$pyjs.track.lineno=260;
	$m['createElement'] = function(tag) {

		$pyjs.track={module:'pyjamas.DOM',lineno:260};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=260;
		$pyjs.track.lineno=261;
		$pyjs.track.lineno=261;
		var $pyjs__ret = $doc['createElement'](tag);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createElement'].__name__ = 'createElement';

	$m['createElement'].__bind_type__ = 0;
	$m['createElement'].__args__ = [null,null,['tag']];
	$pyjs.track.lineno=264;
	$m['createFieldSet'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:264};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=264;
		$pyjs.track.lineno=265;
		$pyjs.track.lineno=265;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createElement']('fieldset');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createFieldSet'].__name__ = 'createFieldSet';

	$m['createFieldSet'].__bind_type__ = 0;
	$m['createFieldSet'].__args__ = [null,null];
	$pyjs.track.lineno=268;
	$m['createForm'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:268};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=268;
		$pyjs.track.lineno=269;
		$pyjs.track.lineno=269;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createElement']('form');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createForm'].__name__ = 'createForm';

	$m['createForm'].__bind_type__ = 0;
	$m['createForm'].__args__ = [null,null];
	$pyjs.track.lineno=272;
	$m['createIFrame'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:272};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=272;
		$pyjs.track.lineno=273;
		$pyjs.track.lineno=273;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createElement']('iframe');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createIFrame'].__name__ = 'createIFrame';

	$m['createIFrame'].__bind_type__ = 0;
	$m['createIFrame'].__args__ = [null,null];
	$pyjs.track.lineno=276;
	$m['createImg'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:276};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=276;
		$pyjs.track.lineno=277;
		$pyjs.track.lineno=277;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createElement']('img');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createImg'].__name__ = 'createImg';

	$m['createImg'].__bind_type__ = 0;
	$m['createImg'].__args__ = [null,null];
	$pyjs.track.lineno=280;
	$m['createInputCheck'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:280};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=280;
		$pyjs.track.lineno=281;
		$pyjs.track.lineno=281;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return (typeof createInputElement == "undefined"?$m.createInputElement:createInputElement)('checkbox');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createInputCheck'].__name__ = 'createInputCheck';

	$m['createInputCheck'].__bind_type__ = 0;
	$m['createInputCheck'].__args__ = [null,null];
	$pyjs.track.lineno=284;
	$m['createInputElement'] = function(elementType) {
		var e;
		$pyjs.track={module:'pyjamas.DOM',lineno:284};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=284;
		$pyjs.track.lineno=285;
		e = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createElement']('input');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
		$pyjs.track.lineno=286;
		e.type = elementType;
		$pyjs.track.lineno=287;
		$pyjs.track.lineno=287;
		var $pyjs__ret = e;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createInputElement'].__name__ = 'createInputElement';

	$m['createInputElement'].__bind_type__ = 0;
	$m['createInputElement'].__args__ = [null,null,['elementType']];
	$pyjs.track.lineno=290;
	$m['createInputPassword'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:290};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=290;
		$pyjs.track.lineno=291;
		$pyjs.track.lineno=291;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createInputElement']('password');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createInputPassword'].__name__ = 'createInputPassword';

	$m['createInputPassword'].__bind_type__ = 0;
	$m['createInputPassword'].__args__ = [null,null];
	$pyjs.track.lineno=294;
	$m['createInputRadio'] = function(group) {
		var e;
		$pyjs.track={module:'pyjamas.DOM',lineno:294};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=294;
		$pyjs.track.lineno=295;
		e = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createInputElement']('radio');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
		$pyjs.track.lineno=296;
		e.$$name = group;
		$pyjs.track.lineno=297;
		$pyjs.track.lineno=297;
		var $pyjs__ret = e;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createInputRadio'].__name__ = 'createInputRadio';

	$m['createInputRadio'].__bind_type__ = 0;
	$m['createInputRadio'].__args__ = [null,null,['group']];
	$pyjs.track.lineno=300;
	$m['createInputText'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:300};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=300;
		$pyjs.track.lineno=301;
		$pyjs.track.lineno=301;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createInputElement']('text');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createInputText'].__name__ = 'createInputText';

	$m['createInputText'].__bind_type__ = 0;
	$m['createInputText'].__args__ = [null,null];
	$pyjs.track.lineno=304;
	$m['createLabel'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:304};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=304;
		$pyjs.track.lineno=305;
		$pyjs.track.lineno=305;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createElement']('label');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createLabel'].__name__ = 'createLabel';

	$m['createLabel'].__bind_type__ = 0;
	$m['createLabel'].__args__ = [null,null];
	$pyjs.track.lineno=308;
	$m['createLegend'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:308};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=308;
		$pyjs.track.lineno=309;
		$pyjs.track.lineno=309;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createElement']('legend');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createLegend'].__name__ = 'createLegend';

	$m['createLegend'].__bind_type__ = 0;
	$m['createLegend'].__args__ = [null,null];
	$pyjs.track.lineno=312;
	$m['createOptions'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:312};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=312;
		$pyjs.track.lineno=313;
		$pyjs.track.lineno=313;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createElement']('options');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createOptions'].__name__ = 'createOptions';

	$m['createOptions'].__bind_type__ = 0;
	$m['createOptions'].__args__ = [null,null];
	$pyjs.track.lineno=316;
	$m['createSelect'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:316};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=316;
		$pyjs.track.lineno=317;
		$pyjs.track.lineno=317;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createElement']('select');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createSelect'].__name__ = 'createSelect';

	$m['createSelect'].__bind_type__ = 0;
	$m['createSelect'].__args__ = [null,null];
	$pyjs.track.lineno=320;
	$m['createSpan'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:320};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=320;
		$pyjs.track.lineno=321;
		$pyjs.track.lineno=321;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createElement']('span');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createSpan'].__name__ = 'createSpan';

	$m['createSpan'].__bind_type__ = 0;
	$m['createSpan'].__args__ = [null,null];
	$pyjs.track.lineno=324;
	$m['createTable'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:324};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=324;
		$pyjs.track.lineno=325;
		$pyjs.track.lineno=325;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createElement']('table');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createTable'].__name__ = 'createTable';

	$m['createTable'].__bind_type__ = 0;
	$m['createTable'].__args__ = [null,null];
	$pyjs.track.lineno=328;
	$m['createTBody'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:328};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=328;
		$pyjs.track.lineno=329;
		$pyjs.track.lineno=329;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createElement']('tbody');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createTBody'].__name__ = 'createTBody';

	$m['createTBody'].__bind_type__ = 0;
	$m['createTBody'].__args__ = [null,null];
	$pyjs.track.lineno=332;
	$m['createTD'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:332};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=332;
		$pyjs.track.lineno=333;
		$pyjs.track.lineno=333;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createElement']('td');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createTD'].__name__ = 'createTD';

	$m['createTD'].__bind_type__ = 0;
	$m['createTD'].__args__ = [null,null];
	$pyjs.track.lineno=336;
	$m['createTextArea'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:336};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=336;
		$pyjs.track.lineno=337;
		$pyjs.track.lineno=337;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createElement']('textarea');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createTextArea'].__name__ = 'createTextArea';

	$m['createTextArea'].__bind_type__ = 0;
	$m['createTextArea'].__args__ = [null,null];
	$pyjs.track.lineno=340;
	$m['createTH'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:340};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=340;
		$pyjs.track.lineno=341;
		$pyjs.track.lineno=341;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createElement']('th');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createTH'].__name__ = 'createTH';

	$m['createTH'].__bind_type__ = 0;
	$m['createTH'].__args__ = [null,null];
	$pyjs.track.lineno=344;
	$m['createTR'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:344};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=344;
		$pyjs.track.lineno=345;
		$pyjs.track.lineno=345;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createElement']('tr');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createTR'].__name__ = 'createTR';

	$m['createTR'].__bind_type__ = 0;
	$m['createTR'].__args__ = [null,null];
	$pyjs.track.lineno=348;
	$m['eventStopPropagation'] = function(evt) {

		$pyjs.track={module:'pyjamas.DOM',lineno:348};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=348;
		$pyjs.track.lineno=349;
		(function(){try{try{$pyjs.in_try_except += 1;
		return evt['stopPropagation']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['eventStopPropagation'].__name__ = 'eventStopPropagation';

	$m['eventStopPropagation'].__bind_type__ = 0;
	$m['eventStopPropagation'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=352;
	$m['eventCancelBubble'] = function(evt, cancel) {

		$pyjs.track={module:'pyjamas.DOM',lineno:352};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=352;
		$pyjs.track.lineno=353;
		evt.cancelBubble = cancel;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['eventCancelBubble'].__name__ = 'eventCancelBubble';

	$m['eventCancelBubble'].__bind_type__ = 0;
	$m['eventCancelBubble'].__args__ = [null,null,['evt'],['cancel']];
	$pyjs.track.lineno=356;
	$m['eventGetAltKey'] = function(evt) {

		$pyjs.track={module:'pyjamas.DOM',lineno:356};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=356;
		$pyjs.track.lineno=357;
		$pyjs.track.lineno=357;
		var $pyjs__ret = $p['getattr'](evt, 'altKey');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['eventGetAltKey'].__name__ = 'eventGetAltKey';

	$m['eventGetAltKey'].__bind_type__ = 0;
	$m['eventGetAltKey'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=360;
	$m['eventGetButton'] = function(evt) {

		$pyjs.track={module:'pyjamas.DOM',lineno:360};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=360;
		$pyjs.track.lineno=361;
		$pyjs.track.lineno=361;
		var $pyjs__ret = $p['getattr'](evt, 'button');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['eventGetButton'].__name__ = 'eventGetButton';

	$m['eventGetButton'].__bind_type__ = 0;
	$m['eventGetButton'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=364;
	$m['eventGetClientX'] = function(evt) {

		$pyjs.track={module:'pyjamas.DOM',lineno:364};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=364;
		$pyjs.track.lineno=365;
		$pyjs.track.lineno=365;
		var $pyjs__ret = $p['getattr'](evt, 'clientX');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['eventGetClientX'].__name__ = 'eventGetClientX';

	$m['eventGetClientX'].__bind_type__ = 0;
	$m['eventGetClientX'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=368;
	$m['eventGetClientY'] = function(evt) {

		$pyjs.track={module:'pyjamas.DOM',lineno:368};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=368;
		$pyjs.track.lineno=369;
		$pyjs.track.lineno=369;
		var $pyjs__ret = $p['getattr'](evt, 'clientY');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['eventGetClientY'].__name__ = 'eventGetClientY';

	$m['eventGetClientY'].__bind_type__ = 0;
	$m['eventGetClientY'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=372;
	$m['eventGetCtrlKey'] = function(evt) {

		$pyjs.track={module:'pyjamas.DOM',lineno:372};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=372;
		$pyjs.track.lineno=373;
		$pyjs.track.lineno=373;
		var $pyjs__ret = $p['getattr'](evt, 'ctrlKey');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['eventGetCtrlKey'].__name__ = 'eventGetCtrlKey';

	$m['eventGetCtrlKey'].__bind_type__ = 0;
	$m['eventGetCtrlKey'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=376;
	$m['eventGetFromElement'] = function(evt) {
		var $pyjs_try_err;
		$pyjs.track={module:'pyjamas.DOM',lineno:376};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=376;
		$pyjs.track.lineno=377;
		var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
		try {
			try {
				$pyjs.in_try_except += 1;
				$pyjs.track.lineno=378;
				$pyjs.track.lineno=378;
				var $pyjs__ret = $p['getattr'](evt, 'fromElement');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			} finally { $pyjs.in_try_except -= 1; }
		} catch($pyjs_try_err) {
			$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
			$pyjs.__active_exception_stack__ = null;
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.DOM';
			if (true) {
				$pyjs.track.lineno=380;
				$pyjs.track.lineno=380;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['eventGetFromElement'].__name__ = 'eventGetFromElement';

	$m['eventGetFromElement'].__bind_type__ = 0;
	$m['eventGetFromElement'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=383;
	$m['eventGetKeyCode'] = function(evt) {
		var $or5,$or7,$or6;
		$pyjs.track={module:'pyjamas.DOM',lineno:383};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=383;
		$pyjs.track.lineno=384;
		$pyjs.track.lineno=384;
		var $pyjs__ret = ($p['bool']($or5=$p['getattr'](evt, 'which'))?$or5:($p['bool']($or6=$p['getattr'](evt, 'keyCode'))?$or6:0));
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['eventGetKeyCode'].__name__ = 'eventGetKeyCode';

	$m['eventGetKeyCode'].__bind_type__ = 0;
	$m['eventGetKeyCode'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=387;
	$m['eventGetRepeat'] = function(evt) {

		$pyjs.track={module:'pyjamas.DOM',lineno:387};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=387;
		$pyjs.track.lineno=388;
		$pyjs.track.lineno=388;
		var $pyjs__ret = $p['getattr'](evt, 'repeat');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['eventGetRepeat'].__name__ = 'eventGetRepeat';

	$m['eventGetRepeat'].__bind_type__ = 0;
	$m['eventGetRepeat'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=391;
	$m['eventGetScreenX'] = function(evt) {

		$pyjs.track={module:'pyjamas.DOM',lineno:391};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=391;
		$pyjs.track.lineno=392;
		$pyjs.track.lineno=392;
		var $pyjs__ret = $p['getattr'](evt, 'screenX');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['eventGetScreenX'].__name__ = 'eventGetScreenX';

	$m['eventGetScreenX'].__bind_type__ = 0;
	$m['eventGetScreenX'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=395;
	$m['eventGetScreenY'] = function(evt) {

		$pyjs.track={module:'pyjamas.DOM',lineno:395};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=395;
		$pyjs.track.lineno=396;
		$pyjs.track.lineno=396;
		var $pyjs__ret = $p['getattr'](evt, 'screenY');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['eventGetScreenY'].__name__ = 'eventGetScreenY';

	$m['eventGetScreenY'].__bind_type__ = 0;
	$m['eventGetScreenY'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=399;
	$m['eventGetShiftKey'] = function(evt) {

		$pyjs.track={module:'pyjamas.DOM',lineno:399};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=399;
		$pyjs.track.lineno=400;
		$pyjs.track.lineno=400;
		var $pyjs__ret = $p['getattr'](evt, 'shiftKey');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['eventGetShiftKey'].__name__ = 'eventGetShiftKey';

	$m['eventGetShiftKey'].__bind_type__ = 0;
	$m['eventGetShiftKey'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=403;
	$m['eventGetCurrentTarget'] = function(event) {

		$pyjs.track={module:'pyjamas.DOM',lineno:403};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=403;
		$pyjs.track.lineno=404;
		$pyjs.track.lineno=404;
		var $pyjs__ret = $p['getattr'](event, 'currentTarget');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['eventGetCurrentTarget'].__name__ = 'eventGetCurrentTarget';

	$m['eventGetCurrentTarget'].__bind_type__ = 0;
	$m['eventGetCurrentTarget'].__args__ = [null,null,['event']];
	$pyjs.track.lineno=407;
	$m['eventGetTarget'] = function(event) {

		$pyjs.track={module:'pyjamas.DOM',lineno:407};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=407;
		$pyjs.track.lineno=408;
		$pyjs.track.lineno=408;
		var $pyjs__ret = $p['getattr'](event, 'target');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['eventGetTarget'].__name__ = 'eventGetTarget';

	$m['eventGetTarget'].__bind_type__ = 0;
	$m['eventGetTarget'].__args__ = [null,null,['event']];
	$pyjs.track.lineno=411;
	$m['eventGetToElement'] = function(evt) {
		var type;
		$pyjs.track={module:'pyjamas.DOM',lineno:411};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=411;
		$pyjs.track.lineno=412;
		type = (function(){try{try{$pyjs.in_try_except += 1;
		return (typeof eventGetType == "undefined"?$m.eventGetType:eventGetType)(evt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
		$pyjs.track.lineno=413;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](type, 'mouseout'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})()) {
			$pyjs.track.lineno=414;
			$pyjs.track.lineno=414;
			var $pyjs__ret = $p['getattr'](evt, 'relatedTarget');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		else if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](type, 'mouseover'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})()) {
			$pyjs.track.lineno=416;
			$pyjs.track.lineno=416;
			var $pyjs__ret = $p['getattr'](evt, 'target');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=417;
		$pyjs.track.lineno=417;
		var $pyjs__ret = null;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['eventGetToElement'].__name__ = 'eventGetToElement';

	$m['eventGetToElement'].__bind_type__ = 0;
	$m['eventGetToElement'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=420;
	$m['eventGetType'] = function(event) {

		$pyjs.track={module:'pyjamas.DOM',lineno:420};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=420;
		$pyjs.track.lineno=421;
		$pyjs.track.lineno=421;
		var $pyjs__ret = $p['getattr'](event, 'type');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['eventGetType'].__name__ = 'eventGetType';

	$m['eventGetType'].__bind_type__ = 0;
	$m['eventGetType'].__args__ = [null,null,['event']];
	$pyjs.track.lineno=423;
	$m['eventGetTypeInt'] = function(event) {

		$pyjs.track={module:'pyjamas.DOM',lineno:423};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=423;
		$pyjs.track.lineno=424;
		$pyjs.track.lineno=424;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['Event']['eventmap']['get']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['str']($p['getattr'](event, 'type'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})(), 0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['eventGetTypeInt'].__name__ = 'eventGetTypeInt';

	$m['eventGetTypeInt'].__bind_type__ = 0;
	$m['eventGetTypeInt'].__args__ = [null,null,['event']];
	$pyjs.track.lineno=427;
	$m['eventGetTypeString'] = function(event) {

		$pyjs.track={module:'pyjamas.DOM',lineno:427};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=427;
		$pyjs.track.lineno=428;
		$pyjs.track.lineno=428;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['eventGetType'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['eventGetTypeString'].__name__ = 'eventGetTypeString';

	$m['eventGetTypeString'].__bind_type__ = 0;
	$m['eventGetTypeString'].__args__ = [null,null,['event']];
	$pyjs.track.lineno=431;
	$m['eventPreventDefault'] = function(evt) {

		$pyjs.track={module:'pyjamas.DOM',lineno:431};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=431;
		$pyjs.track.lineno=432;
		(function(){try{try{$pyjs.in_try_except += 1;
		return evt['preventDefault']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['eventPreventDefault'].__name__ = 'eventPreventDefault';

	$m['eventPreventDefault'].__bind_type__ = 0;
	$m['eventPreventDefault'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=435;
	$m['eventSetKeyCode'] = function(evt, key) {

		$pyjs.track={module:'pyjamas.DOM',lineno:435};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=435;
		$pyjs.track.lineno=436;
		evt.keyCode = key;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['eventSetKeyCode'].__name__ = 'eventSetKeyCode';

	$m['eventSetKeyCode'].__bind_type__ = 0;
	$m['eventSetKeyCode'].__args__ = [null,null,['evt'],['key']];
	$pyjs.track.lineno=439;
	$m['eventToString'] = function(evt) {

		$pyjs.track={module:'pyjamas.DOM',lineno:439};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=439;
		$pyjs.track.lineno=440;
		$pyjs.track.lineno=440;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return evt['toString']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['eventToString'].__name__ = 'eventToString';

	$m['eventToString'].__bind_type__ = 0;
	$m['eventToString'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=443;
	$m['iframeGetSrc'] = function(elem) {

		$pyjs.track={module:'pyjamas.DOM',lineno:443};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=443;
		$pyjs.track.lineno=444;
		$pyjs.track.lineno=444;
		var $pyjs__ret = $p['getattr'](elem, 'src');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['iframeGetSrc'].__name__ = 'iframeGetSrc';

	$m['iframeGetSrc'].__bind_type__ = 0;
	$m['iframeGetSrc'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=447;
	$m['getAbsoluteLeft'] = function(elem) {
		var curr,$add2,$add1,$sub3,$sub2,$sub1,$sub4,left;
		$pyjs.track={module:'pyjamas.DOM',lineno:447};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=447;
		$pyjs.track.lineno=448;
		left = 0;
		$pyjs.track.lineno=449;
		curr = elem;
		$pyjs.track.lineno=450;
		while ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['getattr'](curr, 'offsetParent'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})()) {
			$pyjs.track.lineno=451;
			left = $p['__op_sub']($sub1=left,$sub2=$p['getattr'](curr, 'scrollLeft'));
			$pyjs.track.lineno=452;
			curr = $p['getattr'](curr, 'parentNode');
		}
		$pyjs.track.lineno=454;
		while ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](elem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})()) {
			$pyjs.track.lineno=455;
			left = $p['__op_add']($add1=left,$add2=$p['__op_sub']($sub3=$p['getattr'](elem, 'offsetLeft'),$sub4=$p['getattr'](elem, 'scrollLeft')));
			$pyjs.track.lineno=456;
			elem = $p['getattr'](elem, 'offsetParent');
		}
		$pyjs.track.lineno=458;
		$pyjs.track.lineno=458;
		var $pyjs__ret = left;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getAbsoluteLeft'].__name__ = 'getAbsoluteLeft';

	$m['getAbsoluteLeft'].__bind_type__ = 0;
	$m['getAbsoluteLeft'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=461;
	$m['getAbsoluteTop'] = function(elem) {
		var curr,top,$add3,$sub8,$add4,$sub7,$sub6,$sub5;
		$pyjs.track={module:'pyjamas.DOM',lineno:461};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=461;
		$pyjs.track.lineno=462;
		top = 0;
		$pyjs.track.lineno=463;
		curr = elem;
		$pyjs.track.lineno=464;
		while ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['getattr'](curr, 'offsetParent'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})()) {
			$pyjs.track.lineno=465;
			top = $p['__op_sub']($sub5=top,$sub6=$p['getattr'](curr, 'scrollTop'));
			$pyjs.track.lineno=466;
			curr = $p['getattr'](curr, 'parentNode');
		}
		$pyjs.track.lineno=468;
		while ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](elem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})()) {
			$pyjs.track.lineno=469;
			top = $p['__op_add']($add3=top,$add4=$p['__op_sub']($sub7=$p['getattr'](elem, 'offsetTop'),$sub8=$p['getattr'](elem, 'scrollTop')));
			$pyjs.track.lineno=470;
			elem = $p['getattr'](elem, 'offsetParent');
		}
		$pyjs.track.lineno=472;
		$pyjs.track.lineno=472;
		var $pyjs__ret = top;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getAbsoluteTop'].__name__ = 'getAbsoluteTop';

	$m['getAbsoluteTop'].__bind_type__ = 0;
	$m['getAbsoluteTop'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=475;
	$m['getAttribute'] = function(elem, attr) {

		$pyjs.track={module:'pyjamas.DOM',lineno:475};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=475;
		$pyjs.track.lineno=476;
		attr = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['getattr'](elem, attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
		$pyjs.track.lineno=477;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((attr === null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})()) {
			$pyjs.track.lineno=478;
			$pyjs.track.lineno=478;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=479;
		$pyjs.track.lineno=479;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['str'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getAttribute'].__name__ = 'getAttribute';

	$m['getAttribute'].__bind_type__ = 0;
	$m['getAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=482;
	$m['getElemAttribute'] = function(elem, attr) {
		var mf;
		$pyjs.track={module:'pyjamas.DOM',lineno:482};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=482;
		$pyjs.track.lineno=483;
		mf = (function(){try{try{$pyjs.in_try_except += 1;
		return (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
		$pyjs.track.lineno=484;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
		return elem['hasAttribute'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})()) {
			$pyjs.track.lineno=485;
			$pyjs.track.lineno=485;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['str']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['getattr'](elem, (function(){try{try{$pyjs.in_try_except += 1;
			return mf['mash_attrib'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=486;
		$pyjs.track.lineno=486;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['str']((function(){try{try{$pyjs.in_try_except += 1;
		return elem['getAttribute'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getElemAttribute'].__name__ = 'getElemAttribute';

	$m['getElemAttribute'].__bind_type__ = 0;
	$m['getElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=489;
	$m['getBooleanAttribute'] = function(elem, attr) {
		var mf;
		$pyjs.track={module:'pyjamas.DOM',lineno:489};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=489;
		$pyjs.track.lineno=490;
		mf = (function(){try{try{$pyjs.in_try_except += 1;
		return (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})();
		$pyjs.track.lineno=491;
		$pyjs.track.lineno=491;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['getattr'](elem, (function(){try{try{$pyjs.in_try_except += 1;
		return mf['mash_attrib'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getBooleanAttribute'].__name__ = 'getBooleanAttribute';

	$m['getBooleanAttribute'].__bind_type__ = 0;
	$m['getBooleanAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=494;
	$m['getBooleanElemAttribute'] = function(elem, attr) {

		$pyjs.track={module:'pyjamas.DOM',lineno:494};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=494;
		$pyjs.track.lineno=495;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
		return elem['hasAttribute'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})()) {
			$pyjs.track.lineno=496;
			$pyjs.track.lineno=496;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=497;
		$pyjs.track.lineno=497;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
		return elem['getAttribute'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getBooleanElemAttribute'].__name__ = 'getBooleanElemAttribute';

	$m['getBooleanElemAttribute'].__bind_type__ = 0;
	$m['getBooleanElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=500;
	$m['getCaptureElement'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:500};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=500;
		$pyjs.track.lineno=501;
		$pyjs.track.lineno=502;
		$pyjs.track.lineno=502;
		var $pyjs__ret = $m['sCaptureElem'];
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getCaptureElement'].__name__ = 'getCaptureElement';

	$m['getCaptureElement'].__bind_type__ = 0;
	$m['getCaptureElement'].__args__ = [null,null];
	$pyjs.track.lineno=505;
	$m['getChild'] = function(elem, index) {
		var count,child,next,$add6,$add5;
		$pyjs.track={module:'pyjamas.DOM',lineno:505};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=505;
		$pyjs.track.lineno=509;
		count = 0;
		$pyjs.track.lineno=510;
		child = $p['getattr'](elem, 'firstChild');
		$pyjs.track.lineno=511;
		while ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})()) {
			$pyjs.track.lineno=512;
			next = $p['getattr'](child, 'nextSibling');
			$pyjs.track.lineno=513;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr'](child, 'nodeType'), 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})()) {
				$pyjs.track.lineno=514;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](index, count));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})()) {
					$pyjs.track.lineno=515;
					$pyjs.track.lineno=515;
					var $pyjs__ret = child;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=516;
				count = $p['__op_add']($add5=count,$add6=1);
			}
			$pyjs.track.lineno=517;
			child = next;
		}
		$pyjs.track.lineno=518;
		$pyjs.track.lineno=518;
		var $pyjs__ret = null;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getChild'].__name__ = 'getChild';

	$m['getChild'].__bind_type__ = 0;
	$m['getChild'].__args__ = [null,null,['elem'],['index']];
	$pyjs.track.lineno=521;
	$m['getChildCount'] = function(elem) {
		var count,$add8,$add7,child;
		$pyjs.track={module:'pyjamas.DOM',lineno:521};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=521;
		$pyjs.track.lineno=526;
		count = 0;
		$pyjs.track.lineno=527;
		child = $p['getattr'](elem, 'firstChild');
		$pyjs.track.lineno=528;
		while ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})()) {
			$pyjs.track.lineno=529;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr'](child, 'nodeType'), 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})()) {
				$pyjs.track.lineno=530;
				count = $p['__op_add']($add7=count,$add8=1);
			}
			$pyjs.track.lineno=531;
			child = $p['getattr'](child, 'nextSibling');
		}
		$pyjs.track.lineno=532;
		$pyjs.track.lineno=532;
		var $pyjs__ret = count;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getChildCount'].__name__ = 'getChildCount';

	$m['getChildCount'].__bind_type__ = 0;
	$m['getChildCount'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=535;
	$m['getChildIndex'] = function(parent, toFind) {
		var count,$add10,child,$add9;
		$pyjs.track={module:'pyjamas.DOM',lineno:535};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=535;
		$pyjs.track.lineno=541;
		count = 0;
		$pyjs.track.lineno=542;
		child = $p['getattr'](parent, 'firstChild');
		$pyjs.track.lineno=543;
		while ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})()) {
			$pyjs.track.lineno=544;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](child, toFind));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})()) {
				$pyjs.track.lineno=545;
				$pyjs.track.lineno=545;
				var $pyjs__ret = count;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=546;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr'](child, 'nodeType'), 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})()) {
				$pyjs.track.lineno=547;
				count = $p['__op_add']($add9=count,$add10=1);
			}
			$pyjs.track.lineno=548;
			child = $p['getattr'](child, 'nextSibling');
		}
		$pyjs.track.lineno=550;
		$pyjs.track.lineno=550;
		var $pyjs__ret = (typeof ($usub1=1)=='number'?
			-$usub1:
			$p['op_usub']($usub1));
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getChildIndex'].__name__ = 'getChildIndex';

	$m['getChildIndex'].__bind_type__ = 0;
	$m['getChildIndex'].__args__ = [null,null,['parent'],['toFind']];
	$pyjs.track.lineno=553;
	$m['getElementById'] = function(id) {

		$pyjs.track={module:'pyjamas.DOM',lineno:553};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=553;
		$pyjs.track.lineno=557;
		$pyjs.track.lineno=557;
		var $pyjs__ret = $doc['getElementById'](id);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getElementById'].__name__ = 'getElementById';

	$m['getElementById'].__bind_type__ = 0;
	$m['getElementById'].__args__ = [null,null,['id']];
	$pyjs.track.lineno=560;
	$m['getEventListener'] = function(element) {

		$pyjs.track={module:'pyjamas.DOM',lineno:560};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=560;
		$pyjs.track.lineno=564;
		$pyjs.track.lineno=564;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['get_listener'](element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getEventListener'].__name__ = 'getEventListener';

	$m['getEventListener'].__bind_type__ = 0;
	$m['getEventListener'].__args__ = [null,null,['element']];
	$pyjs.track.lineno=566;
	$m['eventbitsmap'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})();
	$pyjs.track.lineno=569;
	$m['getEventsSunk'] = function(element) {

		$pyjs.track={module:'pyjamas.DOM',lineno:569};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=569;
		$pyjs.track.lineno=574;
		$pyjs.track.lineno=574;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['eventbitsmap']['get'](element, 0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getEventsSunk'].__name__ = 'getEventsSunk';

	$m['getEventsSunk'].__bind_type__ = 0;
	$m['getEventsSunk'].__args__ = [null,null,['element']];
	$pyjs.track.lineno=577;
	$m['getFirstChild'] = function(elem) {
		var $and9,$and12,$and10,$and11,child;
		$pyjs.track={module:'pyjamas.DOM',lineno:577};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=577;
		$pyjs.track.lineno=578;
		child = ($p['bool']($and9=elem)?$p['getattr'](elem, 'firstChild'):$and9);
		$pyjs.track.lineno=579;
		while ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](($p['bool']($and11=child)?!$p['op_eq']($p['getattr'](child, 'nodeType'), 1):$and11));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})()) {
			$pyjs.track.lineno=580;
			child = $p['getattr'](child, 'nextSibling');
		}
		$pyjs.track.lineno=581;
		$pyjs.track.lineno=581;
		var $pyjs__ret = child;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getFirstChild'].__name__ = 'getFirstChild';

	$m['getFirstChild'].__bind_type__ = 0;
	$m['getFirstChild'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=584;
	$m['getInnerHTML'] = function(element) {
		var $and13,$pyjs_try_err,$and16,$and14,$and15;
		$pyjs.track={module:'pyjamas.DOM',lineno:584};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=584;
		$pyjs.track.lineno=585;
		var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
		try {
			try {
				$pyjs.in_try_except += 1;
				$pyjs.track.lineno=586;
				$pyjs.track.lineno=586;
				var $pyjs__ret = ($p['bool']($and13=element)?$p['getattr'](element, 'innerHtml'):$and13);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			} finally { $pyjs.in_try_except -= 1; }
		} catch($pyjs_try_err) {
			$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
			$pyjs.__active_exception_stack__ = null;
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.DOM';
			if (true) {
				$pyjs.track.lineno=588;
				$pyjs.track.lineno=588;
				var $pyjs__ret = ($p['bool']($and15=element)?$p['getattr'](element, 'innerHTML'):$and15);
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['getInnerHTML'].__name__ = 'getInnerHTML';

	$m['getInnerHTML'].__bind_type__ = 0;
	$m['getInnerHTML'].__args__ = [null,null,['element']];
	$pyjs.track.lineno=591;
	$m['getInnerText'] = function(element) {
		var text,child,$add14,$add11,$add12,$add13;
		$pyjs.track={module:'pyjamas.DOM',lineno:591};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=591;
		$pyjs.track.lineno=594;
		text = '';
		$pyjs.track.lineno=595;
		child = $p['getattr'](element, 'firstChild');
		$pyjs.track.lineno=596;
		while ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})()) {
			$pyjs.track.lineno=597;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr'](child, 'nodeType'), 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})()) {
				$pyjs.track.lineno=598;
				text = $p['__op_add']($add11=text,$add12=(function(){try{try{$pyjs.in_try_except += 1;
				return $m['getInnerText'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})());
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['getattr'](child, 'nodeValue'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})()) {
				$pyjs.track.lineno=600;
				text = $p['__op_add']($add13=text,$add14=$p['getattr'](child, 'nodeValue'));
			}
			$pyjs.track.lineno=601;
			child = $p['getattr'](child, 'nextSibling');
		}
		$pyjs.track.lineno=602;
		$pyjs.track.lineno=602;
		var $pyjs__ret = text;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getInnerText'].__name__ = 'getInnerText';

	$m['getInnerText'].__bind_type__ = 0;
	$m['getInnerText'].__args__ = [null,null,['element']];
	$pyjs.track.lineno=605;
	$m['getIntAttribute'] = function(elem, attr) {

		$pyjs.track={module:'pyjamas.DOM',lineno:605};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=605;
		$pyjs.track.lineno=606;
		$pyjs.track.lineno=606;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['float_int']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['getattr'](elem, attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getIntAttribute'].__name__ = 'getIntAttribute';

	$m['getIntAttribute'].__bind_type__ = 0;
	$m['getIntAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=609;
	$m['getIntElemAttribute'] = function(elem, attr) {

		$pyjs.track={module:'pyjamas.DOM',lineno:609};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=609;
		$pyjs.track.lineno=610;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
		return elem['hasAttribute'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})()) {
			$pyjs.track.lineno=611;
			$pyjs.track.lineno=611;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=612;
		$pyjs.track.lineno=612;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['float_int']((function(){try{try{$pyjs.in_try_except += 1;
		return elem['getAttribute'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getIntElemAttribute'].__name__ = 'getIntElemAttribute';

	$m['getIntElemAttribute'].__bind_type__ = 0;
	$m['getIntElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=615;
	$m['getIntStyleAttribute'] = function(elem, attr) {

		$pyjs.track={module:'pyjamas.DOM',lineno:615};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=615;
		$pyjs.track.lineno=616;
		$pyjs.track.lineno=616;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['getIntAttribute']($p['getattr'](elem, 'style'), attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getIntStyleAttribute'].__name__ = 'getIntStyleAttribute';

	$m['getIntStyleAttribute'].__bind_type__ = 0;
	$m['getIntStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=619;
	$m['getNextSibling'] = function(elem) {
		var sib,$and18,$and17;
		$pyjs.track={module:'pyjamas.DOM',lineno:619};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=619;
		$pyjs.track.lineno=620;
		sib = $p['getattr'](elem, 'nextSibling');
		$pyjs.track.lineno=621;
		while ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](($p['bool']($and17=sib)?!$p['op_eq']($p['getattr'](sib, 'nodeType'), 1):$and17));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})()) {
			$pyjs.track.lineno=622;
			sib = $p['getattr'](sib, 'nextSibling');
		}
		$pyjs.track.lineno=623;
		$pyjs.track.lineno=623;
		var $pyjs__ret = sib;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getNextSibling'].__name__ = 'getNextSibling';

	$m['getNextSibling'].__bind_type__ = 0;
	$m['getNextSibling'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=626;
	$m['getNodeType'] = function(elem) {

		$pyjs.track={module:'pyjamas.DOM',lineno:626};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=626;
		$pyjs.track.lineno=627;
		$pyjs.track.lineno=627;
		var $pyjs__ret = $p['getattr'](elem, 'nodeType');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getNodeType'].__name__ = 'getNodeType';

	$m['getNodeType'].__bind_type__ = 0;
	$m['getNodeType'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=630;
	$m['getParent'] = function(elem) {
		var parent;
		$pyjs.track={module:'pyjamas.DOM',lineno:630};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=630;
		$pyjs.track.lineno=631;
		parent = $p['getattr'](elem, 'parentNode');
		$pyjs.track.lineno=632;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((parent === null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})()) {
			$pyjs.track.lineno=633;
			$pyjs.track.lineno=633;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=634;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
		return $m['getNodeType'](parent);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})(), 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})()) {
			$pyjs.track.lineno=635;
			$pyjs.track.lineno=635;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=636;
		$pyjs.track.lineno=636;
		var $pyjs__ret = parent;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getParent'].__name__ = 'getParent';

	$m['getParent'].__bind_type__ = 0;
	$m['getParent'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=639;
	$m['getStyleAttribute'] = function(elem, attr) {
		var $pyjs_try_err;
		$pyjs.track={module:'pyjamas.DOM',lineno:639};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=639;
		$pyjs.track.lineno=640;
		var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
		try {
			try {
				$pyjs.in_try_except += 1;
				$pyjs.track.lineno=641;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr']($p['getattr'](elem, 'style'), 'getProperty');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})()) {
					$pyjs.track.lineno=642;
					$pyjs.track.lineno=642;
					var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
					return elem['style']['getProperty']((function(){try{try{$pyjs.in_try_except += 1;
					return (typeof mash_name_for_glib == "undefined"?$m.mash_name_for_glib:mash_name_for_glib)(attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
				$pyjs.track.lineno=643;
				$pyjs.track.lineno=643;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return elem['style']['getAttribute'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			} finally { $pyjs.in_try_except -= 1; }
		} catch($pyjs_try_err) {
			$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
			$pyjs.__active_exception_stack__ = null;
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.DOM';
			if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
				$pyjs.track.lineno=645;
				$pyjs.track.lineno=645;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr']($p['getattr'](elem, 'style'), attr, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['getStyleAttribute'].__name__ = 'getStyleAttribute';

	$m['getStyleAttribute'].__bind_type__ = 0;
	$m['getStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
	$pyjs.track.lineno=648;
	$m['insertChild'] = function(parent, toAdd, index) {
		var count,$add15,$add16,child,before;
		$pyjs.track={module:'pyjamas.DOM',lineno:648};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=648;
		$pyjs.track.lineno=649;
		count = 0;
		$pyjs.track.lineno=650;
		child = $p['getattr'](parent, 'firstChild');
		$pyjs.track.lineno=651;
		before = null;
		$pyjs.track.lineno=652;
		while ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})()) {
			$pyjs.track.lineno=653;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr'](child, 'nodeType'), 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})()) {
				$pyjs.track.lineno=654;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']($p['op_eq'](count, index));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})()) {
					$pyjs.track.lineno=655;
					before = child;
					$pyjs.track.lineno=656;
					break;
				}
				$pyjs.track.lineno=658;
				count = $p['__op_add']($add15=count,$add16=1);
			}
			$pyjs.track.lineno=659;
			child = $p['getattr'](child, 'nextSibling');
		}
		$pyjs.track.lineno=661;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((before === null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})()) {
			$pyjs.track.lineno=662;
			(function(){try{try{$pyjs.in_try_except += 1;
			return parent['appendChild'](toAdd);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})();
		}
		else {
			$pyjs.track.lineno=664;
			(function(){try{try{$pyjs.in_try_except += 1;
			return parent['insertBefore'](toAdd, before);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['insertChild'].__name__ = 'insertChild';

	$m['insertChild'].__bind_type__ = 0;
	$m['insertChild'].__args__ = [null,null,['parent'],['toAdd'],['index']];
	$pyjs.track.lineno=667;
	$m['IterChildrenClass'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.DOM';
		$pyjs.track.lineno=669;
		$method = $pyjs__bind_method2('__init__', function(elem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}

			$pyjs.track={module:'pyjamas.DOM', lineno:669};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=669;
			$pyjs.track.lineno=670;
			self.parent = elem;
			$pyjs.track.lineno=671;
			self.child = $p['getattr'](elem, 'firstChild');
			$pyjs.track.lineno=672;
			self.lastChild = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=674;
		$method = $pyjs__bind_method2('next', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.DOM', lineno:674};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=674;
			$pyjs.track.lineno=675;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'child')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})()) {
				$pyjs.track.lineno=676;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['StopIteration']);
			}
			$pyjs.track.lineno=677;
			self.lastChild = $p['getattr'](self, 'child');
			$pyjs.track.lineno=678;
			self.child = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['getNextSibling']($p['getattr'](self, 'child'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
			$pyjs.track.lineno=679;
			$pyjs.track.lineno=679;
			var $pyjs__ret = $p['getattr'](self, 'lastChild');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$pyjs.track.lineno=681;
		$method = $pyjs__bind_method2('remove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.DOM', lineno:681};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=681;
			$pyjs.track.lineno=682;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['parent']['removeChild']($p['getattr'](self, 'lastChild'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$pyjs.track.lineno=684;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.DOM', lineno:684};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=684;
			$pyjs.track.lineno=685;
			$pyjs.track.lineno=685;
			var $pyjs__ret = self;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$pyjs.track.lineno=667;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('IterChildrenClass', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=688;
	$m['iterChildren'] = function(elem) {

		$pyjs.track={module:'pyjamas.DOM',lineno:688};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=688;
		$pyjs.track.lineno=693;
		$pyjs.track.lineno=693;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['IterChildrenClass'](elem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['iterChildren'].__name__ = 'iterChildren';

	$m['iterChildren'].__bind_type__ = 0;
	$m['iterChildren'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=696;
	$m['IterWalkChildren'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.DOM';
		$pyjs.track.lineno=698;
		$method = $pyjs__bind_method2('__init__', function(elem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}

			$pyjs.track={module:'pyjamas.DOM', lineno:698};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=698;
			$pyjs.track.lineno=699;
			self.parent = elem;
			$pyjs.track.lineno=700;
			self.child = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['getFirstChild'](elem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})();
			$pyjs.track.lineno=701;
			self.lastChild = null;
			$pyjs.track.lineno=702;
			self.stack = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['list']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=704;
		$method = $pyjs__bind_method2('next', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var nextSibling,firstChild;
			$pyjs.track={module:'pyjamas.DOM', lineno:704};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=704;
			$pyjs.track.lineno=705;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'child')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})()) {
				$pyjs.track.lineno=706;
				$pyjs.__active_exception_stack__ = null;
				throw ($p['StopIteration']);
			}
			$pyjs.track.lineno=707;
			self.lastChild = $p['getattr'](self, 'child');
			$pyjs.track.lineno=708;
			firstChild = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['getFirstChild']($p['getattr'](self, 'child'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})();
			$pyjs.track.lineno=709;
			nextSibling = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['getNextSibling']($p['getattr'](self, 'child'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})();
			$pyjs.track.lineno=710;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((firstChild !== null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})()) {
				$pyjs.track.lineno=711;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((nextSibling !== null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})()) {
					$pyjs.track.lineno=712;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['stack']['append']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['tuple']([nextSibling, $p['getattr'](self, 'parent')]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})();
				}
				$pyjs.track.lineno=713;
				self.parent = $p['getattr'](self, 'child');
				$pyjs.track.lineno=714;
				self.child = firstChild;
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((nextSibling !== null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})()) {
				$pyjs.track.lineno=716;
				self.child = nextSibling;
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['len']($p['getattr'](self, 'stack'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})(), 0) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})()) {
				$pyjs.track.lineno=718;
				var $tupleassign1 = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs.in_try_except += 1;
				return self['stack']['pop']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})(), 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})();
				self.child = $tupleassign1[0];
				self.parent = $tupleassign1[1];
			}
			else {
				$pyjs.track.lineno=720;
				self.child = null;
			}
			$pyjs.track.lineno=721;
			$pyjs.track.lineno=721;
			var $pyjs__ret = $p['getattr'](self, 'lastChild');
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$pyjs.track.lineno=723;
		$method = $pyjs__bind_method2('remove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.DOM', lineno:723};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=723;
			$pyjs.track.lineno=724;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['parent']['removeChild']($p['getattr'](self, 'lastChild'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$pyjs.track.lineno=726;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.DOM', lineno:726};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.DOM';
			$pyjs.track.lineno=726;
			$pyjs.track.lineno=727;
			$pyjs.track.lineno=727;
			var $pyjs__ret = self;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$pyjs.track.lineno=696;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('IterWalkChildren', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=730;
	$m['walkChildren'] = function(elem) {

		$pyjs.track={module:'pyjamas.DOM',lineno:730};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=730;
		$pyjs.track.lineno=736;
		$pyjs.track.lineno=736;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['IterWalkChildren'](elem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['walkChildren'].__name__ = 'walkChildren';

	$m['walkChildren'].__bind_type__ = 0;
	$m['walkChildren'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=739;
	$m['isOrHasChild'] = function(parent, child) {

		$pyjs.track={module:'pyjamas.DOM',lineno:739};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=739;
		$pyjs.track.lineno=740;
		while ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})()) {
			$pyjs.track.lineno=741;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['compare'](parent, child);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})()) {
				$pyjs.track.lineno=742;
				$pyjs.track.lineno=742;
				var $pyjs__ret = true;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=743;
			child = $p['getattr'](child, 'parentNode');
			$pyjs.track.lineno=744;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool'](child));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})()) {
				$pyjs.track.lineno=745;
				$pyjs.track.lineno=745;
				var $pyjs__ret = false;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=746;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['op_eq']($p['getattr'](child, 'nodeType'), 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})()) {
				$pyjs.track.lineno=747;
				child = null;
			}
		}
		$pyjs.track.lineno=748;
		$pyjs.track.lineno=748;
		var $pyjs__ret = false;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['isOrHasChild'].__name__ = 'isOrHasChild';

	$m['isOrHasChild'].__bind_type__ = 0;
	$m['isOrHasChild'].__args__ = [null,null,['parent'],['child']];
	$pyjs.track.lineno=751;
	$m['releaseCapture'] = function(elem) {
		var $and19,$and20;
		$pyjs.track={module:'pyjamas.DOM',lineno:751};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=751;
		$pyjs.track.lineno=753;
		$pyjs.track.lineno=754;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](($p['bool']($and19=$m['sCaptureElem'])?(function(){try{try{$pyjs.in_try_except += 1;
		return $m['compare'](elem, $m['sCaptureElem']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})():$and19));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})()) {
			$pyjs.track.lineno=755;
			$m['sCaptureElem'] = null;
			$pyjs.track.lineno=756;
			(function(){try{try{$pyjs.in_try_except += 1;
			return (typeof releaseCapture_impl == "undefined"?$m.releaseCapture_impl:releaseCapture_impl)(elem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})();
		}
		$pyjs.track.lineno=757;
		$pyjs.track.lineno=757;
		var $pyjs__ret = null;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['releaseCapture'].__name__ = 'releaseCapture';

	$m['releaseCapture'].__bind_type__ = 0;
	$m['releaseCapture'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=760;
	$m['releaseCapture_impl'] = function(elem) {

		$pyjs.track={module:'pyjamas.DOM',lineno:760};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=760;
		$pyjs.track.lineno=760;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['releaseCapture_impl'].__name__ = 'releaseCapture_impl';

	$m['releaseCapture_impl'].__bind_type__ = 0;
	$m['releaseCapture_impl'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=762;
	$m['removeEventPreview'] = function(preview) {

		$pyjs.track={module:'pyjamas.DOM',lineno:762};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=762;
		$pyjs.track.lineno=763;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['sEventPreviewStack']['remove'](preview);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['removeEventPreview'].__name__ = 'removeEventPreview';

	$m['removeEventPreview'].__bind_type__ = 0;
	$m['removeEventPreview'].__args__ = [null,null,['preview']];
	$pyjs.track.lineno=766;
	$m['getOffsetHeight'] = function(elem) {

		$pyjs.track={module:'pyjamas.DOM',lineno:766};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=766;
		$pyjs.track.lineno=767;
		$pyjs.track.lineno=767;
		var $pyjs__ret = $p['getattr'](elem, 'offsetHeight');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getOffsetHeight'].__name__ = 'getOffsetHeight';

	$m['getOffsetHeight'].__bind_type__ = 0;
	$m['getOffsetHeight'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=770;
	$m['getOffsetWidth'] = function(elem) {

		$pyjs.track={module:'pyjamas.DOM',lineno:770};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=770;
		$pyjs.track.lineno=771;
		$pyjs.track.lineno=771;
		var $pyjs__ret = $p['getattr'](elem, 'offsetWidth');
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getOffsetWidth'].__name__ = 'getOffsetWidth';

	$m['getOffsetWidth'].__bind_type__ = 0;
	$m['getOffsetWidth'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=774;
	$m['scrollIntoView'] = function(elem) {
		var $sub22,$sub23,$sub20,$sub21,$sub24,height,$and23,$and22,$and21,$and25,$and24,$add29,$add28,cur,$add21,$add20,top,$add22,$add25,$add24,$add27,$add26,width,$sub9,offsetLeft,offsetTop,$sub19,$sub18,$sub13,$sub12,$sub11,$sub10,$or9,$or8,$sub15,$sub14,$sub16,$add17,$add18,$add19,$add32,$add30,$add31,$sub17,$add23,left;
		$pyjs.track={module:'pyjamas.DOM',lineno:774};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=774;
		$pyjs.track.lineno=775;
		left = $p['getattr'](elem, 'offsetLeft');
		$pyjs.track.lineno=776;
		top = $p['getattr'](elem, 'offsetTop');
		$pyjs.track.lineno=777;
		width = $p['getattr'](elem, 'offsetWidth');
		$pyjs.track.lineno=778;
		height = $p['getattr'](elem, 'offsetHeight');
		$pyjs.track.lineno=780;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['op_eq']($p['getattr'](elem, 'parentNode'), $p['getattr'](elem, 'offsetParent')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})()) {
			$pyjs.track.lineno=781;
			left = $p['__op_sub']($sub9=left,$sub10=$p['getattr']($p['getattr'](elem, 'parentNode'), 'offsetLeft'));
			$pyjs.track.lineno=782;
			top = $p['__op_sub']($sub11=top,$sub12=$p['getattr']($p['getattr'](elem, 'parentNode'), 'offsetTop'));
		}
		$pyjs.track.lineno=784;
		cur = $p['getattr'](elem, 'parentNode');
		$pyjs.track.lineno=785;
		while ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](($p['bool']($and21=cur)?$p['op_eq']($p['getattr'](cur, 'nodeType'), 1):$and21));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})()) {
			$pyjs.track.lineno=786;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and23=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](cur, 'style');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})())?($p['bool']($and24=(function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr']($p['getattr'](cur, 'style'), 'overflow');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})())?($p['bool']($or8=$p['op_eq']($p['getattr']($p['getattr'](cur, 'style'), 'overflow'), 'auto'))?$or8:$p['op_eq']($p['getattr']($p['getattr'](cur, 'style'), 'overflow'), 'scroll')):$and24):$and23));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})()) {
				$pyjs.track.lineno=788;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['cmp'](left, $p['getattr'](cur, 'scrollLeft')) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})()) {
					$pyjs.track.lineno=789;
					cur.scrollLeft = left;
				}
				$pyjs.track.lineno=790;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['cmp']($p['__op_add']($add17=left,$add18=width), $p['__op_add']($add19=$p['getattr'](cur, 'scrollLeft'),$add20=$p['getattr'](cur, 'clientWidth'))) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})()) {
					$pyjs.track.lineno=791;
					cur.scrollLeft = $p['__op_sub']($sub13=$p['__op_add']($add21=left,$add22=width),$sub14=$p['getattr'](cur, 'clientWidth'));
				}
				$pyjs.track.lineno=792;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['cmp'](top, $p['getattr'](cur, 'scrollTop')) == -1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})()) {
					$pyjs.track.lineno=793;
					cur.scrollTop = top;
				}
				$pyjs.track.lineno=794;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['cmp']($p['__op_add']($add23=top,$add24=height), $p['__op_add']($add25=$p['getattr'](cur, 'scrollTop'),$add26=$p['getattr'](cur, 'clientHeight'))) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})()) {
					$pyjs.track.lineno=795;
					cur.scrollTop = $p['__op_sub']($sub15=$p['__op_add']($add27=top,$add28=height),$sub16=$p['getattr'](cur, 'clientHeight'));
				}
			}
			$pyjs.track.lineno=797;
			offsetLeft = $p['getattr'](cur, 'offsetLeft');
			$pyjs.track.lineno=798;
			offsetTop = $p['getattr'](cur, 'offsetTop');
			$pyjs.track.lineno=799;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['op_eq']($p['getattr'](cur, 'parentNode'), $p['getattr'](cur, 'offsetParent')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})()) {
				$pyjs.track.lineno=800;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr']($p['getattr'](cur, 'parentNode'), 'offsetLeft');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})()) {
					$pyjs.track.lineno=801;
					offsetLeft = $p['__op_sub']($sub17=offsetLeft,$sub18=$p['getattr']($p['getattr'](cur, 'parentNode'), 'offsetLeft'));
				}
				$pyjs.track.lineno=802;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['hasattr']($p['getattr'](cur, 'parentNode'), 'offsetTop');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})()) {
					$pyjs.track.lineno=803;
					offsetTop = $p['__op_sub']($sub19=offsetTop,$sub20=$p['getattr']($p['getattr'](cur, 'parentNode'), 'offsetTop'));
				}
			}
			$pyjs.track.lineno=805;
			left = $p['__op_add']($add29=left,$add30=$p['__op_sub']($sub21=offsetLeft,$sub22=$p['getattr'](cur, 'scrollLeft')));
			$pyjs.track.lineno=806;
			top = $p['__op_add']($add31=top,$add32=$p['__op_sub']($sub23=offsetTop,$sub24=$p['getattr'](cur, 'scrollTop')));
			$pyjs.track.lineno=807;
			cur = $p['getattr'](cur, 'parentNode');
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['scrollIntoView'].__name__ = 'scrollIntoView';

	$m['scrollIntoView'].__bind_type__ = 0;
	$m['scrollIntoView'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=810;
	$m['mash_name_for_glib'] = function(name, joiner) {
		if (typeof joiner == 'undefined') joiner=arguments.callee.__args__[3][1];
		var c,$add35,$iter1_nextval,$iter1_idx,res,$add36,$add33,$add37,$add34,$iter1_iter,$iter1_array,$pyjs__trackstack_size_1,$add38,$iter1_type;
		$pyjs.track={module:'pyjamas.DOM',lineno:810};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=810;
		$pyjs.track.lineno=811;
		res = '';
		$pyjs.track.lineno=812;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return name;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})();
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
			c = $iter1_nextval.$nextval;
			$pyjs.track.lineno=813;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return c['isupper']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})()) {
				$pyjs.track.lineno=814;
				res = $p['__op_add']($add35=res,$add36=$p['__op_add']($add33=joiner,$add34=(function(){try{try{$pyjs.in_try_except += 1;
				return c['lower']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})()));
			}
			else {
				$pyjs.track.lineno=816;
				res = $p['__op_add']($add37=res,$add38=c);
			}
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=817;
		$pyjs.track.lineno=817;
		var $pyjs__ret = res;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['mash_name_for_glib'].__name__ = 'mash_name_for_glib';

	$m['mash_name_for_glib'].__bind_type__ = 0;
	$m['mash_name_for_glib'].__args__ = [null,null,['name'],['joiner', '-']];
	$pyjs.track.lineno=820;
	$m['removeAttribute'] = function(element, attribute) {

		$pyjs.track={module:'pyjamas.DOM',lineno:820};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=820;
		$pyjs.track.lineno=821;
		(function(){try{try{$pyjs.in_try_except += 1;
		return element['removeAttribute'](attribute);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['removeAttribute'].__name__ = 'removeAttribute';

	$m['removeAttribute'].__bind_type__ = 0;
	$m['removeAttribute'].__args__ = [null,null,['element'],['attribute']];
	$pyjs.track.lineno=824;
	$m['setAttribute'] = function(element, attribute, value) {

		$pyjs.track={module:'pyjamas.DOM',lineno:824};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=824;
		$pyjs.track.lineno=825;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['setattr'](element, attribute, value);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setAttribute'].__name__ = 'setAttribute';

	$m['setAttribute'].__bind_type__ = 0;
	$m['setAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
	$pyjs.track.lineno=828;
	$m['setElemAttribute'] = function(element, attribute, value) {

		$pyjs.track={module:'pyjamas.DOM',lineno:828};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=828;
		$pyjs.track.lineno=829;
		(function(){try{try{$pyjs.in_try_except += 1;
		return element['setAttribute'](attribute, value);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setElemAttribute'].__name__ = 'setElemAttribute';

	$m['setElemAttribute'].__bind_type__ = 0;
	$m['setElemAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
	$pyjs.track.lineno=832;
	$m['setBooleanAttribute'] = function(elem, attr, value) {
		var mf;
		$pyjs.track={module:'pyjamas.DOM',lineno:832};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=832;
		$pyjs.track.lineno=833;
		mf = (function(){try{try{$pyjs.in_try_except += 1;
		return (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})();
		$pyjs.track.lineno=834;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['setattr'](elem, (function(){try{try{$pyjs.in_try_except += 1;
		return mf['mash_attrib'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})(), value);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setBooleanAttribute'].__name__ = 'setBooleanAttribute';

	$m['setBooleanAttribute'].__bind_type__ = 0;
	$m['setBooleanAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$pyjs.track.lineno=837;
	$m['setCapture'] = function(elem) {

		$pyjs.track={module:'pyjamas.DOM',lineno:837};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=837;
		$pyjs.track.lineno=838;
		$pyjs.track.lineno=839;
		$m['sCaptureElem'] = elem;
		$pyjs.track.lineno=841;
		(function(){try{try{$pyjs.in_try_except += 1;
		return (typeof setCapture_impl == "undefined"?$m.setCapture_impl:setCapture_impl)(elem);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setCapture'].__name__ = 'setCapture';

	$m['setCapture'].__bind_type__ = 0;
	$m['setCapture'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=844;
	$m['setCapture_impl'] = function(elem) {

		$pyjs.track={module:'pyjamas.DOM',lineno:844};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=844;
		$pyjs.track.lineno=844;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setCapture_impl'].__name__ = 'setCapture_impl';

	$m['setCapture_impl'].__bind_type__ = 0;
	$m['setCapture_impl'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=846;
	$m['setEventListener'] = function(element, listener) {

		$pyjs.track={module:'pyjamas.DOM',lineno:846};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=846;
		$pyjs.track.lineno=853;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['set_listener'](element, listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setEventListener'].__name__ = 'setEventListener';

	$m['setEventListener'].__bind_type__ = 0;
	$m['setEventListener'].__args__ = [null,null,['element'],['listener']];
	$pyjs.track.lineno=856;
	$m['createTextNode'] = function(txt) {

		$pyjs.track={module:'pyjamas.DOM',lineno:856};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=856;
		$pyjs.track.lineno=857;
		$pyjs.track.lineno=857;
		var $pyjs__ret = $doc['createTextNode'](txt);
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['createTextNode'].__name__ = 'createTextNode';

	$m['createTextNode'].__bind_type__ = 0;
	$m['createTextNode'].__args__ = [null,null,['txt']];
	$pyjs.track.lineno=860;
	$m['setInnerHTML'] = function(element, html) {
		var $pyjs_try_err;
		$pyjs.track={module:'pyjamas.DOM',lineno:860};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=860;
		$pyjs.track.lineno=861;
		var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
		try {
			$pyjs.track.lineno=862;
			element.innerHtml = html;
		} catch($pyjs_try_err) {
			$pyjs.__last_exception_stack__ = sys.save_exception_stack($pyjs__trackstack_size_1 - 1);
			$pyjs.__active_exception_stack__ = null;
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.DOM';
			if (true) {
				$pyjs.track.lineno=864;
				element.innerHTML = html;
			}
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setInnerHTML'].__name__ = 'setInnerHTML';

	$m['setInnerHTML'].__bind_type__ = 0;
	$m['setInnerHTML'].__args__ = [null,null,['element'],['html']];
	$pyjs.track.lineno=867;
	$m['setInnerText'] = function(elem, text) {
		var $or11,$or10;
		$pyjs.track={module:'pyjamas.DOM',lineno:867};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=867;
		$pyjs.track.lineno=869;
		while ($p['bool'](($p['getattr'](elem, 'firstChild') !== null))) {
			$pyjs.track.lineno=870;
			(function(){try{try{$pyjs.in_try_except += 1;
			return elem['removeChild']($p['getattr'](elem, 'firstChild'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})();
		}
		$pyjs.track.lineno=871;
		(function(){try{try{$pyjs.in_try_except += 1;
		return elem['appendChild']((function(){try{try{$pyjs.in_try_except += 1;
		return $m['createTextNode'](($p['bool']($or10=text)?$or10:''));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setInnerText'].__name__ = 'setInnerText';

	$m['setInnerText'].__bind_type__ = 0;
	$m['setInnerText'].__args__ = [null,null,['elem'],['text']];
	$pyjs.track.lineno=874;
	$m['setIntElemAttribute'] = function(elem, attr, value) {

		$pyjs.track={module:'pyjamas.DOM',lineno:874};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=874;
		$pyjs.track.lineno=875;
		(function(){try{try{$pyjs.in_try_except += 1;
		return elem['setAttribute'](attr, (function(){try{try{$pyjs.in_try_except += 1;
		return $p['str'](value);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setIntElemAttribute'].__name__ = 'setIntElemAttribute';

	$m['setIntElemAttribute'].__bind_type__ = 0;
	$m['setIntElemAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$pyjs.track.lineno=878;
	$m['setIntAttribute'] = function(elem, attr, value) {

		$pyjs.track={module:'pyjamas.DOM',lineno:878};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=878;
		$pyjs.track.lineno=879;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $p['setattr'](elem, attr, (function(){try{try{$pyjs.in_try_except += 1;
		return $p['float_int'](value);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setIntAttribute'].__name__ = 'setIntAttribute';

	$m['setIntAttribute'].__bind_type__ = 0;
	$m['setIntAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$pyjs.track.lineno=882;
	$m['setIntStyleAttribute'] = function(elem, attr, value) {
		var mf;
		$pyjs.track={module:'pyjamas.DOM',lineno:882};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=882;
		$pyjs.track.lineno=883;
		mf = (function(){try{try{$pyjs.in_try_except += 1;
		return (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})();
		$pyjs.track.lineno=884;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['hasattr']($p['getattr'](elem, 'style'), 'setProperty');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})()) {
			$pyjs.track.lineno=885;
			(function(){try{try{$pyjs.in_try_except += 1;
			return elem['style']['setProperty']((function(){try{try{$pyjs.in_try_except += 1;
			return mf['mash_attrib'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_255_err){if (!$p['isinstance']($pyjs_dbg_255_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_255_err);}throw $pyjs_dbg_255_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
			return $p['str'](value);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})(), '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_257_err){if (!$p['isinstance']($pyjs_dbg_257_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_257_err);}throw $pyjs_dbg_257_err;
}})();
		}
		else {
			$pyjs.track.lineno=887;
			(function(){try{try{$pyjs.in_try_except += 1;
			return elem['style']['setAttribute']((function(){try{try{$pyjs.in_try_except += 1;
			return mf['mash_attrib'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_258_err){if (!$p['isinstance']($pyjs_dbg_258_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_258_err);}throw $pyjs_dbg_258_err;
}})(), (function(){try{try{$pyjs.in_try_except += 1;
			return $p['str'](value);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_259_err){if (!$p['isinstance']($pyjs_dbg_259_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_259_err);}throw $pyjs_dbg_259_err;
}})(), '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_260_err){if (!$p['isinstance']($pyjs_dbg_260_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_260_err);}throw $pyjs_dbg_260_err;
}})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setIntStyleAttribute'].__name__ = 'setIntStyleAttribute';

	$m['setIntStyleAttribute'].__bind_type__ = 0;
	$m['setIntStyleAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$pyjs.track.lineno=890;
	$m['setOptionText'] = function(select, text, index) {
		var option;
		$pyjs.track={module:'pyjamas.DOM',lineno:890};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=890;
		$pyjs.track.lineno=891;
		option = (function(){try{try{$pyjs.in_try_except += 1;
		return select['options']['item'](index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_261_err){if (!$p['isinstance']($pyjs_dbg_261_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_261_err);}throw $pyjs_dbg_261_err;
}})();
		$pyjs.track.lineno=892;
		option.textContent = text;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setOptionText'].__name__ = 'setOptionText';

	$m['setOptionText'].__bind_type__ = 0;
	$m['setOptionText'].__args__ = [null,null,['select'],['text'],['index']];
	$pyjs.track.lineno=895;
	$m['setStyleAttribute'] = function(element, name, value) {

		$pyjs.track={module:'pyjamas.DOM',lineno:895};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=895;
		$pyjs.track.lineno=896;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['hasattr']($p['getattr'](element, 'style'), 'setProperty');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_262_err){if (!$p['isinstance']($pyjs_dbg_262_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_262_err);}throw $pyjs_dbg_262_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_263_err){if (!$p['isinstance']($pyjs_dbg_263_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_263_err);}throw $pyjs_dbg_263_err;
}})()) {
			$pyjs.track.lineno=897;
			(function(){try{try{$pyjs.in_try_except += 1;
			return element['style']['setProperty']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['mash_name_for_glib'](name);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_264_err){if (!$p['isinstance']($pyjs_dbg_264_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_264_err);}throw $pyjs_dbg_264_err;
}})(), value, '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_265_err){if (!$p['isinstance']($pyjs_dbg_265_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_265_err);}throw $pyjs_dbg_265_err;
}})();
		}
		else {
			$pyjs.track.lineno=899;
			(function(){try{try{$pyjs.in_try_except += 1;
			return element['style']['setAttribute'](name, value, '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_266_err){if (!$p['isinstance']($pyjs_dbg_266_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_266_err);}throw $pyjs_dbg_266_err;
}})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setStyleAttribute'].__name__ = 'setStyleAttribute';

	$m['setStyleAttribute'].__bind_type__ = 0;
	$m['setStyleAttribute'].__args__ = [null,null,['element'],['name'],['value']];
	$pyjs.track.lineno=901;
	$m['setStyleAttributes'] = function(element) {
		var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
		if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
			kwargs = arguments[arguments.length+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof element != 'undefined') {
				if (element !== null && typeof element['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = element;
					element = arguments[1];
				}
			} else {
			}
		}
		var $iter2_nextval,$iter2_type,attr,$iter2_iter,$pyjs__trackstack_size_1,$iter2_idx,val,$iter2_array;
		$pyjs.track={module:'pyjamas.DOM',lineno:901};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=901;
		$pyjs.track.lineno=905;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return kwargs['items']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_268_err){if (!$p['isinstance']($pyjs_dbg_268_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_268_err);}throw $pyjs_dbg_268_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_269_err){if (!$p['isinstance']($pyjs_dbg_269_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_269_err);}throw $pyjs_dbg_269_err;
}})();
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
			var $tupleassign2 = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['__ass_unpack']($iter2_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_267_err){if (!$p['isinstance']($pyjs_dbg_267_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_267_err);}throw $pyjs_dbg_267_err;
}})();
			attr = $tupleassign2[0];
			val = $tupleassign2[1];
			$pyjs.track.lineno=906;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr']($p['getattr'](element, 'style'), 'setProperty');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_270_err){if (!$p['isinstance']($pyjs_dbg_270_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_270_err);}throw $pyjs_dbg_270_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_271_err){if (!$p['isinstance']($pyjs_dbg_271_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_271_err);}throw $pyjs_dbg_271_err;
}})()) {
				$pyjs.track.lineno=907;
				(function(){try{try{$pyjs.in_try_except += 1;
				return element['style']['setProperty']((function(){try{try{$pyjs.in_try_except += 1;
				return $m['mash_name_for_glib'](attr);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_272_err){if (!$p['isinstance']($pyjs_dbg_272_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_272_err);}throw $pyjs_dbg_272_err;
}})(), val, '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_273_err){if (!$p['isinstance']($pyjs_dbg_273_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_273_err);}throw $pyjs_dbg_273_err;
}})();
			}
			else {
				$pyjs.track.lineno=909;
				(function(){try{try{$pyjs.in_try_except += 1;
				return element['style']['setAttribute'](attr, val, '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_274_err){if (!$p['isinstance']($pyjs_dbg_274_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_274_err);}throw $pyjs_dbg_274_err;
}})();
			}
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['setStyleAttributes'].__name__ = 'setStyleAttributes';

	$m['setStyleAttributes'].__bind_type__ = 0;
	$m['setStyleAttributes'].__args__ = [null,['kwargs'],['element']];
	$pyjs.track.lineno=911;
	$m['sinkEvents'] = function(element, bits) {
		var mf,aev,event_name,cb,$iter3_nextval,$iter3_array,mask,$pyjs__trackstack_size_1,$iter3_idx,$iter3_iter,$iter3_type,bit;
		$pyjs.track={module:'pyjamas.DOM',lineno:911};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=911;
		$pyjs.track.lineno=918;
		mask = ((function(){try{try{$pyjs.in_try_except += 1;
		return $m['getEventsSunk'](element);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_275_err){if (!$p['isinstance']($pyjs_dbg_275_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_275_err);}throw $pyjs_dbg_275_err;
}})())^(bits);
		$pyjs.track.lineno=919;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['eventbitsmap'].__setitem__(element, bits);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_276_err){if (!$p['isinstance']($pyjs_dbg_276_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_276_err);}throw $pyjs_dbg_276_err;
}})();
		$pyjs.track.lineno=920;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['bool'](mask));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_277_err){if (!$p['isinstance']($pyjs_dbg_277_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_277_err);}throw $pyjs_dbg_277_err;
}})()) {
			$pyjs.track.lineno=921;
			$pyjs.track.lineno=921;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=923;
		bits = mask;
		$pyjs.track.lineno=925;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['bool'](bits));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_278_err){if (!$p['isinstance']($pyjs_dbg_278_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_278_err);}throw $pyjs_dbg_278_err;
}})()) {
			$pyjs.track.lineno=926;
			$pyjs.track.lineno=926;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=927;
		mf = (function(){try{try{$pyjs.in_try_except += 1;
		return (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_279_err){if (!$p['isinstance']($pyjs_dbg_279_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_279_err);}throw $pyjs_dbg_279_err;
}})();
		$pyjs.track.lineno=928;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['hasattr'](mf, '_addEventListener');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_280_err){if (!$p['isinstance']($pyjs_dbg_280_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_280_err);}throw $pyjs_dbg_280_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_281_err){if (!$p['isinstance']($pyjs_dbg_281_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_281_err);}throw $pyjs_dbg_281_err;
}})()) {
			$pyjs.track.lineno=929;
			aev = $p['getattr'](mf, '_addEventListener');
		}
		else {
			$pyjs.track.lineno=931;
			aev = $p['getattr'](mf, 'addEventListener');
		}
		$pyjs.track.lineno=933;
		cb = $m['_dispatchEvent'];
		$pyjs.track.lineno=936;
		(function(){try{try{$pyjs.in_try_except += 1;
		return (typeof sinkEventsMozilla == "undefined"?$m.sinkEventsMozilla:sinkEventsMozilla)(element, bits);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_282_err){if (!$p['isinstance']($pyjs_dbg_282_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_282_err);}throw $pyjs_dbg_282_err;
}})();
		$pyjs.track.lineno=938;
		bit = 1;
		$pyjs.track.lineno=939;
		while ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](bits);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_283_err){if (!$p['isinstance']($pyjs_dbg_283_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_283_err);}throw $pyjs_dbg_283_err;
}})()) {
			$pyjs.track.lineno=940;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['cmp'](bit, bits) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_284_err){if (!$p['isinstance']($pyjs_dbg_284_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_284_err);}throw $pyjs_dbg_284_err;
}})()) {
				$pyjs.track.lineno=941;
				$pyjs.__active_exception_stack__ = null;
				throw ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['RuntimeError']('sinkEvents: bit outruns bits');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_285_err){if (!$p['isinstance']($pyjs_dbg_285_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_285_err);}throw $pyjs_dbg_285_err;
}})());
			}
			$pyjs.track.lineno=942;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((bits)&(bit));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_286_err){if (!$p['isinstance']($pyjs_dbg_286_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_286_err);}throw $pyjs_dbg_286_err;
}})()) {
				$pyjs.track.lineno=943;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter3_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr']($m['Event'], 'eventbits').__getitem__(bit).__getitem__(1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_287_err){if (!$p['isinstance']($pyjs_dbg_287_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_287_err);}throw $pyjs_dbg_287_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
					event_name = $iter3_nextval.$nextval;
					$pyjs.track.lineno=944;
					(function(){try{try{$pyjs.in_try_except += 1;
					return aev(element, event_name, cb);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_288_err){if (!$p['isinstance']($pyjs_dbg_288_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_288_err);}throw $pyjs_dbg_288_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.DOM';
				$pyjs.track.lineno=945;
				bits ^= bit;
			}
			$pyjs.track.lineno=946;
			bit <<= 1;
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['sinkEvents'].__name__ = 'sinkEvents';

	$m['sinkEvents'].__bind_type__ = 0;
	$m['sinkEvents'].__args__ = [null,null,['element'],['bits']];
	$pyjs.track.lineno=948;
	$m['sinkEventsMozilla'] = function(element, bits) {

		$pyjs.track={module:'pyjamas.DOM',lineno:948};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=948;
		$pyjs.track.lineno=949;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['sinkEventsMozilla'].__name__ = 'sinkEventsMozilla';

	$m['sinkEventsMozilla'].__bind_type__ = 0;
	$m['sinkEventsMozilla'].__args__ = [null,null,['element'],['bits']];
	$pyjs.track.lineno=951;
	$m['toString'] = function(elem) {
		var outer,tempDiv,temp;
		$pyjs.track={module:'pyjamas.DOM',lineno:951};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=951;
		$pyjs.track.lineno=952;
		temp = (function(){try{try{$pyjs.in_try_except += 1;
		return elem['cloneNode'](true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_289_err){if (!$p['isinstance']($pyjs_dbg_289_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_289_err);}throw $pyjs_dbg_289_err;
}})();
		$pyjs.track.lineno=953;
		tempDiv = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createDiv']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_290_err){if (!$p['isinstance']($pyjs_dbg_290_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_290_err);}throw $pyjs_dbg_290_err;
}})();
		$pyjs.track.lineno=954;
		(function(){try{try{$pyjs.in_try_except += 1;
		return tempDiv['appendChild'](temp);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_291_err){if (!$p['isinstance']($pyjs_dbg_291_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_291_err);}throw $pyjs_dbg_291_err;
}})();
		$pyjs.track.lineno=955;
		outer = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['getInnerHTML'](tempDiv);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_292_err){if (!$p['isinstance']($pyjs_dbg_292_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_292_err);}throw $pyjs_dbg_292_err;
}})();
		$pyjs.track.lineno=956;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['setInnerHTML'](temp, '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_293_err){if (!$p['isinstance']($pyjs_dbg_293_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_293_err);}throw $pyjs_dbg_293_err;
}})();
		$pyjs.track.lineno=957;
		$pyjs.track.lineno=957;
		var $pyjs__ret = outer;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['toString'].__name__ = 'toString';

	$m['toString'].__bind_type__ = 0;
	$m['toString'].__args__ = [null,null,['elem']];
	$pyjs.track.lineno=961;
	$m['dispatchEvent'] = function(event, element, listener) {

		$pyjs.track={module:'pyjamas.DOM',lineno:961};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=961;
		$pyjs.track.lineno=962;
		(function(){try{try{$pyjs.in_try_except += 1;
		return (typeof dispatchEventImpl == "undefined"?$m.dispatchEventImpl:dispatchEventImpl)(event, element, listener);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_294_err){if (!$p['isinstance']($pyjs_dbg_294_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_294_err);}throw $pyjs_dbg_294_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['dispatchEvent'].__name__ = 'dispatchEvent';

	$m['dispatchEvent'].__bind_type__ = 0;
	$m['dispatchEvent'].__args__ = [null,null,['event'],['element'],['listener']];
	$pyjs.track.lineno=965;
	$m['previewEvent'] = function(evt) {
		var preview,ret;
		$pyjs.track={module:'pyjamas.DOM',lineno:965};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=965;
		$pyjs.track.lineno=967;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
		return $p['len']($m['sEventPreviewStack']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_295_err){if (!$p['isinstance']($pyjs_dbg_295_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_295_err);}throw $pyjs_dbg_295_err;
}})(), 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_296_err){if (!$p['isinstance']($pyjs_dbg_296_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_296_err);}throw $pyjs_dbg_296_err;
}})()) {
			$pyjs.track.lineno=968;
			$pyjs.track.lineno=968;
			var $pyjs__ret = true;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=969;
		preview = $m['sEventPreviewStack'].__getitem__((typeof ($usub2=1)=='number'?
			-$usub2:
			$p['op_usub']($usub2)));
		$pyjs.track.lineno=970;
		ret = (function(){try{try{$pyjs.in_try_except += 1;
		return preview['onEventPreview'](evt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_297_err){if (!$p['isinstance']($pyjs_dbg_297_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_297_err);}throw $pyjs_dbg_297_err;
}})();
		$pyjs.track.lineno=971;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](ret);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_298_err){if (!$p['isinstance']($pyjs_dbg_298_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_298_err);}throw $pyjs_dbg_298_err;
}})()) {
			$pyjs.track.lineno=972;
			$pyjs.track.lineno=972;
			var $pyjs__ret = true;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=975;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](evt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_299_err){if (!$p['isinstance']($pyjs_dbg_299_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_299_err);}throw $pyjs_dbg_299_err;
}})()) {
			$pyjs.track.lineno=976;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['eventCancelBubble'](evt, true);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_300_err){if (!$p['isinstance']($pyjs_dbg_300_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_300_err);}throw $pyjs_dbg_300_err;
}})();
			$pyjs.track.lineno=977;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['eventPreventDefault'](evt);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_301_err){if (!$p['isinstance']($pyjs_dbg_301_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_301_err);}throw $pyjs_dbg_301_err;
}})();
		}
		$pyjs.track.lineno=979;
		$pyjs.track.lineno=979;
		var $pyjs__ret = ret;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['previewEvent'].__name__ = 'previewEvent';

	$m['previewEvent'].__bind_type__ = 0;
	$m['previewEvent'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=983;
	$m['dispatchEventAndCatch'] = function(evt, elem, listener, handler) {

		$pyjs.track={module:'pyjamas.DOM',lineno:983};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=983;
		$pyjs.track.lineno=984;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['dispatchEventAndCatch'].__name__ = 'dispatchEventAndCatch';

	$m['dispatchEventAndCatch'].__bind_type__ = 0;
	$m['dispatchEventAndCatch'].__args__ = [null,null,['evt'],['elem'],['listener'],['handler']];
	$pyjs.track.lineno=986;
	$m['currentEvent'] = null;
	$pyjs.track.lineno=989;
	$m['dispatchEventImpl'] = function(event, element, listener) {
		var prevCurrentEvent;
		$pyjs.track={module:'pyjamas.DOM',lineno:989};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=989;
		$pyjs.track.lineno=990;
		$pyjs.track.lineno=991;
		$pyjs.track.lineno=992;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](element, $m['sCaptureElem']));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_302_err){if (!$p['isinstance']($pyjs_dbg_302_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_302_err);}throw $pyjs_dbg_302_err;
}})()) {
			$pyjs.track.lineno=993;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs.in_try_except += 1;
			return $m['eventGetType'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_303_err){if (!$p['isinstance']($pyjs_dbg_303_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_303_err);}throw $pyjs_dbg_303_err;
}})(), 'losecapture'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_304_err){if (!$p['isinstance']($pyjs_dbg_304_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_304_err);}throw $pyjs_dbg_304_err;
}})()) {
				$pyjs.track.lineno=995;
				$m['sCaptureElem'] = null;
			}
		}
		$pyjs.track.lineno=997;
		prevCurrentEvent = $m['currentEvent'];
		$pyjs.track.lineno=998;
		$m['currentEvent'] = event;
		$pyjs.track.lineno=999;
		(function(){try{try{$pyjs.in_try_except += 1;
		return listener['onBrowserEvent'](event);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_305_err){if (!$p['isinstance']($pyjs_dbg_305_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_305_err);}throw $pyjs_dbg_305_err;
}})();
		$pyjs.track.lineno=1000;
		$m['currentEvent'] = prevCurrentEvent;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['dispatchEventImpl'].__name__ = 'dispatchEventImpl';

	$m['dispatchEventImpl'].__bind_type__ = 0;
	$m['dispatchEventImpl'].__args__ = [null,null,['event'],['element'],['listener']];
	$pyjs.track.lineno=1003;
	$m['eventGetCurrentEvent'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:1003};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=1003;
		$pyjs.track.lineno=1004;
		$pyjs.track.lineno=1004;
		var $pyjs__ret = $m['currentEvent'];
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['eventGetCurrentEvent'].__name__ = 'eventGetCurrentEvent';

	$m['eventGetCurrentEvent'].__bind_type__ = 0;
	$m['eventGetCurrentEvent'].__args__ = [null,null];
	$pyjs.track.lineno=1007;
	$m['insertListItem'] = function(select, item, value, index) {
		var option;
		$pyjs.track={module:'pyjamas.DOM',lineno:1007};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=1007;
		$pyjs.track.lineno=1008;
		option = (function(){try{try{$pyjs.in_try_except += 1;
		return $m['createElement']('OPTION');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_306_err){if (!$p['isinstance']($pyjs_dbg_306_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_306_err);}throw $pyjs_dbg_306_err;
}})();
		$pyjs.track.lineno=1009;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['setInnerText'](option, item);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_307_err){if (!$p['isinstance']($pyjs_dbg_307_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_307_err);}throw $pyjs_dbg_307_err;
}})();
		$pyjs.track.lineno=1010;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']((value !== null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_308_err){if (!$p['isinstance']($pyjs_dbg_308_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_308_err);}throw $pyjs_dbg_308_err;
}})()) {
			$pyjs.track.lineno=1011;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['setAttribute'](option, 'value', value);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_309_err){if (!$p['isinstance']($pyjs_dbg_309_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_309_err);}throw $pyjs_dbg_309_err;
}})();
		}
		$pyjs.track.lineno=1012;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq'](index, (typeof ($usub3=1)=='number'?
			-$usub3:
			$p['op_usub']($usub3))));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_310_err){if (!$p['isinstance']($pyjs_dbg_310_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_310_err);}throw $pyjs_dbg_310_err;
}})()) {
			$pyjs.track.lineno=1013;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['appendChild'](select, option);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_311_err){if (!$p['isinstance']($pyjs_dbg_311_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_311_err);}throw $pyjs_dbg_311_err;
}})();
		}
		else {
			$pyjs.track.lineno=1015;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['insertChild'](select, option, index);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_312_err){if (!$p['isinstance']($pyjs_dbg_312_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_312_err);}throw $pyjs_dbg_312_err;
}})();
		}
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['insertListItem'].__name__ = 'insertListItem';

	$m['insertListItem'].__bind_type__ = 0;
	$m['insertListItem'].__args__ = [null,null,['select'],['item'],['value'],['index']];
	$pyjs.track.lineno=1018;
	$m['getBodyOffsetTop'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:1018};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=1018;
		$pyjs.track.lineno=1019;
		$pyjs.track.lineno=1019;
		var $pyjs__ret = 0;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getBodyOffsetTop'].__name__ = 'getBodyOffsetTop';

	$m['getBodyOffsetTop'].__bind_type__ = 0;
	$m['getBodyOffsetTop'].__args__ = [null,null];
	$pyjs.track.lineno=1022;
	$m['getBodyOffsetLeft'] = function() {

		$pyjs.track={module:'pyjamas.DOM',lineno:1022};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=1022;
		$pyjs.track.lineno=1023;
		$pyjs.track.lineno=1023;
		var $pyjs__ret = 0;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['getBodyOffsetLeft'].__name__ = 'getBodyOffsetLeft';

	$m['getBodyOffsetLeft'].__bind_type__ = 0;
	$m['getBodyOffsetLeft'].__args__ = [null,null];
	$pyjs.track.lineno=1025;
	$m['eventGetMouseWheelVelocityY'] = function(evt) {

		$pyjs.track={module:'pyjamas.DOM',lineno:1025};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.DOM';
		$pyjs.track.lineno=1025;
		$pyjs.track.lineno=1028;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return null;
	};
	$m['eventGetMouseWheelVelocityY'].__name__ = 'eventGetMouseWheelVelocityY';

	$m['eventGetMouseWheelVelocityY'].__bind_type__ = 0;
	$m['eventGetMouseWheelVelocityY'].__args__ = [null,null,['evt']];
	$pyjs.track.lineno=1031;
	if ((function(){try{try{$pyjs.in_try_except += 1;
		return $p['bool'](!$p['bool']($p['getattr']($m['pyjd'], 'is_desktop')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_313_err){if (!$p['isinstance']($pyjs_dbg_313_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_313_err);}throw $pyjs_dbg_313_err;
}})()) {
		$pyjs.track.lineno=1032;
		(function(){try{try{$pyjs.in_try_except += 1;
		return $m['init']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_314_err){if (!$p['isinstance']($pyjs_dbg_314_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_314_err);}throw $pyjs_dbg_314_err;
}})();
	}
	return this;
}; /* end pyjamas.DOM */


/* end module: pyjamas.DOM */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.Window.onResize', 'pyjamas', 'pyjamas.Window', 'pyjamas.Window.onClosing', 'pyjamas.Window.onClosed', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.Event.ONBLUR', 'pyjamas.ui.Event.ONCHANGE', 'pyjamas.ui.Event.ONCLICK', 'pyjamas.ui.Event.ONCONTEXTMENU', 'pyjamas.ui.Event.ONDBLCLICK', 'pyjamas.ui.Event.ONERROR', 'pyjamas.ui.Event.ONFOCUS', 'pyjamas.ui.Event.ONKEYDOWN', 'pyjamas.ui.Event.ONKEYPRESS', 'pyjamas.ui.Event.ONKEYUP', 'pyjamas.ui.Event.ONLOAD', 'pyjamas.ui.Event.ONLOSECAPTURE', 'pyjamas.ui.Event.ONMOUSEDOWN', 'pyjamas.ui.Event.ONMOUSEMOVE', 'pyjamas.ui.Event.ONMOUSEOUT', 'pyjamas.ui.Event.ONMOUSEOVER', 'pyjamas.ui.Event.ONMOUSEUP', 'pyjamas.ui.Event.ONSCROLL', 'pyjamas.ui.Event.ONINPUT']
*/
