// DUMMY DATA FOR PROJECTS
const POPULAR_PROJECTS = [
    {
        id: 1,
        title: 'Popular Project 1',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.`
    },
    {
        id: 2,
        title: 'Popular Project 2',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.`
    },
    {
        id: 3,
        title: 'Popular Project 3',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.`
    },
    {
        id: 4,
        title: 'Popular Project 4',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.`
    },
]

const NEW_PROJECTS = [
    {
        id: 1,
        title: 'New Project 1',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.`
    },
    {
        id: 2,
        title: 'New Project 2',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.`
    },
    {
        id: 3,
        title: 'New Project 3',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.`
    },
]

const ENDING_SOON_PROJECTS = [
    {
        id: 1,
        title: 'Ending Soon Project 1',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.`
    }
]

// MAKING PROJECT VIEW RESPONSIVE
function adaptProjectView() {
    const projects = document.getElementsByClassName('project');
    const projectWidth = projects[0].clientWidth;

    const projectHeight = 12/16 * projectWidth
    for (let i = 0; i < projects.length; i++) {
        projects[i].style.height = projectHeight + 'px';
    }
}

// RENDERING DATA BASED ON OPENED TAB
function renderProjects(projArr, button) {
    const projectButtons = document.getElementsByClassName('project-nav-item'); 
    for (let i = 0; i < projectButtons.length; i++) {
        projectButtons[i].classList.remove("underlined");
    }

    button.classList.add("underlined");
    document.getElementById('projects-container').innerHTML = projArr.map(proj => 
        `<div class="project">
            <div class="project-desc-container">
                <a class="project-title underlined clickable" href="../views/feed.html">${proj.title}</a>
                <p class="project-desc">${proj.desc}</p>
            </div>
        </div>`
        ).join('');
}


const popularProjectsButton = document.getElementById('popular-projects');
popularProjectsButton.addEventListener("click", function(){
    renderProjects(POPULAR_PROJECTS, popularProjectsButton);
});

const newProjectsButton = document.getElementById('new-projects');
newProjectsButton.addEventListener("click", function(){
    renderProjects(NEW_PROJECTS, newProjectsButton);
});

const endSoonProjectsButton = document.getElementById('endsoon-projects');
endSoonProjectsButton.addEventListener("click", function(){
    renderProjects(ENDING_SOON_PROJECTS, endSoonProjectsButton);
});

let searchTabOpen = false;
let recentSearchs = [];

const handleAllClickables = () => {
    const searchButton = document.getElementById('search-button');
    const searchTab = document.getElementsByClassName('search-tab');

    searchButton.addEventListener('click', function(){
        searchTab[0].classList.add('shown');
        searchTabOpen = true;
    })

    const exitSearchButton = document.getElementById('exit-search');
    exitSearchButton.addEventListener('click', function(){
        searchTab[0].classList.remove('shown');
        searchTabOpen = false;
    })
}

// RENDER ON START AND RESIZE
document.addEventListener("DOMContentLoaded", function() {
    adaptProjectView();
    renderProjects(POPULAR_PROJECTS, popularProjectsButton);

    handleAllClickables();
})

window.addEventListener("resize", function() {
    adaptProjectView();
})