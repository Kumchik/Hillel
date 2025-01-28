//Вам необхідно використовувати масив нотифікацій з минулих занять. До отриманого під час групування об'єкта notifications,
//вам необхідно додати ітератор, щоб під час перебору в циклі for of ми отримували кожен елемент із вкладених списків об'єкта 
//notifications таким чином, немов працюємо з "плоским" масивом.


const notifications = {
    email: [
        { source: "email", text: "Email notification 1", date: "2025-01-01" },
        { source: "email", text: "Email notification 2", date: "2025-01-02" },
    ],
    sms: [
        { source: "sms", text: "SMS notification 1", date: "2025-01-03" },
        { source: "sms", text: "SMS notification 2", date: "2025-01-04" },
    ],
    push: [
        { source: "push", text: "Push notification 1", date: "2025-01-05" },
    ],
};

notifications[Symbol.iterator] = function () {
    const sources = Object.values(this); 
    let currentArrayIndex = 0; 
    let currentElementIndex = 0; 

    return {
        next() {          
            while (currentArrayIndex < sources.length && currentElementIndex >= sources[currentArrayIndex].length) {
                currentArrayIndex++;
                currentElementIndex = 0;
            }
            if (currentArrayIndex >= sources.length) {
                return { done: true };
            }
            return { value: sources[currentArrayIndex][currentElementIndex++], done: false };
        },
    };
};

for (const notification of notifications) {
    console.log(notification);
}