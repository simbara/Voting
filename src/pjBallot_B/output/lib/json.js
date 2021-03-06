/* start module: json */
$pyjs.loaded_modules['json'] = function (__mod_name__) {
	if($pyjs.loaded_modules['json'].__was_initialized__) return $pyjs.loaded_modules['json'];
	var $m = $pyjs.loaded_modules["json"];
	$m.__repr__ = function() { return "<module: json>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'json';
	$m.__name__ = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'json.py, line 1:\n    # TODO: make this more json module compliant (exceptions etc.)';
	$m.__track_lines__[3] = 'json.py, line 3:\n    from __pyjamas__ import JS';
	$m.__track_lines__[4] = 'json.py, line 4:\n    import math';
	$m.__track_lines__[6] = 'json.py, line 6:\n    """';
	$m.__track_lines__[56] = 'json.py, line 56:\n    class JSONParser:';
	$m.__track_lines__[57] = 'json.py, line 57:\n    def decode(self, s):';
	$m.__track_lines__[58] = 'json.py, line 58:\n    return self.jsObjectToPy(self.parseJSON(s))';
	$m.__track_lines__[60] = 'json.py, line 60:\n    def decodeAsObject(self, s, object_hook=None):';
	$m.__track_lines__[61] = 'json.py, line 61:\n    return self.jsObjectToPyObject(self.parseJSON(s))';
	$m.__track_lines__[63] = 'json.py, line 63:\n    def encode(self, obj):';
	$m.__track_lines__[64] = 'json.py, line 64:\n    return self.toJSONString(obj)';
	$m.__track_lines__[66] = 'json.py, line 66:\n    def jsObjectToPy(self, obj):';
	$m.__track_lines__[67] = 'json.py, line 67:\n    JS("""';
	$m.__track_lines__[82] = 'json.py, line 82:\n    def jsObjectToPyObject(self, obj):';
	$m.__track_lines__[84] = 'json.py, line 84:\n    JS("""';
	$m.__track_lines__[214] = 'json.py, line 214:\n    def parseJSON(self, str):';
	$m.__track_lines__[215] = 'json.py, line 215:\n    JS(r"""';
	$m.__track_lines__[225] = 'json.py, line 225:\n    parser = JSONParser()';
	$m.__track_lines__[226] = "json.py, line 226:\n    dumps = getattr(parser, 'encode')";
	$m.__track_lines__[227] = "json.py, line 227:\n    loads = getattr(parser, 'decodeAsObject')";
	$m.__track_lines__[228] = 'json.py, line 228:\n    JSONDecodeException = None';
	$m.__track_lines__[112] = 'json.py, line 112:\n    def toJSONString(self, obj):';
	$m.__track_lines__[113] = 'json.py, line 113:\n    JS(r"""';


	$pyjs.track.module='json';
	$pyjs.track.lineno=1;
	$pyjs.track.lineno=3;
	$pyjs.track.lineno=4;
	$pyjs.track={module:$pyjs.track.module,lineno:$pyjs.track.lineno};$pyjs.trackstack.push($pyjs.track);
	$m['math'] = $p['___import___']('math', null);
	$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
	$pyjs.track.lineno=6;
	$pyjs.track.lineno=56;
	$m['JSONParser'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'json';
		$pyjs.track.lineno=57;
		$method = $pyjs__bind_method2('decode', function(s) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				s = arguments[1];
			}

			$pyjs.track={module:'json', lineno:57};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='json';
			$pyjs.track.lineno=57;
			$pyjs.track.lineno=58;
			$pyjs.track.lineno=58;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return self['jsObjectToPy']((function(){try{try{$pyjs.in_try_except += 1;
			return self['parseJSON'](s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['s']]);
		$cls_definition['decode'] = $method;
		$pyjs.track.lineno=60;
		$method = $pyjs__bind_method2('decodeAsObject', function(s, object_hook) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				s = arguments[1];
				object_hook = arguments[2];
			}
			if (typeof object_hook == 'undefined') object_hook=arguments.callee.__args__[4][1];

			$pyjs.track={module:'json', lineno:60};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='json';
			$pyjs.track.lineno=60;
			$pyjs.track.lineno=61;
			$pyjs.track.lineno=61;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return self['jsObjectToPyObject']((function(){try{try{$pyjs.in_try_except += 1;
			return self['parseJSON'](s);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})());
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['s'],['object_hook', null]]);
		$cls_definition['decodeAsObject'] = $method;
		$pyjs.track.lineno=63;
		$method = $pyjs__bind_method2('encode', function(obj) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}

			$pyjs.track={module:'json', lineno:63};$pyjs.trackstack.push($pyjs.track);
			$pyjs.track.module='json';
			$pyjs.track.lineno=63;
			$pyjs.track.lineno=64;
			$pyjs.track.lineno=64;
			var $pyjs__ret = (function(){try{try{$pyjs.in_try_except += 1;
			return self['toJSONString'](obj);
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs.trackstack.pop();$pyjs.track=$pyjs.trackstack.pop();$pyjs.trackstack.push($pyjs.track);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['encode'] = $method;
		$pyjs.track.lineno=66;
		$method = $pyjs__bind_method2('jsObjectToPy', function(obj) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}


        if (pyjslib.isArray(obj)) {
            for (var i in obj) 
                obj[i] = this.jsObjectToPy(obj[i]);
            return new pyjslib.list(obj);
            }
        else if (pyjslib.isObject(obj)) {
            for (var i in obj) 
                obj[i]=this.jsObjectToPy(obj[i]);
            return new pyjslib.dict(obj);
            }
        
        return obj;
        
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['jsObjectToPy'] = $method;
		$pyjs.track.lineno=82;
		$method = $pyjs__bind_method2('jsObjectToPyObject', function(obj) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}


        if (pyjslib.isArray(obj)) {
            for (var i in obj)
                obj[i] = this.jsObjectToPyObject(obj[i]);
            obj=new pyjslib.list(obj);
            }
        else if (pyjslib.isObject(obj)) {
            if (obj["__jsonclass__"]) {
                var class_name = obj["__jsonclass__"];
                delete obj["__jsonclass__"];
                var _obj = this.jsObjectToPyObject(obj);
                
                return $pyjs_kwargs_call(
                    null, eval('$pyjs.loaded_modules.' + class_name),
                    null, _obj, [{}]
                );
                }
            else {
                for (var i in obj) 
                    obj[i]=this.jsObjectToPyObject(obj[i]);
                return new pyjslib.dict(obj);
                }       
            }
        
        return obj;
        
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['jsObjectToPyObject'] = $method;
		$pyjs.track.lineno=112;
		$method = $pyjs__bind_method2('toJSONString', function(obj) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}


   var m = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        s = {
            array: function (x) {
                var a = ['['], b, f, i, l = x.length, v;
                for (i = 0; i < l; i += 1) {
                    v = x[i];
                    f = s[typeof v];
                    if (f) {
                        v = f(v);
                        if (typeof v == 'string') {
                            if (b) {
                                a[a.length] = ',';
                            }
                            a[a.length] = v;
                            b = true;
                        }
                    }
                }
                a[a.length] = ']';
                return a.join('');
            },
            'boolean': function (x) {
                return String(x);
            },
            'undefined':function (x) {
               return "null";
            },
            'null': function (x) {
                return "null";
            },
            number: function (x) {
                return isFinite(x) ? String(x) : 'null';
            },
            object: function (x) {
                if (x) {
                    if (x.__number__) {
                        return String(x);
                    }
                    if (x instanceof Array) {
                        return s.array(x);
                    }
                    if (x instanceof pyjslib.list) {
                        return s.array(x.__array);
                    }
                    if (x instanceof pyjslib.tuple) {
                        return s.array(x.__array);
                    }
                    if (x instanceof pyjslib.dict) {
                        return s.object(pyjslib.toJSObjects(x));
                    }
                    var a = ['{'], b, f, i, v;
                    for (i in x) {
                        v = x[i];
                        f = s[typeof v];
                        if (f) {
                            v = f(v);
                            if (typeof v == 'string') {
                                if (b) {
                                    a[a.length] = ',';
                                }
                                a.push(s.string(i), ':', v);
                                b = true;
                            }
                        }
                    }
                    a[a.length] = '}';
                    return a.join('');
                }
                return 'null';
            },
            string: function (x) {
                if (/["\\\x00-\x1f]/.test(x)) {
                    x = x.replace(/([\x00-\x1f\\"])/g, function(a, b) {
                        var c = m[b];
                        if (c) {
                            return c;
                        }
                        c = b.charCodeAt();
                        return '\\u00' +
                            math.floor(c / 16).toString(16) +
                            (c % 16).toString(16);
                    });
                }
                return '"' + x + '"';
            }
        };

        var typ = typeof obj;
        f=s[typ];
        return f(obj);
        
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['toJSONString'] = $method;
		$pyjs.track.lineno=214;
		$method = $pyjs__bind_method2('parseJSON', function(str) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				str = arguments[1];
			}


        try {
              return !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(str.replace(/"(\\.|[^"\\])*"/g, ''))) &&
                    eval('(' + str + ')');
        } catch (e) {
            return false;
        }
        
		}
	, 1, [null,null,['self'],['str']]);
		$cls_definition['parseJSON'] = $method;
		$pyjs.track.lineno=56;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('JSONParser', $p['tuple']($bases), $data);
	})();
	$pyjs.track.lineno=225;
	$m['parser'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $m['JSONParser']();
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
	$pyjs.track.lineno=226;
	$m['dumps'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $p['getattr']($m['parser'], 'encode');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
	$pyjs.track.lineno=227;
	$m['loads'] = (function(){try{try{$pyjs.in_try_except += 1;
	return $p['getattr']($m['parser'], 'decodeAsObject');
}finally{$pyjs.in_try_except-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
	$pyjs.track.lineno=228;
	$m['JSONDecodeException'] = null;
	return this;
}; /* end json */


/* end module: json */


/*
PYJS_DEPS: ['math']
*/
