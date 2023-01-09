-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema sup
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `sup` ;

-- -----------------------------------------------------
-- Schema sup
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sup` DEFAULT CHARACTER SET utf8mb3 ;
USE `sup` ;

-- -----------------------------------------------------
-- Table `sup`.`artifact`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sup`.`artifact` ;

CREATE TABLE IF NOT EXISTS `sup`.`artifact` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sup`.`task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sup`.`task` ;

CREATE TABLE IF NOT EXISTS `sup`.`task` (
  `id` INT NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `deadline` DATETIME NULL DEFAULT NULL,
  `artifact_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_task_artifact1_idx` (`artifact_id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sup`.`member`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sup`.`member` ;

CREATE TABLE IF NOT EXISTS `sup`.`member` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `task_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_member_task1_idx` (`task_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sup`.`project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sup`.`project` ;

CREATE TABLE IF NOT EXISTS `sup`.`project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `team` VARCHAR(45) NULL DEFAULT NULL,
  `task_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_project_task1_idx` (`task_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sup`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sup`.`role` ;

CREATE TABLE IF NOT EXISTS `sup`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `member_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_role_member1_idx` (`member_id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sup`.`team`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sup`.`team` ;

CREATE TABLE IF NOT EXISTS `sup`.`team` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `icon` BLOB NULL DEFAULT NULL,
  `memberList` VARCHAR(45) NULL DEFAULT NULL,
  `project_id` INT NOT NULL,
  `member_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_team_project_idx` (`project_id` ASC) VISIBLE,
  INDEX `fk_team_member1_idx` (`member_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `sup`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sup`.`user` ;

CREATE TABLE IF NOT EXISTS `sup`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `isAdmin` VARCHAR(45) NOT NULL,
  `member_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  INDEX `fk_user_member1_idx` (`member_id` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Data for table `sup`.`artifact`
-- -----------------------------------------------------
START TRANSACTION;
USE `sup`;
INSERT INTO `sup`.`artifact` (`id`, `name`, `description`) VALUES (DEFAULT, 'art1', 'smthAboutArt1');
INSERT INTO `sup`.`artifact` (`id`, `name`, `description`) VALUES (DEFAULT, 'art2', 'smtnAboutArt2');
INSERT INTO `sup`.`artifact` (`id`, `name`, `description`) VALUES (DEFAULT, 'art3', 'smthAboutArt3');

COMMIT;


-- -----------------------------------------------------
-- Data for table `sup`.`task`
-- -----------------------------------------------------
START TRANSACTION;
USE `sup`;
INSERT INTO `sup`.`task` (`id`, `description`, `deadline`, `artifact_id`) VALUES (1, 'taskDescription1', '2023-01-22', 1);
INSERT INTO `sup`.`task` (`id`, `description`, `deadline`, `artifact_id`) VALUES (2, 'taskDescription2', '2023-03-04', 3);
INSERT INTO `sup`.`task` (`id`, `description`, `deadline`, `artifact_id`) VALUES (3, 'taskDescription3', '2023-03-18', 2);

COMMIT;


-- -----------------------------------------------------
-- Data for table `sup`.`member`
-- -----------------------------------------------------
START TRANSACTION;
USE `sup`;
INSERT INTO `sup`.`member` (`id`, `name`, `task_id`) VALUES (DEFAULT, 'member1', 3);
INSERT INTO `sup`.`member` (`id`, `name`, `task_id`) VALUES (DEFAULT, 'member2', 1);
INSERT INTO `sup`.`member` (`id`, `name`, `task_id`) VALUES (DEFAULT, 'member3', 2);
INSERT INTO `sup`.`member` (`id`, `name`, `task_id`) VALUES (DEFAULT, 'member4', 2);

COMMIT;


-- -----------------------------------------------------
-- Data for table `sup`.`project`
-- -----------------------------------------------------
START TRANSACTION;
USE `sup`;
INSERT INTO `sup`.`project` (`id`, `name`, `team`, `task_id`) VALUES (DEFAULT, 'server', 'firstTeam', 3);
INSERT INTO `sup`.`project` (`id`, `name`, `team`, `task_id`) VALUES (DEFAULT, 'parser', 'secondTeam', 2);
INSERT INTO `sup`.`project` (`id`, `name`, `team`, `task_id`) VALUES (DEFAULT, 'mobileApp', 'thirdTeam', 3);
INSERT INTO `sup`.`project` (`id`, `name`, `team`, `task_id`) VALUES (DEFAULT, 'calculator', 'secondTeam', 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `sup`.`team`
-- -----------------------------------------------------
START TRANSACTION;
USE `sup`;
INSERT INTO `sup`.`team` (`id`, `name`, `icon`, `memberList`, `project_id`, `member_id`) VALUES (DEFAULT, 'firstTeam', NULL, NULL, 4, 3);
INSERT INTO `sup`.`team` (`id`, `name`, `icon`, `memberList`, `project_id`, `member_id`) VALUES (DEFAULT, 'secondTeam', NULL, NULL, 2, 1);
INSERT INTO `sup`.`team` (`id`, `name`, `icon`, `memberList`, `project_id`, `member_id`) VALUES (DEFAULT, 'thirdTeam', NULL, NULL, 3, 2);

COMMIT;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
