/* start module: pyjamas.JSONService */
$pyjs.loaded_modules['pyjamas.JSONService'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.JSONService'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.JSONService'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.JSONService"];
	$m.__repr__ = function() { return "<module: pyjamas.JSONService>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.JSONService';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas']['JSONService'] = $pyjs.loaded_modules['pyjamas.JSONService'];
	$m.__track_lines__[1] = 'pyjamas.JSONService.py, line 1:\n    # Check http://json-rpc.org/wiki for the sepcification of JSON-RPC';
	$m.__track_lines__[10] = 'pyjamas.JSONService.py, line 10:\n    import sys';
	$m.__track_lines__[11] = 'pyjamas.JSONService.py, line 11:\n    from HTTPRequest import HTTPRequest';
	$m.__track_lines__[13] = 'pyjamas.JSONService.py, line 13:\n    try:';
	$m.__track_lines__[15] = 'pyjamas.JSONService.py, line 15:\n    from json import dumps, loads';
	$m.__track_lines__[18] = 'pyjamas.JSONService.py, line 18:\n    from simplejson import dumps, loads';
	$m.__track_lines__[20] = 'pyjamas.JSONService.py, line 20:\n    class JSONServiceError(Exception):';
	$m.__track_lines__[21] = 'pyjamas.JSONService.py, line 21:\n    pass';
	$m.__track_lines__[23] = 'pyjamas.JSONService.py, line 23:\n    __requestID = 0';
	$m.__track_lines__[24] = "pyjamas.JSONService.py, line 24:\n    __requestIDPrefix = 'ID'";
	$m.__track_lines__[25] = 'pyjamas.JSONService.py, line 25:\n    __lastRequestID = None';
	$m.__track_lines__[26] = 'pyjamas.JSONService.py, line 26:\n    def nextRequestID():';
	$m.__track_lines__[32] = 'pyjamas.JSONService.py, line 32:\n    global __requestID, __requestIDPrefix, __lastRequestID';
	$m.__track_lines__[33] = 'pyjamas.JSONService.py, line 33:\n    __requestID += 1';
	$m.__track_lines__[34] = 'pyjamas.JSONService.py, line 34:\n    id = "%s%s" % (__requestIDPrefix, __requestID)';
	$m.__track_lines__[35] = 'pyjamas.JSONService.py, line 35:\n    if __lastRequestID == id:';
	$m.__track_lines__[37] = "pyjamas.JSONService.py, line 37:\n    __requestIDPrefix += '_'";
	$m.__track_lines__[38] = 'pyjamas.JSONService.py, line 38:\n    __requestID = 0';
	$m.__track_lines__[39] = 'pyjamas.JSONService.py, line 39:\n    id = "%s%s" % (__requestIDPrefix, __requestID)';
	$m.__track_lines__[40] = 'pyjamas.JSONService.py, line 40:\n    __lastRequestID = id';
	$m.__track_lines__[41] = 'pyjamas.JSONService.py, line 41:\n    return id';
	$m.__track_lines__[44] = 'pyjamas.JSONService.py, line 44:\n    class JSONService(object):';
	$m.__track_lines__[45] = "pyjamas.JSONService.py, line 45:\n    content_type = 'application/json-rpc'";
	$m.__track_lines__[46] = "pyjamas.JSONService.py, line 46:\n    accept = 'application/json-rpc'";
	$m.__track_lines__[48] = 'pyjamas.JSONService.py, line 48:\n    def __init__(self, url, handler=None, headers=None):';
	$m.__track_lines__[67] = 'pyjamas.JSONService.py, line 67:\n    self.url = url';
	$m.__track_lines__[68] = 'pyjamas.JSONService.py, line 68:\n    self.handler = handler';
	$m.__track_lines__[69] = 'pyjamas.JSONService.py, line 69:\n    self.headers = headers if headers is not None else {}';
	$m.__track_lines__[70] = 'pyjamas.JSONService.py, line 70:\n    if not self.headers.get("Accept"):';
	$m.__track_lines__[71] = 'pyjamas.JSONService.py, line 71:\n    self.headers["Accept"] = self.accept';
	$m.__track_lines__[73] = 'pyjamas.JSONService.py, line 73:\n    def callMethod(self, method, params, handler = None):';
	$m.__track_lines__[74] = 'pyjamas.JSONService.py, line 74:\n    if handler is None:';
	$m.__track_lines__[75] = 'pyjamas.JSONService.py, line 75:\n    handler = self.handler';
	$m.__track_lines__[77] = 'pyjamas.JSONService.py, line 77:\n    if handler is None:';
	$m.__track_lines__[78] = 'pyjamas.JSONService.py, line 78:\n    return self.sendNotify(method, params)';
	$m.__track_lines__[80] = 'pyjamas.JSONService.py, line 80:\n    return self.sendRequest(method, params, handler)';
	$m.__track_lines__[82] = 'pyjamas.JSONService.py, line 82:\n    def onCompletion(self, response):';
	$m.__track_lines__[83] = 'pyjamas.JSONService.py, line 83:\n    pass';
	$m.__track_lines__[85] = 'pyjamas.JSONService.py, line 85:\n    def sendNotify(self, method, params):';
	$m.__track_lines__[112] = 'pyjamas.JSONService.py, line 112:\n    msg = {"jsonrpc": "2.0",';
	$m.__track_lines__[117] = 'pyjamas.JSONService.py, line 117:\n    msg_data = dumps(msg)';
	$m.__track_lines__[118] = 'pyjamas.JSONService.py, line 118:\n    if not HTTPRequest().asyncPost(self.url, msg_data, self,';
	$m.__track_lines__[121] = 'pyjamas.JSONService.py, line 121:\n    return -1';
	$m.__track_lines__[122] = 'pyjamas.JSONService.py, line 122:\n    return 1';
	$m.__track_lines__[124] = 'pyjamas.JSONService.py, line 124:\n    def sendRequest(self, method, params, handler):';
	$m.__track_lines__[125] = 'pyjamas.JSONService.py, line 125:\n    id = nextRequestID()';
	$m.__track_lines__[126] = 'pyjamas.JSONService.py, line 126:\n    msg = {"jsonrpc": "2.0",';
	$m.__track_lines__[131] = 'pyjamas.JSONService.py, line 131:\n    msg_data = dumps(msg)';
	$m.__track_lines__[133] = 'pyjamas.JSONService.py, line 133:\n    request_info = JSONRequestInfo(id, method, handler)';
	$m.__track_lines__[134] = 'pyjamas.JSONService.py, line 134:\n    if not HTTPRequest().asyncPost(self.url, msg_data,';
	$m.__track_lines__[138] = 'pyjamas.JSONService.py, line 138:\n    return -1';
	$m.__track_lines__[139] = 'pyjamas.JSONService.py, line 139:\n    return id';
	$m.__track_lines__[142] = 'pyjamas.JSONService.py, line 142:\n    class JSONRequestInfo(object):';
	$m.__track_lines__[143] = 'pyjamas.JSONService.py, line 143:\n    def __init__(self, id, method, handler):';
	$m.__track_lines__[144] = 'pyjamas.JSONService.py, line 144:\n    self.id = id';
	$m.__track_lines__[145] = 'pyjamas.JSONService.py, line 145:\n    self.method = method';
	$m.__track_lines__[146] = 'pyjamas.JSONService.py, line 146:\n    self.handler = handler';
	$m.__track_lines__[148] = 'pyjamas.JSONService.py, line 148:\n    def create_object(items):';
	$m.__track_lines__[153] = "pyjamas.JSONService.py, line 153:\n    clsname = items.pop('__jsonclass__', None)";
	$m.__track_lines__[154] = 'pyjamas.JSONService.py, line 154:\n    if not clsname:';
	$m.__track_lines__[155] = 'pyjamas.JSONService.py, line 155:\n    return items';
	$m.__track_lines__[156] = 'pyjamas.JSONService.py, line 156:\n    clsname = clsname[0]';
	$m.__track_lines__[157] = "pyjamas.JSONService.py, line 157:\n    dot = clsname.rfind('.')";
	$m.__track_lines__[158] = 'pyjamas.JSONService.py, line 158:\n    modulename = clsname[:dot]';
	$m.__track_lines__[159] = 'pyjamas.JSONService.py, line 159:\n    clsname = clsname[dot+1:]';
	$m.__track_lines__[160] = 'pyjamas.JSONService.py, line 160:\n    vars = {}';
	$m.__track_lines__[161] = 'pyjamas.JSONService.py, line 161:\n    exec "from %s import %s as kls" % (modulename, clsname) in vars';
	$m.__track_lines__[162] = "pyjamas.JSONService.py, line 162:\n    kls = vars['kls']";
	$m.__track_lines__[163] = 'pyjamas.JSONService.py, line 163:\n    vars = {}';
	$m.__track_lines__[164] = 'pyjamas.JSONService.py, line 164:\n    for (k, v) in items.items():';
	$m.__track_lines__[165] = 'pyjamas.JSONService.py, line 165:\n    vars[str(k)] = v';
	$m.__track_lines__[166] = 'pyjamas.JSONService.py, line 166:\n    return kls(**vars)';
	$m.__track_lines__[168] = 'pyjamas.JSONService.py, line 168:\n    def _decode_response(json_str):';
	$m.__track_lines__[169] = 'pyjamas.JSONService.py, line 169:\n    return loads(json_str, object_hook=create_object)';
	$m.__track_lines__[171] = 'pyjamas.JSONService.py, line 171:\n    class JSONResponseTextHandler(object):';
	$m.__track_lines__[172] = 'pyjamas.JSONService.py, line 172:\n    def __init__(self, request):';
	$m.__track_lines__[173] = 'pyjamas.JSONService.py, line 173:\n    self.request = request';
	$m.__track_lines__[175] = 'pyjamas.JSONService.py, line 175:\n    def onCompletion(self, json_str):';
	$m.__track_lines__[176] = 'pyjamas.JSONService.py, line 176:\n    try:';
	$m.__track_lines__[177] = 'pyjamas.JSONService.py, line 177:\n    response = _decode_response(json_str)';
	$m.__track_lines__[180] = 'pyjamas.JSONService.py, line 180:\n    error = dict(';
	$m.__track_lines__[185] = 'pyjamas.JSONService.py, line 185:\n    self.request.handler.onRemoteError(0, error, self.request)';
	$m.__track_lines__[186] = 'pyjamas.JSONService.py, line 186:\n    return';
	$m.__track_lines__[188] = 'pyjamas.JSONService.py, line 188:\n    if not response:';
	$m.__track_lines__[189] = 'pyjamas.JSONService.py, line 189:\n    error = dict(';
	$m.__track_lines__[194] = 'pyjamas.JSONService.py, line 194:\n    self.request.handler.onRemoteError(0, error, self.request)';
	$m.__track_lines__[196] = 'pyjamas.JSONService.py, line 196:\n    error = response["error"]';
	$m.__track_lines__[197] = 'pyjamas.JSONService.py, line 197:\n    jsonrpc = response.get("jsonrpc")';
	$m.__track_lines__[198] = 'pyjamas.JSONService.py, line 198:\n    code = error.get("code", 0)';
	$m.__track_lines__[199] = 'pyjamas.JSONService.py, line 199:\n    message = error.get("message", error)';
	$m.__track_lines__[200] = 'pyjamas.JSONService.py, line 200:\n    data = error.get("data")';
	$m.__track_lines__[201] = 'pyjamas.JSONService.py, line 201:\n    if not jsonrpc:';
	$m.__track_lines__[202] = 'pyjamas.JSONService.py, line 202:\n    jsonrpc = response.get("version", "1.0")';
	$m.__track_lines__[203] = 'pyjamas.JSONService.py, line 203:\n    if jsonrpc == "1.0":';
	$m.__track_lines__[204] = 'pyjamas.JSONService.py, line 204:\n    message = error';
	$m.__track_lines__[206] = 'pyjamas.JSONService.py, line 206:\n    data = error.get("error")';
	$m.__track_lines__[207] = 'pyjamas.JSONService.py, line 207:\n    error = dict(';
	$m.__track_lines__[212] = 'pyjamas.JSONService.py, line 212:\n    self.request.handler.onRemoteError(0, error, self.request)';
	$m.__track_lines__[214] = 'pyjamas.JSONService.py, line 214:\n    self.request.handler.onRemoteResponse(response["result"],';
	$m.__track_lines__[217] = 'pyjamas.JSONService.py, line 217:\n    error = dict(';
	$m.__track_lines__[222] = 'pyjamas.JSONService.py, line 222:\n    self.request.handler.onRemoteError(0, error, self.request)';
	$m.__track_lines__[224] = 'pyjamas.JSONService.py, line 224:\n    def onError(self, error_str, error_code):';
	$m.__track_lines__[225] = 'pyjamas.JSONService.py, line 225:\n    error = dict(';
	$m.__track_lines__[230] = 'pyjamas.JSONService.py, line 230:\n    self.request.handler.onRemoteError(error_code, error, self.request)';
	$m.__track_lines__[232] = 'pyjamas.JSONService.py, line 232:\n    class ServiceProxy(JSONService):';
	$m.__track_lines__[233] = 'pyjamas.JSONService.py, line 233:\n    def __init__(self, serviceURL, serviceName=None, headers=None):';
	$m.__track_lines__[234] = 'pyjamas.JSONService.py, line 234:\n    JSONService.__init__(self, serviceURL, headers=headers)';
	$m.__track_lines__[235] = 'pyjamas.JSONService.py, line 235:\n    self.__serviceName = serviceName';
	$m.__track_lines__[237] = 'pyjamas.JSONService.py, line 237:\n    def __call__(self, *params, **kwargs):';
	$m.__track_lines__[238] = 'pyjamas.JSONService.py, line 238:\n    if isinstance(params, tuple):';
	$m.__track_lines__[239] = 'pyjamas.JSONService.py, line 239:\n    params = list(params)';
	$m.__track_lines__[240] = 'pyjamas.JSONService.py, line 240:\n    if params and hasattr(params[0], "onRemoteResponse"):';
	$m.__track_lines__[241] = 'pyjamas.JSONService.py, line 241:\n    handler = params.pop(0)';
	$m.__track_lines__[243] = 'pyjamas.JSONService.py, line 243:\n    handler = params.pop()';
	$m.__track_lines__[245] = 'pyjamas.JSONService.py, line 245:\n    handler = None';
	$m.__track_lines__[246] = 'pyjamas.JSONService.py, line 246:\n    if kwargs:';
	$m.__track_lines__[247] = 'pyjamas.JSONService.py, line 247:\n    if params:';
	$m.__track_lines__[248] = 'pyjamas.JSONService.py, line 248:\n    if not isinstance(params, dict):';
	$m.__track_lines__[249] = 'pyjamas.JSONService.py, line 249:\n    raise JSONServiceError("Cannot mix positional and keyword arguments")';
	$m.__track_lines__[250] = 'pyjamas.JSONService.py, line 250:\n    params.update(kwargs)';
	$m.__track_lines__[252] = 'pyjamas.JSONService.py, line 252:\n    params = kwargs';
	$m.__track_lines__[253] = 'pyjamas.JSONService.py, line 253:\n    if handler is not None:';
	$m.__track_lines__[254] = 'pyjamas.JSONService.py, line 254:\n    return JSONService.sendRequest(self, self.__serviceName,';
	$m.__track_lines__[257] = 'pyjamas.JSONService.py, line 257:\n    return JSONService.sendNotify(self, self.__serviceName, params)';
	$m.__track_lines__[260] = 'pyjamas.JSONService.py, line 260:\n    class JSONProxy(JSONService):';
	$m.__track_lines__[261] = 'pyjamas.JSONService.py, line 261:\n    def __init__(self, url, methods=None, headers=None):';
	$m.__track_lines__[262] = 'pyjamas.JSONService.py, line 262:\n    self._serviceURL = url';
	$m.__track_lines__[263] = 'pyjamas.JSONService.py, line 263:\n    self.methods = methods';
	$m.__track_lines__[264] = 'pyjamas.JSONService.py, line 264:\n    self.headers = {} if headers is None else headers';
	$m.__track_lines__[266] = 'pyjamas.JSONService.py, line 266:\n    JSONService.__init__(self, url, headers=self.headers)';
	$m.__track_lines__[267] = 'pyjamas.JSONService.py, line 267:\n    self._registerMethods(methods)';
	$m.__track_lines__[269] = 'pyjamas.JSONService.py, line 269:\n    def _registerMethods(self, methods):';
	$m.__track_lines__[270] = 'pyjamas.JSONService.py, line 270:\n    if methods:';
	$m.__track_lines__[271] = 'pyjamas.JSONService.py, line 271:\n    for method in methods:';
	$m.__track_lines__[272] = 'pyjamas.JSONService.py, line 272:\n    setattr(self,';
	var $pyjs_try_err;

	$pyjs.track.module='pyjamas.JSONService';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=10;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['sys'] = $p['___import___']('sys', 'pyjamas');
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=11;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['HTTPRequest'] = $p['___import___']('HTTPRequest.HTTPRequest', 'pyjamas', null, false);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=13;
	var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
	try {
		try {
			$pyjs.in_try_except += 1;
			$pyjs.track.lineno=15;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['dumps'] = $p['___import___']('json.dumps', 'pyjamas', null, false);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['loads'] = $p['___import___']('json.loads', 'pyjamas', null, false);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
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
		$pyjs.track.module='pyjamas.JSONService';
		if (($pyjs_try_err_name == $p['ImportError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['ImportError'])) {
			$pyjs.track.lineno=18;
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['dumps'] = $p['___import___']('simplejson.dumps', 'pyjamas', null, false);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
			$m['loads'] = $p['___import___']('simplejson.loads', 'pyjamas', null, false);
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
	}
	$pyjs.track.lineno=20;
	$m['JSONServiceError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.JSONService';
		$pyjs.track.lineno=21;
		$pyjs.track.lineno=20;
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('JSONServiceError', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=23;
	$m['__requestID'] = 0;
	$pyjs.track.lineno=24;
	$m['__requestIDPrefix'] = 'ID';
	$pyjs.track.lineno=25;
	$m['__lastRequestID'] = null;
	$pyjs.track.lineno=26;
	$m['nextRequestID'] = function() {
		var $add3,$add2,$add1,$add4,id;
		$pyjs.track={module:'pyjamas.JSONService',lineno:26};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.JSONService';
		$pyjs.track.lineno=26;
		$pyjs.track.lineno=32;
		$pyjs.track.lineno=33;
		$m['__requestID'] = $p['__op_add']($add1=$m['__requestID'],$add2=1);
		$pyjs.track.lineno=34;
		id = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['sprintf']('%s%s', (function(){try{try{$pyjs.in_try_except += 1;
		return $p['tuple']([$m['__requestIDPrefix'], $m['__requestID']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
		$pyjs.track.lineno=35;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool']($p['op_eq']($m['__lastRequestID'], id));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()) {
			$pyjs.track.lineno=37;
			$m['__requestIDPrefix'] = $p['__op_add']($add3=$m['__requestIDPrefix'],$add4='_');
			$pyjs.track.lineno=38;
			$m['__requestID'] = 0;
			$pyjs.track.lineno=39;
			id = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['sprintf']('%s%s', (function(){try{try{$pyjs.in_try_except += 1;
			return $p['tuple']([$m['__requestIDPrefix'], $m['__requestID']]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
		}
		$pyjs.track.lineno=40;
		$m['__lastRequestID'] = id;
		$pyjs.track.lineno=41;
		$pyjs.track.lineno=41;
		var $pyjs__ret = id;
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['nextRequestID'].__name__ = 'nextRequestID';

	$m['nextRequestID'].__bind_type__ = 0;
	$m['nextRequestID'].__args__ = [null,null];
	$pyjs.track.lineno=44;
	$m['JSONService'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.JSONService';
		$pyjs.track.lineno=45;
		$cls_definition['content_type'] = 'application/json-rpc';
		$pyjs.track.lineno=46;
		$cls_definition['accept'] = 'application/json-rpc';
		$pyjs.track.lineno=48;
		$method = $pyjs__bind_method2('__init__', function(url, handler, headers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				handler = arguments[2];
				headers = arguments[3];
			}
			if (typeof handler == 'undefined') handler=arguments.callee.__args__[4][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[5][1];

			$pyjs.track={module:'pyjamas.JSONService', lineno:48};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.JSONService';
			$pyjs.track.lineno=48;
			$pyjs.track.lineno=67;
			self.url = url;
			$pyjs.track.lineno=68;
			self.handler = handler;
			$pyjs.track.lineno=69;
			self.headers = ($p['bool']((headers !== null))? (headers) : ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()));
			$pyjs.track.lineno=70;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return self['headers']['get']('Accept');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
				$pyjs.track.lineno=71;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['getattr'](self, 'headers').__setitem__('Accept', $p['getattr'](self, 'accept'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['url'],['handler', null],['headers', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=73;
		$method = $pyjs__bind_method2('callMethod', function(method, params, handler) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				method = arguments[1];
				params = arguments[2];
				handler = arguments[3];
			}
			if (typeof handler == 'undefined') handler=arguments.callee.__args__[5][1];

			$pyjs.track={module:'pyjamas.JSONService', lineno:73};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.JSONService';
			$pyjs.track.lineno=73;
			$pyjs.track.lineno=74;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((handler === null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
				$pyjs.track.lineno=75;
				handler = $p['getattr'](self, 'handler');
			}
			$pyjs.track.lineno=77;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((handler === null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
				$pyjs.track.lineno=78;
				$pyjs.track.lineno=78;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return self['sendNotify'](method, params);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else {
				$pyjs.track.lineno=80;
				$pyjs.track.lineno=80;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return self['sendRequest'](method, params, handler);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['method'],['params'],['handler', null]]);
		$cls_definition['callMethod'] = $method;
		$pyjs.track.lineno=82;
		$method = $pyjs__bind_method2('onCompletion', function(response) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
			}

			$pyjs.track={module:'pyjamas.JSONService', lineno:82};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.JSONService';
			$pyjs.track.lineno=82;
			$pyjs.track.lineno=83;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['response']]);
		$cls_definition['onCompletion'] = $method;
		$pyjs.track.lineno=85;
		$method = $pyjs__bind_method2('sendNotify', function(method, params) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				method = arguments[1];
				params = arguments[2];
			}
			var msg,msg_data;
			$pyjs.track={module:'pyjamas.JSONService', lineno:85};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.JSONService';
			$pyjs.track.lineno=85;
			$pyjs.track.lineno=112;
			msg = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['dict']([['jsonrpc', '2.0'], ['version', '1.1'], ['method', method], ['params', params]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs.track.lineno=117;
			msg_data = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['dumps'](msg);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs.track.lineno=118;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTTPRequest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()['asyncPost']($p['getattr'](self, 'url'), msg_data, self, false, $p['getattr'](self, 'content_type'), $p['getattr'](self, 'headers'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
				$pyjs.track.lineno=121;
				$pyjs.track.lineno=121;
				var $pyjs__ret = (typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=122;
			$pyjs.track.lineno=122;
			var $pyjs__ret = 1;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['method'],['params']]);
		$cls_definition['sendNotify'] = $method;
		$pyjs.track.lineno=124;
		$method = $pyjs__bind_method2('sendRequest', function(method, params, handler) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				method = arguments[1];
				params = arguments[2];
				handler = arguments[3];
			}
			var id,msg_data,msg,request_info;
			$pyjs.track={module:'pyjamas.JSONService', lineno:124};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.JSONService';
			$pyjs.track.lineno=124;
			$pyjs.track.lineno=125;
			id = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['nextRequestID']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs.track.lineno=126;
			msg = (function(){try{try{$pyjs.in_try_except += 1;
			return $p['dict']([['jsonrpc', '2.0'], ['id', id], ['method', method], ['params', params]]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs.track.lineno=131;
			msg_data = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['dumps'](msg);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs.track.lineno=133;
			request_info = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof JSONRequestInfo == "undefined"?$m.JSONRequestInfo:JSONRequestInfo)(id, method, handler);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs.track.lineno=134;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return $m['HTTPRequest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()['asyncPost']($p['getattr'](self, 'url'), msg_data, (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof JSONResponseTextHandler == "undefined"?$m.JSONResponseTextHandler:JSONResponseTextHandler)(request_info);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})(), false, $p['getattr'](self, 'content_type'), $p['getattr'](self, 'headers'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()) {
				$pyjs.track.lineno=138;
				$pyjs.track.lineno=138;
				var $pyjs__ret = (typeof ($usub2=1)=='number'?
					-$usub2:
					$p['op_usub']($usub2));
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=139;
			$pyjs.track.lineno=139;
			var $pyjs__ret = id;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['method'],['params'],['handler']]);
		$cls_definition['sendRequest'] = $method;
		$pyjs.track.lineno=44;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('JSONService', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=142;
	$m['JSONRequestInfo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.JSONService';
		$pyjs.track.lineno=143;
		$method = $pyjs__bind_method2('__init__', function(id, method, handler) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
				method = arguments[2];
				handler = arguments[3];
			}

			$pyjs.track={module:'pyjamas.JSONService', lineno:143};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.JSONService';
			$pyjs.track.lineno=143;
			$pyjs.track.lineno=144;
			self.id = id;
			$pyjs.track.lineno=145;
			self.method = method;
			$pyjs.track.lineno=146;
			self.handler = handler;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['id'],['method'],['handler']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=142;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('JSONRequestInfo', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=148;
	$m['create_object'] = function(items) {
		var clsname,modulename,$iter1_nextval,$iter1_type,vars,k,kls,v,$iter1_iter,$add6,$iter1_array,$add5,$pyjs__trackstack_size_1,dot,$iter1_idx;
		$pyjs.track={module:'pyjamas.JSONService',lineno:148};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.JSONService';
		$pyjs.track.lineno=148;
		$pyjs.track.lineno=153;
		clsname = (function(){try{try{$pyjs.in_try_except += 1;
		return items['pop']('__jsonclass__', null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
		$pyjs.track.lineno=154;
		if ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['bool'](!$p['bool'](clsname));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
			$pyjs.track.lineno=155;
			$pyjs.track.lineno=155;
			var $pyjs__ret = items;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
		$pyjs.track.lineno=156;
		clsname = clsname.__getitem__(0);
		$pyjs.track.lineno=157;
		dot = (function(){try{try{$pyjs.in_try_except += 1;
		return clsname['rfind']('.');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
		$pyjs.track.lineno=158;
		modulename = $p['__getslice'](clsname, 0, dot);
		$pyjs.track.lineno=159;
		clsname = $p['__getslice'](clsname, $p['__op_add']($add5=dot,$add6=1), null);
		$pyjs.track.lineno=160;
		vars = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
		$pyjs.track.lineno=161;
		$pyjs.track.lineno=162;
		kls = vars.__getitem__('kls');
		$pyjs.track.lineno=163;
		vars = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
		$pyjs.track.lineno=164;
		$pyjs__trackstack_size_1=$pyjs.trackstack.length;
		$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
		return (function(){try{try{$pyjs.in_try_except += 1;
		return items['items']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
			var $tupleassign1 = (function(){try{try{$pyjs.in_try_except += 1;
		return $p['__ass_unpack']($iter1_nextval.$nextval, 2, null);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			k = $tupleassign1[0];
			v = $tupleassign1[1];
			$pyjs.track.lineno=165;
			(function(){try{try{$pyjs.in_try_except += 1;
			return vars.__setitem__((function(){try{try{$pyjs.in_try_except += 1;
			return $p['str'](k);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})(), v);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
		}
		if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
			$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
			$pyjs.track = $pyjs.trackstack.slice(-1)[0];
		}
		$pyjs.track.module='pyjamas.JSONService';
		$pyjs.track.lineno=166;
		$pyjs.track.lineno=166;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $pyjs_kwargs_call(null, kls, null, vars, [{}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['create_object'].__name__ = 'create_object';

	$m['create_object'].__bind_type__ = 0;
	$m['create_object'].__args__ = [null,null,['items']];
	$pyjs.track.lineno=168;
	$m['_decode_response'] = function(json_str) {

		$pyjs.track={module:'pyjamas.JSONService',lineno:168};$pyjs.trackstack.push($pyjs.track);
		$pyjs.track.module='pyjamas.JSONService';
		$pyjs.track.lineno=168;
		$pyjs.track.lineno=169;
		$pyjs.track.lineno=169;
		var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
		return $pyjs_kwargs_call(null, $m['loads'], null, null, [{object_hook:$m['create_object']}, json_str]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
		$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
		return $pyjs__ret;
	};
	$m['_decode_response'].__name__ = '_decode_response';

	$m['_decode_response'].__bind_type__ = 0;
	$m['_decode_response'].__args__ = [null,null,['json_str']];
	$pyjs.track.lineno=171;
	$m['JSONResponseTextHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.JSONService';
		$pyjs.track.lineno=172;
		$method = $pyjs__bind_method2('__init__', function(request) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				request = arguments[1];
			}

			$pyjs.track={module:'pyjamas.JSONService', lineno:172};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.JSONService';
			$pyjs.track.lineno=172;
			$pyjs.track.lineno=173;
			self.request = request;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['request']]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=175;
		$method = $pyjs__bind_method2('onCompletion', function(json_str) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				json_str = arguments[1];
			}
			var code,jsonrpc,$pyjs_try_err,error,message,data,response;
			$pyjs.track={module:'pyjamas.JSONService', lineno:175};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.JSONService';
			$pyjs.track.lineno=175;
			$pyjs.track.lineno=176;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				try {
					$pyjs.in_try_except += 1;
					$pyjs.track.lineno=177;
					response = (function(){try{try{$pyjs.in_try_except += 1;
					return $m['_decode_response'](json_str);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
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
				$pyjs.track.module='pyjamas.JSONService';
				if (true) {
					$pyjs.track.lineno=180;
					error = (function(){try{try{$pyjs.in_try_except += 1;
					return $pyjs_kwargs_call(null, $p['dict'], null, null, [{code:(typeof ($usub3=32700)=='number'?
						-$usub3:
						$p['op_usub']($usub3)), message:'Parse error while decoding response', data:null}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
					$pyjs.track.lineno=185;
					(function(){try{try{$pyjs.in_try_except += 1;
					return self['request']['handler']['onRemoteError'](0, error, $p['getattr'](self, 'request'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
					$pyjs.track.lineno=186;
					$pyjs.track.lineno=186;
					var $pyjs__ret = null;
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
			}
			$pyjs.track.lineno=188;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool'](response));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()) {
				$pyjs.track.lineno=189;
				error = (function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, $p['dict'], null, null, [{code:(typeof ($usub4=32603)=='number'?
					-$usub4:
					$p['op_usub']($usub4)), message:'Empty Response', data:null}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
				$pyjs.track.lineno=194;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['request']['handler']['onRemoteError'](0, error, $p['getattr'](self, 'request'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return response['get']('error');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()) {
				$pyjs.track.lineno=196;
				error = response.__getitem__('error');
				$pyjs.track.lineno=197;
				jsonrpc = (function(){try{try{$pyjs.in_try_except += 1;
				return response['get']('jsonrpc');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
				$pyjs.track.lineno=198;
				code = (function(){try{try{$pyjs.in_try_except += 1;
				return error['get']('code', 0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
				$pyjs.track.lineno=199;
				message = (function(){try{try{$pyjs.in_try_except += 1;
				return error['get']('message', error);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
				$pyjs.track.lineno=200;
				data = (function(){try{try{$pyjs.in_try_except += 1;
				return error['get']('data');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
				$pyjs.track.lineno=201;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool'](jsonrpc));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()) {
					$pyjs.track.lineno=202;
					jsonrpc = (function(){try{try{$pyjs.in_try_except += 1;
					return response['get']('version', '1.0');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
					$pyjs.track.lineno=203;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool']($p['op_eq'](jsonrpc, '1.0'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()) {
						$pyjs.track.lineno=204;
						message = error;
					}
					else {
						$pyjs.track.lineno=206;
						data = (function(){try{try{$pyjs.in_try_except += 1;
						return error['get']('error');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
					}
				}
				$pyjs.track.lineno=207;
				error = (function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, $p['dict'], null, null, [{code:code, message:message, data:data}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
				$pyjs.track.lineno=212;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['request']['handler']['onRemoteError'](0, error, $p['getattr'](self, 'request'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](response.__contains__('result'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()) {
				$pyjs.track.lineno=214;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['request']['handler']['onRemoteResponse'](response.__getitem__('result'), $p['getattr'](self, 'request'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			}
			else {
				$pyjs.track.lineno=217;
				error = (function(){try{try{$pyjs.in_try_except += 1;
				return $pyjs_kwargs_call(null, $p['dict'], null, null, [{code:(typeof ($usub5=32603)=='number'?
					-$usub5:
					$p['op_usub']($usub5)), message:'No result or error in response', data:response}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
				$pyjs.track.lineno=222;
				(function(){try{try{$pyjs.in_try_except += 1;
				return self['request']['handler']['onRemoteError'](0, error, $p['getattr'](self, 'request'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['json_str']]);
		$cls_definition['onCompletion'] = $method;
		$pyjs.track.lineno=224;
		$method = $pyjs__bind_method2('onError', function(error_str, error_code) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				error_str = arguments[1];
				error_code = arguments[2];
			}
			var error;
			$pyjs.track={module:'pyjamas.JSONService', lineno:224};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.JSONService';
			$pyjs.track.lineno=224;
			$pyjs.track.lineno=225;
			error = (function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call(null, $p['dict'], null, null, [{code:error_code, message:error_str, data:null}]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
			$pyjs.track.lineno=230;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['request']['handler']['onRemoteError'](error_code, error, $p['getattr'](self, 'request'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['error_str'],['error_code']]);
		$cls_definition['onError'] = $method;
		$pyjs.track.lineno=171;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('JSONResponseTextHandler', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=232;
	$m['ServiceProxy'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.JSONService';
		$pyjs.track.lineno=233;
		$method = $pyjs__bind_method2('__init__', function(serviceURL, serviceName, headers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				serviceURL = arguments[1];
				serviceName = arguments[2];
				headers = arguments[3];
			}
			if (typeof serviceName == 'undefined') serviceName=arguments.callee.__args__[4][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[5][1];

			$pyjs.track={module:'pyjamas.JSONService', lineno:233};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.JSONService';
			$pyjs.track.lineno=233;
			$pyjs.track.lineno=234;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call($m['JSONService'], '__init__', null, null, [{headers:headers}, self, serviceURL]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
			$pyjs.track.lineno=235;
			self.__serviceName = serviceName;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['serviceURL'],['serviceName', null],['headers', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=237;
		$method = $pyjs__bind_method2('__call__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var params = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') params.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var params = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') params.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var $and1,$and3,$and4,handler,$and2;
			$pyjs.track={module:'pyjamas.JSONService', lineno:237};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.JSONService';
			$pyjs.track.lineno=237;
			$pyjs.track.lineno=238;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['isinstance'](params, $p['tuple']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()) {
				$pyjs.track.lineno=239;
				params = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['list'](params);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
			}
			$pyjs.track.lineno=240;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and1=params)?(function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](params.__getitem__(0), 'onRemoteResponse');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})():$and1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
				$pyjs.track.lineno=241;
				handler = (function(){try{try{$pyjs.in_try_except += 1;
				return params['pop'](0);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and3=params)?(function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](params.__getitem__((typeof ($usub6=1)=='number'?
				-$usub6:
				$p['op_usub']($usub6))), 'onRemoteResponse');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})():$and3));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})()) {
				$pyjs.track.lineno=243;
				handler = (function(){try{try{$pyjs.in_try_except += 1;
				return params['pop']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
			}
			else {
				$pyjs.track.lineno=245;
				handler = null;
			}
			$pyjs.track.lineno=246;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](kwargs);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
				$pyjs.track.lineno=247;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](params);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})()) {
					$pyjs.track.lineno=248;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
					return $p['isinstance'](params, $p['dict']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()) {
						$pyjs.track.lineno=249;
						$pyjs.__active_exception_stack__ = null;
						throw ((function(){try{try{$pyjs.in_try_except += 1;
						return $m['JSONServiceError']('Cannot mix positional and keyword arguments');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})());
					}
					$pyjs.track.lineno=250;
					(function(){try{try{$pyjs.in_try_except += 1;
					return params['update'](kwargs);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
				}
				else {
					$pyjs.track.lineno=252;
					params = kwargs;
				}
			}
			$pyjs.track.lineno=253;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((handler !== null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})()) {
				$pyjs.track.lineno=254;
				$pyjs.track.lineno=254;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['JSONService']['sendRequest'](self, $p['getattr'](self, '__serviceName'), params, handler);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else {
				$pyjs.track.lineno=257;
				$pyjs.track.lineno=257;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $m['JSONService']['sendNotify'](self, $p['getattr'](self, '__serviceName'), params);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, ['params',['kwargs'],['self']]);
		$cls_definition['__call__'] = $method;
		$pyjs.track.lineno=232;
		var $bases = new Array($m['JSONService']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ServiceProxy', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=260;
	$m['JSONProxy'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.JSONService';
		$pyjs.track.lineno=261;
		$method = $pyjs__bind_method2('__init__', function(url, methods, headers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				methods = arguments[2];
				headers = arguments[3];
			}
			if (typeof methods == 'undefined') methods=arguments.callee.__args__[4][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[5][1];

			$pyjs.track={module:'pyjamas.JSONService', lineno:261};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.JSONService';
			$pyjs.track.lineno=261;
			$pyjs.track.lineno=262;
			self._serviceURL = url;
			$pyjs.track.lineno=263;
			self.methods = methods;
			$pyjs.track.lineno=264;
			self.headers = ($p['bool']((headers === null))? ((function(){try{try{$pyjs.in_try_except += 1;
			return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})()) : (headers));
			$pyjs.track.lineno=266;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $pyjs_kwargs_call($m['JSONService'], '__init__', null, null, [{headers:$p['getattr'](self, 'headers')}, self, url]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
			$pyjs.track.lineno=267;
			(function(){try{try{$pyjs.in_try_except += 1;
			return self['_registerMethods'](methods);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['url'],['methods', null],['headers', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=269;
		$method = $pyjs__bind_method2('_registerMethods', function(methods) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				methods = arguments[1];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,$pyjs__trackstack_size_1,method,$iter2_array;
			$pyjs.track={module:'pyjamas.JSONService', lineno:269};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.JSONService';
			$pyjs.track.lineno=269;
			$pyjs.track.lineno=270;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](methods);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()) {
				$pyjs.track.lineno=271;
				$pyjs__trackstack_size_1=$pyjs.trackstack.length;
				$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
				return methods;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
					method = $iter2_nextval.$nextval;
					$pyjs.track.lineno=272;
					(function(){try{try{$pyjs.in_try_except += 1;
					return $p['setattr'](self, method, (function(){try{try{$pyjs.in_try_except += 1;
					return $p['getattr']((function(){try{try{$pyjs.in_try_except += 1;
					return $pyjs_kwargs_call(null, $m['ServiceProxy'], null, null, [{headers:$p['getattr'](self, 'headers')}, $p['getattr'](self, '_serviceURL'), method]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})(), '__call__');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
				}
				if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
					$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
					$pyjs.track = $pyjs.trackstack.slice(-1)[0];
				}
				$pyjs.track.module='pyjamas.JSONService';
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['methods']]);
		$cls_definition['_registerMethods'] = $method;
		$pyjs.track.lineno=260;
		var $bases = new Array($m['JSONService']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('JSONProxy', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.JSONService */


/* end module: pyjamas.JSONService */


/*
PYJS_DEPS: ['sys', 'HTTPRequest.HTTPRequest', 'HTTPRequest', 'json.dumps', 'json', 'json.loads', 'simplejson.dumps', 'simplejson', 'simplejson.loads']
*/
