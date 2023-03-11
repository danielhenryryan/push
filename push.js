const push = require('web-push');

let vapidKeys = {
  publicKey: 'BL6Lna2sa1QGrDBNHcPrVQeguMc7mS48yEr6nNVGSfSr2KBlx11H0wYv2jAgT008Ix7aaiakwtu8M8wyHIUDYEI',
  privateKey: 'Py2JZLZlquKej9ayOpc8iNXFdzoOVrD7XaaSNP0kK7Y'
};

let sub = {
  endpoint: "https://fcm.googleapis.com/fcm/send/fzyE33kmmWE:APA91bFNelzFFQBkcJEQJsM4KZJ0ae9-FN4zrmSqyMeycc_Dl085cQ949s2Emq9UYKIzLvqGt94DLbv8-bH6QCx1HA-ynEkd1GAy-A3uz71JMxNMN3IFSRwCRRp_SLpo-38FkxHXMWn6",
  expirationTime: null,
  keys: {
    p256dh: "BCvOTUU0yYLHzFKO_AVhpkfTox0RgQxT3_aUIwt6Mg_sYeFkOGLD_JLLa601ZIBk_kn_IktQ1SOJWoXYtGKD524",
    auth: "Vi8ASqP3szrO18SV3a768Q"
  }
}

push.setVapidDetails(
  'danielhenryryan@gmail.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

push.sendNotification(sub, 'test message');

console.log(vapidKeys);
