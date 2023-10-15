# React Bootcamp

## COMO CORRER EL PROYECTO

### Frontend

- npm install
- npm run dev

### Backend

- abrir otra terminal en el VSC
- npm install -g json-server
- cd backend
- json-server --watch db.json

### Design / UI

- En la carpeta design se encuentran imagenes de un posible diseno, es solo una guia. con lo cual no es requido seguir el diseno siempre y cuanto cumpla con todos los requirimientos planteados por la letra del ejercicio.

## EJERCICIO

Proyecto: Aplicación de Listado de Tareas (To-Do App)

Nota: Tienen para trabajar con estas library
Material UI, @mui/material y @emotion/react junto con @emotion/styled. (Para el diseño ux asi no tienen que sufrir con estilos).

### DIA 1: Diseño y estructura inicial

Objetivo: Crear la UI y la estructura básica de los componentes utilizando Material UI o Ant Design.

Descripción: La aplicación permitirá a los usuarios añadir, editar, eliminar y marcar como completadas distintas tareas. Además, se podrán filtrar las tareas por su estado (todas, completadas, pendientes).

Componentes sugeridos:

App: Componente principal que alojará los demás componentes y el Context.
TaskList: Muestra la lista de tareas.
Task: Muestra una tarea individual.
AddTaskForm: Formulario para añadir nuevas tareas.
Filter: Permite filtrar las tareas por estado.
Tareas:Crear la estructura básica de componentes.

Diseñar los componentes utilizando un framework de UI.
Establecer el estado inicial utilizando useState.

Utilizar styled-components para ajustar estilos adicionales o sobrescribir estilos del framework de UI elegido.
Implementar algún tipo de validación para el formulario de añadir tareas (p.ej., que no se puedan añadir tareas vacías).

### DIA 2: Lógica y flujos de datos (Expandido)

Objetivo: Implementar la lógica de la aplicación y gestionar los flujos de datos entre componentes utilizando context y hooks.

Descripción: La aplicación deberá gestionar el estado y las funciones que alteran ese estado (añadir, editar, eliminar, filtrar tareas), propagando estos a través de un context y gestionando efectos secundarios con useEffect.

Tareas:
Implementar useContext para gestionar el estado global de la aplicación.

Crear funciones para gestionar las tareas: añadir, eliminar, editar y marcar como completadas.
Implementar la lógica de filtrado utilizando useMemo para optimizar el rendimiento evitando cálculos innecesarios.

Utilizar useEffect para gestionar efectos secundarios, como por ejemplo, almacenar las tareas en el localStorage para que persistan aunque se refresque la página.

Opcionalmente, utilizar useCallback para memorizar funciones si es que estas se pasan como propiedades a componentes que están siendo optimizados con React.memo.
Puntos avanzados:Añadir un modo oscuro/claro a la aplicación y gestionarlo también mediante el contexto para que sea accesible desde cualquier componente.
Utilizar styled-components para ajustar estilos adicionales o sobrescribir estilos del framework de UI elegido.
Implementar algún tipo de validación para el formulario de añadir tareas (p.ej., que no se puedan añadir tareas vacías).

Tareas:Usar useEffect para realizar llamadas a la API cuando el componente se monta y gestionar el estado de la aplicación basado en la respuesta de la API.
Implementar una función fetchTasks que haga una solicitud GET a http://localhost:3000/tasks y actualice el estado de la aplicación con las tareas recuperadas.

Nota:
En tu TaskContext, implementarías el uso de useEffect para realizar el llamado a la API al montar el componente. Además, tu reducer manejará diferentes acciones para actualizar el estado basado en las respuestas de la API.
