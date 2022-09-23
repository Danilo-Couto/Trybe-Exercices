// export default function progressNotification(message: string): void {
//     console.log(message);
// }

// Observe o código abaixo e faça as alterações necessárias para que ele passe a respeitar o Princípio do Aberto/Fechado (OCP).

// export function progressNotification(message: string, notificationType: string): void {
//     switch (notificationType) {
//       case 'Email':
//         console.log('Email: ', message);
//         break;
//       case 'Phone':
//         console.log('Phone: ', message);
//         break;
//       case 'Console':
//         console.log('Console: ', message);
//         break;
//       default:
//         console.log(message);
//         break;   
//     }
// }

type Notification = { type: string, send: (message: string) => void };

const consoleNotification: Notification = {
    type: 'Console',
    send: (message) => console.log(`${consoleNotification.type}:`, message),
  };

const emailNotification: Notification = {
    type: 'Email',
    send: (message) => console.log(`${emailNotification.type}:`, message),
};

const phoneNotification: Notification = {
    type: 'Phone',
    send: (message) => console.log(`${phoneNotification.type}:`, message),
  };

const notifications: Notification[] = [
    consoleNotification,
    emailNotification,
    phoneNotification,
];

export default function progressNotification(
    message: string,
    type: string,
    notificationsArray: Notification[] = notifications,
  ): void {
    notificationsArray.forEach((notification) => {
      if (notification.type === type) {
        notification.send(message);
      }
    });
  }

// 
// 2 anos
// 24 k pago a vista 
