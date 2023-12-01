-- MariaDB dump 10.19  Distrib 10.5.15-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: taquillawebbd
-- ------------------------------------------------------
-- Server version	10.5.15-MariaDB-0+deb11u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tcines`
--

DROP TABLE IF EXISTS `tcines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tcines` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cineNombre` varchar(25) NOT NULL,
  `cineLogo` varchar(255) NOT NULL,
  `cantidadSalas` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tcines`
--

LOCK TABLES `tcines` WRITE;
/*!40000 ALTER TABLE `tcines` DISABLE KEYS */;
INSERT INTO `tcines` VALUES (1,'Cines Austin','https://raw.githubusercontent.com/alberto22-23/PFC_DAW/main/figurasTW/logos/logo_Austin.jpg',3),(2,'Cines TMA','https://raw.githubusercontent.com/alberto22-23/PFC_DAW/main/figurasTW/logos/logo_TMA.jpg',5),(3,'Cines Mix','https://raw.githubusercontent.com/alberto22-23/PFC_DAW/main/figurasTW/logos/logo_Mix.jpg',6);
/*!40000 ALTER TABLE `tcines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tentradas`
--

DROP TABLE IF EXISTS `tentradas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tentradas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_pelicula` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_cine` int(11) NOT NULL,
  `fecha` varchar(25) DEFAULT NULL,
  `entradaPrecioUnitario` double NOT NULL,
  `entradaCantButacas` int(11) NOT NULL,
  `entradaPrecioTotal` double NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tPeliculas_id_pelicula_tEntradas` (`id_pelicula`),
  KEY `tCines_id_cine_tEntradas` (`id_cine`),
  KEY `tUsuarios_id_usuario_tEntradas` (`id_usuario`),
  CONSTRAINT `tCines_id_cine_tEntradas` FOREIGN KEY (`id_cine`) REFERENCES `tcines` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `tPeliculas_id_pelicula_tEntradas` FOREIGN KEY (`id_pelicula`) REFERENCES `tpeliculas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `tUsuarios_id_usuario_tEntradas` FOREIGN KEY (`id_usuario`) REFERENCES `tusuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=396 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tentradas`
--

