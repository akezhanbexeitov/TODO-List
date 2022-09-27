const tasks = document.querySelector('.tasks-body__list');
const input = document.querySelector('.tasks-form__input');
const button = document.querySelector('.tasks-form__button');
const form = document.querySelector('.tasks-form');

const addTask = e => {
    // Prevent website from refreshing
    e.preventDefault();

    // ==================== Method 1 ====================

    // Add task to the list
    const value = input.value;
    if (value === '') {    // Check for empty input field
        alert('Type something in the input field');
    } else {
        const task = `<li>${value}<button class="list__item_delete" style="margin-left: 15px;">Delete</button></li>`;
        tasks.insertAdjacentHTML('beforeend', task);
    }

    // Add delete button's functionality
    const deleteButton = document.querySelectorAll('.list__item_delete');
    deleteButton.forEach(item => {
        item.addEventListener('click', function () {
            this.closest('li').remove()
        })
    })

    // ==================== End of Method 1 ====================


    // ==================== Method 2 ====================

    // Add task to the list
    // const task = document.createElement('li');
    // task.innerText = input.value;
    // tasks.append(task);

    // // Add delete button
    // const deleteButton = document.createElement('button');
    // deleteButton.setAttribute('role', 'button');
    // deleteButton.innerText = 'Delete';
    // deleteButton.style['margin-left'] = '15px';
    // task.append(deleteButton);

    // // Delete task
    // deleteButton.addEventListener('click', function () {
    //     this.closest('li').remove();
    // })

    // ==================== End of Method 2 ====================

    // Clear input field
    input.value = '';

    // When clicking submit button shift focus back to input field
    input.focus();
}

form.addEventListener('submit', addTask)

