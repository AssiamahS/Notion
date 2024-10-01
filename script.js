// Task data
const tasks = [
    { task: 'Design wireframe', status: 'In Progress', dueDate: '09/30/2024', progress: 70 },
    { task: 'Set up data integration', status: 'Not Started', dueDate: '10/05/2024', progress: 0 },
    { task: 'Implement user feedback', status: 'Blocked', dueDate: '10/10/2024', progress: 0 }
];

// Subtasks data
const subtasks = [
    'Design task board layout',
    'Integrate comments feature',
    'Implement progress tracking system'
];

// Comments data
const comments = [];

// Render tasks in table
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const row = `
            <tr>
                <td>${task.task}</td>
                <td>${task.status}</td>
                <td>${task.dueDate}</td>
                <td>${task.progress}%</td>
            </tr>
        `;
        taskList.innerHTML += row;
    });
}

// Render subtasks
function renderSubtasks() {
    const subtaskList = document.getElementById('subtasks-list');
    subtaskList.innerHTML = '';

    subtasks.forEach(subtask => {
        const listItem = `<li>${subtask}</li>`;
        subtaskList.innerHTML += listItem;
    });
}

// Add a new subtask
function addSubtask() {
    const subtaskInput = document.getElementById('subtask-input');
    const subtaskText = subtaskInput.value.trim();

    if (subtaskText) {
        subtasks.push(subtaskText);
        subtaskInput.value = '';
        renderSubtasks();
    }
}

// Render comments
function renderComments() {
    const commentsList = document.getElementById('comments-list');
    commentsList.innerHTML = '';

    comments.forEach(comment => {
        const commentItem = `<p>${comment}</p>`;
        commentsList.innerHTML += commentItem;
    });
}

// Add a new comment
function addComment() {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();

    if (commentText) {
        comments.push(commentText);
        commentInput.value = '';
        renderComments();
    }
}

// Initialize app
function init() {
    renderTasks();
    renderSubtasks();
    renderComments();
}

// Call init on page load
window.onload = init;
