-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 08, 2021 at 10:52 AM
-- Server version: 8.0.17
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_tata`
--

-- --------------------------------------------------------

--
-- Table structure for table `persona`
--

CREATE TABLE `persona` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `altura` varchar(50) NOT NULL,
  `masa` varchar(100) NOT NULL,
  `color_cabello` varchar(50) NOT NULL,
  `color_piel` varchar(20) NOT NULL,
  `color_ojos` varchar(50) NOT NULL,
  `anio_nacimiento` varchar(50) NOT NULL,
  `sexo` varchar(1000) NOT NULL,
  `planeta_natal` varchar(50) NOT NULL,
  `peliculas` varchar(1000) NOT NULL,
  `especies` varchar(1000) NOT NULL,
  `vehiculos` varchar(1000) NOT NULL,
  `naves` varchar(1000) NOT NULL,
  `creado` varchar(50) NOT NULL,
  `editado` varchar(50) NOT NULL,
  `url` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `planeta`
--

CREATE TABLE `planeta` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `clima` varchar(100) NOT NULL,
  `diametro` varchar(50) NOT NULL,
  `gravedad` varchar(20) NOT NULL,
  `periodo_orbital` varchar(50) NOT NULL,
  `poblacion` varchar(50) NOT NULL,
  `habitantes` varchar(1000) NOT NULL,
  `periodo_rotacion` varchar(50) NOT NULL,
  `superficie_agua` varchar(50) NOT NULL,
  `terreno` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `peliculas` varchar(1000) NOT NULL,
  `creado` varchar(50) NOT NULL,
  `editado` varchar(50) NOT NULL,
  `url` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for table `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `planeta`
--
ALTER TABLE `planeta`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
