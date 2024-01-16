let addReminderButton = document.getElementById("btnAddReminder");
let showRemindersButton = document.getElementById("btnShowReminders");

let title = document.getElementById("title");
let priority = document.getElementById("priority");
let color = document.getElementById("color");
let description = document.getElementById("description");
let result = document.getElementById("result");


function Reminder(title, priority, color, description) {
    this.reminderTitle = title;
    this.reminderPriority = priority;
    this.reminderColor = color;
    this.reminderDescription = description;
}

let reminders = [];

function createReminder(title, priority, color, description) {
    let newReminder = new Reminder(title, priority, color, description);
    reminders.push(newReminder);

    console.log(reminders);
}

addReminderButton.addEventListener("click", function () {
    createReminder(title.value, priority.value, color.value, description.value);
    title.value = ""
    priority.value = "";
    color.value = "";
    description.value = ""
});
        
showRemindersButton.addEventListener("click", function () {

    if (reminders.length > 0) {
        result.innerHTML = "";
    
        let table = document.createElement("table");
        table.style.border = "1px solid black";

        let header = table.createTHead();
        let headerRow = header.insertRow();
        let titleHeader = headerRow.insertCell(0);
        let priorityHeader = headerRow.insertCell(1);
        let descriptionHeader = headerRow.insertCell(2);

        titleHeader.innerText = "Title";
        priorityHeader.innerText = "Priority";
        descriptionHeader.innerText = "Description";

        titleHeader.style.border = "1px solid black";
        priorityHeader.style.border = "1px solid black";
        descriptionHeader.style.border = "1px solid black";

        let body = table.createTBody();
        
        for (let i = 0; i < reminders.length; i++) {
            let row = body.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);

            cell1.innerText = reminders[i].reminderTitle;
            cell2.innerText = reminders[i].reminderPriority;
            cell3.innerText = reminders[i].reminderDescription;

            cell1.style.border = "1px solid black";
            cell2.style.border = "1px solid black";
            cell3.style.border = "1px solid black";

            cell1.style.color = reminders[i].reminderColor;
        }

        result.appendChild(table);
    } else{
       result.innerHTML = "No reminders available.";
    }
    
});
