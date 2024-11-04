-- Datos para la tabla Acceso
INSERT INTO Acceso (ID_Acceso, Nombre) VALUES
(1, 'Administrador'),
(2, 'Docente'),
(3, 'Alumno'),
(4, 'Visitante'),
(5, 'Aliado');

-- Datos para la tabla Alumnos
INSERT INTO Alumnos (ID_Alumno, ID_Persona, Semestre, MateriasVencidas, Puntaje) VALUES
(1, 1, 2, 1, 85),
(2, 2, 3, 2, 70),
(3, 3, 1, 0, 95),
(4, 4, 5, 3, 65),
(5, 5, 8, 4, 80);

-- Datos para la tabla Comentario
INSERT INTO Comentario (ID_Comentario, ID_Usuario, ID_Foro, Texto, FechaHora) VALUES
(1, 1, 1, 'Este es un comentario muy interesante.', '2024-09-01 10:00:00'),
(2, 2, 1, 'Gracias por la información.', '2024-09-02 14:30:00'),
(3, 3, 2, 'Me parece que deberíamos discutir más este tema.', '2024-09-03 09:45:00'),
(4, 4, 3, 'Excelente contenido en este foro.', '2024-09-04 16:00:00'),
(5, 5, 2, 'Tengo una pregunta sobre el tema tratado.', '2024-09-05 11:15:00');

-- Datos para la tabla Docente
INSERT INTO Docente (ID_Docente, ID_Persona, AboutMe, GradoEstudio) VALUES
(1, 6, 'Apasionado por la enseñanza de la física.', 'PhD en Física'),
(2, 7, 'Docente de matemáticas con 10 años de experiencia.', 'Maestría en Matemáticas'),
(3, 8, 'Experto en programación y desarrollo de software.', 'Ingeniería de Sistemas'),
(4, 9, 'Investigador en biotecnología.', 'Doctorado en Biotecnología'),
(5, 10, 'Docente de ciencias sociales y filosofía.', 'Maestría en Filosofía');

-- Datos para la tabla Documento
INSERT INTO Documento (ID_Documento, Titulo, DIreccion, Autores, Descripcion) VALUES
(1, 'Introducción a la Física', '/documentos/fisica.pdf', 'John Doe', 'Un texto introductorio de física.'),
(2, 'Matemáticas Avanzadas', '/documentos/matematicas.pdf', 'Jane Smith', 'Un tratado avanzado sobre álgebra y cálculo.'),
(3, 'Desarrollo Web Moderno', '/documentos/webdev.pdf', 'Alice Johnson', 'Guía para desarrollar aplicaciones web modernas.'),
(4, 'Ingeniería de Software', '/documentos/ing_software.pdf', 'Bob Lee', 'Un enfoque práctico en el desarrollo de software.'),
(5, 'Biotecnología Aplicada', '/documentos/biotech.pdf', 'Carlos Méndez', 'Aplicaciones de la biotecnología en la salud.');

-- Datos para la tabla DocumentosLeidos
INSERT INTO DocumentosLeidos (ID_Lectura, ID_Alumno, ID_Documento, Fecha) VALUES
(1, 1, 1, 20240101),
(2, 2, 2, 20240102),
(3, 3, 3, 20240103),
(4, 4, 4, 20240104),
(5, 5, 5, 20240105);

-- Datos para la tabla Foro
INSERT INTO Foro (ID_Foro, Nombre, Tema, ID_Acceso) VALUES
(1, 'Foro de Física', 'Cinemática', 1),
(2, 'Foro de Matemáticas', 'Álgebra', 2),
(3, 'Foro de Programación', 'Desarrollo Web', 3),
(4, 'Foro de Biotecnología', 'Genética', 4),
(5, 'Foro de Filosofía', 'Ética', 5);

-- Datos para la tabla JefeCarrera
INSERT INTO JefeCarrera (ID_Jefe, ID_Persona, Estado) VALUES
(1, 11, 1),
(2, 12, 1),
(3, 13, 1),
(4, 14, 1),
(5, 15, 1);

