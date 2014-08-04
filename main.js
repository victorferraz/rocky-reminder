'use strict';

var NotifyReminder = function(){
    this.init();
};

NotifyReminder.prototype.init = function () {
    this.notifyID = 0;
    this.showMessage();
    console.log('teste');
};

NotifyReminder.prototype.addListeners = function() {
};


NotifyReminder.prototype.messages = [
        {
            type: 'basic',
            title: 'Rocky Balboa Inspiration',
            message: 'It ain\'t about how hard you can hit. Its about how hard you can get hit, and how much you can take, and keep moving forward.',
            expandedMessage: 'It ain\'t about how hard you can hit. Its about how hard you can get hit, and how much you can take, and keep moving forward.',
            iconUrl: '/images/inbox-64x64.png',
        },
    ];

NotifyReminder.prototype.showMessage = function(){
    var options = this.messages[0];
    options.priority = 1;
    options.buttons = [];
    this.notifyid = this.notifyID++;
    console.log( options );
    chrome.notifications.create('id'+this.notifyID, options, this.hideMessage);
};

NotifyReminder.prototype.hideMessage = function(){
    console.log('teste');
};

new NotifyReminder();
