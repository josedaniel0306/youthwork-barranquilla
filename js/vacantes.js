// ===========================
// BASE DE DATOS DE VACANTES
// ===========================

const jobs = [

    {
        id:1,
        empresa:"Tecnoglass",
        cargo:"Auxiliar Logístico",
        ciudad:"Barranquilla",
        salario:"$2.000.000",
        modalidad:"Presencial",
        experiencia:"Sin experiencia"
    },

    {
        id:2,
        empresa:"Olímpica",
        cargo:"Asesor Comercial",
        ciudad:"Barranquilla",
        salario:"$2.100.000",
        modalidad:"Tiempo completo",
        experiencia:"Sin experiencia"
    },

    {
        id:3,
        empresa:"Bancolombia",
        cargo:"Analista Administrativo",
        ciudad:"Puerto Colombia",
        salario:"$3.000.000",
        modalidad:"Híbrido",
        experiencia:"1 años"
    },

    {
        id:4,
        empresa:"Grupo Éxito",
        cargo:"Auxiliar de Bodega",
        ciudad:"Malambo",
        salario:"$2.000.000",
        modalidad:"Presencial",
        experiencia:"Sin experiencia"
    },

    {
        id:5,
        empresa:"Claro",
        cargo:"Soporte Técnico",
        ciudad:"Barranquilla",
        salario:"$2.600.000",
        modalidad:"Remoto",
        experiencia:"6 meses"
    },

    {
        id:6,
        empresa:"Sura",
        cargo:"Analista de Talento Humano",
        ciudad:"Soledad",
        salario:"$2.400.000",
        modalidad:"Híbrido",
        experiencia:"6 meses"
    }

];

// ===========================
// CONTENEDOR
// ===========================

const jobsContainer = document.getElementById("jobsContainer");

// ===========================
// MOSTRAR VACANTES
// ===========================

function renderJobs(lista){

    jobsContainer.innerHTML = "";

    lista.forEach(job=>{

        jobsContainer.innerHTML += `

        <div class="job-card">

    <span class="badge">${job.modalidad}</span>

    <h3>${job.cargo}</h3>

    <p>🏢 ${job.empresa}</p>

    <p>📍 ${job.ciudad}</p>

    <p>💰 ${job.salario}</p>

    <p>👨‍💼 ${job.experiencia}</p>

   <a href="detalle-vacante.html?id=${job.id}" class="btn-primary">
    Ver detalles →
</a>
  <button
        class="favorite-btn"
        data-id="${job.id}"
        title="Guardar en favoritos">

        <i class="fa-regular fa-heart"></i>

    </button>

</div>

        `;

    });
        // Pintar favoritos guardados

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    favoritos.forEach(favorito => {

        const boton = document.querySelector(`.favorite-btn[data-id="${favorito.id}"]`);

        if(boton){

            const icono = boton.querySelector("i");

            icono.classList.remove("fa-regular");

            icono.classList.add("fa-solid");

            icono.style.color = "#EF4444";

        }

    });

}

renderJobs(jobs);
// ===========================
// FAVORITOS
// ===========================

document.addEventListener("click", function(e){

    const boton = e.target.closest(".favorite-btn");

    if(!boton) return;

    const id = Number(boton.dataset.id);

    const icono = boton.querySelector("i");

    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const existe = favoritos.find(job => job.id === id);

    if(existe){

        favoritos = favoritos.filter(job => job.id !== id);

        icono.classList.remove("fa-solid");

        icono.classList.add("fa-regular");

        icono.style.color = "";

    }else{

        const vacante = jobs.find(job => job.id === id);

        favoritos.push(vacante);

        icono.classList.remove("fa-regular");

        icono.classList.add("fa-solid");

        icono.style.color = "#EF4444";

    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

});