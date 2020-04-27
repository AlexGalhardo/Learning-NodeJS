-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 17, 2020 at 08:02 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nails`
--

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `id` int(8) NOT NULL,
  `zip_code` char(8) NOT NULL,
  `street` varchar(250) NOT NULL,
  `street_number` varchar(50) NOT NULL,
  `neighborhood` varchar(250) DEFAULT NULL,
  `city` varchar(250) DEFAULT NULL,
  `state` char(2) NOT NULL,
  `usr_id` int(11) NOT NULL,
  `lat` float(10,8) DEFAULT NULL,
  `lng` float(11,8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`id`, `zip_code`, `street`, `street_number`, `neighborhood`, `city`, `state`, `usr_id`, `lat`, `lng`) VALUES
(2, '05373020', 'Rua Mafalda Favaro', '80', 'JD ester', NULL, 'SP', 1, NULL, NULL),
(3, '05373010', 'Rua Chatuba', '80', 'JD ester', NULL, 'RJ', 2, NULL, NULL),
(4, '05373010', 'Rua Pampulhax', '80', 'Pampulha', NULL, 'GO', 2, NULL, NULL),
(5, '66666666', 'Rua Isidoro Favaro', '78', 'Jd Ester', 'São Paulo', 'SP', 1, NULL, NULL),
(6, '66666666', 'Rua Isidoro Favaro', '78', 'Jd Ester', 'São Paulo', 'SP', 1, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_usr_id` (`usr_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `locations`
--
ALTER TABLE `locations`
  ADD CONSTRAINT `fk_locations_users` FOREIGN KEY (`usr_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
