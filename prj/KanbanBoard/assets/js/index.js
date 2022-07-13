var drop_task_list_1 = document.getElementById("drop-items-1");
var drop_task_list_2 = document.getElementById("drop-items-2");
var drop_task_list_3 = document.getElementById("drop-items-3");
var Filter = document.getElementById("FilterID")
var input_box_1 = document.getElementById('add_task_1')
var input_box_2 = document.getElementById('add_task_2')
var input_box_3 = document.getElementById('add_task_3')
var input_button_3 = document.getElementById('add_task_button_3')
var input_button_1 = document.getElementById('add_task_button_1')
var input_button_2 = document.getElementById('add_task_button_2')
const list_1 = [];
const list_2 = [];
const list_3 = [];

new Sortable(drop_task_list_1, {
    group: 'shared', // set both lists to same group
    animation: 150,
    chosenClass: "sortable-chosen",
    removeOnSpill: true,
    dragClass: "sortable-drag"
});

new Sortable(drop_task_list_2, {
    group: 'shared',
    animation: 150,
    chosenClass: "sortable-chosen",
    removeOnSpill: false,
    dragClass: "sortable-drag"
});

new Sortable(drop_task_list_3, {
    group: 'shared',
    animation: 150,
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag"
});


input_box_1.addEventListener("keypress", function(event){
    if (event.key == "Enter") {
        console.log (input_box_1.value)
        if (input_box_1.value!= ""){
            event.preventDefault();
            var input = input_box_1.value; 
            AddCard_1(input);
            list_1.push(input);
            localStorage.setItem("tasks_list_1", JSON.stringify(list_1));
            input_box_1.value ='';
            console.log(JSON.parse(localStorage.getItem("tasks_list_1")));
        }   
    }
});

input_box_2.addEventListener("keypress", function(event){
    if (event.key == "Enter") {
        console.log (input_box_1.value)
        if (input_box_2.value!= ""){
            event.preventDefault();
            var input = input_box_2.value; 
            AddCard_2(input);
            list_2.push(input);
            console.log(list_2)
            localStorage.setItem("tasks_list_2", JSON.stringify(list_2));
            input_box_2.value ='';
            console.log(JSON.parse(localStorage.getItem("tasks_list_2")));
        }   
    }
});

input_box_3.addEventListener("keypress", function(event){
    if (event.key == "Enter") {
        console.log (input_box_1.value)
        if (input_box_3.value!= ""){
            event.preventDefault();
            var input = input_box_3.value; 
            AddCard_3(input);
            list_3.push(input);
            localStorage.setItem("tasks_list_3", JSON.stringify(list_3));
            input_box_3.value ='';
        }   
    }
});







function AddCard_1(input) {
    if (input != "" && input != undefined) {
        var drop__card__div = document.createElement('div');
        drop__card__div.className+='drop_card ';
        drop__card__div.chosenClass+= "sortable-chosen";
        drop__card__div.dragClass+= "sortable-drag";
        drop__card__div.removeOnSpill+= 'true';
        drop__card__div.style+='width: 400px; justify-content: space-between; padding: .75rem 1.25rem .75rem .75rem; background-color: var(--first-color-lighten); box-shadow: 4px 4px 16px #E1E1E1; border-radius: 2.5rem; display: flex; align-items: center;';

        var drop__data__div = document.createElement('div');
        drop__data__div.className+='drop_data';

        var temp__div = document.createElement('div');

        var drop__name__div = document.createElement('h1');
        drop__name__div.className+='drop__name';
        drop__name__div.style+='    font-size: var(--normal-font-size); color: var(--first-color); font-weight: 500;';
        drop__name__div.innerHTML = input;

        var drop__profession__div = document.createElement('span');
        drop__profession__div.className+='drop__profession';
        drop__profession__div.innerHTML = "Created Date";
        drop__profession__div.style+='    font-size: var(--smaller-font-size); color: var(--first-color-light);';

        var drop__deleteIcon__div = document.createElement('i');
        drop__deleteIcon__div.className += 'bi bi-trash3';
        drop__deleteIcon__div.style +='float:end'

        temp__div.appendChild(drop__name__div);
        drop__name__div.appendChild(drop__deleteIcon__div);
        temp__div.appendChild(drop__profession__div);
        

        drop__data__div.appendChild(temp__div);
        drop__card__div.appendChild(drop__data__div);

        document.getElementById('drop-items-1').appendChild(drop__card__div);
    }
    input_box_1.value ='';
}


