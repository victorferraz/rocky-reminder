'use strict';
chrome.app.runtime.onLaunched.addListener(function () {
    chrome.app.window.create('window.html', {
        id: 'mainwin',
        bounds: {width:600, height:400}
    });
});
var NAME = 'teste';
var alarmInfo = {
    'delayInMinutes':1,
    'periodInMinutes':10
};

chrome.alarms.create(NAME, alarmInfo);
chrome.alarms.onAlarm.addListener(function(){
    new NotifyReminder();
});
