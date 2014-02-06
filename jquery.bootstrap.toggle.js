/*
* jquery.bootstrap.toggle v1.0
* Forked from bootstrap-toggle v1.1 (https://github.com/minhur/bootstrap-toggle)
*
* -----------------------------------
* This content is released under the MIT License.
*/
!function ($) {
	var defaults = {
		"id": "toggle",
		"data-on-caption": "On",
		"data-off-caption": "Off",
		"data-on-icon": "icon-check icon-white",
		"data-off-icon": "icon-ban-circle icon-white"
	};
	var template = '<div class="toggle btn btn-mini" data-toggle="toggle"><input type="checkbox"><div class="toggle-group"><label class="toggle-on btn btn-mini btn-success"></label><label class="toggle-off btn btn-mini btn-danger"></label><span class="toggle-handle btn btn-mini"></span></div></div>';
	var stylesheet = {
		'.toggle': {
			'min-width': '40px',
			'height': '20px',
			'position': 'relative',
			'overflow': 'hidden'
		},
		'.toggle input[type="checkbox"]': {
			'display': 'none'
		},
		'.toggle-group': {
			'position': 'absolute',
			'width': '200%',
			'top': '0',
			'bottom': '0',
			'left': '0',
			'transition': 'left 0.35s',
			'-webkit-transition': 'left 0.35s',
			'-moz-user-select': 'none',
			'-webkit-user-select': 'none'
		},
		'.toggle:not(.off) .toggle-group': {
			'left': '0'
		},
		'.toggle.off .toggle-group': {
			'left': '-100%'
		},
		'.toggle-on': {
			'position': 'absolute',
			'top': '0',
			'bottom': '0',
			'left': '0',
			'right': '50%',
			'margin': '0',
			'border': '0',
			'border-radius': '0'
		},
		'.toggle-off': {
			'position': 'absolute',
			'top': '0',
			'bottom': '0',
			'left': '50%',
			'right': '0',
			'margin': '0',
			'border': '0',
			'border-radius': '0'
		},
		'.toggle-handle': {
			'position': 'relative',
			'margin': '0 auto',
			'padding-top': '0px',
			'padding-bottom': '0px',
			'height': '100%',
			'width': '0px',
			'border-width': '0 1px'
		},
		'.toggle-handle.btn-mini': {
			'top': '-1px'
		},
		'.toggle.btn': {
			'min-width': '30px',
			'-webkit-border-radius': '3px !important',
			'-moz-border-radius': '3px !important',
			'border-radius': '3px !important'
		},
		'.toggle-on.btn': {
			'padding-right': '24px'
		},
		'.toggle-off.btn': {
			'padding-left': '24px'
		},
		'.toggle.btn-large': {
			'min-width': '40px'
		},
		'.toggle-on.btn-large': {
			'padding-right': '35px'
		},
		'.toggle-off.btn-large': {
			'padding-left': '35px'
		},
		'.toggle.btn-small': {
			'min-width': '25px'
		},
		'.toggle-on.btn-small': {
			'padding-right': '20px'
		},
		'.toggle-off.btn-small': {
			'padding-left': '20px'
		},
		'.toggle.btn-mini': {
			'min-width': '20px'
		},
		'.toggle-on.btn-mini': {
			'padding-right': '12px'
		},
		'.toggle-off.btn-mini': {
			'padding-left': '12px'
		}
	};
	var setToggle = function($toggle, val){
		var $input = $toggle.find("input[type=checkbox]");
		var isOn = (val === "on");
		if(isOn){
			$toggle.attr('class', 'toggle ' + $toggle.find('.toggle-on').attr('class').replace(/toggle-on/g,''));
			$toggle.removeClass('off');
		} else {
			$toggle.attr('class', 'toggle ' + $toggle.find('.toggle-off').attr('class').replace(/toggle-off/g,''));
			$toggle.addClass('off');
		}
		$input.prop('checked', isOn);
		$toggle.attr('data-toggle-on', isOn);
		refreshToggle();
	};
	var refreshToggle = function(){
		$(".toggle.btn").css({"-webkit-border-radius":"3px", "-moz-border-radius":"3px", "border-radius":"3px"});
		$(".toggle .toggle-group").css("left", "0");
		$(".toggle.off .toggle-group").css("left", "-100%");
	};

	$(document).on('click.bootstrap-toggle', '[data-toggle^=toggle]', function(e) {
		var newVal = $(this).hasClass('off') ? "on" : "off";
		setToggle($(this), newVal);
		$(this).find("input").change();
	});

	$(document).on("change", ".toggle input", function(){
		var newVal = $(this).prop("checked") ? "on" : "off";
		setToggle($(this).closest(".toggle"), newVal);
	});

	/*************************************************
	 * [What is it]
	 * Take any <input type = 'checkbox'/> and turn it into a toggle button

	 * [Example]
	 * <input type = 'checkbox'/>
	 * $("input#ready").togglize();
	 
	 * [Optional attributes]
	 	Attach attributes to the checkbox before calling togglize() to customize
	 	1. id: id for the resulting toggle button
	 	2. data-on-caption: caption to be displayed when toggle is on
	 	3. data-off-caption: caption to be displayed when toggle is off
	 	4. data-on-icon: icon to be displayed when toggle is on (bootstrap convention)
	 	5. data-off-icon: icon to be displayed when toggle is off (bootstrap convention)

	   - example: 
	   	<input type = 'checkbox' id = 'ready' data-on-caption = 'Ready' data-off-caption = 'Not Ready' data-on-icon = 'icon-check icon-white' data-off-icon = 'icon-ban-circle icon-white'/>
	   	$("input#ready").togglize();
	*************************************************/
	
	$.fn.togglize = function(){
		this.each(function(){
			if($(this)[0].type === 'checkbox'){
				var newVal = $(this).prop("checked") ? "off" : "on";
				var $component = $(template);
				var options = {
					"id": $(this).attr("id"),
					"data-on-caption": $(this).attr("data-on-caption"),
					"data-off-caption": $(this).attr("data-off-caption"),
					"data-on-icon": $(this).attr("data-on-icon"),
					"data-off-icon": $(this).attr("data-off-icon")
				};
				var settings = $.extend({}, defaults, options);
				$component.find(".toggle-on").html("<i class = '" + settings["data-on-icon"] + "'></i> " + settings["data-on-caption"]);
				$component.find(".toggle-off").html("<i class = '" + settings["data-off-icon"] + "'></i> " + settings["data-off-caption"]);
				$component.find("input[type=checkbox]").attr("id", settings["id"]);
				$(this).replaceWith($component);
				setToggle($component, newVal);
			}
		});
		$.each(stylesheet, function(el, style){
			$(el).css(style);
			refreshToggle();
		});
		return this;
	};
}(window.jQuery);