function AddCard_2(input) {
    if (input != "" && input != undefined) {
        var drop__card__div = document.createElement('div');
        drop__card__div.className+='drop_card';
        drop__card__div.chosenClass+= "sortable-chosen";
        drop__card__div.dragClass+= "sortable-drag";
        drop__card__div.style+='width: 400px; justify-content: space-between; padding: .75rem 1.25rem .75rem .75rem; background-color: var(--first-color-lighten); box-shadow: 4px 4px 16px #E1E1E1; border-radius: 2.5rem; display: flex; align-items: center;';

        var drop__data__div = document.createElement('div');
        drop__data__div.className+='drop_data';

        var temp__div = document.createElement('div');

        var drop__name__div = document.createElement('h1');
        drop__name__div.className+='drop__name';
        drop__name__div.style+='    font-size: var(--normal-font-size); color: var(--first-color); font-weight: 500;';
        drop__name__div.innerHTML = input;

        var drop__profession__div = document.createElement('span');
        drop__profession__div.className+='drop__profession';
        drop__profession__div.innerHTML = "Created Date";
        drop__profession__div.style+='    font-size: var(--smaller-font-size); color: var(--first-color-light);';

        temp__div.appendChild(drop__name__div);
        temp__div.appendChild(drop__profession__div);

        drop__data__div.appendChild(temp__div);
        drop__card__div.appendChild(drop__data__div);

        document.getElementById('drop-items-2').appendChild(drop__card__div);
    }
    input_box_2.value ='';
}

function AddCard_3(input) {
    if (input != "" && input != undefined) {
        var drop__card__div = document.createElement('div');
        drop__card__div.className+='drop_card';
        drop__card__div.chosenClass+= "sortable-chosen";
        drop__card__div.dragClass+= "sortable-drag";
        drop__card__div.style+='width: 400px; justify-content: space-between; padding: .75rem 1.25rem .75rem .75rem; background-color: var(--first-color-lighten); box-shadow: 4px 4px 16px #E1E1E1; border-radius: 2.5rem; display: flex; align-items: center;';

        var drop__data__div = document.createElement('div');
        drop__data__div.className+='drop_data';

        var temp__div = document.createElement('div');

        var drop__name__div = document.createElement('h1');
        drop__name__div.className+='drop__name';
        drop__name__div.style+='    font-size: var(--normal-font-size); color: var(--first-color); font-weight: 500;';
        drop__name__div.innerHTML = input;

        var drop__profession__div = document.createElement('span');
        drop__profession__div.className+='drop__profession';
        drop__profession__div.innerHTML = "Created Date";
        drop__profession__div.style+='    font-size: var(--smaller-font-size); color: var(--first-color-light);';

        temp__div.appendChild(drop__name__div);
        temp__div.appendChild(drop__profession__div);

        drop__data__div.appendChild(temp__div);
        drop__card__div.appendChild(drop__data__div);

        document.getElementById('drop-items-3').appendChild(drop__card__div);
    }
    input_box_3.value ='';
}


window.onload = function Retrieve_list() {
    console.log('a')
    var tasks_list_1_stored = JSON.parse(localStorage.getItem("tasks_list_1"));
    console.log("aaa2a" + tasks_list_1_stored);
    var tasks_list_2_stored = JSON.parse(localStorage.getItem("tasks_list_2"));
    var tasks_list_3_stored = JSON.parse(localStorage.getItem("tasks_list_3"));
    
    //function
        function updateList_1() {
            var tasks_list_1_stored = document.querySelectorAll("h1");
            tasks_list_1_stored = Array.from(tasks_list_1_stored);
        }


    // List 1
    let tasks_list_1_length = tasks_list_1_stored.length;
    for (let i = 0; i < tasks_list_1_length + 1 ; i++) {
        console.log(tasks_list_1_stored[i]);
        AddCard_1(tasks_list_1_stored[i]);
      };
      
    for (let i = 0; i < tasks_list_1_length + 1 ; i++) {
        var temp_var = tasks_list_1_stored[i];
        list_1.push(temp_var);
    };


    // List 2
    let tasks_list_2_length = tasks_list_2_stored.length;
    for (let i = 0; i < tasks_list_2_length ; i++) {
        console.log(tasks_list_2_stored[i]);
        AddCard_2(tasks_list_2_stored[i]);
      };

    for (let i = 0; i < tasks_list_2_length + 1 ; i++) {
        var temp_var = tasks_list_2_stored[i];
        list_2.push(temp_var);
    };

    // List 1
    let tasks_list_3_length = tasks_list_3_stored.length;
    for (let i = 0; i < tasks_list_3_length ; i++) {
        AddCard_3(tasks_list_3_stored[i]);
      };

    for (let i = 0; i < tasks_list_3_length + 1 ; i++) {
        var temp_var = tasks_list_3_stored[i];
        list_3.push(temp_var);
    };
}










