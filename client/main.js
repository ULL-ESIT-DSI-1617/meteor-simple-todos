import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.chuchu.onCreated(function chuchuOnCreated() {
  // counter starts at 0
  console.log(this);
  this.counter = 0;
  console.log(this.counter);
});

Template.chuchu.helpers({
  counter() {
    console.log(Template.instance().counter);
    return Template.instance().counter;
  },
});

Template.chuchu.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter = (instance.counter + 1);
  },
});
