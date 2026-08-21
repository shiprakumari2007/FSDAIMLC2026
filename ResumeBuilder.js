const container = document.getElementById("container");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    const resume = document.createElement("div");
    resume.className = "resume";

    const left = document.createElement("div");
    left.className = "left";

    const image = document.createElement("div");
    image.className = "image";
    image.innerText = "Profile Photo";

    const skills = document.createElement("h3");
    skills.innerText = "Skills";

    left.append(image, skills);

    const right = document.createElement("div");
    right.className = "right";

    const name = document.createElement("h1");
    name.innerText = "SHIPRA YADAV(software engneer)";

    const summary = document.createElement("h3");
    summary.innerText = "Profile Summary";

    const education = document.createElement("h3");
    education.innerText = "Education";

    const experience = document.createElement("h3");
    experience.innerText = "Experience";

    const projects = document.createElement("h3");
    projects.innerText = "Projects";

    right.append(name, summary, education, experience, projects);

    resume.append(left, right);

    container.appendChild(resume);

    btn.style.display = "none";
});