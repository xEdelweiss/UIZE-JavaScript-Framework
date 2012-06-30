/*
	This is an automatically generated module, compiled from the JavaScript template file:
		Uize.Templates.JstModule.js.jst
*/

Uize.module ({
	name:'Uize.Templates.JstModule',
	required:[
		'Uize.String.Lines',
		'Uize.Json'
	],
	builder:function () {
		var _package = function () {};

		/*** Public Static Methods ***/
			_package.process = function (input) {
				var output = [];
				/* Module Meta Data
					type: Template
					importance: 5
					codeCompleteness: 100
					testCompleteness: 0
					docCompleteness: 100
				*/
				/*?
					Introduction
						The =Uize.Templates.JstModule= module is a JavaScript Template module used to build JavaScript Template modules from JavaScript template (.jst) files.

						*DEVELOPERS:* `Chris van Rensburg`

						The =Uize.Templates.JstModule= module is a JavaScript Template Module that is automatically generated by a build script from a companion =Uize.Templates.JstModule.js.jst= JavaScript Template (.jst) file.

					Public Static Methods
						Uize.Templates.JstModule.process
							Returns a string, being the generated JavaScript code for the JavaScript Template module.

							SYNTAX
							..........................................................................
							javascriptTemplateModuleSTR = Uize.Templates.JstModule.process (inputOBJ);
							..........................................................................

							The value of the =inputOBJ= parameter should be an object of the form...

							........................................
							{
								compiledTemplate: compiledTemplateOBJ
							}
							........................................

							compiledTemplate
								An object, describing the compiled template in full.

								An object of this form is returned by the =Uize.Template.compile= method when the value ='full'= is specified for its optional =templateOptionsOBJ= parameter.

					Public Static Properties
						Uize.Templates.JstModule.input
							An object, describing the allowed properties of the =inputOBJ= parameter of the =Uize.Templates.JstModule.process= static method.
				*/
				output.push ('/*\r\n	This is an automatically generated module, compiled from the JavaScript template file:\r\n		',input .moduleName,'.js.jst\r\n*/\r\n\r\nUize.module ({\r\n	name:',Uize.Json.to (input .moduleName),',');
				 var required = input.compiledTemplate.required;
				 if (required.length) {
				output.push ('\r\n	required:',Uize.String.Lines.indent (Uize.Json.to (required),1,'\t',false),',');
				 }
				output.push ('\r\n	builder:function () {\r\n		var _package = function () {};\r\n\r\n		/*** Public Static Methods ***/\r\n			_package.process = function (input) {\r\n				',Uize.String.Lines.indent (Uize.String.Lines.trimRight (input.compiledTemplate.code),4,'\t',false),'\r\n			};\r\n\r\n		/*** Public Static Properties ***/\r\n			_package.input = ',Uize.String.Lines.indent (Uize.Json.to (input.compiledTemplate.input),3,'\t',false),';\r\n\r\n		return _package;\r\n	}\r\n});\r\n\r\n');
				return output.join ('');
			};

		/*** Public Static Properties ***/
			_package.input = {
				compiledTemplate:'object'
			};

		return _package;
	}
});