LOCK TABLES `tentradas` WRITE;
/*!40000 ALTER TABLE `tentradas` DISABLE KEYS */;
INSERT INTO `tentradas` VALUES (16,1,1,1,'20230515_3_1',6.5,3,19.5),(17,1,4,1,'20230515_3_1',6.5,5,32.5),(18,6,1,2,'20230510_2_8',8.5,5,42.5),(19,10,2,3,'20230507_3_13',8.5,4,34),(20,10,2,3,'20230507_3_14',8.5,4,34),(21,5,2,2,'20230507_1_5',7.5,3,22.5),(22,1,5,1,'20230515_3_1',6.5,2,13),(23,8,2,3,'20230522_2_11',7.5,4,30),(24,10,2,3,'20230507_3_13',8.5,4,34),(25,10,4,3,'20230507_3_14',8.5,4,34),(26,5,2,2,'20230507_1_5',7.5,3,22.5),(27,4,1,2,'20230531_1_4',7.5,3,22.5),(28,10,4,3,'20230507_3_14',8.5,4,34),(29,5,4,2,'20230514_1_5',7.5,3,22.5),(30,7,2,2,'20230512_1_7',7.5,4,30),(31,6,1,2,'20230513_1_8',8.5,3,25.5),(32,6,4,2,'20230515_1_6',8.5,4,34),(33,4,5,3,'20230511_1_9',7.5,2,15),(34,8,4,3,'20230512_1_11',7.5,5,37.5),(35,9,2,3,'20230512_1_12',7.5,5,37.5),(36,3,1,3,'20230513_1_10',8.5,5,42.5),(37,6,1,2,'20230510_2_8',8.5,5,42.5),(38,8,2,3,'20230522_2_11',7.5,4,30),(39,10,2,3,'20230507_3_13',8.5,4,34),(40,5,2,2,'20230507_1_5',7.5,3,22.5),(41,6,1,2,'20231102_2_8',8.5,5,42.5),(42,6,1,2,'20231102_2_8',8.5,5,42.5),(43,5,8,2,'20231120_1_5',7.5,3,22.5),(44,5,8,2,'20231120_1_5',7.5,3,22.5),(45,5,8,2,'20231120_1_5',7.5,3,22.5),(46,5,8,2,'20231120_1_5',7.5,3,22.5),(47,5,8,2,'20231120_1_5',7.5,3,22.5),(48,5,8,2,'20231120_1_5',7.5,3,22.5),(49,5,8,2,'20231120_1_5',7.5,3,22.5),(50,5,8,2,'20231120_1_5',7.5,3,22.5),(51,5,8,2,'20231120_1_5',7.5,3,22.5),(52,5,8,2,'20231120_1_5',7.5,3,22.5),(53,5,8,2,'20231120_1_5',7.5,3,22.5),(54,5,8,2,'20231120_1_5',7.5,3,22.5),(55,5,8,2,'20231120_1_5',7.5,3,22.5),(56,5,8,2,'20231120_1_5',7.5,3,22.5),(57,5,8,2,'20231120_1_5',7.5,3,22.5),(58,5,8,2,'20231120_1_5',7.5,3,22.5),(59,5,8,2,'20231120_1_5',7.5,3,22.5),(60,5,8,2,'20231120_1_5',7.5,3,22.5),(61,5,8,2,'20231120_1_5',7.5,3,22.5),(62,5,8,2,'20231120_1_5',7.5,3,22.5),(63,5,8,2,'20231120_1_5',7.5,3,22.5),(64,5,8,2,'20231120_1_5',7.5,3,22.5),(65,5,8,2,'20231120_1_5',7.5,3,22.5),(66,5,8,2,'20231120_1_5',7.5,3,22.5),(67,5,8,2,'20231120_1_5',7.5,3,22.5),(68,5,8,2,'20231120_1_5',7.5,3,22.5),(69,4,8,3,'20231122_2_9',7.5,2,15),(70,4,8,3,'20231122_2_9',7.5,2,15),(71,4,8,3,'20231122_2_9',7.5,2,15),(72,4,8,3,'20231122_2_9',7.5,2,15),(73,4,8,3,'20231122_2_9',7.5,2,15),(74,4,8,3,'20231122_2_9',7.5,2,15),(75,4,8,3,'20231122_2_9',7.5,2,15),(76,4,8,3,'20231122_2_9',7.5,2,15),(77,4,8,3,'20231122_2_9',7.5,2,15),(78,4,8,3,'20231122_2_9',7.5,2,15),(79,4,8,3,'20231122_2_9',7.5,2,15),(80,4,8,3,'20231122_2_9',7.5,2,15),(81,4,8,3,'20231122_2_9',7.5,2,15),(82,4,8,3,'20231122_2_9',7.5,2,15),(83,4,8,3,'20231122_2_9',7.5,2,15),(84,4,8,3,'20231122_2_9',7.5,2,15),(85,4,8,3,'20231122_2_9',7.5,2,15),(86,4,8,3,'20231122_2_9',7.5,2,15),(87,4,8,3,'20231122_2_9',7.5,2,15),(88,4,8,3,'20231122_2_9',7.5,2,15),(89,4,8,3,'20231122_2_9',7.5,2,15),(90,4,8,3,'20231122_2_9',7.5,2,15),(91,4,8,3,'20231122_2_9',7.5,2,15),(92,4,8,3,'20231122_2_9',7.5,2,15),(93,4,8,3,'20231122_2_9',7.5,2,15),(94,4,8,3,'20231122_2_9',7.5,2,15),(95,4,8,3,'20231122_2_9',7.5,2,15),(96,4,8,3,'20231122_2_9',7.5,2,15),(97,4,8,3,'20231122_2_9',7.5,2,15),(98,4,8,3,'20231122_2_9',7.5,2,15),(99,4,8,3,'20231122_2_9',7.5,2,15),(100,4,8,3,'20231122_2_9',7.5,2,15),(101,4,8,3,'20231122_2_9',7.5,2,15),(102,4,8,3,'20231122_2_9',7.5,2,15),(103,4,8,3,'20231122_2_9',7.5,2,15),(104,4,8,3,'20231122_2_9',7.5,2,15),(105,4,8,3,'20231122_1_9',7.5,2,15),(106,4,8,3,'20231122_1_9',7.5,2,15),(107,4,8,3,'20231122_1_9',7.5,2,15),(108,4,8,3,'20231122_1_9',7.5,2,15),(109,4,8,3,'20231122_1_9',7.5,2,15),(110,4,8,3,'20231122_1_9',7.5,2,15),(111,4,8,3,'20231122_1_9',7.5,2,15),(112,4,8,3,'20231122_1_9',7.5,2,15),(113,4,8,3,'20231122_1_9',7.5,2,15),(114,4,8,3,'20231122_1_9',7.5,2,15),(115,4,8,3,'20231122_1_9',7.5,2,15),(116,4,8,3,'20231122_1_9',7.5,2,15),(117,4,8,3,'20231122_1_9',7.5,2,15),(118,4,8,3,'20231122_1_9',7.5,2,15),(119,4,8,3,'20231122_1_9',7.5,2,15),(120,4,8,3,'20231122_1_9',7.5,2,15),(121,4,8,3,'20231122_1_9',7.5,2,15),(122,4,8,3,'20231122_1_9',7.5,2,15),(123,4,8,3,'20231122_1_9',7.5,2,15),(124,4,8,3,'20231122_1_9',7.5,2,15),(125,4,8,3,'20231122_1_9',7.5,2,15),(126,4,8,3,'20231122_1_9',7.5,2,15),(127,4,8,3,'20231122_1_9',7.5,2,15),(128,4,8,3,'20231122_1_9',7.5,2,15),(129,4,8,3,'20231122_1_9',7.5,2,15),(130,4,8,3,'20231122_1_9',7.5,2,15),(131,4,8,3,'20231122_1_9',7.5,2,15),(132,4,8,3,'20231122_1_9',7.5,2,15),(133,4,8,3,'20231122_1_9',7.5,2,15),(134,4,8,3,'20231122_1_9',7.5,2,15),(135,4,8,3,'20231122_1_9',7.5,2,15),(136,4,8,3,'20231122_1_9',7.5,2,15),(137,4,8,3,'20231122_1_9',7.5,2,15),(138,4,8,3,'20231122_1_9',7.5,2,15),(139,4,8,3,'20231122_1_9',7.5,2,15),(140,4,8,3,'20231120_2_9',7.5,2,15),(141,4,8,3,'20231120_2_9',7.5,2,15),(142,4,8,3,'20231120_2_9',7.5,2,15),(143,4,8,3,'20231120_2_9',7.5,2,15),(144,4,8,3,'20231120_2_9',7.5,2,15),(145,4,8,3,'20231120_2_9',7.5,2,15),(146,4,8,3,'20231120_2_9',7.5,2,15),(147,4,8,3,'20231120_2_9',7.5,2,15),(148,4,8,3,'20231120_2_9',7.5,2,15),(149,4,8,3,'20231120_2_9',7.5,2,15),(150,4,8,3,'20231120_2_9',7.5,2,15),(151,4,8,3,'20231120_2_9',7.5,2,15),(152,4,8,3,'20231120_2_9',7.5,2,15),(153,4,8,3,'20231120_2_9',7.5,2,15),(154,4,8,3,'20231120_2_9',7.5,2,15),(155,4,8,3,'20231120_2_9',7.5,2,15),(156,4,8,3,'20231120_2_9',7.5,2,15),(157,4,8,3,'20231120_2_9',7.5,2,15),(158,1,2,1,'20231121_1_1',6.5,2,13),(159,1,2,1,'20231121_1_1',6.5,2,13),(160,1,2,1,'20231121_1_1',6.5,2,13),(161,1,2,1,'20231121_1_1',6.5,2,13),(162,1,2,1,'20231121_1_1',6.5,2,13),(163,1,2,1,'20231125_1_1',6.5,2,13),(164,1,2,1,'20231125_1_1',6.5,2,13),(165,1,2,1,'20231125_1_1',6.5,2,13),(166,1,2,1,'20231125_1_1',6.5,2,13),(167,1,2,1,'20231125_1_1',6.5,2,13),(168,10,2,3,'20231125_2_13',8.5,2,17),(169,10,2,3,'20231125_2_13',8.5,2,17),(170,10,2,3,'20231125_2_13',8.5,2,17),(171,10,2,3,'20231125_2_13',8.5,2,17),(172,10,2,3,'20231125_2_13',8.5,2,17),(173,10,2,3,'20231125_2_13',8.5,2,17),(174,10,2,3,'20231125_2_13',8.5,2,17),(175,10,2,3,'20231125_2_13',8.5,2,17),(176,10,2,3,'20231125_2_13',8.5,2,17),(177,10,2,3,'20231125_2_13',8.5,2,17),(178,10,2,3,'20231125_2_13',8.5,2,17),(179,10,2,3,'20231125_2_13',8.5,2,17),(180,10,2,3,'20231125_2_13',8.5,2,17),(181,10,2,3,'20231125_2_13',8.5,2,17),(182,10,2,3,'20231125_2_13',8.5,2,17),(183,10,2,3,'20231125_2_13',8.5,2,17),(184,10,2,3,'20231125_2_13',8.5,2,17),(185,10,2,3,'20231125_2_13',8.5,2,17),(186,10,2,3,'20231125_2_13',8.5,2,17),(187,10,2,3,'20231125_2_13',8.5,2,17),(188,10,2,3,'20231125_2_13',8.5,2,17),(189,10,2,3,'20231125_2_13',8.5,2,17),(190,10,2,3,'20231125_2_13',8.5,2,17),(191,10,2,3,'20231125_2_13',8.5,2,17),(192,10,2,3,'20231125_2_13',8.5,2,17),(193,10,2,3,'20231125_2_13',8.5,2,17),(194,10,2,3,'20231125_2_13',8.5,2,17),(195,10,2,3,'20231125_2_13',8.5,2,17),(196,10,2,3,'20231125_2_13',8.5,2,17),(197,10,2,3,'20231125_2_13',8.5,2,17),(198,10,2,3,'20231125_2_13',8.5,2,17),(199,10,2,3,'20231125_2_13',8.5,2,17),(200,10,2,3,'20231125_2_13',8.5,2,17),(201,10,2,3,'20231125_2_13',8.5,2,17),(202,10,2,3,'20231125_2_13',8.5,2,17),(203,10,2,3,'20231125_2_13',8.5,2,17),(204,10,2,3,'20231125_2_13',8.5,2,17),(205,10,2,3,'20231125_2_13',8.5,2,17),(206,10,2,3,'20231125_2_13',8.5,2,17),(207,10,2,3,'20231125_2_13',8.5,2,17),(208,10,2,3,'20231125_2_13',8.5,2,17),(209,10,2,3,'20231125_2_13',8.5,2,17),(210,10,2,3,'20231125_2_13',8.5,2,17),(211,10,2,3,'20231125_2_13',8.5,2,17),(212,10,2,3,'20231125_2_13',8.5,2,17),(213,10,2,3,'20231125_2_13',8.5,2,17),(214,10,2,3,'20231125_2_13',8.5,2,17),(215,10,2,3,'20231125_2_13',8.5,2,17),(216,10,2,3,'20231125_2_13',8.5,2,17),(217,10,2,3,'20231125_2_13',8.5,2,17),(218,3,2,1,'20231125_2_3',8.5,2,17),(219,3,2,1,'20231125_2_3',8.5,2,17),(220,3,2,1,'20231125_2_3',8.5,2,17),(221,3,2,1,'20231125_2_3',8.5,2,17),(222,3,2,1,'20231125_2_3',8.5,2,17),(223,8,8,3,'20231120_1_11',7.5,1,7.5),(224,8,8,3,'20231120_1_11',7.5,1,7.5),(225,8,8,3,'20231120_1_11',7.5,1,7.5),(226,8,8,3,'20231120_1_11',7.5,1,7.5),(227,8,8,3,'20231120_1_11',7.5,1,7.5),(228,8,8,3,'20231120_1_11',7.5,1,7.5),(229,8,8,3,'20231120_1_11',7.5,1,7.5),(230,8,8,3,'20231120_1_11',7.5,1,7.5),(231,8,8,3,'20231120_1_11',7.5,1,7.5),(232,8,8,3,'20231120_1_11',7.5,1,7.5),(233,8,8,3,'20231120_1_11',7.5,1,7.5),(234,8,8,3,'20231120_1_11',7.5,1,7.5),(235,8,8,3,'20231120_1_11',7.5,1,7.5),(236,8,8,3,'20231120_1_11',7.5,1,7.5),(237,8,8,3,'20231120_1_11',7.5,1,7.5),(238,8,8,3,'20231120_1_11',7.5,1,7.5),(239,8,8,3,'20231120_1_11',7.5,1,7.5),(240,8,8,3,'20231120_1_11',7.5,1,7.5),(241,8,8,3,'20231120_1_11',7.5,1,7.5),(242,8,8,3,'20231120_1_11',7.5,1,7.5),(243,8,8,3,'20231120_1_11',7.5,1,7.5),(244,8,8,3,'20231120_1_11',7.5,1,7.5),(245,8,8,3,'20231120_1_11',7.5,1,7.5),(246,8,8,3,'20231120_1_11',7.5,1,7.5),(247,8,8,3,'20231120_1_11',7.5,1,7.5),(248,8,8,3,'20231120_1_11',7.5,1,7.5),(249,8,8,3,'20231120_1_11',7.5,1,7.5),(250,8,8,3,'20231120_1_11',7.5,1,7.5),(251,8,8,3,'20231120_1_11',7.5,1,7.5),(252,8,8,3,'20231120_1_11',7.5,1,7.5),(253,8,8,3,'20231120_1_11',7.5,1,7.5),(254,8,8,3,'20231120_1_11',7.5,1,7.5),(255,8,8,3,'20231120_1_11',7.5,1,7.5),(256,8,8,3,'20231120_1_11',7.5,1,7.5),(257,8,8,3,'20231120_1_11',7.5,1,7.5),(258,8,8,3,'20231120_1_11',7.5,1,7.5),(259,8,8,3,'20231120_1_11',7.5,1,7.5),(260,8,8,3,'20231120_1_11',7.5,1,7.5),(261,8,8,3,'20231120_1_11',7.5,1,7.5),(262,8,8,3,'20231120_1_11',7.5,1,7.5),(263,8,8,3,'20231120_1_11',7.5,1,7.5),(264,8,8,3,'20231120_1_11',7.5,1,7.5),(265,8,8,3,'20231120_1_11',7.5,1,7.5),(266,8,8,3,'20231120_1_11',7.5,1,7.5),(267,8,8,3,'20231120_1_11',7.5,1,7.5),(268,8,8,3,'20231120_1_11',7.5,1,7.5),(269,8,8,3,'20231120_1_11',7.5,1,7.5),(270,8,8,3,'20231120_1_11',7.5,1,7.5),(271,8,8,3,'20231120_1_11',7.5,1,7.5),(272,8,8,3,'20231120_1_11',7.5,1,7.5),(273,8,8,3,'20231120_1_11',7.5,1,7.5),(274,8,8,3,'20231120_1_11',7.5,1,7.5),(275,8,8,3,'20231120_1_11',7.5,1,7.5),(276,8,8,3,'20231120_1_11',7.5,1,7.5),(277,8,8,3,'20231120_1_11',7.5,1,7.5),(278,8,8,3,'20231120_1_11',7.5,1,7.5),(279,8,8,3,'20231120_1_11',7.5,1,7.5),(280,8,8,3,'20231120_1_11',7.5,1,7.5),(281,8,8,3,'20231120_1_11',7.5,1,7.5),(282,8,8,3,'20231120_1_11',7.5,1,7.5),(283,8,8,3,'20231120_1_11',7.5,1,7.5),(284,8,8,3,'20231120_1_11',7.5,1,7.5),(285,8,8,3,'20231120_1_11',7.5,1,7.5),(286,8,8,3,'20231120_1_11',7.5,1,7.5),(287,8,8,3,'20231120_1_11',7.5,1,7.5),(288,8,8,3,'20231120_1_11',7.5,1,7.5),(289,8,8,3,'20231120_1_11',7.5,1,7.5),(290,8,8,3,'20231120_1_11',7.5,1,7.5),(291,8,8,3,'20231120_1_11',7.5,1,7.5),(292,8,8,3,'20231120_1_11',7.5,1,7.5),(293,8,8,3,'20231120_1_11',7.5,1,7.5),(294,8,8,3,'20231120_1_11',7.5,1,7.5),(295,8,8,3,'20231120_1_11',7.5,1,7.5),(296,8,8,3,'20231120_1_11',7.5,1,7.5),(297,8,8,3,'20231120_1_11',7.5,1,7.5),(298,8,8,3,'20231120_1_11',7.5,1,7.5),(299,8,8,3,'20231120_1_11',7.5,1,7.5),(300,8,8,3,'20231120_1_11',7.5,1,7.5),(301,8,8,3,'20231120_1_11',7.5,1,7.5),(302,8,8,3,'20231120_1_11',7.5,1,7.5),(303,7,8,2,'20231126_1_7',7.5,1,7.5),(304,7,8,2,'20231126_1_7',7.5,1,7.5),(305,7,8,2,'20231126_1_7',7.5,1,7.5),(306,7,8,2,'20231126_1_7',7.5,1,7.5),(307,6,8,2,'20231125_1_6',8.5,3,25.5),(308,6,8,2,'20231125_1_6',8.5,3,25.5),(309,7,8,2,'20231126_1_7',7.5,4,30),(310,7,8,2,'20231126_1_7',7.5,4,30),(311,7,8,2,'20231126_1_7',7.5,4,30),(312,7,8,2,'20231126_1_7',7.5,4,30),(313,7,8,2,'20231126_1_7',7.5,4,30),(314,7,8,2,'20231126_1_7',7.5,5,37.5),(315,7,8,2,'20231126_1_7',7.5,5,37.5),(316,7,8,2,'Sin fecha_1_7',7.5,4,30),(317,7,8,2,'Sin fecha_1_7',7.5,4,30),(318,4,2,2,'Seleccione fecha_1_4',7.5,3,22.5),(319,4,2,2,'Seleccione fecha_1_4',7.5,3,22.5),(320,4,2,2,'Seleccione fecha_1_4',7.5,3,22.5),(321,4,2,2,'Seleccione fecha_1_4',7.5,3,22.5),(322,1,2,1,'20231124_1_1',6.5,3,19.5),(323,1,2,1,'20231124_1_1',6.5,3,19.5),(324,3,2,3,'20231126_1_10',8.5,4,34),(325,3,2,3,'20231126_1_10',8.5,4,34),(326,3,2,3,'20231126_1_10',8.5,4,34),(327,3,2,3,'20231126_1_10',8.5,4,34),(328,3,2,3,'20231126_1_10',8.5,4,34),(329,3,2,3,'20231126_2_10',8.5,3,25.5),(330,3,2,3,'20231126_2_10',8.5,3,25.5),(331,7,2,2,'20231127_1_7',7.5,5,37.5),(332,7,2,2,'20231127_1_7',7.5,5,37.5),(333,7,2,2,'20231127_1_7',7.5,5,37.5),(334,7,2,2,'20231127_1_7',7.5,5,37.5),(335,7,2,2,'20231127_1_7',7.5,5,37.5),(336,7,2,2,'20231127_1_7',7.5,5,37.5),(337,7,2,2,'20231127_1_7',7.5,5,37.5),(338,7,2,2,'20231127_1_7',7.5,5,37.5),(339,7,2,2,'20231127_1_7',7.5,5,37.5),(340,7,2,2,'20231127_1_7',7.5,5,37.5),(341,7,2,2,'20231127_1_7',7.5,5,37.5),(342,7,2,2,'20231127_1_7',7.5,5,37.5),(343,7,2,2,'20231127_1_7',7.5,5,37.5),(344,7,2,2,'20231127_1_7',7.5,5,37.5),(345,7,2,2,'20231127_1_7',7.5,5,37.5),(346,7,2,2,'20231127_1_7',7.5,5,37.5),(347,6,2,2,'20231127_1_8',8.5,3,25.5),(348,6,2,2,'20231127_1_8',8.5,3,25.5),(349,6,2,2,'20231122_3_6',8.5,3,25.5),(350,6,2,2,'20231122_3_6',8.5,3,25.5),(351,8,2,3,'20231125_3_11',7.5,1,7.5),(352,8,2,3,'20231125_3_11',7.5,1,7.5),(353,7,2,2,'20231123_3_7',7.5,1,7.5),(354,7,2,2,'20231123_3_7',7.5,1,7.5),(355,7,2,2,'20231126_3_7',7.5,4,30),(356,7,2,2,'20231126_3_7',7.5,4,30),(357,9,8,3,'20231127_1_12',7.5,2,15),(358,9,8,3,'20231127_1_12',7.5,2,15),(359,8,9,3,'20231125_1_11',7.5,3,22.5),(360,8,9,3,'20231125_1_11',7.5,3,22.5),(361,4,9,3,'20231125_1_9',7.5,1,7.5),(362,4,9,3,'20231125_1_9',7.5,1,7.5),(363,10,9,3,'20231126_1_13',8.5,1,8.5),(364,10,9,3,'20231126_1_13',8.5,1,8.5),(365,6,9,2,'20231126_1_8',8.5,2,17),(366,6,9,2,'20231126_1_8',8.5,2,17),(367,6,9,2,'20231124_2_6',8.5,1,8.5),(368,6,9,2,'20231124_2_6',8.5,1,8.5),(369,5,9,2,'20231123_1_5',7.5,1,7.5),(370,5,9,2,'20231123_1_5',7.5,1,7.5),(371,6,9,2,'20231125_1_6',8.5,1,8.5),(372,6,9,2,'20231125_1_6',8.5,1,8.5),(373,7,9,2,'20231125_1_7',7.5,1,7.5),(374,7,9,2,'20231125_1_7',7.5,1,7.5),(375,10,9,3,'20231123_1_13',8.5,1,8.5),(376,10,9,3,'20231123_1_13',8.5,1,8.5),(377,3,9,3,'20231122_1_10',8.5,1,8.5),(378,3,9,3,'20231122_1_10',8.5,1,8.5),(379,9,2,3,'20231126_1_12',7.5,1,7.5),(380,9,2,3,'20231126_1_12',7.5,1,7.5),(381,4,8,2,'20231128_1_4',7.5,2,15),(382,4,8,2,'20231128_1_4',7.5,2,15),(383,10,8,3,'20231127_1_14',8.5,2,17),(384,10,8,3,'20231127_1_14',8.5,2,17),(385,10,6,3,'20231127_1_14',8.5,2,17),(386,4,2,2,'20231201_1_4',7.5,1,7.5),(387,4,2,2,'20231201_1_4',7.5,1,7.5),(388,2,8,1,'20231202_1_2',6.5,1,6.5),(389,2,8,1,'20231202_1_2',6.5,1,6.5),(390,4,8,3,'20231202_1_9',7.5,2,15),(391,4,8,3,'20231202_1_9',7.5,2,15),(392,4,6,3,'20231202_1_9',7.5,2,15),(393,4,6,3,'20231202_1_9',7.5,2,15),(394,1,8,1,'20231202_1_1',6.5,3,19.5),(395,1,8,1,'20231202_1_1',6.5,3,19.5);
/*!40000 ALTER TABLE `tentradas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tpeliculas`
--

DROP TABLE IF EXISTS `tpeliculas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tpeliculas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(25) NOT NULL,
  `estreno` tinyint(1) NOT NULL,
  `sinopsis` varchar(2000) NOT NULL,
  `peliculaPrecio` double NOT NULL,
  `cartel` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tpeliculas`
--

LOCK TABLES `tpeliculas` WRITE;
/*!40000 ALTER TABLE `tpeliculas` DISABLE KEYS */;
INSERT INTO `tpeliculas` VALUES (1,'Austin Powers',0,'Primera aventura de Austin Powers (Mike Myers), un peculiar y atractivo espía de los años sesenta, cuyo principal enemigo es el doctor Maligno (interpretado también por Myers). Tras ser ambos sometidos a un proceso de congelación, se despiertan treinta años después en una sociedad completamente distinta a la que conocían. Sin embargo, ellos siguen siendo los mismos.',6.5,'https://raw.githubusercontent.com/alberto22-23/PFC_DAW/main/figurasTW/carteles/austin_powers.jpg'),(2,'El Guateque',0,'Hrundi V. Bakshi es un patoso actor de origen hindú que se encuentra rodando una película en el desierto. Por sus continuas meteduras de pata, es despedido del rodaje. Inesperadamente, recibe una invitación para asistir a una sofisticada fiesta organizada por el productor de su última película. Gracias a Hrundi, en la fiesta se producirán las situaciones más disparatadas.',6.5,'https://raw.githubusercontent.com/alberto22-23/PFC_DAW/main/figurasTW/carteles/el_guateque.jpg'),(3,'La Vida de Brian',1,'Brian nace en un pesebre de Belén el mismo día que Jesucristo. Un cúmulo de desgraciados y tronchantes equívocos le harán llevar una vida paralela a la del verdadero Hijo de Dios. Sus pocas luces y el ambiente de decadencia y caos absoluto en que se haya sumergida la Galilea de aquellos días, le harán vivir en manos de su madre, de una feminista revolucionaria y del mismísimo Poncio Pilatos, su propia versión del calvario.',8.5,'https://raw.githubusercontent.com/alberto22-23/PFC_DAW/main/figurasTW/carteles/la_vida_de_Brian.jpg'),(4,'Blade Runner',0,'Rick Deckard (Harrison Ford) es un blade runner, un agente de policía destinado al retiro de replicantes ilegales. Su misión es dar caza a un grupo de cuatro de estos androides, sofisticados NEXUS 6 superiores en fuerza e inteligencia a los humanos, pero diseñados para vivir una corta existencia de cuatro años.',7.5,'https://raw.githubusercontent.com/alberto22-23/PFC_DAW/main/figurasTW/carteles/blade_runner.jpg'),(5,'Matrix',0,'Thomas Anderson es un brillante programador de una respetable compañía de software. Pero fuera del trabajo es Neo, un hacker que un día recibe una misteriosa visita...',7.5,'https://raw.githubusercontent.com/alberto22-23/PFC_DAW/main/figurasTW/carteles/matrix.jpg'),(6,'Tron',1,'Sam Flynn, un experto en tecnología de 27 años e hijo de Kevin Flynn, investiga la desaparición de su padre y se adentra en un mundo digital distinto al original y creado por su padre, de feroces programas y juegos de arcade, y donde su padre ha estado atrapado durante 20 años.',8.5,'https://raw.githubusercontent.com/alberto22-23/PFC_DAW/main/figurasTW/carteles/tron.jpg'),(7,'2001 A Space Odyssey',0,'Hace millones de años, antes de la aparición del \"homo sapiens\", unos primates descubren un monolito que los conduce a un estadio de inteligencia superior. Millones de años después, otro monolito, enterrado en una luna, despierta el interés de los científicos. Por último, durante una misión de la NASA, HAL 9000, una máquina dotada de inteligencia artificial, se encarga de controlar todos los sistemas de una nave espacial tripulada.',7.5,'https://raw.githubusercontent.com/alberto22-23/PFC_DAW/main/figurasTW/carteles/2001_a_space_odyssey.jpg'),(8,'Poltergeist',0,'La película fue el primer gran éxito de Spielberg como productor. La trama gira en torno a los inquietantes sucesos que acontecen en la casa de una familia que vive en los suburbios, y en la que se sospecha que se está produciendo el fenómeno conocido como «poltergeist».',7.5,'https://raw.githubusercontent.com/alberto22-23/PFC_DAW/main/figurasTW/carteles/poltergeist.jpg'),(9,'Regreso al Futuro',0,'La cinta transcurre en el año 1985, una época en la que el joven Marty McFly lleva una existencia anónima con su novia Jennifer. Los únicos problemas son su familia en crisis y un director al que le encantaría expulsarle del instituto, por lo que deberá hacer todo lo que esté en su mano para revertir esa situación y aparentar total normalidad. Amigo del excéntrico profesor Emmett Brown, una noche le acompaña a probar su nuevo experimento: viajar en el tiempo usando un DeLorean modificado...',7.5,'https://raw.githubusercontent.com/alberto22-23/PFC_DAW/main/figurasTW/carteles/regreso_al_futuro.jpg'),(10,'Memorias de Africa',1,'A principios del siglo XX, Karen (Streep) contrae un matrimonio de conveniencia con el barón Blixen (Brandauer), un mujeriego empedernido. Ambos se establecen en Kenia con el propósito de explotar una plantación de café. En Karen Blixen nace un apasionado amor por la tierra y por las gentes de Kenia.',8.5,'https://raw.githubusercontent.com/alberto22-23/PFC_DAW/main/figurasTW/carteles/memorias_de_africa.jpg');
/*!40000 ALTER TABLE `tpeliculas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tsalas`
--

DROP TABLE IF EXISTS `tsalas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tsalas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numeroSala` int(11) NOT NULL,
  `aforoSala` int(11) NOT NULL,
  `id_cine` int(11) NOT NULL,
  `id_pelicula` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tCines_id_cine_tSalas` (`id_cine`),
  KEY `tPeliculas_id_pelicula_tSalas` (`id_pelicula`),
  CONSTRAINT `tCines_id_cine_tSalas` FOREIGN KEY (`id_cine`) REFERENCES `tcines` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `tPeliculas_id_pelicula_tSalas` FOREIGN KEY (`id_pelicula`) REFERENCES `tpeliculas` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tsalas`
--

LOCK TABLES `tsalas` WRITE;
/*!40000 ALTER TABLE `tsalas` DISABLE KEYS */;
INSERT INTO `tsalas` VALUES (1,1,10,1,1),(2,2,12,1,2),(3,3,15,1,3),(4,1,65,2,4),(5,2,75,2,5),(6,3,90,2,6),(7,4,80,2,7),(8,5,80,2,6),(9,1,70,3,4),(10,2,70,3,3),(11,3,80,3,8),(12,4,80,3,9),(13,5,100,3,10),(14,6,100,3,10);
/*!40000 ALTER TABLE `tsalas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tusuarios`
--

DROP TABLE IF EXISTS `tusuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tusuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuarioNombre` varchar(25) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tusuarios`
--

LOCK TABLES `tusuarios` WRITE;
/*!40000 ALTER TABLE `tusuarios` DISABLE KEYS */;
INSERT INTO `tusuarios` VALUES (1,'Paco123','bcrypt_sha256$$2b$12$W4XjYt9zpoyzsTeycGlG1usCY6cdmYM2TB/G0RQ5TbSLZ/Z8kmmVi','paco@gmail.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjoxLCJ1c3VhcmlvX25vbWJyZSI6IlBhY28xMjMifQ.uHy_um6g-yQ74Xn-J77NQH_HBTJaTZQ7a318eTbeBfY'),(2,'Antonio López','bcrypt_sha256$$2b$12$Brx/i.zf.KWul5Ry9AJFLu.nOM0U29Hu5uvB9PZ5ZiPOVyNxzzRJu','antonio@gmail.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjoyLCJ1c3VhcmlvX25vbWJyZSI6IkFudG9uaW8gTFx1MDBmM3BleiJ9.GysucvHgK9ot6QlNtmcV_EKQWbhSvbC-BLYN592jYL0'),(3,'Administrador','bcrypt_sha256$$2b$12$3ME.YJtkBUCq81QYxUXH9ueMLZp8r2QdW0KLhQH7xLhE/RK7JUJiS','admon@gmail.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjozLCJ1c3VhcmlvX25vbWJyZSI6IkFkbWluaXN0cmFkb3IifQ.slb6kbS7Cg3Vtqb8N8wBRqaTftyBHUjD3GyUb3IPgEM'),(4,'Alberto Sánchez','bcrypt_sha256$$2b$12$tQlCbyf1ZmiKfqb9IokgL.ZbHNMwq1MD54dBIJ/weqXzVQcq02Muy','alberto@gmail.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjo0LCJ1c3VhcmlvX25vbWJyZSI6IkFsYmVydG8gU1x1MDBlMW5jaGV6In0.yfFY6AHkqFU1idZWp86TJAjMIrlOlEBSaJQKFo0LO4k'),(5,'Pedro Iglesias','bcrypt_sha256$$2b$12$dVrXV07Z9Edp/0CkhQ6IWe.LQh9QaTBcM9c.ieDFLP8gsM5ia/FVi','pedro@gmail.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjo1LCJ1c3VhcmlvX25vbWJyZSI6IlBlZHJvIElnbGVzaWFzIn0.RbcghfeWSPz5ZcIEDH0RzR-hEOPRZ-LCSqfjgDY-Xgk'),(6,'José Fernández','bcrypt_sha256$$2b$12$sKQqxtheZ/ITeEGRDwTdQenWlLtuiurQpxxHTrlw9fDO9o4O27x7i','jose@gmail.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjo2LCJ1c3VhcmlvX25vbWJyZSI6Ikpvc1x1MDBlOSBGZXJuXHUwMGUxbmRleiJ9.xZM51TB2z0CH1UvsWAzoJP-U8JUT20A5ceWtAtBfVw0'),(7,'Juan Gómez','bcrypt_sha256$$2b$12$YUAhUrDqs.U3GfB0/m0IEuprUV2HDEZqtgjL4MScYSeylY3tMlzlm','juan@gmail.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjo3LCJ1c3VhcmlvX25vbWJyZSI6Ikp1YW4gR1x1MDBmM21leiJ9.zoWbF-d43C05CA-IJUTZnEjRxQd7c43xb7argMQ0rsc'),(8,'Ana García','bcrypt_sha256$$2b$12$BepG/zbmG8lWdk0I.1zrCOCd5kIIyrN9aPNLlmt9BT1vJc/D1.FUG','ana@gmail','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjo4LCJ1c3VhcmlvX25vbWJyZSI6IkFuYSBHYXJjXHUwMGVkYSJ9.I_rHIK7rBPzNvgY0FrWrD0xTFM8jbRJSqLcfGwBYHcU'),(9,'Usuario X','bcrypt_sha256$$2b$12$yLdTm8kIBUuIxwvd4whuAO04JcfAs.PcL7tGNOamiTNzTRcTkGWES','xxx@gmail.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjo5LCJ1c3VhcmlvX25vbWJyZSI6IlVzdWFyaW8gWCJ9.t40RPxlUjP2Tgcye4qkpalE4_6gMt-evyquILySkuPw'),(10,'Usuario Y','bcrypt_sha256$$2b$12$gS90gQm4MQwkZcajvwAoE.1g.rL06XStch2T1fW11qq6nTE2hHgGK','yyy@gmail.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjoxMCwidXN1YXJpb19ub21icmUiOiJVc3VhcmlvIFkifQ.Y9NlOHTQHweH9WSFIjKi53Lp349EcjYcdgetWIBZ84I'),(11,'Administrador TW','bcrypt_sha256$$2b$12$Ylnx0T.FJk7DR85QXyxanupA9P8BYfRqNcqgNsto.KVNMima1h6oS','admintw@gmail.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjoxMSwidXN1YXJpb19ub21icmUiOiJBZG1pbmlzdHJhZG9yIFRXIn0.rxziY85rdSdliUew1XcWaBxRN18uYxNzDHoP4dKjKJY');
/*!40000 ALTER TABLE `tusuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-01 10:15:16
