const searchInput = document.getElementById("searchInput");

const jobs = document.querySelectorAll(".job-card");

searchInput.addEventListener("keyup", function () {

    const text = searchInput.value.toLowerCase();

    jobs.forEach(job => {

        const content = job.innerText.toLowerCase();

        if(content.includes(text)){

            job.style.display = "block";

        }else{

            job.style.display = "none";

        }

    });

});
// CONTADORES

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 100;

        const updateCounter = () => {

            if(current < target){

                current += increment;

                counter.innerText = Math.ceil(current);

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target.toLocaleString();

            }

        };

        updateCounter();

    });

};

const statsSection = document.querySelector(".stats");

let started = false;

window.addEventListener("scroll", () => {

    const position = statsSection.getBoundingClientRect().top;

    const screen = window.innerHeight;

    if(position < screen && !started){

        started = true;

        startCounters();

    }

});