// ===============================
// BASE DE DATOS
// ===============================

const jobs = [

    {
        id:1,
        empresa:"Tecnoglass",
        cargo:"Auxiliar Logístico",
        ciudad:"Barranquilla",
        salario:"$2.200.000",
        modalidad:"Presencial",
        experiencia:"1 año",
        descripcion:"Apoyar el control de inventarios y la distribución de mercancía."
    },

    {
        id:2,
        empresa:"Olímpica",
        cargo:"Asesor Comercial",
        ciudad:"Barranquilla",
        salario:"$1.800.000",
        modalidad:"Tiempo completo",
        experiencia:"Sin experiencia",
        descripcion:"Atención al cliente y ventas en punto físico."
    },

    {
        id:3,
        empresa:"Bancolombia",
        cargo:"Analista Administrativo",
        ciudad:"Medellín",
        salario:"$3.000.000",
        modalidad:"Híbrido",
        experiencia:"2 años",
        descripcion:"Gestión de procesos administrativos y elaboración de informes."
    },

    {
        id:4,
        empresa:"Grupo Éxito",
        cargo:"Auxiliar de Bodega",
        ciudad:"Bogotá",
        salario:"$1.900.000",
        modalidad:"Presencial",
        experiencia:"6 meses",
        descripcion:"Recepción, almacenamiento y despacho de mercancía."
    },

    {
        id:5,
        empresa:"Claro",
        cargo:"Soporte Técnico",
        ciudad:"Bogotá",
        salario:"$2.600.000",
        modalidad:"Remoto",
        experiencia:"1 año",
        descripcion:"Brindar soporte técnico a clientes y usuarios."
    },

    {
        id:6,
        empresa:"Sura",
        cargo:"Analista de Talento Humano",
        ciudad:"Medellín",
        salario:"$3.400.000",
        modalidad:"Híbrido",
        experiencia:"2 años",
        descripcion:"Gestionar procesos de selección y bienestar organizacional."
    }

];

// ===============================
// LEER EL ID
// ===============================

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const job = jobs.find(item => item.id === id);

// ===============================
// MOSTRAR INFORMACIÓN
// ===============================

if(job){

    document.getElementById("detalleCargo").textContent = job.cargo;
    document.getElementById("detalleEmpresa").textContent = job.empresa;
    document.getElementById("detalleCiudad").textContent = job.ciudad;
    document.getElementById("detalleSalario").textContent = job.salario;
    document.getElementById("detalleExperiencia").textContent = job.experiencia;
    document.getElementById("detalleModalidad").textContent = job.modalidad;
    document.getElementById("detalleDescripcion").textContent = job.descripcion;

}
const btnPostular = document.getElementById("btnPostular");

const modal = document.getElementById("modalPostulacion");

const cerrarModal = document.getElementById("cerrarModal");

btnPostular.addEventListener("click",()=>{

    modal.style.display="flex";

});

cerrarModal.addEventListener("click",()=>{

    modal.style.display="none";

});

window.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

});

document
.getElementById("formPostulacion")
.addEventListener("submit",function(e){

    e.preventDefault();

    alert("🎉 ¡Tu postulación fue enviada correctamente!");

    this.reset();

    modal.style.display="none";

});