-- Datos para la tabla Materia
INSERT INTO Materia (ID_Materia, ID_Jefe, Nombre, Descripcion, Estado) VALUES
(1, 1, 'Física I', 'Curso introductorio de física.', 1),
(2, 2, 'Álgebra Lineal', 'Estudio de matrices y vectores.', 1),
(3, 3, 'Programación I', 'Fundamentos de la programación.', 1),
(4, 4, 'Biotecnología', 'Aplicaciones biotecnológicas en la industria.', 1),
(5, 5, 'Ética Filosófica', 'Introducción a la ética y moral.', 1);

-- Datos para la tabla Medalla
INSERT INTO Medalla (ID_Medalla, ID_Documento, Nombre, Puntaje, Imagen) VALUES
(1, 1, 'Medalla de Física', 100, 0x89504E470D0A1A0A),
(2, 2, 'Medalla de Matemáticas', 150, 0x89504E470D0A1A0A),
(3, 3, 'Medalla de Programación', 200, 0x89504E470D0A1A0A),
(4, 4, 'Medalla de Biotecnología', 180, 0x89504E470D0A1A0A),
(5, 5, 'Medalla de Filosofía', 120, 0x89504E470D0A1A0A);

-- Datos para la tabla MedallasGanadas
INSERT INTO MedallasGanadas (ID_Ganada, ID_Alumno, ID_Medalla, Fecha) VALUES
(1, 1, 1, 20240110),
(2, 2, 2, 20240111),
(3, 3, 3, 20240112),
(4, 4, 4, 20240113),
(5, 5, 5, 20240114);

-- Datos para la tabla Noticias
INSERT INTO Noticias (ID_Noticia, ID_Jefe, Nombre, Descripcion, Imagen, FechaInicio, FechaFin) VALUES
(1, 1, 'Congreso de Física', 'Evento de física teórica.', 0x89504E470D0A1A0A, '2024-02-01', '2024-02-05'),
(2, 2, 'Simposio de Matemáticas', 'Discusión sobre álgebra.', 0x89504E470D0A1A0A, '2024-03-01', '2024-03-05'),
(3, 3, 'Hackathon de Programación', 'Competencia de desarrollo.', 0x89504E470D0A1A0A, '2024-04-01', '2024-04-03'),
(4, 4, 'Seminario de Biotecnología', 'Investigaciones recientes.', 0x89504E470D0A1A0A, '2024-05-01', '2024-05-02'),
(5, 5, 'Foro de Filosofía', 'Debate sobre ética y moral.', 0x89504E470D0A1A0A, '2024-06-01', '2024-06-05');

-- Datos para la tabla Persona
INSERT INTO Persona (ID_Persona, ID_Usuario, CI, Ap_Paterno, Ap_Materno) VALUES
(1, 1, '123456789', 'García', 'Lopez'),
(2, 2, '987654321', 'Perez', 'Rodriguez'),
(3, 3, '456789123', 'Martinez', 'Gomez'),
(4, 4, '789123456', 'Sanchez', 'Diaz'),
(5, 5, '321654987', 'Ramirez', 'Morales');

-- Datos para la tabla Pokemon
INSERT INTO Pokemon (ID_Alumno, NombrePokemon, Nivel) VALUES
(1, 'Pikachu', 1),
(2, 'Charmander', 1),
(3, 'Bulbasaur', 2),
(4, 'Squirtle', 3),
(5, 'Eevee', 2);

-- Datos para la tabla Usuario
INSERT INTO Usuario (ID_Usuario, Nombre, correo, Contrasenia, IsDeleted, ID_Acceso) VALUES
(1, 'Juan Perez', 'juan@example.com', '1234', false, 1),
(2, 'Maria Lopez', 'maria@example.com', 'abcd', false, 2),
(3, 'Carlos Ruiz', 'carlos@example.com', 'password', false, 3),
(4, 'Caisi', 'caisi@example.com', 'qwerty', false, 4),
(5, 'Luis Diaz', 'luis@example.com', 'asdfgh', false, 5);


SELECT * FROM pokemon;
