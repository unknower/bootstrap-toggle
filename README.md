jquery.bootstrap.toggle
================

jQuery.bootstrap.toggle is a jQuery plugin which transforms any checkbox into a `Bootstrap Toggle` component.

`Bootstrap Toggle` is a lightweight Bootstrap plugin that allows toggle switches on your pages. See how it works at https://github.com/minhur/bootstrap-toggle

#Basic Usage
Just include the js file and call togglize() on any checkbox element to transform it into a `Bootstrap Toggle` component

    $("input[type=checkbox]").togglize();

	#Customize
	Customize by adding attributes to the checkbox.
	####Customizable Attributes
	- id
	- data-on-caption: caption for when the toggle is on
	- data-off-caption: caption for when the toggle is off
	- data-on-icon: icon for when the toggle is on. Follows bootstrap icon convention.
	- data-off-icon: icon for when the toggle is off. Follows bootstrap icon convention.

	####Example
	    <input type = "checkbox" id = "isReady" data-on-caption = "Ready" data-off-caption = "Not Ready" data-on-icon = "icon-check" data-off-icon = "icon-ban-circle"/>
