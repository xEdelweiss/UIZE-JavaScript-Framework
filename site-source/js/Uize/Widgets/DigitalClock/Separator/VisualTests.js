/*______________
|       ______  |   U I Z E    J A V A S C R I P T    F R A M E W O R K
|     /      /  |   ---------------------------------------------------
|    /    O /   |    MODULE : Uize.Widgets.DigitalClock.Separator.VisualTests Class
|   /    / /    |
|  /    / /  /| |    ONLINE : http://www.uize.com
| /____/ /__/_| | COPYRIGHT : (c)2014 UIZE
|          /___ |   LICENSE : Available under MIT License or GNU General Public License
|_______________|             http://www.uize.com/license.html
*/

/* Module Meta Data
	type: Class
	importance: 1
	codeCompleteness: 5
	docCompleteness: 100
*/

/*?
	Introduction
		The =Uize.Widgets.DigitalClock.Separator.VisualTests= class implements a set of visual tests for the =Uize.Widgets.DigitalClock.Separator.Widget= class.

		*DEVELOPERS:* 
*/

Uize.module ({
	name:'Uize.Widgets.DigitalClock.Separator.VisualTests',
	superclass:'Uize.Widgets.VisualTests.Widget',
	required:'Uize.Widgets.DigitalClock.Separator.Widget',
	builder:function (_superclass) {
		'use strict';

		return _superclass.subclass ({
			omegastructor:function () {
				this.addStateTestCase ({
				});
			},

			staticProperties:{
				widgetClass:Uize.Widgets.DigitalClock.Separator.Widget
			}
		});
	}
});

