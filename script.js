document.addEventListener('DOMContentLoaded', function () {
    const projectContents = document.querySelectorAll('.project-content');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    let currentProject = 0;

    function showProject(projectIndex) {
        projectContents.forEach((project, index) => {
            project.classList.remove('active');
            if (index === projectIndex) {
                project.classList.add('active');
            }
        });
    }

    prevButton.addEventListener('click', function () {
        currentProject = (currentProject - 1 + projectContents.length) % projectContents.length;
        showProject(currentProject);
    });

    nextButton.addEventListener('click', function () {
        currentProject = (currentProject + 1) % projectContents.length;
        showProject(currentProject);
    });

    // Show the initial project (Fetrust)
    showProject(currentProject);
});