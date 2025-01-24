Array.prototype.groupBy = function (callback) {
    return this.reduce((result, item) => {
        const key = callback(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
};

const notifications = [
    { 
        source: "google.com", 
        text: "some message text", 
        date: "2025-01-22" 
    },
    { 
        source: "google.com", 
        text: "some message text", 
        date: "2025-01-23" 
    },
    { 
        source: "google.com", 
        text: "some message text", 
        date: "2025-01-24" 
    },
];

const groupedNotifications = notifications.groupBy((notification) => notification.source);

console.log(groupedNotifications);