(function() {var implementors = {};
implementors["paperclip"] = [{"text":"impl Unpin for PaperClipError","synthetic":true,"types":[]},{"text":"impl Unpin for EmittedUnit","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for ApiObjectImpl&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, 'b&gt; Unpin for ApiObjectBuilderImpl&lt;'a, 'b&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;'b: 'a,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for ApiObject","synthetic":true,"types":[]},{"text":"impl Unpin for ObjectContainer","synthetic":true,"types":[]},{"text":"impl Unpin for PathOps","synthetic":true,"types":[]},{"text":"impl Unpin for OpRequirement","synthetic":true,"types":[]},{"text":"impl&lt;S, H&gt; Unpin for Response&lt;S, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Parameter","synthetic":true,"types":[]},{"text":"impl Unpin for ObjectVariant","synthetic":true,"types":[]},{"text":"impl Unpin for ObjectField","synthetic":true,"types":[]},{"text":"impl Unpin for EmitterState","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Unpin for DefaultEmitter&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for CrateMeta","synthetic":true,"types":[]},{"text":"impl Unpin for EmitMode","synthetic":true,"types":[]}];
implementors["paperclip_actix"] = [{"text":"impl&lt;R&gt; Unpin for Resource&lt;R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Unpin for Scope&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Route","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Unpin for ServiceConfig&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, B&gt; Unpin for App&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["paperclip_core"] = [{"text":"impl Unpin for ValidationError","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for ResponderWrapper&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for CreatedJson&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for AcceptedJson&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for NoContent","synthetic":true,"types":[]},{"text":"impl Unpin for MediaRange","synthetic":true,"types":[]},{"text":"impl Unpin for Coders","synthetic":true,"types":[]},{"text":"impl Unpin for Coder","synthetic":true,"types":[]},{"text":"impl Unpin for Version","synthetic":true,"types":[]},{"text":"impl Unpin for DataType","synthetic":true,"types":[]},{"text":"impl Unpin for DataTypeFormat","synthetic":true,"types":[]},{"text":"impl&lt;P, R, S&gt; Unpin for Api&lt;P, R, S&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for SpecFormat","synthetic":true,"types":[]},{"text":"impl Unpin for DefaultSchemaRaw","synthetic":true,"types":[]},{"text":"impl Unpin for DefaultSchema","synthetic":true,"types":[]},{"text":"impl Unpin for Info","synthetic":true,"types":[]},{"text":"impl Unpin for Contact","synthetic":true,"types":[]},{"text":"impl Unpin for License","synthetic":true,"types":[]},{"text":"impl Unpin for SecurityScheme","synthetic":true,"types":[]},{"text":"impl Unpin for Tag","synthetic":true,"types":[]},{"text":"impl Unpin for ExternalDocs","synthetic":true,"types":[]},{"text":"impl&lt;P, R&gt; Unpin for PathItem&lt;P, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Unpin for Parameter&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Items","synthetic":true,"types":[]},{"text":"impl Unpin for ParameterIn","synthetic":true,"types":[]},{"text":"impl Unpin for CollectionFormat","synthetic":true,"types":[]},{"text":"impl&lt;P, R&gt; Unpin for Operation&lt;P, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Reference","synthetic":true,"types":[]},{"text":"impl Unpin for OperationProtocol","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Unpin for Response&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Header","synthetic":true,"types":[]},{"text":"impl Unpin for HttpMethod","synthetic":true,"types":[]},{"text":"impl&lt;L, R&gt; Unpin for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Unpin for Resolvable&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Ready&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'pin, T, H&gt; Unpin for ResponseWrapper&lt;T, H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;__ResponseWrapper&lt;'pin, T, H&gt;: Unpin,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()