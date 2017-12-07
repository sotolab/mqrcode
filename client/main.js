import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});


Template.hello.rendered = function () {
  if (!this.qrloaded) {
    this.qrloaded = true;

    var address = "good";

    qrContents = "bitcoin:" + address;
    var qrcodesvg = new Qrcodesvg(qrContents, "qrcode", 250, {
      "ecclevel": 1
    });
    qrcodesvg.draw({
      "method": "classic",
      "fill-colors": ["#003658", "#0085CB", "#0085CB"]
    }, {
      "stroke-width": 1
    });
  }  
}

