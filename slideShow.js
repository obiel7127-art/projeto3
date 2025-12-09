const images = [
    { 'id': '1', 'url':"juju.jpg" },
    { 'id': '2', 'url':"f.jpg" },
    { 'id': '3', 'url':"solo.jpg" },
    { 'id': '4', 'url':"tudo.jpg" },
    { 'id': '5', 'url':"todo.jpg" },
    { 'id': '6', 'url':"jojo.jpg" },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);