if (input.value !== '') {
    const input = document.getElementById('favchap');
    const button = document.querySelector('button');
    const list = document.getElementById('list');

    const li = document.createElement('li');

    const deleteButton = document.createElement('button');

    li.textContent = input.value;

    deleteButton.textContent = '❌';

    li.append(deleteButton);

    list.append(li);

    <button aria-label="Close" id="close-button">❌</button>

    addEventListener('click', function () {
        li.remove();
    });

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    });

    input.value = '';
    input.focus();

}