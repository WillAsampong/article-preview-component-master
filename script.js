const shareButton = document.querySelector('.share-button');
const profile = document.querySelector('.profile');
// const profile = document.querySelector('profile');

shareButton.addEventListener('click', () => {
    profile.classList.toggle('expanded');
    console.log('yah');
})