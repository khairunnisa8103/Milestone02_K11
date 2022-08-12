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

    const projectHeight = 9/16 * projectWidth
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
                <h1 class="project-title underlined">${proj.title}</h1>
                <p class="project-desc">${proj.desc}</p>
            </div>
        </div>`
        ).join('');

    adaptProjectView();
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

document.addEventListener("DOMContentLoaded", function(e) {
    adaptProjectView();
    renderProjects(POPULAR_PROJECTS, popularProjectsButton);
})

window.addEventListener("resize", function(e) {
    adaptProjectView();
})