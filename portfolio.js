var actives1 = document.querySelector('#active1')
var actives2 = document.querySelector('#active2')
var actives3 = document.querySelector('#active3')
var removes3 = document.querySelector('#active3')
var removes2 = document.querySelector('#active2')
var removes1 = document.querySelector('#active1')

// Theme change of the web page
const sheetstyle = document.getElementById('stylesheets')
const changeTheme = document.getElementById('switch')

let x = true;

changeTheme.addEventListener('click', function () {
    if (x) {
        sheetstyle.href="lightmode.css";
        x = false;
    } else {
        sheetstyle.href="darkmode.css";
        x = true;
    }
})

// Displaying the about section buttons
function openskills () {
    document.getElementById('experience').classList.toggle(experience.style.display = 'none')
    document.getElementById('education').classList.toggle(education.style.display = 'none')
    document.getElementById('skills').classList.toggle(skills.style.display = 'block')
    removes2.classList.remove('active__link')
    removes3.classList.remove('active__link')
    actives1.classList.add('active__link');
}
function openexperience () {
    document.getElementById('experience').classList.toggle(experience.style.display = 'block')
    document.getElementById('education').classList.toggle(education.style.display = 'none')
    document.getElementById('skills').classList.toggle(skills.style.display = 'none')
    removes1.classList.remove('active__link')
    removes3.classList.remove('active__link')
    actives2.classList.add('active__link');
}
function openeducation () {
    document.getElementById('experience').classList.toggle(experience.style.display = 'none')
    document.getElementById('education').classList.toggle(education.style.display = 'block')
    document.getElementById('skills').classList.toggle(skills.style.display = 'none')
    actives3.classList.add('active__link');
    removes1.classList.remove('active__link')
    removes2.classList.remove('active__link')
}

// Nav bar display and un display function
function openmenu () {
    document.getElementById('sidemenu').classList.toggle(sidemenu.style.right = '0')
}
function closemenu () {
    document.getElementById('sidemenu').classList.toggle(sidemenu.style.right = '-210px')
}
