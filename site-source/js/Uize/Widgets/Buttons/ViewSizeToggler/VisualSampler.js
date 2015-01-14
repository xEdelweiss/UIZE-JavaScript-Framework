/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widgets.Buttons.ViewSizeToggler.VisualSampler Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2014-2015 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Class
	importance: 1
	codeCompleteness: 100
	docCompleteness: 100
*/

/*?
	Introduction
		The =Uize.Widgets.Buttons.ViewSizeToggler.VisualSampler= class implements a visual sampler widget for the =Uize.Widgets.Buttons.ViewSizeToggler.Widget= class.

		*DEVELOPERS:* `Chris van Rensburg`
*/

Uize.module ({
	name:'Uize.Widgets.Buttons.ViewSizeToggler.VisualSampler',
	superclass:'Uize.Widgets.VisualSampler.Widget',
	required:[
		'Uize.Widgets.Buttons.ViewSizeToggler.Widget',
		'Uize.Widgets.StateValues'
	],
	builder:function (_superclass) {
		'use strict';

		return _superclass.subclass ({
			omegastructor:function () {
				this.addStateCombinationSamples ({
					viewSize:['small','large'],
					size:Uize.Widgets.StateValues.size
				});
			},

			set:{
				samplerWidgetClass:Uize.Widgets.Buttons.ViewSizeToggler.Widget
			}
		});
	}
});

