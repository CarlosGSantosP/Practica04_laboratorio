function obtenerActividad(dia) {
    switch (dia.toLowerCase()) {
        case "lunes":
            return "Atender un cliente específico.";
        case "martes":
            return "Visito una agencia fuera de la ciudad.";
        case "miércoles":
            return "Llevar a mi hija al ballet.";
        case "jueves":
            return "Priorizar entregas de desarrollo.";
        case "viernes":
            return "Atender problemas de manera remota.";
        case "sábado":
            return "Hacer lo que mi esposa quiera.";
        default:
            return "Ese día no está registrado.";
    }
}

function mostrarRecordatorio() {
    const dia = document.getElementById("dia").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!dia) {
        document.getElementById("resultado").innerHTML = 
            "Selecciona un día.";
        return;
    }

    const actividad = obtenerActividad(dia);
    document.getElementById("resultado").innerHTML = 
        `<p>Hoy es <b>${dia}</b>. Actividad: ${actividad}</p>
         <p>Tu recordatorio: ${mensaje || "Ninguno"}</p>`;
}
