/* start module: pyjamas.HTTPRequest */
$pyjs.loaded_modules['pyjamas.HTTPRequest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.HTTPRequest'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.HTTPRequest'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) $p['___import___']('pyjamas', null);
	var $m = $pyjs.loaded_modules["pyjamas.HTTPRequest"];
	$m.__repr__ = function() { return "<module: pyjamas.HTTPRequest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.HTTPRequest';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs.loaded_modules['pyjamas']['HTTPRequest'] = $pyjs.loaded_modules['pyjamas.HTTPRequest'];
	$m.__track_lines__[1] = 'pyjamas.HTTPRequest.py, line 1:\n    # This is the gtk-dependent HTTPRequest module.';
	$m.__track_lines__[4] = 'pyjamas.HTTPRequest.py, line 4:\n    import pyjd';
	$m.__track_lines__[5] = 'pyjamas.HTTPRequest.py, line 5:\n    import pygwt';
	$m.__track_lines__[6] = 'pyjamas.HTTPRequest.py, line 6:\n    from __pyjamas__ import JS';
	$m.__track_lines__[7] = 'pyjamas.HTTPRequest.py, line 7:\n    if pyjd.is_desktop:';
	$m.__track_lines__[8] = 'pyjamas.HTTPRequest.py, line 8:\n    from __pyjamas__ import get_main_frame';
	$m.__track_lines__[9] = 'pyjamas.HTTPRequest.py, line 9:\n    import sys # needed by __browser__/pyjamas/HTTPRequest.py';
	$m.__track_lines__[10] = 'pyjamas.HTTPRequest.py, line 10:\n    handlers = {}';
	$m.__track_lines__[12] = 'pyjamas.HTTPRequest.py, line 12:\n    class XULrunnerHackCallback(object):';
	$m.__track_lines__[13] = 'pyjamas.HTTPRequest.py, line 13:\n    def __init__(self, htr, mode, user, pwd, url, postData=None, handler=None,';
	$m.__track_lines__[15] = 'pyjamas.HTTPRequest.py, line 15:\n    pass';
	$m.__track_lines__[17] = 'pyjamas.HTTPRequest.py, line 17:\n    def callback(self):';
	$m.__track_lines__[18] = 'pyjamas.HTTPRequest.py, line 18:\n    return self.htr.asyncImpl(self.mode, self.user, self.pwd, self.url,';
	$m.__track_lines__[23] = 'pyjamas.HTTPRequest.py, line 23:\n    class HTTPRequest(object):';
	$m.__track_lines__[24] = 'pyjamas.HTTPRequest.py, line 24:\n    def asyncGet(self, url, handler, returnxml=False,';
	$m.__track_lines__[26] = 'pyjamas.HTTPRequest.py, line 26:\n    postData = None';
	$m.__track_lines__[27] = "pyjamas.HTTPRequest.py, line 27:\n    if not hasattr(handler, 'onCompletion'):";
	$m.__track_lines__[28] = 'pyjamas.HTTPRequest.py, line 28:\n    raise RuntimeError("Invalid call to asyncGet: handler is not a valid request handler")';
	$m.__track_lines__[29] = "pyjamas.HTTPRequest.py, line 29:\n    return self.asyncImpl('GET', user, pwd, url, postData, handler,";
	$m.__track_lines__[32] = 'pyjamas.HTTPRequest.py, line 32:\n    def asyncPost(self, url, postData, handler, returnxml=False,';
	$m.__track_lines__[34] = "pyjamas.HTTPRequest.py, line 34:\n    if not hasattr(handler, 'onCompletion'):";
	$m.__track_lines__[35] = 'pyjamas.HTTPRequest.py, line 35:\n    raise RuntimeError("Invalid call to asyncPost: handler is not a valid request handler")';
	$m.__track_lines__[36] = "pyjamas.HTTPRequest.py, line 36:\n    return self.asyncImpl('POST', user, pwd, url, postData, handler,";
	$m.__track_lines__[39] = 'pyjamas.HTTPRequest.py, line 39:\n    def asyncDelete(self, url, handler, returnxml=False,';
	$m.__track_lines__[41] = 'pyjamas.HTTPRequest.py, line 41:\n    postData = None';
	$m.__track_lines__[42] = "pyjamas.HTTPRequest.py, line 42:\n    if not hasattr(handler, 'onCompletion'):";
	$m.__track_lines__[43] = 'pyjamas.HTTPRequest.py, line 43:\n    raise RuntimeError("Invalid call to asyncDelete: handler is not a valid request handler")';
	$m.__track_lines__[44] = "pyjamas.HTTPRequest.py, line 44:\n    return self.asyncImpl('DELETE', user, pwd, url, postData, handler,";
	$m.__track_lines__[47] = 'pyjamas.HTTPRequest.py, line 47:\n    def asyncPut(self, url, postData, handler, returnxml=False,';
	$m.__track_lines__[49] = "pyjamas.HTTPRequest.py, line 49:\n    if not hasattr(handler, 'onCompletion'):";
	$m.__track_lines__[50] = 'pyjamas.HTTPRequest.py, line 50:\n    raise RuntimeError("Invalid call to asyncPut: handler is not a valid request handler")';
	$m.__track_lines__[51] = "pyjamas.HTTPRequest.py, line 51:\n    return self.asyncImpl('PUT', user, pwd, url, postData, handler,";
	$m.__track_lines__[54] = 'pyjamas.HTTPRequest.py, line 54:\n    def createXmlHTTPRequest(self):';
	$m.__track_lines__[55] = 'pyjamas.HTTPRequest.py, line 55:\n    return self.doCreateXmlHTTPRequest()';
	$m.__track_lines__[57] = 'pyjamas.HTTPRequest.py, line 57:\n    def doCreateXmlHTTPRequest(self):';
	$m.__track_lines__[58] = 'pyjamas.HTTPRequest.py, line 58:\n    return get_main_frame().getXmlHttpRequest()';
	$m.__track_lines__[60] = 'pyjamas.HTTPRequest.py, line 60:\n    def onLoad(self, sender, event, ignorearg):';
	$m.__track_lines__[61] = 'pyjamas.HTTPRequest.py, line 61:\n    xmlHttp = event.target';
	$m.__track_lines__[62] = 'pyjamas.HTTPRequest.py, line 62:\n    localHandler = handlers.get(xmlHttp)';
	$m.__track_lines__[63] = 'pyjamas.HTTPRequest.py, line 63:\n    del handlers[xmlHttp]';
	$m.__track_lines__[64] = 'pyjamas.HTTPRequest.py, line 64:\n    responseText = xmlHttp.responseText';
	$m.__track_lines__[65] = 'pyjamas.HTTPRequest.py, line 65:\n    status = xmlHttp.status';
	$m.__track_lines__[66] = 'pyjamas.HTTPRequest.py, line 66:\n    handler = None';
	$m.__track_lines__[67] = 'pyjamas.HTTPRequest.py, line 67:\n    xmlHttp = None';
	$m.__track_lines__[69] = 'pyjamas.HTTPRequest.py, line 69:\n    if status == 0:';
	$m.__track_lines__[70] = 'pyjamas.HTTPRequest.py, line 70:\n    print "HACK ALERT! webkit wrapper returns 0 not 200!"';
	$m.__track_lines__[71] = 'pyjamas.HTTPRequest.py, line 71:\n    if status == 200 or status == 0:';
	$m.__track_lines__[72] = 'pyjamas.HTTPRequest.py, line 72:\n    localHandler.onCompletion(responseText)';
	$m.__track_lines__[74] = 'pyjamas.HTTPRequest.py, line 74:\n    localHandler.onError(responseText, status)';
	$m.__track_lines__[76] = 'pyjamas.HTTPRequest.py, line 76:\n    def onReadyStateChange(self, xmlHttp, event, ignorearg):';
	$m.__track_lines__[77] = 'pyjamas.HTTPRequest.py, line 77:\n    try:';
	$m.__track_lines__[78] = 'pyjamas.HTTPRequest.py, line 78:\n    xmlHttp = get_main_frame().gobject_wrap(xmlHttp) # HACK!';
	$m.__track_lines__[80] = 'pyjamas.HTTPRequest.py, line 80:\n    pass # hula / XUL';
	$m.__track_lines__[82] = 'pyjamas.HTTPRequest.py, line 82:\n    if xmlHttp.readyState != 4:';
	$m.__track_lines__[83] = 'pyjamas.HTTPRequest.py, line 83:\n    return';
	$m.__track_lines__[85] = 'pyjamas.HTTPRequest.py, line 85:\n    localHandler = handlers.get(xmlHttp)';
	$m.__track_lines__[86] = 'pyjamas.HTTPRequest.py, line 86:\n    del handlers[xmlHttp]';
	$m.__track_lines__[87] = 'pyjamas.HTTPRequest.py, line 87:\n    responseText = xmlHttp.responseText';
	$m.__track_lines__[89] = 'pyjamas.HTTPRequest.py, line 89:\n    status = xmlHttp.status';
	$m.__track_lines__[90] = 'pyjamas.HTTPRequest.py, line 90:\n    handler = None';
	$m.__track_lines__[91] = 'pyjamas.HTTPRequest.py, line 91:\n    xmlHttp = None';
	$m.__track_lines__[95] = 'pyjamas.HTTPRequest.py, line 95:\n    if status == 0:';
	$m.__track_lines__[96] = 'pyjamas.HTTPRequest.py, line 96:\n    print "HACK ALERT! webkit wrapper returns 0 not 200!"';
	$m.__track_lines__[97] = 'pyjamas.HTTPRequest.py, line 97:\n    if status == 200 or status == 0:';
	$m.__track_lines__[98] = 'pyjamas.HTTPRequest.py, line 98:\n    localHandler.onCompletion(responseText)';
	$m.__track_lines__[100] = 'pyjamas.HTTPRequest.py, line 100:\n    localHandler.onError(responseText, status)';
	$m.__track_lines__[102] = 'pyjamas.HTTPRequest.py, line 102:\n    def _convertUrlToAbsolute(self, url):';
	$m.__track_lines__[104] = 'pyjamas.HTTPRequest.py, line 104:\n    uri = pygwt.getModuleBaseURL()';
	$m.__track_lines__[105] = "pyjamas.HTTPRequest.py, line 105:\n    if url[0] == '/':";
	$m.__track_lines__[107] = "pyjamas.HTTPRequest.py, line 107:\n    sep = uri.find('://')";
	$m.__track_lines__[108] = "pyjamas.HTTPRequest.py, line 108:\n    if not uri.startswith('file://'):";
	$m.__track_lines__[110] = "pyjamas.HTTPRequest.py, line 110:\n    slash = uri.find('/', sep+3)";
	$m.__track_lines__[111] = 'pyjamas.HTTPRequest.py, line 111:\n    if slash > 0:';
	$m.__track_lines__[112] = 'pyjamas.HTTPRequest.py, line 112:\n    uri = uri[:slash]';
	$m.__track_lines__[114] = 'pyjamas.HTTPRequest.py, line 114:\n    return "%s%s" % (uri, url)';
	$m.__track_lines__[117] = "pyjamas.HTTPRequest.py, line 117:\n    if url[:7] != 'file://' and url[:7] != 'http://' and \\";
	$m.__track_lines__[119] = "pyjamas.HTTPRequest.py, line 119:\n    slash = uri.rfind('/')";
	$m.__track_lines__[120] = 'pyjamas.HTTPRequest.py, line 120:\n    return uri[:slash+1] + url';
	$m.__track_lines__[122] = 'pyjamas.HTTPRequest.py, line 122:\n    return url';
	$m.__track_lines__[124] = 'pyjamas.HTTPRequest.py, line 124:\n    def asyncImpl(self, method, user, pwd, url, postData, handler,';
	$m.__track_lines__[126] = 'pyjamas.HTTPRequest.py, line 126:\n    if headers is None:';
	$m.__track_lines__[127] = 'pyjamas.HTTPRequest.py, line 127:\n    headers = {}';
	$m.__track_lines__[128] = 'pyjamas.HTTPRequest.py, line 128:\n    if user and pwd and not "Authorization" in headers:';
	$m.__track_lines__[129] = 'pyjamas.HTTPRequest.py, line 129:\n    import base64';
	$m.__track_lines__[130] = 'pyjamas.HTTPRequest.py, line 130:\n    headers["Authorization"] = \'Basic %s\' % (base64.b64encode(\'%s:%s\' % (user, pwd)))';
	$m.__track_lines__[132] = 'pyjamas.HTTPRequest.py, line 132:\n    mf = get_main_frame()';
	$m.__track_lines__[133] = 'pyjamas.HTTPRequest.py, line 133:\n    if content_type is not None:';
	$m.__track_lines__[134] = 'pyjamas.HTTPRequest.py, line 134:\n    headers["Content-Type"] = content_type';
	$m.__track_lines__[135] = 'pyjamas.HTTPRequest.py, line 135:\n    if not "Content-Type" in headers:';
	$m.__track_lines__[136] = 'pyjamas.HTTPRequest.py, line 136:\n    if returnxml:';
	$m.__track_lines__[137] = 'pyjamas.HTTPRequest.py, line 137:\n    headers["Content-Type"] = "application/xml; charset=utf-8"';
	$m.__track_lines__[139] = 'pyjamas.HTTPRequest.py, line 139:\n    headers["Content-Type"] = "text/plain; charset=utf-8"';
	$m.__track_lines__[145] = 'pyjamas.HTTPRequest.py, line 145:\n    xmlHttp = self.doCreateXmlHTTPRequest()';
	$m.__track_lines__[146] = 'pyjamas.HTTPRequest.py, line 146:\n    url = self._convertUrlToAbsolute(url)';
	$m.__track_lines__[148] = "pyjamas.HTTPRequest.py, line 148:\n    if mf.platform == 'webkit':";
	$m.__track_lines__[150] = 'pyjamas.HTTPRequest.py, line 149:\n    mf._addXMLHttpRequestEventListener( ... xmlHttp, "readystatechange", self.onReadyStateChange,';
	$m.__track_lines__[154] = 'pyjamas.HTTPRequest.py, line 153:\n    mf._addXMLHttpRequestEventListener( ... xmlHttp, "onreadystatechange", self.onReadyStateChange,';
	$m.__track_lines__[158] = 'pyjamas.HTTPRequest.py, line 157:\n    mf._addXMLHttpRequestEventListener( ... xmlHttp, "load", self.onLoad,';
	$m.__track_lines__[163] = "pyjamas.HTTPRequest.py, line 163:\n    if mf.platform == 'webkit' or mf.platform == 'mshtml':";
	$m.__track_lines__[164] = "pyjamas.HTTPRequest.py, line 164:\n    xmlHttp.open(method, url, True, '', '')";
	$m.__track_lines__[168] = 'pyjamas.HTTPRequest.py, line 168:\n    res = xmlHttp.open(method, url)';
	$m.__track_lines__[170] = 'pyjamas.HTTPRequest.py, line 170:\n    for h in headers:';
	$m.__track_lines__[171] = 'pyjamas.HTTPRequest.py, line 171:\n    if isinstance(headers[h], basestring):';
	$m.__track_lines__[172] = 'pyjamas.HTTPRequest.py, line 172:\n    xmlHttp.setRequestHeader(h, headers[h])';
	$m.__track_lines__[174] = "pyjamas.HTTPRequest.py, line 174:\n    hval = ';'.join([str(i) for i in headers[h]])";
	$m.__track_lines__[175] = 'pyjamas.HTTPRequest.py, line 175:\n    xmlHttp.setRequestHeader(h, hval)';
	$m.__track_lines__[182] = 'pyjamas.HTTPRequest.py, line 182:\n    handlers[xmlHttp] = handler';
	$m.__track_lines__[183] = "pyjamas.HTTPRequest.py, line 183:\n    xmlHttp.send(postData or '')";
	$m.__track_lines__[185] = 'pyjamas.HTTPRequest.py, line 185:\n    return xmlHttp';
	$m.__track_lines__[189] = 'pyjamas.HTTPRequest.py, line 189:\n    handler = None';
	$m.__track_lines__[190] = 'pyjamas.HTTPRequest.py, line 190:\n    xmlHttp = None';
	$m.__track_lines__[191] = 'pyjamas.HTTPRequest.py, line 191:\n    localHandler.onError(str(e))';
	$m.__track_lines__[192] = 'pyjamas.HTTPRequest.py, line 192:\n    return None';


	$pyjs.track.module='pyjamas.HTTPRequest';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=4;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas');
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=5;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['pygwt'] = $p['___import___']('pygwt', 'pyjamas');
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=6;
	$pyjs.track.lineno=7;
	if ((function(){try{try{$pyjs.in_try_except += 1;
		return $p['bool']($p['getattr']($m['pyjd'], 'is_desktop'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) {
		$pyjs.track.lineno=8;
	}
	$pyjs.track.lineno=9;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['sys'] = $p['___import___']('sys', 'pyjamas');
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=10;
	$m['handlers'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
	$pyjs.track.lineno=12;
	$m['XULrunnerHackCallback'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.HTTPRequest';
		$pyjs.track.lineno=13;
		$method = $pyjs__bind_method2('__init__', function(htr, mode, user, pwd, url, postData, handler, return_xml, content_type, headers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				htr = arguments[1];
				mode = arguments[2];
				user = arguments[3];
				pwd = arguments[4];
				url = arguments[5];
				postData = arguments[6];
				handler = arguments[7];
				return_xml = arguments[8];
				content_type = arguments[9];
				headers = arguments[10];
			}
			if (typeof postData == 'undefined') postData=arguments.callee.__args__[8][1];
			if (typeof handler == 'undefined') handler=arguments.callee.__args__[9][1];
			if (typeof return_xml == 'undefined') return_xml=arguments.callee.__args__[10][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[11][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[12][1];

			$pyjs.track={module:'pyjamas.HTTPRequest', lineno:13};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.HTTPRequest';
			$pyjs.track.lineno=13;
			$pyjs.track.lineno=15;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['htr'],['mode'],['user'],['pwd'],['url'],['postData', null],['handler', null],['return_xml', false],['content_type', null],['headers', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs.track.lineno=17;
		$method = $pyjs__bind_method2('callback', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.HTTPRequest', lineno:17};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.HTTPRequest';
			$pyjs.track.lineno=17;
			$pyjs.track.lineno=18;
			$pyjs.track.lineno=18;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return self['htr']['asyncImpl']($p['getattr'](self, 'mode'), $p['getattr'](self, 'user'), $p['getattr'](self, 'pwd'), $p['getattr'](self, 'url'), $p['getattr'](self, 'postData'), $p['getattr'](self, 'handler'), $p['getattr'](self, 'return_xml'), $p['getattr'](self, 'content_type'), $p['getattr'](self, 'headers'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['callback'] = $method;
		$pyjs.track.lineno=12;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('XULrunnerHackCallback', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=23;
	$m['HTTPRequest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjamas.HTTPRequest';
		$pyjs.track.lineno=24;
		$method = $pyjs__bind_method2('asyncGet', function(url, handler, returnxml, content_type, headers, user, pwd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				handler = arguments[2];
				returnxml = arguments[3];
				content_type = arguments[4];
				headers = arguments[5];
				user = arguments[6];
				pwd = arguments[7];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[5][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[6][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[7][1];
			if (typeof user == 'undefined') user=arguments.callee.__args__[8][1];
			if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[9][1];
			var postData;
			$pyjs.track={module:'pyjamas.HTTPRequest', lineno:24};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.HTTPRequest';
			$pyjs.track.lineno=24;
			$pyjs.track.lineno=26;
			postData = null;
			$pyjs.track.lineno=27;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](handler, 'onCompletion');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
				$pyjs.track.lineno=28;
				$pyjs.__active_exception_stack__ = null;
				throw ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['RuntimeError']('Invalid call to asyncGet: handler is not a valid request handler');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})());
			}
			$pyjs.track.lineno=29;
			$pyjs.track.lineno=29;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return self['asyncImpl']('GET', user, pwd, url, postData, handler, returnxml, content_type, headers);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['url'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
		$cls_definition['asyncGet'] = $method;
		$pyjs.track.lineno=32;
		$method = $pyjs__bind_method2('asyncPost', function(url, postData, handler, returnxml, content_type, headers, user, pwd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				postData = arguments[2];
				handler = arguments[3];
				returnxml = arguments[4];
				content_type = arguments[5];
				headers = arguments[6];
				user = arguments[7];
				pwd = arguments[8];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[6][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[7][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[8][1];
			if (typeof user == 'undefined') user=arguments.callee.__args__[9][1];
			if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[10][1];

			$pyjs.track={module:'pyjamas.HTTPRequest', lineno:32};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.HTTPRequest';
			$pyjs.track.lineno=32;
			$pyjs.track.lineno=34;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](handler, 'onCompletion');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
				$pyjs.track.lineno=35;
				$pyjs.__active_exception_stack__ = null;
				throw ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['RuntimeError']('Invalid call to asyncPost: handler is not a valid request handler');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})());
			}
			$pyjs.track.lineno=36;
			$pyjs.track.lineno=36;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return self['asyncImpl']('POST', user, pwd, url, postData, handler, returnxml, content_type, headers);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['url'],['postData'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
		$cls_definition['asyncPost'] = $method;
		$pyjs.track.lineno=39;
		$method = $pyjs__bind_method2('asyncDelete', function(url, handler, returnxml, content_type, headers, user, pwd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				handler = arguments[2];
				returnxml = arguments[3];
				content_type = arguments[4];
				headers = arguments[5];
				user = arguments[6];
				pwd = arguments[7];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[5][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[6][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[7][1];
			if (typeof user == 'undefined') user=arguments.callee.__args__[8][1];
			if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[9][1];
			var postData;
			$pyjs.track={module:'pyjamas.HTTPRequest', lineno:39};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.HTTPRequest';
			$pyjs.track.lineno=39;
			$pyjs.track.lineno=41;
			postData = null;
			$pyjs.track.lineno=42;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](handler, 'onCompletion');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
				$pyjs.track.lineno=43;
				$pyjs.__active_exception_stack__ = null;
				throw ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['RuntimeError']('Invalid call to asyncDelete: handler is not a valid request handler');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})());
			}
			$pyjs.track.lineno=44;
			$pyjs.track.lineno=44;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return self['asyncImpl']('DELETE', user, pwd, url, postData, handler, returnxml, content_type, headers);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['url'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
		$cls_definition['asyncDelete'] = $method;
		$pyjs.track.lineno=47;
		$method = $pyjs__bind_method2('asyncPut', function(url, postData, handler, returnxml, content_type, headers, user, pwd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				postData = arguments[2];
				handler = arguments[3];
				returnxml = arguments[4];
				content_type = arguments[5];
				headers = arguments[6];
				user = arguments[7];
				pwd = arguments[8];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[6][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[7][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[8][1];
			if (typeof user == 'undefined') user=arguments.callee.__args__[9][1];
			if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[10][1];

			$pyjs.track={module:'pyjamas.HTTPRequest', lineno:47};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.HTTPRequest';
			$pyjs.track.lineno=47;
			$pyjs.track.lineno=49;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['hasattr'](handler, 'onCompletion');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
				$pyjs.track.lineno=50;
				$pyjs.__active_exception_stack__ = null;
				throw ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['RuntimeError']('Invalid call to asyncPut: handler is not a valid request handler');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
			}
			$pyjs.track.lineno=51;
			$pyjs.track.lineno=51;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return self['asyncImpl']('PUT', user, pwd, url, postData, handler, returnxml, content_type, headers);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['url'],['postData'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
		$cls_definition['asyncPut'] = $method;
		$pyjs.track.lineno=54;
		$method = $pyjs__bind_method2('createXmlHTTPRequest', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.HTTPRequest', lineno:54};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.HTTPRequest';
			$pyjs.track.lineno=54;
			$pyjs.track.lineno=55;
			$pyjs.track.lineno=55;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return self['doCreateXmlHTTPRequest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['createXmlHTTPRequest'] = $method;
		$pyjs.track.lineno=57;
		$method = $pyjs__bind_method2('doCreateXmlHTTPRequest', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs.track={module:'pyjamas.HTTPRequest', lineno:57};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.HTTPRequest';
			$pyjs.track.lineno=57;
			$pyjs.track.lineno=58;
			$pyjs.track.lineno=58;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return (function(){try{try{$pyjs.in_try_except += 1;
			return $m.get_main_frame();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()['getXmlHttpRequest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doCreateXmlHTTPRequest'] = $method;
		$pyjs.track.lineno=60;
		$method = $pyjs__bind_method2('onLoad', function(sender, event, ignorearg) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				event = arguments[2];
				ignorearg = arguments[3];
			}
			var status,localHandler,xmlHttp,$or2,handler,responseText,$or1;
			$pyjs.track={module:'pyjamas.HTTPRequest', lineno:60};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.HTTPRequest';
			$pyjs.track.lineno=60;
			$pyjs.track.lineno=61;
			xmlHttp = $p['getattr'](event, 'target');
			$pyjs.track.lineno=62;
			localHandler = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['handlers']['get'](xmlHttp);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs.track.lineno=63;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['handlers'].__delitem__(xmlHttp);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs.track.lineno=64;
			responseText = $p['getattr'](xmlHttp, 'responseText');
			$pyjs.track.lineno=65;
			status = $p['getattr'](xmlHttp, 'status');
			$pyjs.track.lineno=66;
			handler = null;
			$pyjs.track.lineno=67;
			xmlHttp = null;
			$pyjs.track.lineno=69;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](status, 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()) {
				$pyjs.track.lineno=70;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc'](['HACK ALERT! webkit wrapper returns 0 not 200!'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			}
			$pyjs.track.lineno=71;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($or1=$p['op_eq'](status, 200))?$or1:$p['op_eq'](status, 0)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()) {
				$pyjs.track.lineno=72;
				(function(){try{try{$pyjs.in_try_except += 1;
				return localHandler['onCompletion'](responseText);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			}
			else {
				$pyjs.track.lineno=74;
				(function(){try{try{$pyjs.in_try_except += 1;
				return localHandler['onError'](responseText, status);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['sender'],['event'],['ignorearg']]);
		$cls_definition['onLoad'] = $method;
		$pyjs.track.lineno=76;
		$method = $pyjs__bind_method2('onReadyStateChange', function(xmlHttp, event, ignorearg) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				xmlHttp = arguments[1];
				event = arguments[2];
				ignorearg = arguments[3];
			}
			var status,$or4,localHandler,$or3,handler,$pyjs_try_err,responseText;
			$pyjs.track={module:'pyjamas.HTTPRequest', lineno:76};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.HTTPRequest';
			$pyjs.track.lineno=76;
			$pyjs.track.lineno=77;
			var $pyjs__trackstack_size_1 = $pyjs.trackstack.length;
			try {
				try {
					$pyjs.in_try_except += 1;
					$pyjs.track.lineno=78;
					xmlHttp = (function(){try{try{$pyjs.in_try_except += 1;
					return (function(){try{try{$pyjs.in_try_except += 1;
					return $m.get_main_frame();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()['gobject_wrap'](xmlHttp);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
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
				$pyjs.track.module='pyjamas.HTTPRequest';
				if (true) {
					$pyjs.track.lineno=80;
				}
			}
			$pyjs.track.lineno=82;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['op_eq']($p['getattr'](xmlHttp, 'readyState'), 4));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()) {
				$pyjs.track.lineno=83;
				$pyjs.track.lineno=83;
				var $pyjs__ret = null;
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			$pyjs.track.lineno=85;
			localHandler = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['handlers']['get'](xmlHttp);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs.track.lineno=86;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['handlers'].__delitem__(xmlHttp);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs.track.lineno=87;
			responseText = $p['getattr'](xmlHttp, 'responseText');
			$pyjs.track.lineno=89;
			status = $p['getattr'](xmlHttp, 'status');
			$pyjs.track.lineno=90;
			handler = null;
			$pyjs.track.lineno=91;
			xmlHttp = null;
			$pyjs.track.lineno=95;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](status, 0));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
				$pyjs.track.lineno=96;
				(function(){try{try{$pyjs.in_try_except += 1;
				return $p['printFunc'](['HACK ALERT! webkit wrapper returns 0 not 200!'], 1);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			}
			$pyjs.track.lineno=97;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($or3=$p['op_eq'](status, 200))?$or3:$p['op_eq'](status, 0)));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()) {
				$pyjs.track.lineno=98;
				(function(){try{try{$pyjs.in_try_except += 1;
				return localHandler['onCompletion'](responseText);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			}
			else {
				$pyjs.track.lineno=100;
				(function(){try{try{$pyjs.in_try_except += 1;
				return localHandler['onError'](responseText, status);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			}
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return null;
		}
	, 1, [null,null,['self'],['xmlHttp'],['event'],['ignorearg']]);
		$cls_definition['onReadyStateChange'] = $method;
		$pyjs.track.lineno=102;
		$method = $pyjs__bind_method2('_convertUrlToAbsolute', function(url) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
			}
			var $add4,sep,$and1,$and3,uri,$add2,$add3,$add1,$add6,slash,$add5,$and2;
			$pyjs.track={module:'pyjamas.HTTPRequest', lineno:102};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.HTTPRequest';
			$pyjs.track.lineno=102;
			$pyjs.track.lineno=104;
			uri = (function(){try{try{$pyjs.in_try_except += 1;
			return $m['pygwt']['getModuleBaseURL']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
			$pyjs.track.lineno=105;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq'](url.__getitem__(0), '/'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()) {
				$pyjs.track.lineno=107;
				sep = (function(){try{try{$pyjs.in_try_except += 1;
				return uri['find']('://');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
				$pyjs.track.lineno=108;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return uri['startswith']('file://');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
					$pyjs.track.lineno=110;
					slash = (function(){try{try{$pyjs.in_try_except += 1;
					return uri['find']('/', $p['__op_add']($add1=sep,$add2=3));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
					$pyjs.track.lineno=111;
					if ((function(){try{try{$pyjs.in_try_except += 1;
						return $p['bool'](($p['cmp'](slash, 0) == 1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()) {
						$pyjs.track.lineno=112;
						uri = $p['__getslice'](uri, 0, slash);
					}
				}
				$pyjs.track.lineno=114;
				$pyjs.track.lineno=114;
				var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['sprintf']('%s%s', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple']([uri, url]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				return $pyjs__ret;
			}
			else {
				$pyjs.track.lineno=117;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](($p['bool']($and1=!$p['op_eq']($p['__getslice'](url, 0, 7), 'file://'))?($p['bool']($and2=!$p['op_eq']($p['__getslice'](url, 0, 7), 'http://'))?!$p['op_eq']($p['__getslice'](url, 0, 8), 'https://'):$and2):$and1));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()) {
					$pyjs.track.lineno=119;
					slash = (function(){try{try{$pyjs.in_try_except += 1;
					return uri['rfind']('/');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
					$pyjs.track.lineno=120;
					$pyjs.track.lineno=120;
					var $pyjs__ret = $p['__op_add']($add5=$p['__getslice'](uri, 0, $p['__op_add']($add3=slash,$add4=1)),$add6=url);
					$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
					return $pyjs__ret;
				}
			}
			$pyjs.track.lineno=122;
			$pyjs.track.lineno=122;
			var $pyjs__ret = url;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['url']]);
		$cls_definition['_convertUrlToAbsolute'] = $method;
		$pyjs.track.lineno=124;
		$method = $pyjs__bind_method2('asyncImpl', function(method, user, pwd, url, postData, handler, returnxml, content_type, headers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				method = arguments[1];
				user = arguments[2];
				pwd = arguments[3];
				url = arguments[4];
				postData = arguments[5];
				handler = arguments[6];
				returnxml = arguments[7];
				content_type = arguments[8];
				headers = arguments[9];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[9][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[10][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[11][1];
			var hval,$iter1_iter,res,base64,$iter1_array,$or5,$or7,$or6,$iter1_nextval,$and4,$and5,$and6,$or8,mf,xmlHttp,$iter1_type,h,$iter1_idx,$pyjs__trackstack_size_1;
			$pyjs.track={module:'pyjamas.HTTPRequest', lineno:124};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='pyjamas.HTTPRequest';
			$pyjs.track.lineno=124;
			$pyjs.track.lineno=126;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((headers === null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()) {
				$pyjs.track.lineno=127;
				headers = (function(){try{try{$pyjs.in_try_except += 1;
				return $p['dict']([]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
			}
			$pyjs.track.lineno=128;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($and4=user)?($p['bool']($and5=pwd)?!$p['bool'](headers.__contains__('Authorization')):$and5):$and4));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()) {
				$pyjs.track.lineno=129;
				$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
				base64 = $p['___import___']('base64', 'pyjamas');
				$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
				$pyjs.track.lineno=130;
				(function(){try{try{$pyjs.in_try_except += 1;
				return headers.__setitem__('Authorization', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['sprintf']('Basic %s', (function(){try{try{$pyjs.in_try_except += 1;
				return base64['b64encode']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['sprintf']('%s:%s', (function(){try{try{$pyjs.in_try_except += 1;
				return $p['tuple']([user, pwd]);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			}
			$pyjs.track.lineno=132;
			mf = (function(){try{try{$pyjs.in_try_except += 1;
			return (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			$pyjs.track.lineno=133;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']((content_type !== null));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()) {
				$pyjs.track.lineno=134;
				(function(){try{try{$pyjs.in_try_except += 1;
				return headers.__setitem__('Content-Type', content_type);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
			}
			$pyjs.track.lineno=135;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](!$p['bool'](headers.__contains__('Content-Type')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()) {
				$pyjs.track.lineno=136;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool'](returnxml);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()) {
					$pyjs.track.lineno=137;
					(function(){try{try{$pyjs.in_try_except += 1;
					return headers.__setitem__('Content-Type', 'application/xml; charset=utf-8');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
				}
				else {
					$pyjs.track.lineno=139;
					(function(){try{try{$pyjs.in_try_except += 1;
					return headers.__setitem__('Content-Type', 'text/plain; charset=utf-8');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
				}
			}
			$pyjs.track.lineno=145;
			xmlHttp = (function(){try{try{$pyjs.in_try_except += 1;
			return self['doCreateXmlHTTPRequest']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
			$pyjs.track.lineno=146;
			url = (function(){try{try{$pyjs.in_try_except += 1;
			return self['_convertUrlToAbsolute'](url);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
			$pyjs.track.lineno=148;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr'](mf, 'platform'), 'webkit'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
				$pyjs.track.lineno=150;
				(function(){try{try{$pyjs.in_try_except += 1;
				return mf['_addXMLHttpRequestEventListener'](xmlHttp, 'readystatechange', $p['getattr'](self, 'onReadyStateChange'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
			}
			else if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool']($p['op_eq']($p['getattr'](mf, 'platform'), 'mshtml'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()) {
				$pyjs.track.lineno=154;
				(function(){try{try{$pyjs.in_try_except += 1;
				return mf['_addXMLHttpRequestEventListener'](xmlHttp, 'onreadystatechange', $p['getattr'](self, 'onReadyStateChange'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
			}
			else {
				$pyjs.track.lineno=158;
				(function(){try{try{$pyjs.in_try_except += 1;
				return mf['_addXMLHttpRequestEventListener'](xmlHttp, 'load', $p['getattr'](self, 'onLoad'));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
			}
			$pyjs.track.lineno=163;
			if ((function(){try{try{$pyjs.in_try_except += 1;
				return $p['bool'](($p['bool']($or5=$p['op_eq']($p['getattr'](mf, 'platform'), 'webkit'))?$or5:$p['op_eq']($p['getattr'](mf, 'platform'), 'mshtml')));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
				$pyjs.track.lineno=164;
				(function(){try{try{$pyjs.in_try_except += 1;
				return xmlHttp['open'](method, url, true, '', '');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
			}
			else {
				$pyjs.track.lineno=168;
				res = (function(){try{try{$pyjs.in_try_except += 1;
				return xmlHttp['open'](method, url);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
			}
			$pyjs.track.lineno=170;
			$pyjs__trackstack_size_1=$pyjs.trackstack.length;
			$iter1_iter = (function(){try{try{$pyjs.in_try_except += 1;
			return headers;
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				h = $iter1_nextval.$nextval;
				$pyjs.track.lineno=171;
				if ((function(){try{try{$pyjs.in_try_except += 1;
					return $p['bool']((function(){try{try{$pyjs.in_try_except += 1;
				return $p['isinstance'](headers.__getitem__(h), $p['basestring']);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()) {
					$pyjs.track.lineno=172;
					(function(){try{try{$pyjs.in_try_except += 1;
					return xmlHttp['setRequestHeader'](h, headers.__getitem__(h));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
				}
				else {
					$pyjs.track.lineno=174;
					hval = (function(){try{try{$pyjs.in_try_except += 1;
					return ';'['join'](function(){
						var $iter2_nextval,$iter2_type,$iter2_iter,i,$collcomp1,$iter2_idx,$pyjs__trackstack_size_2,$iter2_array;
	$collcomp1 = $p['list']();
					$pyjs__trackstack_size_2=$pyjs.trackstack.length;
					$iter2_iter = (function(){try{try{$pyjs.in_try_except += 1;
					return headers.__getitem__(h);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
						i = $iter2_nextval.$nextval;
						(function(){try{try{$pyjs.in_try_except += 1;
						return $collcomp1['append']((function(){try{try{$pyjs.in_try_except += 1;
						return $p['str'](i);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
					}
					if ($pyjs.trackstack.length > $pyjs__trackstack_size_2) {
						$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_2);
						$pyjs.track = $pyjs.trackstack.slice(-1)[0];
					}
					$pyjs.track.module='pyjamas.HTTPRequest';

	return $collcomp1;}());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
					$pyjs.track.lineno=175;
					(function(){try{try{$pyjs.in_try_except += 1;
					return xmlHttp['setRequestHeader'](h, hval);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
				}
			}
			if ($pyjs.trackstack.length > $pyjs__trackstack_size_1) {
				$pyjs.trackstack = $pyjs.trackstack.slice(0,$pyjs__trackstack_size_1);
				$pyjs.track = $pyjs.trackstack.slice(-1)[0];
			}
			$pyjs.track.module='pyjamas.HTTPRequest';
			$pyjs.track.lineno=182;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m['handlers'].__setitem__(xmlHttp, handler);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
			$pyjs.track.lineno=183;
			(function(){try{try{$pyjs.in_try_except += 1;
			return xmlHttp['send'](($p['bool']($or7=postData)?$or7:''));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
			$pyjs.track.lineno=185;
			$pyjs.track.lineno=185;
			var $pyjs__ret = xmlHttp;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
			$pyjs.track.lineno=189;
			handler = null;
			$pyjs.track.lineno=190;
			xmlHttp = null;
			$pyjs.track.lineno=191;
			(function(){try{try{$pyjs.in_try_except += 1;
			return $m.localHandler['onError']((function(){try{try{$pyjs.in_try_except += 1;
			return $p['str']((typeof e == "undefined"?$m.e:e));
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
			$pyjs.track.lineno=192;
			$pyjs.track.lineno=192;
			var $pyjs__ret = null;
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['method'],['user'],['pwd'],['url'],['postData'],['handler'],['returnxml', false],['content_type', null],['headers', null]]);
		$cls_definition['asyncImpl'] = $method;
		$pyjs.track.lineno=23;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HTTPRequest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.HTTPRequest */


/* end module: pyjamas.HTTPRequest */


/*
PYJS_DEPS: ['pyjd', 'pygwt', 'sys', 'base64']
*/
