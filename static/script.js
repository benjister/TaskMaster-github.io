// Define a function to confirm the deletion of a task
function confirmDelete(taskName) {
    // Use the window.confirm method to display a confirmation dialog
    // Return the result of the confirmation dialog
    return window.confirm('Are you sure you want to delete the task "' + taskName + '"?');
}

// Define a function to get all the delete links in the document
function getDeleteLinks() {
    // Use the document.querySelectorAll method to select all the elements with the class name "delete"
    // Return the result as a node list
    return document.querySelectorAll('.delete');
}

// Define a function to add the confirmDelete function as an event listener to each delete link
function addDeleteListeners() {
    // Get all the delete links using the getDeleteLinks function
    var deleteLinks = getDeleteLinks();
    // Loop through the delete links
    for (var i = 0; i < deleteLinks.length; i++) {
        // Get the current delete link
        var deleteLink = deleteLinks[i];
        // Get the task name from the data attribute of the delete link
        var taskName = deleteLink.dataset.taskName;
        // Add the confirmDelete function as an event listener to the delete link
        // Pass the task name as an argument to the confirmDelete function
        deleteLink.addEventListener('click', function() {
            return confirmDelete(taskName);
        });
    }
}

// Define a function to run when the document is ready
function init() {
    // Add the delete listeners using the addDeleteListeners function
    addDeleteListeners();
}

// Add the init function as an event listener to the document when the DOM content is loaded
document.addEventListener('DOMContentLoaded', init);
