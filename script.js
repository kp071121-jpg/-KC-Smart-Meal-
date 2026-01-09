// KC Smart Meal - Lógica base

// Configuración inicial
let configuracion = {
  adultos: 3,
  ninos: 1,
  totalPersonas: 4
};

// Inventario
let inventario = {
  refri: [],
  alacena: []
};

// Función para actualizar personas
function actualizarPersonas(adultos, ninos) {
  configuracion.adultos = adultos;
  configuracion.ninos = ninos;
  configuracion.totalPersonas = adultos + ninos;
  console.log("Personas actualizadas:", configuracion);
}

// Función para agregar alimentos al inventario
function agregarAlimento(lugar, nombre, cantidad, unidad) {
  inventario[lugar].push({
    nombre,
    cantidad,
    unidad
  });
  console.log("Inventario actualizado:", inventario);
}

// Ejemplos iniciales (pueden borrarse después)
actualizarPersonas(3, 1);
agregarAlimento("refri", "Pollo", 2, "kg");
agregarAlimento("alacena", "Arroz", 1, "kg");
