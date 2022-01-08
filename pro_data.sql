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

 Date: 18/10/2021 09:34:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for pro_data
-- ----------------------------
DROP TABLE IF EXISTS `pro_data`;
CREATE TABLE `pro_data`  (
  `pro` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '省份',
  `sure` int(0) NULL DEFAULT NULL COMMENT '现在确诊人数'
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pro_data
-- ----------------------------
INSERT INTO `pro_data` VALUES ('台湾', 2001);
INSERT INTO `pro_data` VALUES ('云南', 380);
INSERT INTO `pro_data` VALUES ('江苏', 344);
INSERT INTO `pro_data` VALUES ('广东', 73);
INSERT INTO `pro_data` VALUES ('香港', 63);
INSERT INTO `pro_data` VALUES ('上海', 61);
INSERT INTO `pro_data` VALUES ('四川', 43);
INSERT INTO `pro_data` VALUES ('福建', 42);
INSERT INTO `pro_data` VALUES ('河南', 33);
INSERT INTO `pro_data` VALUES ('湖南', 28);
INSERT INTO `pro_data` VALUES ('天津', 26);
INSERT INTO `pro_data` VALUES ('陕西', 25);
INSERT INTO `pro_data` VALUES ('湖北', 24);
INSERT INTO `pro_data` VALUES ('北京', 20);
INSERT INTO `pro_data` VALUES ('浙江', 18);
INSERT INTO `pro_data` VALUES ('山东', 13);
INSERT INTO `pro_data` VALUES ('辽宁', 9);
INSERT INTO `pro_data` VALUES ('内蒙古', 9);
INSERT INTO `pro_data` VALUES ('澳门', 5);
INSERT INTO `pro_data` VALUES ('重庆', 4);
INSERT INTO `pro_data` VALUES ('甘肃', 4);
INSERT INTO `pro_data` VALUES ('广西', 2);
INSERT INTO `pro_data` VALUES ('吉林', 1);
INSERT INTO `pro_data` VALUES ('海南', 1);
INSERT INTO `pro_data` VALUES ('宁夏', 1);
INSERT INTO `pro_data` VALUES ('黑龙江', 0);
INSERT INTO `pro_data` VALUES ('河北', 0);
INSERT INTO `pro_data` VALUES ('安徽', 0);
INSERT INTO `pro_data` VALUES ('新疆', 0);
INSERT INTO `pro_data` VALUES ('江西', 0);
INSERT INTO `pro_data` VALUES ('山西', 0);
INSERT INTO `pro_data` VALUES ('贵州', 0);
INSERT INTO `pro_data` VALUES ('青海', 0);
INSERT INTO `pro_data` VALUES ('西藏', 0);

SET FOREIGN_KEY_CHECKS = 1;
