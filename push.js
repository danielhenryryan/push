const push = require('web-push');

let vapidKeys = {
  publicKey: 'BL6Lna2sa1QGrDBNHcPrVQeguMc7mS48yEr6nNVGSfSr2KBlx11H0wYv2jAgT008Ix7aaiakwtu8M8wyHIUDYEI',
  privateKey: 'Py2JZLZlquKej9ayOpc8iNXFdzoOVrD7XaaSNP0kK7Y'
};

push.setVapidDetails('danielhenryryan@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey);

let sub = {

}

push.sendNotification(sub, 'test message');

console.log(vapidKeys);
