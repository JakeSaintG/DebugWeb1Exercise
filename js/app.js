const siteData = {
    name: "Misha",
    skills: ["HTML", "CSS", "Javascript", "being fluffy"],
    jobSearch: ["Looking for work", "Open to new work", "Not Looking for work"],
};

function populateData() {
    // Show profile div but changing display from none to flex. Also hides button.
    document.getElementById('profile').style.display = 'flex';
    document.getElementById('show-profile').style.display = 'none';

    let detailsDiv = document.getElementById('details');

    // Add name to details div.
    const name = document.createElement('p')
    name.textContent = `Name: ${siteData.name}`;
    detailsDiv.appendChild(name);

    // Add job searching to details div.
    const jobSearching = document.createElement('p')
    /*====== Fix 6: job searching =====*/
    jobSearching.textContent = `Currently: ${siteData.jobSearch[0]}`;
    detailsDiv.appendChild(jobSearching);
    
    // Add skills to details div.
    const skills = document.createElement('p')

    /*====== Fix 7: trailing comma =====*/
    let skillsTxt = `Skills: ${siteData.skills.join(", ")}`

    skills.textContent = skillsTxt;
    detailsDiv.appendChild(skills);
};