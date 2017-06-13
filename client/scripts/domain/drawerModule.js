function animateFadeIn(element) {
    element.classList.remove('fadeOut');
}

function animateFadeOut(element) {
    element.classList.add('fadeOut');
}

function findButtonByType(type) {
    return document.getElementsByClassName(type)[0];
}

document.addEventListener('gizmoSleep', function (e) {
    animateFadeIn(findButtonByType(e.detail.name));
});

document.addEventListener('gizmoWake', function (e) {
    animateFadeOut(findButtonByType(e.detail.name));
});