var CONTACTS_WIDGET = CONTACTS_WIDGET || {};

var widget = document.getElementById('contacts-widget');
var widgetTable = widget.querySelector('table');
var tableRows = widgetTable.querySelector('tbody').children;

var _addClass = function(el, className) {
    if (el.classList) {
      el.classList.add(className);
    }
    else {
      el.className += ' ' + className;
    }
  }

CONTACTS_WIDGET.colorTableRows = function() {

  for (var i = 0; i < tableRows.length; i++) {
    if (i % 2 === 0) {
      _addClass(tableRows[i], "even-row");
    } else {
      _addClass(tableRows[i], "odd-row");
    }
  }
}

CONTACTS_WIDGET.addOrbs = function() {
  // for (var i = 0; i < tableRows.length; i++) {
  //   // get first TD
  //   // insert div with a class of "orb green/yellow/red" into innerHTML before text
  // }
}

CONTACTS_WIDGET.switchInfoType = function() {
  console.log(selector.value);
  if (selector.value === "Email address") {
    // populate tree with email addresses
  } else if (selector.value === "Phone number") {
    // populate tree with phone numbers
  }
}








