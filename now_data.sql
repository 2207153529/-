/*
 Navicat Premium Data Transfer

 Source Server         : database
 Source Server Type    : MySQL
 Source Server Version : 80025
 Source Host           : localhost:3306
 Source Schema         : chain_yiqing

 Target Server Type    : MySQL
 Target Server Version : 80025
 File Encoding         : 65001

 Date: 18/10/2021 09:34:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for now_data
-- ----------------------------
DROP TABLE IF EXISTS `now_data`;
CREATE TABLE `now_data`  (
  `sure` int(0) NULL DEFAULT NULL COMMENT '现在确诊人数',
  `wzz` int(0) NULL DEFAULT NULL COMMENT '无症状人数',
  `xyys` int(0) NULL DEFAULT NULL COMMENT '现有疑似',
  `xyzz` int(0) NULL DEFAULT NULL COMMENT '现有重症',
  `ljqz` int(0) NULL DEFAULT NULL COMMENT '累计确诊',
  `ljzy` int(0) NULL DEFAULT NULL COMMENT '累计治愈'
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of now_data
-- ----------------------------
INSERT INTO `now_data` VALUES (3230, 501, 0, 24, 120974, 112105);

SET FOREIGN_KEY_CHECKS = 1;
