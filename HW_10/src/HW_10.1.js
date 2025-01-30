const notifications = [
    { 
        source: "google.com", 
        text: "some message text 1", 
        date: "2025-01-22" 
    },
    { 
        source: "google.com", 
        text: "some message text 2", 
        date: "2025-01-23" 
    },
    { 
        source: "example.com", 
        text: "another message text", 
        date: "2025-01-24" 
    },
    { 
        source: "example.com", 
        text: "yet another message", 
        date: "2025-01-25" 
    }
];

function groupNotificationsBySource(notifications) {
    return notifications.reduce((acc, notification) => {
        const { source } = notification;
        if (!acc[source]) {
            acc[source] = [];
        }
        acc[source].push(notification);
        return acc;
    }, {});
}

const groupedNotifications = groupNotificationsBySource(notifications);

groupedNotifications[Symbol.iterator] = function* () {
    for (const source in this) {
        if (Array.isArray(this[source])) {
            for (const notification of this[source]) {
                yield notification;
            }
        }
    }
};

for (const notification of groupedNotifications) {
    console.log(notification);
}