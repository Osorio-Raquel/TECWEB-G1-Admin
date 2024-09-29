DROP DATABASE IF EXISTS AdminPortalWeb;
CREATE DATABASE AdminPortalWeb;
USE AdminPortalWeb;

-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2024-09-29 14:47:48.384

-- tables
-- Table: Acceso
CREATE TABLE Acceso (
    ID_Acceso int  NOT NULL,
    Nombre varchar(30)  NOT NULL,
    CONSTRAINT Acceso_pk PRIMARY KEY (ID_Acceso)
);

-- Table: Alumnos
CREATE TABLE Alumnos (
    ID_Alumno int  NOT NULL,
    ID_Persona int  NOT NULL,
    Semestre int  NOT NULL,
    MateriasVencidas int  NOT NULL,
    Puntaje int  NOT NULL,
    CONSTRAINT Alumnos_pk PRIMARY KEY (ID_Alumno)
);

-- Table: Comentario
CREATE TABLE Comentario (
    ID_Comentario int  NOT NULL,
    ID_Usuario int  NOT NULL,
    ID_Foro int  NOT NULL,
    Texto varchar(400)  NOT NULL,
    FechaHora timestamp  NOT NULL,
    CONSTRAINT Comentario_pk PRIMARY KEY (ID_Comentario)
);

-- Table: Docente
CREATE TABLE Docente (
    ID_Docente int  NOT NULL,
    ID_Persona int  NOT NULL,
    AboutMe varchar(100)  NOT NULL,
    GradoEstudio varchar(50)  NOT NULL,
    CONSTRAINT Docente_pk PRIMARY KEY (ID_Docente)
);

-- Table: Documento
CREATE TABLE Documento (
    ID_Documento int  NOT NULL,
    Titulo varchar(50)  NOT NULL,
    DIreccion varchar(200)  NOT NULL,
    Autores varchar(200)  NOT NULL,
    Descripcion varchar(100)  NOT NULL,
    CONSTRAINT Documento_pk PRIMARY KEY (ID_Documento)
);

-- Table: DocumentosLeidos
CREATE TABLE DocumentosLeidos (
    ID_Lectura int  NOT NULL,
    ID_Alumno int  NOT NULL,
    ID_Documento int  NOT NULL,
    Fecha int  NOT NULL,
    CONSTRAINT DocumentosLeidos_pk PRIMARY KEY (ID_Lectura)
);

-- Table: Foro
CREATE TABLE Foro (
    ID_Foro int  NOT NULL,
    Nombre varchar(50)  NOT NULL,
    Tema varchar(50)  NOT NULL,
    ID_Acceso int  NOT NULL,
    CONSTRAINT Foro_pk PRIMARY KEY (ID_Foro)
);

-- Table: JefeCarrera
CREATE TABLE JefeCarrera (
    ID_Jefe int  NOT NULL,
    ID_Persona int  NOT NULL,
    Estado int  NOT NULL,
    CONSTRAINT JefeCarrera_pk PRIMARY KEY (ID_Jefe)
);

-- Table: Materia
CREATE TABLE Materia (
    ID_Materia int  NOT NULL,
    ID_Jefe int  NOT NULL,
    Nombre varchar(30)  NOT NULL,
    Descripcion varchar(150)  NOT NULL,
    Estado bool  NOT NULL,
    CONSTRAINT Materia_pk PRIMARY KEY (ID_Materia)
);

-- Table: Medalla
CREATE TABLE Medalla (
    ID_Medalla int  NOT NULL,
    ID_Documento int  NOT NULL,
    Nombre varchar(50)  NOT NULL,
    Puntaje int  NOT NULL,
    Imagen blob  NOT NULL,
    CONSTRAINT Medalla_pk PRIMARY KEY (ID_Medalla)
);

-- Table: MedallasGanadas
CREATE TABLE MedallasGanadas (
    ID_Ganada int  NOT NULL,
    ID_Alumno int  NOT NULL,
    ID_Medalla int  NOT NULL,
    Fecha int  NOT NULL,
    CONSTRAINT MedallasGanadas_pk PRIMARY KEY (ID_Ganada)
);

-- Table: Noticias
CREATE TABLE Noticias (
    ID_Noticia int  NOT NULL,
    ID_Jefe int  NOT NULL,
    Nombre varchar(50)  NOT NULL,
    Descripcion varchar(100)  NOT NULL,
    Imagen blob  NOT NULL,
    FechaInicio date  NOT NULL,
    FechaFin date  NOT NULL,
    CONSTRAINT Noticias_pk PRIMARY KEY (ID_Noticia)
);

-- Table: Persona
CREATE TABLE Persona (
    ID_Persona int  NOT NULL,
    ID_Usuario int  NOT NULL,
    CI varchar(12)  NOT NULL,
    Ap_Paterno varchar(30)  NOT NULL,
    Ap_Materno varchar(30)  NOT NULL,
    CONSTRAINT Persona_pk PRIMARY KEY (ID_Persona)
);

-- Table: Pokemon
CREATE TABLE Pokemon (
    ID_Alumno int  NOT NULL,
    NombrePokemon varchar(20)  NOT NULL,
    Nivel int  NOT NULL,
    CONSTRAINT Pokemon_pk PRIMARY KEY (ID_Alumno)
);

-- Table: Usuario
CREATE TABLE Usuario (
    ID_Usuario int  NOT NULL,
    Nombre varchar(50)  NOT NULL,
    correo varchar(100)  NOT NULL,
    Contrasenia varchar(50)  NOT NULL,
    IsDeleted bool  NOT NULL,
    ID_Acceso int  NOT NULL,
    CONSTRAINT Usuario_pk PRIMARY KEY (ID_Usuario)
);

-- End of file.

