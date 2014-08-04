'use strict';

var NotifyReminder = function(){
    this.init();
};

NotifyReminder.prototype.init = function () {
    this.notifyID = 0;
    this.showMessage();
};

NotifyReminder.prototype.addListeners = function() {
};


NotifyReminder.prototype.messages = [
    {
        type: 'basic',
        title: 'Rocky Balboa Inspiration',
        message: 'It ain\'t about how hard you can hit. Its about how hard you can get hit, and how much you can take, and keep moving forward.',
        expandedMessage: 'It ain\'t about how hard you can hit. Its about how hard you can get hit, and how much you can take, and keep moving forward.',
        iconUrl: '/images/rocky.png',
    },{
        type: 'basic',
        title: 'Uncle Arnold Inspiration',
        message: 'The last three or four reps is what makes the muscle grow. This area of pain divides the champion from someone else who is not a champion.',
        expandedMessage: 'The last three or four reps is what makes the muscle grow. This area of pain divides the champion from someone else who is not a champion.',
        iconUrl: '/images/arnold.png',
    },{
        type: 'basic',
        title: 'Uncle Arnold Inspiration',
        message: 'Start wide, expand further, and never look back.',
        expandedMessage: 'Start wide, expand further, and never look back.',
        iconUrl: '/images/arnold.png',
    },{
        type: 'basic',
        title: 'Muhammed Ali',
        message: 'I don’t count my sit-ups. I only start counting when it starts hurting. When I feel pain, that’s when I start counting, because that’s when it really counts.',
        expandedMessage: 'I don’t count my sit-ups. I only start counting when it starts hurting. When I feel pain, that’s when I start counting, because that’s when it really counts.',
        iconUrl: '/images/arnold.png',
    },
];

NotifyReminder.prototype.random = function(){

}

NotifyReminder.prototype.showMessage = function(){
    var options = this.messages[0];
    options.priority = 1;
    options.buttons = [];
    this.notifyid = this.notifyID++;
    chrome.notifications.create('id'+this.notifyID, options, this.hideMessage);
};

NotifyReminder.prototype.hideMessage = function(){
};
