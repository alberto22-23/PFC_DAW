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
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tentradas`
--

LOCK TABLES `tentradas` WRITE;
/*!40000 ALTER TABLE `tentradas` DISABLE KEYS */;
INSERT INTO `tentradas` VALUES (16,1,1,1,'20230515_3_1',6.5,3,19.5),(17,1,4,1,'20230515_3_1',6.5,5,32.5),(18,6,1,2,'20230510_2_8',8.5,5,42.5),(19,10,2,3,'20230507_3_13',8.5,4,34),(20,10,2,3,'20230507_3_14',8.5,4,34),(21,5,2,2,'20230507_1_5',7.5,3,22.5),(22,1,5,1,'20230515_3_1',6.5,2,13),(23,8,2,3,'20230522_2_11',7.5,4,30),(24,10,2,3,'20230507_3_13',8.5,4,34),(25,10,4,3,'20230507_3_14',8.5,4,34),(26,5,2,2,'20230507_1_5',7.5,3,22.5),(27,4,1,2,'20230531_1_4',7.5,3,22.5),(28,10,4,3,'20230507_3_14',8.5,4,34),(29,5,4,2,'20230514_1_5',7.5,3,22.5),(30,7,2,2,'20230512_1_7',7.5,4,30),(31,6,1,2,'20230513_1_8',8.5,3,25.5),(32,6,4,2,'20230515_1_6',8.5,4,34),(33,4,5,3,'20230511_1_9',7.5,2,15),(34,8,4,3,'20230512_1_11',7.5,5,37.5),(35,9,2,3,'20230512_1_12',7.5,5,37.5),(36,3,1,3,'20230513_1_10',8.5,5,42.5),(37,6,1,2,'20230510_2_8',8.5,5,42.5),(38,8,2,3,'20230522_2_11',7.5,4,30),(39,10,2,3,'20230507_3_13',8.5,4,34),(40,5,2,2,'20230507_1_5',7.5,3,22.5);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tusuarios`
--

LOCK TABLES `tusuarios` WRITE;
/*!40000 ALTER TABLE `tusuarios` DISABLE KEYS */;
INSERT INTO `tusuarios` VALUES (1,'Paco123','bcrypt_sha256$$2b$12$W4XjYt9zpoyzsTeycGlG1usCY6cdmYM2TB/G0RQ5TbSLZ/Z8kmmVi','paco@gmail.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjoxLCJ1c3VhcmlvX25vbWJyZSI6IlBhY28xMjMifQ.uHy_um6g-yQ74Xn-J77NQH_HBTJaTZQ7a318eTbeBfY'),(2,'Antonio López','bcrypt_sha256$$2b$12$Brx/i.zf.KWul5Ry9AJFLu.nOM0U29Hu5uvB9PZ5ZiPOVyNxzzRJu','antonio@gmail.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjoyLCJ1c3VhcmlvX25vbWJyZSI6IkFudG9uaW8gTFx1MDBmM3BleiJ9.GysucvHgK9ot6QlNtmcV_EKQWbhSvbC-BLYN592jYL0'),(3,'Administrador','bcrypt_sha256$$2b$12$3ME.YJtkBUCq81QYxUXH9ueMLZp8r2QdW0KLhQH7xLhE/RK7JUJiS','admon@gmail.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjozLCJ1c3VhcmlvX25vbWJyZSI6IkFkbWluaXN0cmFkb3IifQ.slb6kbS7Cg3Vtqb8N8wBRqaTftyBHUjD3GyUb3IPgEM'),(4,'Alberto Sánchez','bcrypt_sha256$$2b$12$tQlCbyf1ZmiKfqb9IokgL.ZbHNMwq1MD54dBIJ/weqXzVQcq02Muy','alberto@gmail.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjo0LCJ1c3VhcmlvX25vbWJyZSI6IkFsYmVydG8gU1x1MDBlMW5jaGV6In0.yfFY6AHkqFU1idZWp86TJAjMIrlOlEBSaJQKFo0LO4k'),(5,'Pedro Iglesias','bcrypt_sha256$$2b$12$dVrXV07Z9Edp/0CkhQ6IWe.LQh9QaTBcM9c.ieDFLP8gsM5ia/FVi','pedro@gmail.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvX2lkIjo1LCJ1c3VhcmlvX25vbWJyZSI6IlBlZHJvIElnbGVzaWFzIn0.RbcghfeWSPz5ZcIEDH0RzR-hEOPRZ-LCSqfjgDY-Xgk');
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

-- Dump completed on 2023-10-23 15:12:22
