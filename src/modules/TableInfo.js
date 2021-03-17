var info_table = [
    {
        proceso : "Comunicación",
        tematica: "Validación de plan anual de comunicación y sus modificaciones (todos los capítulos)",
        periodicidad: "Anual",
        naturaleza: "Consultivo"
    },

    {
        proceso : "Comunicación",
        tematica: "Divulgación elementos de comunicación (marca, alineación intangibles, reputación)",
        periodicidad: "Demanda",
        naturaleza: "Informativo"
    },

    {
        proceso : "Planeación Estratégica O&T",
        tematica: "Plan estratégico O&T (y su seguimiento) (incluye inclusión, nuevos skills, cultura y cambio)",
        periodicidad: "Anual",
        naturaleza: "Informativo"
    },

    {
        proceso : "Planeación Estratégica O&T",
        tematica: "Divulgación Programa Experiencia Empleado (bienestar y beneficios)",
        periodicidad: "Anual",
        naturaleza: "Informativo"
    },

    {
        proceso : "Planeación Estratégica O&T",
        tematica: "Divulgación esquema compensación",
        periodicidad: "Anual",
        naturaleza: "Informativo"
    },

    {
        proceso : "Planeación Estratégica O&T",
        tematica: "Divulgación propuesta despliegue objetivos individuales",
        periodicidad: "Anual",
        naturaleza: "Informativo"
    },

    {
        proceso : "Planeación Estratégica O&T",
        tematica: "Divulgación curva de desempeño",
        periodicidad: "Demanda",
        naturaleza: "Informativo"
    },

    {
        proceso : "Planeación Estratégica O&T",
        tematica: "Aprobar calibración de desempeño",
        periodicidad: "Anual",
        naturaleza: "Decisorio"
    },

    {
        proceso : "Planeación Estratégica O&T",
        tematica: "Divulgación PED",
        periodicidad: "Anual",
        naturaleza: "Informativo"
    },

    {
        proceso : "Planeación Estratégica O&T",
        tematica: "Presentación cierre proyectos programa Talentum para cada período",
        periodicidad: "Semestral",
        naturaleza: "Informativo"
    },

    {
        proceso : "Planeación Estratégica O&T",
        tematica: "Divulgación hoja de ruta de cultura y cambio",
        periodicidad: "Demanda",
        naturaleza: "Informativo"
    },

    {
        proceso : "Planeación Estratégica O&T",
        tematica: "Análisis y revisión del modelo de liderazgo",
        periodicidad: "Demanda",
        naturaleza: "Consultivo"
    },

    {
        proceso : "Planeación Estratégica O&T",
        tematica: "Divulgación programa de liderazgo",
        periodicidad: "Demanda",
        naturaleza: "Informativo"
    },

    {
        proceso : "Administración de Personal",
        tematica: "Revisión estado cartera  préstamos empleados (libre destinación e hipotecario)",
        periodicidad: "Demanda",
        naturaleza: "Informativo"
    }
]

const showInfoTable = () =>{
    const body_table = document.getElementById('tbody-agenda')

    if(body_table){
        for (const item of info_table) {
            body_table.innerHTML += `
             <tr>
                 <td class="text-secondary">${item.proceso}</td>
                 <td>${item.tematica}</td>
                 <td class="text-center">${item.periodicidad}</td>
                 <td class="text-center">${item.naturaleza}</td>
             </tr>
            `
         }
    }
}

export default showInfoTable