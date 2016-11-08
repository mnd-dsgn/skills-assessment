var CONTACTS_WIDGET = CONTACTS_WIDGET || {};

var widget = document.getElementById('contacts-widget');
var widgetTable = widget.querySelector('table');
var _tableRows = widgetTable.querySelector('tbody').children;

var _addClass = function(el, className) {
  if (el.classList) {
    el.classList.add(className);
  }
  else {
    el.className += ' ' + className;
  }
}

CONTACTS_WIDGET.colorTableRows = function() {

  for (var i = 0; i < _tableRows.length; i++) {
    if (i % 2 === 0) {
      _addClass(_tableRows[i], "even-row");
    } else {
      _addClass(_tableRows[i], "odd-row");
    }
  }
}

// CONTACTS_WIDGET.addOrbs = function() {
//   for (var i = 0; i < _tableRows.length; i++) {
//     // get first TD
//     // insert div with a class of "orb success/warning/danger" into innerHTML before text
//   }
// }

CONTACTS_WIDGET.switchInfoType = function() {
  console.log(selector.value);
  var _populateEmailAddresses = function() {
    for (var i = 0; i < _tableRows.length; i++) {
      _tableRows[i].children[1].innerHTML = "some email";
    }
  };
  var _populatePhoneNumbers = function() {
    for (var i = 0; i < _tableRows.length; i++) {
      _tableRows[i].children[1].innerHTML = "323-555-1234";
    }
  };
  if (selector.value === "Email address") {
    _populateEmailAddresses();
  } else if (selector.value === "Phone number") {
    _populatePhoneNumbers();
  }
}

var _tdMousoverCallback = function() {
  var _infoDiv = "<div class='info-div' style='position: absolute; float:right;'> <p>Some text</p> </div>";
  this.insertAdjacentHTML('afterend', _infoDiv);
}
var _tdMouseleaveCallback = function() {
  var _infoDiv = document.querySelector('.info-div');
  _infoDiv.parentNode.removeChild(_infoDiv);
}

CONTACTS_WIDGET.addMouseoverListeners = function() {
  for (var i = 0; i < _tableRows.length; i++) {
    _tableRows[i].addEventListener("mouseenter", _tdMousoverCallback)
    _tableRows[i].addEventListener("mouseleave", _tdMouseleaveCallback)
  }
}








