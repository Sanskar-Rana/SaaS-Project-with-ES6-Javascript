document.querySelector(".button-container").addEventListener("click", () => {
    let text = document.getElementById('filter-jobs').value;
    console.log(text, 'this is text?');
})


function getJobs() {
    return fetch("data.json")
        .then(response => response.json())
        .then(data => {
            return data
        })
}

function showJobs(jobs) {
    console.log(jobs);
    let jobsContainer = document.querySelector(".jobs-container");
    let jobsHTML = "";
    jobs.forEach(job => {
        jobsHTML += `
       <div class="job-tile">
       <div class="top">
           <img src="${job.logo}" alt="logo-img">
           <i class="fas fa-ellipsis-h"></i>
       </div>
       <div class="rolename">
           <span>${job.roleName}</span>
       </div>
       <div class="description">
           <span>${job.requirements.content}</span>
       </div>
       <div class="buttons">
           <div class="button apply-now">
               Apply Now
           </div>
           <div class="button">
               Message
           </div>
       </div>
   </div>
       `
    })
    jobsContainer.innerHTML = jobsHTML;

}
getJobs().then(data => {
    showJobs(data);
});