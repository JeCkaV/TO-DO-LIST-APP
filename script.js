function newItem() {
    
    // Adding a new item to the list of items

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === ' ') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }

    // Crossing out an item from the list of items with double click
     
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    // Adding the delete button "X" with event listener when we click it to be deleted 
    // and Adding CLASS DELETE (DISPLAY: NONE) from the css

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);

    function deleteListItem() {
        li.addClass("delete")
    }

    // Reordering the items
    $('#list').sortable();
}