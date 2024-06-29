/*
 Navicat Premium Data Transfer

 Source Server         : 鸿鹄
 Source Server Type    : MySQL
 Source Server Version : 50637
 Source Schema         : ry-cloud

 Target Server Type    : MySQL
 Target Server Version : 50637
 File Encoding         : 65001

 Date: 05/01/2024 17:33:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for gen_table
-- ----------------------------
drop database if exists `ry-cloud`;
create database `ry-cloud`;
use `ry-cloud`;

DROP TABLE IF EXISTS `gen_table`;
CREATE TABLE `gen_table`  (
  `table_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `table_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '表名称',
  `table_comment` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '表描述',
  `sub_table_name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '关联子表的表名',
  `sub_table_fk_name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '子表关联的外键名',
  `class_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '实体类名称',
  `tpl_category` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'crud' COMMENT '使用的模板（crud单表操作 tree树表操作）',
  `package_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '生成包路径',
  `module_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '生成模块名',
  `business_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '生成业务名',
  `function_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '生成功能名',
  `function_author` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '生成功能作者',
  `gen_type` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '生成代码方式（0zip压缩包 1自定义路径）',
  `gen_path` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '/' COMMENT '生成路径（不填默认项目路径）',
  `options` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '其它生成选项',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`table_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '代码生成业务表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of gen_table
-- ----------------------------
INSERT INTO `gen_table` VALUES (1, 'sys_dict_data', '字典数据表', NULL, NULL, 'SysDictData', 'crud', 'com.ruoyi.system', 'system', 'data', '字典数据', 'ruoyi', '0', '/', NULL, 'admin', '2023-11-17 11:39:43', '', NULL, NULL);

-- ----------------------------
-- Table structure for gen_table_column
-- ----------------------------
DROP TABLE IF EXISTS `gen_table_column`;
CREATE TABLE `gen_table_column`  (
  `column_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `table_id` bigint(20) NULL DEFAULT NULL COMMENT '归属表编号',
  `column_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '列名称',
  `column_comment` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '列描述',
  `column_type` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '列类型',
  `java_type` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'JAVA类型',
  `java_field` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'JAVA字段名',
  `is_pk` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否主键（1是）',
  `is_increment` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否自增（1是）',
  `is_required` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否必填（1是）',
  `is_insert` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否为插入字段（1是）',
  `is_edit` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否编辑字段（1是）',
  `is_list` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否列表字段（1是）',
  `is_query` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否查询字段（1是）',
  `query_type` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'EQ' COMMENT '查询方式（等于、不等于、大于、小于、范围）',
  `html_type` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '显示类型（文本框、文本域、下拉框、复选框、单选框、日期控件）',
  `dict_type` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '字典类型',
  `sort` int(11) NULL DEFAULT NULL COMMENT '排序',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`column_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '代码生成业务表字段' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of gen_table_column
-- ----------------------------
INSERT INTO `gen_table_column` VALUES (1, 1, 'dict_code', '字典编码', 'bigint(20)', 'Long', 'dictCode', '1', '1', NULL, '1', NULL, NULL, NULL, 'EQ', 'input', '', 1, 'admin', '2023-11-17 11:39:43', '', '2023-11-17 11:52:04');
INSERT INTO `gen_table_column` VALUES (2, 1, 'dict_sort', '字典排序', 'int(4)', 'Integer', 'dictSort', '0', '0', NULL, '1', '1', '1', '1', 'EQ', 'input', '', 2, 'admin', '2023-11-17 11:39:43', '', '2023-11-17 11:52:04');
INSERT INTO `gen_table_column` VALUES (3, 1, 'dict_label', '字典标签', 'varchar(100)', 'String', 'dictLabel', '0', '0', NULL, '1', '1', '1', '1', 'EQ', 'input', '', 3, 'admin', '2023-11-17 11:39:43', '', '2023-11-17 11:52:04');
INSERT INTO `gen_table_column` VALUES (4, 1, 'dict_value', '字典键值', 'varchar(100)', 'String', 'dictValue', '0', '0', NULL, '1', '1', '1', '1', 'EQ', 'input', '', 4, 'admin', '2023-11-17 11:39:44', '', '2023-11-17 11:52:04');
INSERT INTO `gen_table_column` VALUES (5, 1, 'dict_type', '字典类型', 'varchar(100)', 'String', 'dictType', '0', '0', NULL, '1', '1', '1', '1', 'EQ', 'select', '', 5, 'admin', '2023-11-17 11:39:44', '', '2023-11-17 11:52:04');
INSERT INTO `gen_table_column` VALUES (6, 1, 'css_class', '样式属性（其他样式扩展）', 'varchar(100)', 'String', 'cssClass', '0', '0', NULL, '1', '1', '1', '1', 'EQ', 'input', '', 6, 'admin', '2023-11-17 11:39:44', '', '2023-11-17 11:52:05');
INSERT INTO `gen_table_column` VALUES (7, 1, 'list_class', '表格回显样式', 'varchar(100)', 'String', 'listClass', '0', '0', NULL, '1', '1', '1', '1', 'EQ', 'input', '', 7, 'admin', '2023-11-17 11:39:44', '', '2023-11-17 11:52:05');
INSERT INTO `gen_table_column` VALUES (9, 1, 'is_default', '是否默认（Y是 N否）', 'char(1)', 'String', 'isDefault', '0', '0', NULL, '1', '1', '1', '1', 'EQ', 'input', '', 8, 'admin', '2023-11-17 11:39:44', '', '2023-11-17 11:52:05');
INSERT INTO `gen_table_column` VALUES (11, 1, 'status', '状态（0正常 1停用）', 'char(1)', 'String', 'status', '0', '0', NULL, '1', '1', '1', '1', 'EQ', 'radio', '', 9, 'admin', '2023-11-17 11:39:44', '', '2023-11-17 11:52:05');
INSERT INTO `gen_table_column` VALUES (13, 1, 'create_by', '创建者', 'varchar(64)', 'String', 'createBy', '0', '0', NULL, '1', NULL, NULL, NULL, 'EQ', 'input', '', 10, 'admin', '2023-11-17 11:39:45', '', '2023-11-17 11:52:05');
INSERT INTO `gen_table_column` VALUES (15, 1, 'create_time', '创建时间', 'datetime', 'Date', 'createTime', '0', '0', NULL, '1', NULL, NULL, NULL, 'EQ', 'datetime', '', 11, 'admin', '2023-11-17 11:39:45', '', '2023-11-17 11:52:06');
INSERT INTO `gen_table_column` VALUES (17, 1, 'update_by', '更新者', 'varchar(64)', 'String', 'updateBy', '0', '0', NULL, '1', '1', NULL, NULL, 'EQ', 'input', '', 12, 'admin', '2023-11-17 11:39:45', '', '2023-11-17 11:52:06');
INSERT INTO `gen_table_column` VALUES (19, 1, 'update_time', '更新时间', 'datetime', 'Date', 'updateTime', '0', '0', NULL, '1', '1', NULL, NULL, 'EQ', 'datetime', '', 13, 'admin', '2023-11-17 11:39:45', '', '2023-11-17 11:52:06');
INSERT INTO `gen_table_column` VALUES (21, 1, 'remark', '备注', 'varchar(500)', 'String', 'remark', '0', '0', NULL, '1', '1', '1', NULL, 'EQ', 'textarea', '', 14, 'admin', '2023-11-17 11:39:45', '', '2023-11-17 11:52:06');

-- ----------------------------
-- Table structure for qrtz_blob_triggers
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_blob_triggers`;
CREATE TABLE `qrtz_blob_triggers`  (
  `sched_name` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '调度名称',
  `trigger_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_name的外键',
  `trigger_group` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_group的外键',
  `blob_data` blob NULL COMMENT '存放持久化Trigger对象',
  PRIMARY KEY (`sched_name`, `trigger_name`, `trigger_group`) USING BTREE,
  CONSTRAINT `qrtz_blob_triggers_ibfk_1` FOREIGN KEY (`sched_name`, `trigger_name`, `trigger_group`) REFERENCES `qrtz_triggers` (`sched_name`, `trigger_name`, `trigger_group`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = 'Blob类型的触发器表' ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for qrtz_calendars
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_calendars`;
CREATE TABLE `qrtz_calendars`  (
  `sched_name` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '调度名称',
  `calendar_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '日历名称',
  `calendar` blob NOT NULL COMMENT '存放持久化calendar对象',
  PRIMARY KEY (`sched_name`, `calendar_name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '日历信息表' ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for qrtz_cron_triggers
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_cron_triggers`;
CREATE TABLE `qrtz_cron_triggers`  (
  `sched_name` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '调度名称',
  `trigger_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_name的外键',
  `trigger_group` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_group的外键',
  `cron_expression` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'cron表达式',
  `time_zone_id` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '时区',
  PRIMARY KEY (`sched_name`, `trigger_name`, `trigger_group`) USING BTREE,
  CONSTRAINT `qrtz_cron_triggers_ibfk_1` FOREIGN KEY (`sched_name`, `trigger_name`, `trigger_group`) REFERENCES `qrtz_triggers` (`sched_name`, `trigger_name`, `trigger_group`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = 'Cron类型的触发器表' ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for qrtz_fired_triggers
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_fired_triggers`;
CREATE TABLE `qrtz_fired_triggers`  (
  `sched_name` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '调度名称',
  `entry_id` varchar(95) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '调度器实例id',
  `trigger_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_name的外键',
  `trigger_group` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_group的外键',
  `instance_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '调度器实例名',
  `fired_time` bigint(13) NOT NULL COMMENT '触发的时间',
  `sched_time` bigint(13) NOT NULL COMMENT '定时器制定的时间',
  `priority` int(11) NOT NULL COMMENT '优先级',
  `state` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '状态',
  `job_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '任务名称',
  `job_group` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '任务组名',
  `is_nonconcurrent` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否并发',
  `requests_recovery` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '是否接受恢复执行',
  PRIMARY KEY (`sched_name`, `entry_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '已触发的触发器表' ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for qrtz_job_details
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_job_details`;
CREATE TABLE `qrtz_job_details`  (
  `sched_name` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '调度名称',
  `job_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '任务名称',
  `job_group` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '任务组名',
  `description` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '相关介绍',
  `job_class_name` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '执行任务类名称',
  `is_durable` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '是否持久化',
  `is_nonconcurrent` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '是否并发',
  `is_update_data` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '是否更新数据',
  `requests_recovery` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '是否接受恢复执行',
  `job_data` blob NULL COMMENT '存放持久化job对象',
  PRIMARY KEY (`sched_name`, `job_name`, `job_group`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '任务详细信息表' ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for qrtz_locks
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_locks`;
CREATE TABLE `qrtz_locks`  (
  `sched_name` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '调度名称',
  `lock_name` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '悲观锁名称',
  PRIMARY KEY (`sched_name`, `lock_name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '存储的悲观锁信息表' ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for qrtz_paused_trigger_grps
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_paused_trigger_grps`;
CREATE TABLE `qrtz_paused_trigger_grps`  (
  `sched_name` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '调度名称',
  `trigger_group` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_group的外键',
  PRIMARY KEY (`sched_name`, `trigger_group`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '暂停的触发器表' ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for qrtz_scheduler_state
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_scheduler_state`;
CREATE TABLE `qrtz_scheduler_state`  (
  `sched_name` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '调度名称',
  `instance_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '实例名称',
  `last_checkin_time` bigint(13) NOT NULL COMMENT '上次检查时间',
  `checkin_interval` bigint(13) NOT NULL COMMENT '检查间隔时间',
  PRIMARY KEY (`sched_name`, `instance_name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '调度器状态表' ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for qrtz_simple_triggers
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_simple_triggers`;
CREATE TABLE `qrtz_simple_triggers`  (
  `sched_name` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '调度名称',
  `trigger_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_name的外键',
  `trigger_group` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_group的外键',
  `repeat_count` bigint(7) NOT NULL COMMENT '重复的次数统计',
  `repeat_interval` bigint(12) NOT NULL COMMENT '重复的间隔时间',
  `times_triggered` bigint(10) NOT NULL COMMENT '已经触发的次数',
  PRIMARY KEY (`sched_name`, `trigger_name`, `trigger_group`) USING BTREE,
  CONSTRAINT `qrtz_simple_triggers_ibfk_1` FOREIGN KEY (`sched_name`, `trigger_name`, `trigger_group`) REFERENCES `qrtz_triggers` (`sched_name`, `trigger_name`, `trigger_group`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '简单触发器的信息表' ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for qrtz_simprop_triggers
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_simprop_triggers`;
CREATE TABLE `qrtz_simprop_triggers`  (
  `sched_name` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '调度名称',
  `trigger_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_name的外键',
  `trigger_group` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'qrtz_triggers表trigger_group的外键',
  `str_prop_1` varchar(512) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'String类型的trigger的第一个参数',
  `str_prop_2` varchar(512) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'String类型的trigger的第二个参数',
  `str_prop_3` varchar(512) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'String类型的trigger的第三个参数',
  `int_prop_1` int(11) NULL DEFAULT NULL COMMENT 'int类型的trigger的第一个参数',
  `int_prop_2` int(11) NULL DEFAULT NULL COMMENT 'int类型的trigger的第二个参数',
  `long_prop_1` bigint(20) NULL DEFAULT NULL COMMENT 'long类型的trigger的第一个参数',
  `long_prop_2` bigint(20) NULL DEFAULT NULL COMMENT 'long类型的trigger的第二个参数',
  `dec_prop_1` decimal(13, 4) NULL DEFAULT NULL COMMENT 'decimal类型的trigger的第一个参数',
  `dec_prop_2` decimal(13, 4) NULL DEFAULT NULL COMMENT 'decimal类型的trigger的第二个参数',
  `bool_prop_1` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'Boolean类型的trigger的第一个参数',
  `bool_prop_2` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'Boolean类型的trigger的第二个参数',
  PRIMARY KEY (`sched_name`, `trigger_name`, `trigger_group`) USING BTREE,
  CONSTRAINT `qrtz_simprop_triggers_ibfk_1` FOREIGN KEY (`sched_name`, `trigger_name`, `trigger_group`) REFERENCES `qrtz_triggers` (`sched_name`, `trigger_name`, `trigger_group`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '同步机制的行锁表' ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for qrtz_triggers
-- ----------------------------
DROP TABLE IF EXISTS `qrtz_triggers`;
CREATE TABLE `qrtz_triggers`  (
  `sched_name` varchar(120) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '调度名称',
  `trigger_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '触发器的名字',
  `trigger_group` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '触发器所属组的名字',
  `job_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'qrtz_job_details表job_name的外键',
  `job_group` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'qrtz_job_details表job_group的外键',
  `description` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '相关介绍',
  `next_fire_time` bigint(13) NULL DEFAULT NULL COMMENT '上一次触发时间（毫秒）',
  `prev_fire_time` bigint(13) NULL DEFAULT NULL COMMENT '下一次触发时间（默认为-1表示不触发）',
  `priority` int(11) NULL DEFAULT NULL COMMENT '优先级',
  `trigger_state` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '触发器状态',
  `trigger_type` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '触发器的类型',
  `start_time` bigint(13) NOT NULL COMMENT '开始时间',
  `end_time` bigint(13) NULL DEFAULT NULL COMMENT '结束时间',
  `calendar_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '日程表名称',
  `misfire_instr` smallint(2) NULL DEFAULT NULL COMMENT '补偿执行的策略',
  `job_data` blob NULL COMMENT '存放持久化job对象',
  PRIMARY KEY (`sched_name`, `trigger_name`, `trigger_group`) USING BTREE,
  INDEX `sched_name`(`sched_name`, `job_name`, `job_group`) USING BTREE,
  CONSTRAINT `qrtz_triggers_ibfk_1` FOREIGN KEY (`sched_name`, `job_name`, `job_group`) REFERENCES `qrtz_job_details` (`sched_name`, `job_name`, `job_group`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '触发器详细信息表' ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for sys_config
-- ----------------------------
DROP TABLE IF EXISTS `sys_config`;
CREATE TABLE `sys_config`  (
  `config_id` int(5) NOT NULL AUTO_INCREMENT COMMENT '参数主键',
  `config_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '参数名称',
  `config_key` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '参数键名',
  `config_value` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '参数键值',
  `config_type` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'N' COMMENT '系统内置（Y是 N否）',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`config_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '参数配置表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_config
-- ----------------------------
INSERT INTO `sys_config` VALUES (1, '主框架页-默认皮肤样式名称', 'sys.index.skinName', 'skin-blue', 'Y', 'admin', '2023-11-16 19:03:10', '', NULL, '蓝色 skin-blue、绿色 skin-green、紫色 skin-purple、红色 skin-red、黄色 skin-yellow');
INSERT INTO `sys_config` VALUES (2, '用户管理-账号初始密码', 'sys.user.initPassword', '123456', 'Y', 'admin', '2023-11-16 19:03:10', '', NULL, '初始化密码 123456');
INSERT INTO `sys_config` VALUES (3, '主框架页-侧边栏主题', 'sys.index.sideTheme', 'theme-dark', 'Y', 'admin', '2023-11-16 19:03:10', '', NULL, '深色主题theme-dark，浅色主题theme-light');
INSERT INTO `sys_config` VALUES (4, '账号自助-是否开启用户注册功能', 'sys.account.registerUser', 'true', 'Y', 'admin', '2023-11-16 19:03:10', 'leijian', '2023-12-26 11:11:19', '是否开启注册用户功能（true开启，false关闭）');
INSERT INTO `sys_config` VALUES (5, '用户登录-黑名单列表', 'sys.login.blackIPList', '', 'Y', 'admin', '2023-11-16 19:03:10', '', NULL, '设置登录IP黑名单限制，多个匹配项以;分隔，支持匹配（*通配、网段）');

-- ----------------------------
-- Table structure for sys_dept
-- ----------------------------
DROP TABLE IF EXISTS `sys_dept`;
CREATE TABLE `sys_dept`  (
  `dept_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '部门id',
  `parent_id` bigint(20) NULL DEFAULT 0 COMMENT '父部门id',
  `ancestors` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '祖级列表',
  `dept_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '部门名称',
  `order_num` int(4) NULL DEFAULT 0 COMMENT '显示顺序',
  `leader` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '负责人',
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '联系电话',
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '部门状态（0正常 1停用）',
  `del_flag` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '删除标志（0代表存在 2代表删除）',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`dept_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 112 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '部门表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_dept
-- ----------------------------
INSERT INTO `sys_dept` VALUES (100, 0, '0', '若依科技', 0, '若依', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2023-11-16 19:03:09', '', NULL);
INSERT INTO `sys_dept` VALUES (101, 100, '0,100', '深圳总公司', 1, '若依', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2023-11-16 19:03:09', '', NULL);
INSERT INTO `sys_dept` VALUES (102, 100, '0,100', '长沙分公司', 2, '若依', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2023-11-16 19:03:09', '', NULL);
INSERT INTO `sys_dept` VALUES (103, 101, '0,100,101', '研发部门', 1, '若依', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2023-11-16 19:03:09', '', NULL);
INSERT INTO `sys_dept` VALUES (104, 101, '0,100,101', '市场部门', 2, '若依', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2023-11-16 19:03:09', '', NULL);
INSERT INTO `sys_dept` VALUES (105, 101, '0,100,101', '测试部门', 3, '若依', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2023-11-16 19:03:09', '', NULL);
INSERT INTO `sys_dept` VALUES (106, 101, '0,100,101', '财务部门', 4, '若依', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2023-11-16 19:03:09', '', NULL);
INSERT INTO `sys_dept` VALUES (107, 101, '0,100,101', '运维部门', 5, '若依', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2023-11-16 19:03:09', '', NULL);
INSERT INTO `sys_dept` VALUES (108, 102, '0,100,102', '市场部门', 1, '若依', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2023-11-16 19:03:09', '', NULL);
INSERT INTO `sys_dept` VALUES (109, 102, '0,100,102', '财务部门', 2, '若依', '15888888888', 'ry@qq.com', '0', '0', 'admin', '2023-11-16 19:03:09', '', NULL);
INSERT INTO `sys_dept` VALUES (110, 100, '0,100', '采购部', 0, '雷建', NULL, NULL, '0', '2', 'admin', '2023-12-26 10:59:36', '', NULL);
INSERT INTO `sys_dept` VALUES (111, 101, '0,100,101', '采购部门', 6, NULL, NULL, NULL, '0', '0', 'admin', '2023-12-26 11:00:41', 'admin', '2023-12-26 11:01:19');

-- ----------------------------
-- Table structure for sys_dict_data
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict_data`;
CREATE TABLE `sys_dict_data`  (
  `dict_code` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '字典编码',
  `dict_sort` int(4) NULL DEFAULT 0 COMMENT '字典排序',
  `dict_label` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '字典标签',
  `dict_value` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '字典键值',
  `dict_type` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '字典类型',
  `css_class` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '样式属性（其他样式扩展）',
  `list_class` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '表格回显样式',
  `is_default` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT 'N' COMMENT '是否默认（Y是 N否）',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '状态（0正常 1停用）',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`dict_code`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 145 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '字典数据表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_dict_data
-- ----------------------------
INSERT INTO `sys_dict_data` VALUES (1, 1, '男', '0', 'sys_user_sex', '', '', 'Y', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '性别男');
INSERT INTO `sys_dict_data` VALUES (2, 2, '女', '1', 'sys_user_sex', '', '', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '性别女');
INSERT INTO `sys_dict_data` VALUES (3, 3, '未知', '2', 'sys_user_sex', '', '', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '性别未知');
INSERT INTO `sys_dict_data` VALUES (4, 1, '显示', '0', 'sys_show_hide', '', 'primary', 'Y', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '显示菜单');
INSERT INTO `sys_dict_data` VALUES (5, 2, '隐藏', '1', 'sys_show_hide', '', 'danger', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '隐藏菜单');
INSERT INTO `sys_dict_data` VALUES (6, 1, '正常', '0', 'sys_normal_disable', '', 'primary', 'Y', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '正常状态');
INSERT INTO `sys_dict_data` VALUES (7, 2, '停用', '1', 'sys_normal_disable', '', 'danger', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '停用状态');
INSERT INTO `sys_dict_data` VALUES (8, 1, '正常', '0', 'sys_job_status', '', 'primary', 'Y', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '正常状态');
INSERT INTO `sys_dict_data` VALUES (9, 2, '暂停', '1', 'sys_job_status', '', 'danger', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '停用状态');
INSERT INTO `sys_dict_data` VALUES (10, 1, '默认', 'DEFAULT', 'sys_job_group', '', '', 'Y', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '默认分组');
INSERT INTO `sys_dict_data` VALUES (11, 2, '系统', 'SYSTEM', 'sys_job_group', '', '', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '系统分组');
INSERT INTO `sys_dict_data` VALUES (12, 1, '是', 'Y', 'sys_yes_no', '', 'primary', 'Y', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '系统默认是');
INSERT INTO `sys_dict_data` VALUES (13, 2, '否', 'N', 'sys_yes_no', '', 'danger', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '系统默认否');
INSERT INTO `sys_dict_data` VALUES (14, 1, '通知', '1', 'sys_notice_type', '', 'warning', 'Y', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '通知');
INSERT INTO `sys_dict_data` VALUES (15, 2, '公告', '2', 'sys_notice_type', '', 'success', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '公告');
INSERT INTO `sys_dict_data` VALUES (16, 1, '正常', '0', 'sys_notice_status', '', 'primary', 'Y', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '正常状态');
INSERT INTO `sys_dict_data` VALUES (17, 2, '关闭', '1', 'sys_notice_status', '', 'danger', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '关闭状态');
INSERT INTO `sys_dict_data` VALUES (18, 99, '其他', '0', 'sys_oper_type', '', 'info', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '其他操作');
INSERT INTO `sys_dict_data` VALUES (19, 1, '新增', '1', 'sys_oper_type', '', 'info', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '新增操作');
INSERT INTO `sys_dict_data` VALUES (20, 2, '修改', '2', 'sys_oper_type', '', 'info', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '修改操作');
INSERT INTO `sys_dict_data` VALUES (21, 3, '删除', '3', 'sys_oper_type', '', 'danger', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '删除操作');
INSERT INTO `sys_dict_data` VALUES (22, 4, '授权', '4', 'sys_oper_type', '', 'primary', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '授权操作');
INSERT INTO `sys_dict_data` VALUES (23, 5, '导出', '5', 'sys_oper_type', '', 'warning', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '导出操作');
INSERT INTO `sys_dict_data` VALUES (24, 6, '导入', '6', 'sys_oper_type', '', 'warning', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '导入操作');
INSERT INTO `sys_dict_data` VALUES (25, 7, '强退', '7', 'sys_oper_type', '', 'danger', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '强退操作');
INSERT INTO `sys_dict_data` VALUES (26, 8, '生成代码', '8', 'sys_oper_type', '', 'warning', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '生成操作');
INSERT INTO `sys_dict_data` VALUES (27, 9, '清空数据', '9', 'sys_oper_type', '', 'danger', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '清空操作');
INSERT INTO `sys_dict_data` VALUES (28, 1, '成功', '0', 'sys_common_status', '', 'primary', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '正常状态');
INSERT INTO `sys_dict_data` VALUES (29, 2, '失败', '1', 'sys_common_status', '', 'danger', 'N', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '停用状态');
INSERT INTO `sys_dict_data` VALUES (100, 1, '办公类型', '1', 'ppm_procurement_plan', NULL, 'default', 'N', '0', 'admin', '2023-11-21 10:51:59', 'admin', '2023-11-21 13:51:41', NULL);
INSERT INTO `sys_dict_data` VALUES (101, 4, '服务类', '2', 'ppm_procurement_plan', NULL, 'default', 'N', '0', 'admin', '2023-11-21 10:52:11', 'admin', '2023-11-21 13:52:33', NULL);
INSERT INTO `sys_dict_data` VALUES (102, 3, '资讯类', '3', 'ppm_procurement_plan', NULL, 'default', 'N', '0', 'admin', '2023-11-21 10:52:39', 'admin', '2023-11-21 13:51:59', NULL);
INSERT INTO `sys_dict_data` VALUES (103, 2, '固定资产', '4', 'ppm_procurement_plan', NULL, 'default', 'N', '0', 'admin', '2023-11-21 10:53:02', 'admin', '2023-11-21 13:51:52', NULL);
INSERT INTO `sys_dict_data` VALUES (104, 0, '全部类型', '0', 'ppm_procurement_plan', NULL, 'default', 'N', '0', 'admin', '2023-11-21 13:50:34', 'admin', '2023-11-21 13:52:24', NULL);
INSERT INTO `sys_dict_data` VALUES (105, 1, '公开招标', '1', 'bid_tender_biddingmethod', NULL, 'default', 'N', '0', 'admin', '2023-11-21 14:31:19', '', NULL, '方式：公开招标');
INSERT INTO `sys_dict_data` VALUES (106, 2, '邀请招标', '2', 'bid_tender_biddingmethod', NULL, 'default', 'N', '0', 'admin', '2023-11-21 14:31:48', '', NULL, '方式：邀请招标');
INSERT INTO `sys_dict_data` VALUES (107, 2, '招标中', '2', 'bid_tender_state', NULL, 'default', 'N', '0', 'admin', '2023-11-21 15:00:31', 'admin', '2023-12-25 15:10:17', '项目状态：招标中\n');
INSERT INTO `sys_dict_data` VALUES (108, 1, '立项中', '1', 'bid_tender_state', NULL, 'default', 'N', '0', 'admin', '2023-11-21 15:01:15', 'admin', '2023-12-25 11:12:09', '项目状态：立项中\n');
INSERT INTO `sys_dict_data` VALUES (109, 1, '草稿', '1', 'bid_notice_state', NULL, 'default', 'N', '0', 'admin', '2023-11-26 17:47:01', '', NULL, '状态：草稿');
INSERT INTO `sys_dict_data` VALUES (110, 2, '审核中', '2', 'bid_notice_state', NULL, 'default', 'N', '0', 'admin', '2023-11-26 17:47:20', '', NULL, '状态：审核中');
INSERT INTO `sys_dict_data` VALUES (111, 3, '审核通过', '3', 'bid_notice_state', NULL, 'default', 'N', '0', 'admin', '2023-11-26 17:47:48', '', NULL, '状态：审核通过');
INSERT INTO `sys_dict_data` VALUES (112, 4, '已驳回', '4', 'bid_notice_state', NULL, 'default', 'N', '0', 'admin', '2023-11-26 17:48:19', 'admin', '2023-11-27 16:41:39', '状态：已驳回');
INSERT INTO `sys_dict_data` VALUES (113, 5, '已发布', '5', 'bid_notice_state', NULL, 'default', 'N', '0', 'admin', '2023-11-27 16:41:17', '', NULL, '状态：已发布');
INSERT INTO `sys_dict_data` VALUES (114, 1, '合同履约点逾期风险', '1', 'bs_risk_monitoring_item', NULL, 'default', 'N', '0', 'admin', '2023-11-28 17:34:27', 'admin', '2023-11-28 17:35:16', NULL);
INSERT INTO `sys_dict_data` VALUES (115, 2, '合同变更风险', '2', 'bs_risk_monitoring_item', NULL, 'default', 'N', '0', 'admin', '2023-11-28 17:35:05', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (116, 3, '收款时间点逾期风险', '3', 'bs_risk_monitoring_item', NULL, 'default', 'N', '0', 'admin', '2023-11-28 17:35:47', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (117, 4, '故意逃避监控风险', '4', 'bs_risk_monitoring_item', NULL, 'default', 'N', '0', 'admin', '2023-11-28 17:36:50', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (118, 5, '外部签约方异常风险', '5', 'bs_risk_monitoring_item', NULL, 'default', 'N', '0', 'admin', '2023-11-28 17:37:13', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (119, 6, '合同履约率风险', '6', 'bs_risk_monitoring_item', NULL, 'default', 'N', '0', 'admin', '2023-11-28 17:37:35', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (120, 1, '未处理', '1', 'bs_risk_monitoring_status', NULL, 'default', 'N', '0', 'admin', '2023-11-28 17:40:03', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (121, 2, '已处理', '2', 'bs_risk_monitoring_status', NULL, 'default', 'N', '0', 'admin', '2023-11-28 17:40:29', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (122, 3, '已忽略', '3', 'bs_risk_monitoring_status', NULL, 'default', 'N', '0', 'admin', '2023-11-28 17:40:55', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (123, 1, '待审核', '0', 'bs_expert_status', NULL, 'default', 'N', '0', 'admin', '2023-12-04 09:50:58', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (124, 2, '已通过', '1', 'bs_expert_status', NULL, 'default', 'N', '0', 'admin', '2023-12-04 09:51:51', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (125, 3, '未通过', '2', 'bs_expert_status', NULL, 'default', 'N', '0', 'admin', '2023-12-04 09:52:11', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (126, 4, '单一来源', '4', 'procurement_method', NULL, 'default', 'N', '0', 'admin', '2023-12-06 14:48:46', 'admin', '2023-12-13 17:20:51', NULL);
INSERT INTO `sys_dict_data` VALUES (127, 2, '竞争性谈判', '2', 'procurement_method', NULL, 'default', 'N', '0', 'admin', '2023-12-06 14:50:10', 'admin', '2023-12-13 17:20:46', NULL);
INSERT INTO `sys_dict_data` VALUES (128, 5, '公开招标', '5', 'procurement_method', NULL, 'default', 'N', '0', 'admin', '2023-12-06 14:50:22', 'admin', '2023-12-13 17:20:39', NULL);
INSERT INTO `sys_dict_data` VALUES (129, 6, '邀请招标', '6', 'procurement_method', NULL, 'default', 'N', '0', 'admin', '2023-12-06 14:50:49', 'admin', '2023-12-13 17:20:34', NULL);
INSERT INTO `sys_dict_data` VALUES (130, 1, '首付款', '1', 'bs_contract_pay', NULL, 'default', 'N', '0', 'admin', '2023-12-07 15:26:07', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (131, 2, '执行款', '2', 'bs_contract_pay', NULL, 'default', 'N', '0', 'admin', '2023-12-07 15:26:22', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (132, 3, '尾款', '3', 'bs_contract_pay', NULL, 'default', 'N', '0', 'admin', '2023-12-07 15:26:55', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (133, 4, '保证金', '4', 'bs_contract_pay', NULL, 'default', 'N', '0', 'admin', '2023-12-07 15:27:05', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (134, 3, '委托', '3', 'procurement_method', NULL, 'default', 'N', '0', 'admin', '2023-12-13 17:21:01', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (135, 1, '询价', '1', 'procurement_method', NULL, 'default', 'N', '0', 'admin', '2023-12-13 17:21:34', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (136, 5, '评标中', '5', 'bid_tender_state', NULL, 'default', 'N', '0', 'admin', '2023-12-25 08:44:03', 'admin', '2023-12-25 16:10:16', '项目状态：评标中');
INSERT INTO `sys_dict_data` VALUES (137, 4, '开标中', '4', 'bid_tender_state', NULL, 'default', 'N', '0', 'admin', '2023-12-25 08:45:10', 'admin', '2023-12-25 16:10:34', '项目状态：开标中');
INSERT INTO `sys_dict_data` VALUES (138, 6, '定标中', '6', 'bid_tender_state', NULL, 'default', 'N', '0', 'admin', '2023-12-25 08:46:50', 'admin', '2023-12-27 14:03:57', '项目状态：定标中');
INSERT INTO `sys_dict_data` VALUES (139, 3, '投标中', '3', 'bid_tender_state', NULL, 'default', 'N', '0', 'admin', '2023-12-25 16:11:04', '', NULL, '项目状态：投标中');
INSERT INTO `sys_dict_data` VALUES (140, 0, '询价', '1', 'no_procurement_method', NULL, 'default', 'N', '0', 'admin', '2023-12-27 09:35:19', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (141, 1, '竞争性谈判', '1', 'no_procurement_method', NULL, 'default', 'N', '0', 'admin', '2023-12-27 09:35:38', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (142, 2, '委托', '3', 'no_procurement_method', NULL, 'default', 'N', '0', 'admin', '2023-12-27 09:35:49', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (143, 3, '单一来源', '4', 'no_procurement_method', NULL, 'default', 'N', '0', 'admin', '2023-12-27 09:36:04', '', NULL, NULL);
INSERT INTO `sys_dict_data` VALUES (144, 7, '已定标', '7', 'bid_tender_state', NULL, 'default', 'N', '0', 'admin', '2023-12-27 14:04:31', '', NULL, '项目状态：已定标');

-- ----------------------------
-- Table structure for sys_dict_type
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict_type`;
CREATE TABLE `sys_dict_type`  (
  `dict_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '字典主键',
  `dict_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '字典名称',
  `dict_type` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '字典类型',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '状态（0正常 1停用）',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`dict_id`) USING BTREE,
  UNIQUE INDEX `dict_type`(`dict_type`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 110 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '字典类型表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_dict_type
-- ----------------------------
INSERT INTO `sys_dict_type` VALUES (1, '用户性别', 'sys_user_sex', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '用户性别列表');
INSERT INTO `sys_dict_type` VALUES (2, '菜单状态', 'sys_show_hide', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '菜单状态列表');
INSERT INTO `sys_dict_type` VALUES (3, '系统开关', 'sys_normal_disable', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '系统开关列表');
INSERT INTO `sys_dict_type` VALUES (4, '任务状态', 'sys_job_status', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '任务状态列表');
INSERT INTO `sys_dict_type` VALUES (5, '任务分组', 'sys_job_group', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '任务分组列表');
INSERT INTO `sys_dict_type` VALUES (6, '系统是否', 'sys_yes_no', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '系统是否列表');
INSERT INTO `sys_dict_type` VALUES (7, '通知类型', 'sys_notice_type', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '通知类型列表');
INSERT INTO `sys_dict_type` VALUES (8, '通知状态', 'sys_notice_status', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '通知状态列表');
INSERT INTO `sys_dict_type` VALUES (9, '操作类型', 'sys_oper_type', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '操作类型列表');
INSERT INTO `sys_dict_type` VALUES (10, '系统状态', 'sys_common_status', '0', 'admin', '2023-11-16 19:03:10', '', NULL, '登录状态列表');
INSERT INTO `sys_dict_type` VALUES (100, '采购业务类型', 'ppm_procurement_plan', '0', 'admin', '2023-11-21 10:49:42', '', NULL, NULL);
INSERT INTO `sys_dict_type` VALUES (101, '招标方式', 'bid_tender_biddingmethod', '0', 'admin', '2023-11-21 14:30:38', '', NULL, '招标项目列表（方式）');
INSERT INTO `sys_dict_type` VALUES (102, '项目状态', 'bid_tender_state', '0', 'admin', '2023-11-21 14:59:26', '', NULL, '招标项目列表（状态）');
INSERT INTO `sys_dict_type` VALUES (103, '招标公告审批状态', 'bid_notice_state', '0', 'admin', '2023-11-26 17:45:50', '', NULL, NULL);
INSERT INTO `sys_dict_type` VALUES (104, '供应商风险监控风险项', 'bs_risk_monitoring_item', '0', 'admin', '2023-11-28 17:32:44', '', NULL, NULL);
INSERT INTO `sys_dict_type` VALUES (105, '供应商风险监控风险处理状态', 'bs_risk_monitoring_status', '0', 'admin', '2023-11-28 17:39:18', 'admin', '2023-11-28 17:39:33', NULL);
INSERT INTO `sys_dict_type` VALUES (106, '专家审核状态', 'bs_expert_status', '0', 'admin', '2023-12-04 09:49:15', '', NULL, NULL);
INSERT INTO `sys_dict_type` VALUES (107, '采购方式', 'procurement_method', '0', 'admin', '2023-12-06 14:47:25', '', NULL, NULL);
INSERT INTO `sys_dict_type` VALUES (108, '款项内容', 'bs_contract_pay', '0', 'admin', '2023-12-07 15:24:45', '', NULL, NULL);
INSERT INTO `sys_dict_type` VALUES (109, '非招标采购方式', 'no_procurement_method', '0', 'admin', '2023-12-27 09:34:09', '', NULL, NULL);

-- ----------------------------
-- Table structure for sys_job
-- ----------------------------
DROP TABLE IF EXISTS `sys_job`;
CREATE TABLE `sys_job`  (
  `job_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '任务ID',
  `job_name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '任务名称',
  `job_group` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'DEFAULT' COMMENT '任务组名',
  `invoke_target` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '调用目标字符串',
  `cron_expression` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT 'cron执行表达式',
  `misfire_policy` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '3' COMMENT '计划执行错误策略（1立即执行 2执行一次 3放弃执行）',
  `concurrent` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '是否并发执行（0允许 1禁止）',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '状态（0正常 1暂停）',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '备注信息',
  PRIMARY KEY (`job_id`, `job_name`, `job_group`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '定时任务调度表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_job
-- ----------------------------
INSERT INTO `sys_job` VALUES (1, '系统默认（无参）', 'DEFAULT', 'ryTask.ryNoParams', '0/10 * * * * ?', '3', '1', '1', 'admin', '2023-11-16 19:03:10', '', NULL, '');
INSERT INTO `sys_job` VALUES (2, '系统默认（有参）', 'DEFAULT', 'ryTask.ryParams(\'ry\')', '0/15 * * * * ?', '3', '1', '1', 'admin', '2023-11-16 19:03:10', '', NULL, '');
INSERT INTO `sys_job` VALUES (3, '系统默认（多参）', 'DEFAULT', 'ryTask.ryMultipleParams(\'ry\', true, 2000L, 316.50D, 100)', '0/20 * * * * ?', '3', '1', '1', 'admin', '2023-11-16 19:03:10', '', NULL, '');

-- ----------------------------
-- Table structure for sys_job_log
-- ----------------------------
DROP TABLE IF EXISTS `sys_job_log`;
CREATE TABLE `sys_job_log`  (
  `job_log_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '任务日志ID',
  `job_name` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '任务名称',
  `job_group` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '任务组名',
  `invoke_target` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '调用目标字符串',
  `job_message` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '日志信息',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '执行状态（0正常 1失败）',
  `exception_info` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '异常信息',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`job_log_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '定时任务调度日志表' ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for sys_logininfor
-- ----------------------------
DROP TABLE IF EXISTS `sys_logininfor`;
CREATE TABLE `sys_logininfor`  (
  `info_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '访问ID',
  `user_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '用户账号',
  `ipaddr` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '登录IP地址',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '登录状态（0成功 1失败）',
  `msg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '提示信息',
  `access_time` datetime(0) NULL DEFAULT NULL COMMENT '访问时间',
  PRIMARY KEY (`info_id`) USING BTREE,
  INDEX `idx_sys_logininfor_s`(`status`) USING BTREE,
  INDEX `idx_sys_logininfor_lt`(`access_time`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1034 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '系统访问记录' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_logininfor
-- ----------------------------
INSERT INTO `sys_logininfor` VALUES (100, 'admin', '127.0.0.1', '0', '登录成功', '2023-11-17 11:33:33');
INSERT INTO `sys_logininfor` VALUES (101, 'admin', '192.168.148.224', '0', '登录成功', '2023-11-17 11:40:04');
INSERT INTO `sys_logininfor` VALUES (102, 'admin', '127.0.0.1', '1', '登录用户不存在', '2023-11-17 11:52:19');
INSERT INTO `sys_logininfor` VALUES (103, 'admin', '172.20.10.5', '0', '登录成功', '2023-11-17 11:53:25');
INSERT INTO `sys_logininfor` VALUES (104, 'admin', '172.20.10.5', '0', '退出成功', '2023-11-17 12:02:05');
INSERT INTO `sys_logininfor` VALUES (105, 'admin', '172.20.10.5', '0', '登录成功', '2023-11-17 12:02:12');
INSERT INTO `sys_logininfor` VALUES (106, 'admin', '192.168.148.224', '0', '退出成功', '2023-11-17 12:32:34');
INSERT INTO `sys_logininfor` VALUES (107, 'admin', '192.168.148.224', '0', '登录成功', '2023-11-17 12:32:41');
INSERT INTO `sys_logininfor` VALUES (108, 'admin', '127.0.0.1', '0', '登录成功', '2023-11-17 13:08:19');
INSERT INTO `sys_logininfor` VALUES (109, 'admin', '192.168.21.247', '0', '登录成功', '2023-11-17 13:12:20');
INSERT INTO `sys_logininfor` VALUES (110, 'admin', '172.20.10.5', '0', '退出成功', '2023-11-17 13:38:11');
INSERT INTO `sys_logininfor` VALUES (111, 'admin', '172.20.10.5', '0', '登录成功', '2023-11-17 13:41:34');
INSERT INTO `sys_logininfor` VALUES (112, 'admin', '127.0.0.1', '0', '登录成功', '2023-11-17 13:56:41');
INSERT INTO `sys_logininfor` VALUES (113, 'admin', '127.0.0.1', '0', '登录成功', '2023-11-17 14:34:31');
INSERT INTO `sys_logininfor` VALUES (114, 'admin', '127.0.0.1', '0', '退出成功', '2023-11-17 15:32:01');
INSERT INTO `sys_logininfor` VALUES (115, 'admin', '127.0.0.1', '0', '退出成功', '2023-11-17 15:33:07');
INSERT INTO `sys_logininfor` VALUES (116, 'admin', '127.0.0.1', '0', '登录成功', '2023-11-17 15:33:16');
INSERT INTO `sys_logininfor` VALUES (117, 'admin', '127.0.0.1', '0', '登录成功', '2023-11-17 15:53:44');
INSERT INTO `sys_logininfor` VALUES (118, 'admin', '127.0.0.1', '0', '退出成功', '2023-11-17 16:05:45');
INSERT INTO `sys_logininfor` VALUES (119, 'admin', '127.0.0.1', '0', '退出成功', '2023-11-17 16:06:29');
INSERT INTO `sys_logininfor` VALUES (120, 'admin', '127.0.0.1', '0', '登录成功', '2023-11-17 16:06:34');
INSERT INTO `sys_logininfor` VALUES (121, 'admin', '127.0.0.1', '0', '登录成功', '2023-11-17 16:21:13');
INSERT INTO `sys_logininfor` VALUES (122, 'admin', '192.168.148.224', '0', '退出成功', '2023-11-17 16:39:31');
INSERT INTO `sys_logininfor` VALUES (123, 'admin', '192.168.148.224', '0', '退出成功', '2023-11-17 16:39:31');
INSERT INTO `sys_logininfor` VALUES (124, 'admin', '192.168.148.224', '0', '退出成功', '2023-11-17 16:59:59');
INSERT INTO `sys_logininfor` VALUES (125, 'admin', '192.168.148.224', '0', '登录成功', '2023-11-17 17:00:16');
INSERT INTO `sys_logininfor` VALUES (126, 'admin', '192.168.148.224', '0', '退出成功', '2023-11-17 17:20:34');
INSERT INTO `sys_logininfor` VALUES (127, 'admin', '192.168.148.224', '0', '登录成功', '2023-11-17 17:20:40');
INSERT INTO `sys_logininfor` VALUES (128, 'admin', '127.0.0.1', '0', '登录成功', '2023-11-19 15:08:51');
INSERT INTO `sys_logininfor` VALUES (129, 'admin', '192.168.148.224', '0', '退出成功', '2023-11-19 16:25:18');
INSERT INTO `sys_logininfor` VALUES (130, 'admin', '192.168.148.224', '0', '登录成功', '2023-11-19 16:25:26');
INSERT INTO `sys_logininfor` VALUES (131, 'admin', '192.168.176.224', '0', '登录成功', '2023-11-20 09:17:26');
INSERT INTO `sys_logininfor` VALUES (132, 'admin', '192.168.176.224', '0', '退出成功', '2023-11-20 10:33:49');
INSERT INTO `sys_logininfor` VALUES (133, 'admin', '192.168.176.224', '0', '登录成功', '2023-11-20 10:34:04');
INSERT INTO `sys_logininfor` VALUES (134, 'admin', '192.168.176.224', '0', '退出成功', '2023-11-20 11:33:18');
INSERT INTO `sys_logininfor` VALUES (135, 'admin', '192.168.176.224', '0', '登录成功', '2023-11-20 11:33:30');
INSERT INTO `sys_logininfor` VALUES (136, 'admin', '127.0.0.1', '0', '登录成功', '2023-11-20 11:54:35');
INSERT INTO `sys_logininfor` VALUES (137, 'admin', '127.0.0.1', '0', '退出成功', '2023-11-20 11:55:37');
INSERT INTO `sys_logininfor` VALUES (138, 'admin', '127.0.0.1', '0', '登录成功', '2023-11-20 13:40:32');
INSERT INTO `sys_logininfor` VALUES (139, 'admin', '127.0.0.1', '0', '登录成功', '2023-11-20 15:44:31');
INSERT INTO `sys_logininfor` VALUES (140, '11', '127.0.0.1', '1', '用户密码不在指定范围', '2023-11-20 16:48:23');
INSERT INTO `sys_logininfor` VALUES (141, 'asdsd', '127.0.0.1', '1', '登录用户不存在', '2023-11-20 16:48:40');
INSERT INTO `sys_logininfor` VALUES (837, 'leijian', '127.0.0.1', '0', '退出成功', '2023-12-26 20:24:39');

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu`  (
  `menu_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '菜单ID',
  `menu_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '菜单名称',
  `parent_id` bigint(20) NULL DEFAULT 0 COMMENT '父菜单ID',
  `order_num` int(4) NULL DEFAULT 0 COMMENT '显示顺序',
  `path` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '路由地址',
  `component` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '组件路径',
  `query` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '路由参数',
  `is_frame` int(1) NULL DEFAULT 1 COMMENT '是否为外链（0是 1否）',
  `is_cache` int(1) NULL DEFAULT 0 COMMENT '是否缓存（0缓存 1不缓存）',
  `menu_type` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '菜单类型（M目录 C菜单 F按钮）',
  `visible` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '菜单状态（0显示 1隐藏）',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '菜单状态（0正常 1停用）',
  `perms` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '权限标识',
  `icon` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '#' COMMENT '菜单图标',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '备注',
  PRIMARY KEY (`menu_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2121 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '菜单权限表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES (1, '系统管理', 0, 1, 'system', NULL, '', 1, 0, 'M', '0', '0', '', 'system', 'admin', '2023-11-16 19:03:09', '', NULL, '系统管理目录');
INSERT INTO `sys_menu` VALUES (2, '系统监控', 0, 2, 'monitor', NULL, '', 1, 0, 'M', '1', '0', '', 'monitor', 'admin', '2023-11-16 19:03:09', 'admin', '2023-12-05 09:42:25', '系统监控目录');
INSERT INTO `sys_menu` VALUES (3, '系统工具', 0, 3, 'tool', NULL, '', 1, 0, 'M', '0', '0', '', 'tool', 'admin', '2023-11-16 19:03:09', '', NULL, '系统工具目录');
INSERT INTO `sys_menu` VALUES (4, '若依官网', 0, 4, 'http://ruoyi.vip', NULL, '', 0, 0, 'M', '1', '0', '', 'guide', 'admin', '2023-11-16 19:03:09', 'admin', '2023-11-22 14:08:27', '若依官网地址');
INSERT INTO `sys_menu` VALUES (100, '用户管理', 1, 1, 'user', 'system/user/index', '', 1, 0, 'C', '0', '0', 'system:user:list', 'user', 'admin', '2023-11-16 19:03:09', 'admin', '2023-12-22 11:04:02', '用户管理菜单');
INSERT INTO `sys_menu` VALUES (101, '角色管理', 1, 2, 'role', 'system/role/index', '', 1, 0, 'C', '0', '0', 'system:role:list', 'peoples', 'admin', '2023-11-16 19:03:09', '', NULL, '角色管理菜单');
INSERT INTO `sys_menu` VALUES (102, '菜单管理', 1, 3, 'menu', 'system/menu/index', '', 1, 0, 'C', '0', '0', 'system:menu:list', 'tree-table', 'admin', '2023-11-16 19:03:09', '', NULL, '菜单管理菜单');
INSERT INTO `sys_menu` VALUES (103, '部门管理', 1, 4, 'dept', 'system/dept/index', '', 1, 0, 'C', '0', '0', 'system:dept:list', 'tree', 'admin', '2023-11-16 19:03:09', '', NULL, '部门管理菜单');
INSERT INTO `sys_menu` VALUES (104, '岗位管理', 1, 5, 'post', 'system/post/index', '', 1, 0, 'C', '0', '0', 'system:post:list', 'post', 'admin', '2023-11-16 19:03:09', '', NULL, '岗位管理菜单');
INSERT INTO `sys_menu` VALUES (105, '字典管理', 1, 6, 'dict', 'system/dict/index', '', 1, 0, 'C', '0', '0', 'system:dict:list', 'dict', 'admin', '2023-11-16 19:03:09', 'admin', '2023-11-22 11:51:02', '字典管理菜单');
INSERT INTO `sys_menu` VALUES (106, '参数设置', 1, 7, 'config', 'system/config/index', '', 1, 0, 'C', '0', '0', 'system:config:list', 'edit', 'admin', '2023-11-16 19:03:09', '', NULL, '参数设置菜单');
INSERT INTO `sys_menu` VALUES (107, '通知公告', 1, 8, 'notice', 'system/notice/index', '', 1, 0, 'C', '0', '0', 'system:notice:list', 'message', 'admin', '2023-11-16 19:03:09', '', NULL, '通知公告菜单');
INSERT INTO `sys_menu` VALUES (108, '日志管理', 1, 9, 'log', '', '', 1, 0, 'M', '0', '0', '', 'log', 'admin', '2023-11-16 19:03:09', '', NULL, '日志管理菜单');
INSERT INTO `sys_menu` VALUES (109, '在线用户', 2, 1, 'online', 'monitor/online/index', '', 1, 0, 'C', '0', '0', 'monitor:online:list', 'online', 'admin', '2023-11-16 19:03:09', '', NULL, '在线用户菜单');
INSERT INTO `sys_menu` VALUES (110, '定时任务', 2, 2, 'job', 'monitor/job/index', '', 1, 0, 'C', '0', '0', 'monitor:job:list', 'job', 'admin', '2023-11-16 19:03:09', '', NULL, '定时任务菜单');
INSERT INTO `sys_menu` VALUES (111, 'Sentinel控制台', 2, 3, 'http://localhost:8718', '', '', 0, 0, 'C', '0', '0', 'monitor:sentinel:list', 'sentinel', 'admin', '2023-11-16 19:03:09', '', NULL, '流量控制菜单');
INSERT INTO `sys_menu` VALUES (112, 'Nacos控制台', 2, 4, 'http://localhost:8848/nacos', '', '', 0, 0, 'C', '0', '0', 'monitor:nacos:list', 'nacos', 'admin', '2023-11-16 19:03:09', '', NULL, '服务治理菜单');
INSERT INTO `sys_menu` VALUES (113, 'Admin控制台', 2, 5, 'http://localhost:9100/login', '', '', 0, 0, 'C', '0', '0', 'monitor:server:list', 'server', 'admin', '2023-11-16 19:03:09', '', NULL, '服务监控菜单');
INSERT INTO `sys_menu` VALUES (114, '表单构建', 3, 1, 'build', 'tool/build/index', '', 1, 0, 'C', '0', '0', 'tool:build:list', 'build', 'admin', '2023-11-16 19:03:09', '', NULL, '表单构建菜单');
INSERT INTO `sys_menu` VALUES (115, '代码生成', 3, 2, 'gen', 'tool/gen/index', '', 1, 0, 'C', '0', '0', 'tool:gen:list', 'code', 'admin', '2023-11-16 19:03:09', '', NULL, '代码生成菜单');
INSERT INTO `sys_menu` VALUES (116, '系统接口', 3, 3, 'http://localhost:8080/swagger-ui/index.html', '', '', 0, 0, 'C', '0', '0', 'tool:swagger:list', 'swagger', 'admin', '2023-11-16 19:03:09', '', NULL, '系统接口菜单');
INSERT INTO `sys_menu` VALUES (500, '操作日志', 108, 1, 'operlog', 'system/operlog/index', '', 1, 0, 'C', '0', '0', 'system:operlog:list', 'form', 'admin', '2023-11-16 19:03:09', '', NULL, '操作日志菜单');
INSERT INTO `sys_menu` VALUES (501, '登录日志', 108, 2, 'logininfor', 'system/logininfor/index', '', 1, 0, 'C', '0', '0', 'system:logininfor:list', 'logininfor', 'admin', '2023-11-16 19:03:09', '', NULL, '登录日志菜单');
INSERT INTO `sys_menu` VALUES (1000, '用户查询', 100, 1, '', '', '', 1, 0, 'F', '0', '0', 'system:user:query', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1001, '用户新增', 100, 2, '', '', '', 1, 0, 'F', '0', '0', 'system:user:add', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1002, '用户修改', 100, 3, '', '', '', 1, 0, 'F', '0', '0', 'system:user:edit', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1003, '用户删除', 100, 4, '', '', '', 1, 0, 'F', '0', '0', 'system:user:remove', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1004, '用户导出', 100, 5, '', '', '', 1, 0, 'F', '0', '0', 'system:user:export', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1005, '用户导入', 100, 6, '', '', '', 1, 0, 'F', '0', '0', 'system:user:import', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1006, '重置密码', 100, 7, '', '', '', 1, 0, 'F', '0', '0', 'system:user:resetPwd', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1007, '角色查询', 101, 1, '', '', '', 1, 0, 'F', '0', '0', 'system:role:query', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1008, '角色新增', 101, 2, '', '', '', 1, 0, 'F', '0', '0', 'system:role:add', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1009, '角色修改', 101, 3, '', '', '', 1, 0, 'F', '0', '0', 'system:role:edit', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1010, '角色删除', 101, 4, '', '', '', 1, 0, 'F', '0', '0', 'system:role:remove', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1011, '角色导出', 101, 5, '', '', '', 1, 0, 'F', '0', '0', 'system:role:export', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1012, '菜单查询', 102, 1, '', '', '', 1, 0, 'F', '0', '0', 'system:menu:query', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1013, '菜单新增', 102, 2, '', '', '', 1, 0, 'F', '0', '0', 'system:menu:add', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1014, '菜单修改', 102, 3, '', '', '', 1, 0, 'F', '0', '0', 'system:menu:edit', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1015, '菜单删除', 102, 4, '', '', '', 1, 0, 'F', '0', '0', 'system:menu:remove', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1016, '部门查询', 103, 1, '', '', '', 1, 0, 'F', '0', '0', 'system:dept:query', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1017, '部门新增', 103, 2, '', '', '', 1, 0, 'F', '0', '0', 'system:dept:add', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1018, '部门修改', 103, 3, '', '', '', 1, 0, 'F', '0', '0', 'system:dept:edit', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1019, '部门删除', 103, 4, '', '', '', 1, 0, 'F', '0', '0', 'system:dept:remove', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1020, '岗位查询', 104, 1, '', '', '', 1, 0, 'F', '0', '0', 'system:post:query', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1021, '岗位新增', 104, 2, '', '', '', 1, 0, 'F', '0', '0', 'system:post:add', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1022, '岗位修改', 104, 3, '', '', '', 1, 0, 'F', '0', '0', 'system:post:edit', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1023, '岗位删除', 104, 4, '', '', '', 1, 0, 'F', '0', '0', 'system:post:remove', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1024, '岗位导出', 104, 5, '', '', '', 1, 0, 'F', '0', '0', 'system:post:export', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1025, '字典查询', 105, 1, '#', '', '', 1, 0, 'F', '0', '0', 'system:dict:query', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1026, '字典新增', 105, 2, '#', '', '', 1, 0, 'F', '0', '0', 'system:dict:add', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1027, '字典修改', 105, 3, '#', '', '', 1, 0, 'F', '0', '0', 'system:dict:edit', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1028, '字典删除', 105, 4, '#', '', '', 1, 0, 'F', '0', '0', 'system:dict:remove', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1029, '字典导出', 105, 5, '#', '', '', 1, 0, 'F', '0', '0', 'system:dict:export', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1030, '参数查询', 106, 1, '#', '', '', 1, 0, 'F', '0', '0', 'system:config:query', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1031, '参数新增', 106, 2, '#', '', '', 1, 0, 'F', '0', '0', 'system:config:add', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1032, '参数修改', 106, 3, '#', '', '', 1, 0, 'F', '0', '0', 'system:config:edit', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1033, '参数删除', 106, 4, '#', '', '', 1, 0, 'F', '0', '0', 'system:config:remove', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1034, '参数导出', 106, 5, '#', '', '', 1, 0, 'F', '0', '0', 'system:config:export', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1035, '公告查询', 107, 1, '#', '', '', 1, 0, 'F', '0', '0', 'system:notice:query', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1036, '公告新增', 107, 2, '#', '', '', 1, 0, 'F', '0', '0', 'system:notice:add', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1037, '公告修改', 107, 3, '#', '', '', 1, 0, 'F', '0', '0', 'system:notice:edit', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1038, '公告删除', 107, 4, '#', '', '', 1, 0, 'F', '0', '0', 'system:notice:remove', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1039, '操作查询', 500, 1, '#', '', '', 1, 0, 'F', '0', '0', 'system:operlog:query', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1040, '操作删除', 500, 2, '#', '', '', 1, 0, 'F', '0', '0', 'system:operlog:remove', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1041, '日志导出', 500, 3, '#', '', '', 1, 0, 'F', '0', '0', 'system:operlog:export', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1042, '登录查询', 501, 1, '#', '', '', 1, 0, 'F', '0', '0', 'system:logininfor:query', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1043, '登录删除', 501, 2, '#', '', '', 1, 0, 'F', '0', '0', 'system:logininfor:remove', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1044, '日志导出', 501, 3, '#', '', '', 1, 0, 'F', '0', '0', 'system:logininfor:export', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1045, '账户解锁', 501, 4, '#', '', '', 1, 0, 'F', '0', '0', 'system:logininfor:unlock', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1046, '在线查询', 109, 1, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:online:query', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1047, '批量强退', 109, 2, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:online:batchLogout', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1048, '单条强退', 109, 3, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:online:forceLogout', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1049, '任务查询', 110, 1, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:job:query', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1050, '任务新增', 110, 2, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:job:add', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1051, '任务修改', 110, 3, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:job:edit', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1052, '任务删除', 110, 4, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:job:remove', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1053, '状态修改', 110, 5, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:job:changeStatus', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1054, '任务导出', 110, 6, '#', '', '', 1, 0, 'F', '0', '0', 'monitor:job:export', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1055, '生成查询', 115, 1, '#', '', '', 1, 0, 'F', '0', '0', 'tool:gen:query', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1056, '生成修改', 115, 2, '#', '', '', 1, 0, 'F', '0', '0', 'tool:gen:edit', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1057, '生成删除', 115, 3, '#', '', '', 1, 0, 'F', '0', '0', 'tool:gen:remove', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1058, '导入代码', 115, 2, '#', '', '', 1, 0, 'F', '0', '0', 'tool:gen:import', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1059, '预览代码', 115, 4, '#', '', '', 1, 0, 'F', '0', '0', 'tool:gen:preview', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (1060, '生成代码', 115, 5, '#', '', '', 1, 0, 'F', '0', '0', 'tool:gen:code', '#', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2000, '招标项目', 0, 5, 'tender', NULL, NULL, 1, 0, 'M', '0', '0', '', 'documentation', 'admin', '2023-11-17 15:00:42', 'admin', '2023-12-27 19:54:44', '');
INSERT INTO `sys_menu` VALUES (2001, '招标项目', 2000, 1, 'tender1', 'tender/tender1/index', NULL, 1, 0, 'C', '0', '0', 'tender:tender1:list', 'monitor', 'admin', '2023-11-17 15:23:40', 'admin', '2023-11-20 15:49:16', '');
INSERT INTO `sys_menu` VALUES (2002, '组建评标委员会', 2000, 2, 'formEC', 'tender/formEC/index', NULL, 1, 0, 'C', '1', '0', 'tender:formEC:list', '#', 'admin', '2023-11-17 15:59:39', 'admin', '2023-12-28 09:07:31', '');
INSERT INTO `sys_menu` VALUES (2003, '查询', 2001, 1, '', NULL, NULL, 1, 0, 'F', '0', '0', 'tender:tender1:query', '#', 'admin', '2023-11-19 23:51:32', 'admin', '2023-11-19 23:52:50', '');
INSERT INTO `sys_menu` VALUES (2006, '采购需求管理', 0, 6, 'purchase', NULL, NULL, 1, 0, 'M', '0', '0', '', 'edit', 'admin', '2023-11-20 09:18:03', 'admin', '2023-11-22 12:50:56', '');
INSERT INTO `sys_menu` VALUES (2008, '供应商管理', 0, 7, 'supplier', NULL, NULL, 1, 0, 'M', '0', '0', '', 'peoples', 'admin', '2023-11-20 16:55:58', 'admin', '2023-11-22 11:29:28', '');
INSERT INTO `sys_menu` VALUES (2009, '供应商', 2008, 1, 'sqe', 'supplier/sqe/index', NULL, 1, 0, 'C', '0', '0', 'system:supplier:list', 'documentation', 'admin', '2023-11-20 16:57:22', 'admin', '2023-12-26 11:31:42', '');
INSERT INTO `sys_menu` VALUES (2010, '修改', 2001, 1, '', NULL, NULL, 1, 0, 'F', '0', '0', 'tender:tender1:deit', '#', 'admin', '2023-11-20 19:24:45', 'admin', '2023-11-20 19:27:14', '');
INSERT INTO `sys_menu` VALUES (2011, '删除', 2001, 2, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:tender:remove', '#', 'admin', '2023-11-20 19:27:41', 'admin', '2023-12-26 22:00:54', '');
INSERT INTO `sys_menu` VALUES (2013, '招标项目-查看', 2000, 3, 'details', 'tender/tender1/details', '{\"type\":\"detail\",\"sid\":0}', 1, 0, 'C', '1', '0', 'tender:tender1:details', '#', 'admin', '2023-11-21 11:06:45', 'admin', '2023-12-06 14:39:10', '');
INSERT INTO `sys_menu` VALUES (2014, '招标项目-编辑', 2000, 4, 'update', 'tender/tender1/update', '{\"type\":\"update\",\"sid\":0}', 1, 0, 'C', '1', '0', 'tender:tender1:update', '#', 'admin', '2023-11-21 20:33:42', 'admin', '2023-12-06 14:39:20', '');
INSERT INTO `sys_menu` VALUES (2015, '合同管理', 0, 8, 'contract', NULL, NULL, 1, 0, 'M', '0', '0', '', 'clipboard', 'admin', '2023-11-22 11:09:59', 'admin', '2023-12-05 09:43:47', '');
INSERT INTO `sys_menu` VALUES (2016, '招标合同管理', 2015, 1, 'cm', 'contract/cm/index', NULL, 1, 0, 'C', '0', '0', 'contract:cm:index', 'documentation', 'admin', '2023-11-22 11:10:41', 'admin', '2023-12-28 06:23:36', '');
INSERT INTO `sys_menu` VALUES (2017, '框架协议管理', 2015, 2, 'fam', 'contract/fam/index', NULL, 1, 0, 'C', '0', '0', 'contract:fam:index', 'documentation', 'admin', '2023-11-22 11:11:49', 'admin', '2023-11-22 14:11:10', '');
INSERT INTO `sys_menu` VALUES (2018, '编号规则', 1, 9, 'code', 'code/rules/index', NULL, 1, 0, 'C', '0', '0', '', 'druid', 'admin', '2023-11-22 14:28:26', 'admin', '2023-11-22 14:32:23', '');
INSERT INTO `sys_menu` VALUES (2019, '查看页面', 2008, 1, 'detail', 'supplier/sqe/detail', '{\"hid\":0,\"zr_id\":0}', 1, 0, 'C', '1', '0', 'supplier:sqe:detail', '#', 'admin', '2023-11-23 11:27:43', 'admin', '2023-12-26 16:57:52', '');
INSERT INTO `sys_menu` VALUES (2020, '创建合同', 2015, 3, 'add', 'contract/cm/add', '{\"sid\":1}', 1, 0, 'C', '1', '0', '', '#', 'admin', '2023-11-23 17:43:18', 'admin', '2023-12-21 10:48:11', '');
INSERT INTO `sys_menu` VALUES (2021, '审核页面', 2008, 1, 'process', 'supplier/sqe/process', '{\"zr_id\":0}', 1, 0, 'C', '1', '0', 'supplier:sqe:process', '#', 'admin', '2023-11-24 14:37:12', 'admin', '2023-12-26 16:58:00', '');
INSERT INTO `sys_menu` VALUES (2023, '采购计划管理', 2006, 0, 'purchase', 'purchase/otb/index', NULL, 1, 0, 'C', '0', '0', 'system:plan:list', 'edit', 'admin', '2023-11-24 15:33:09', 'admin', '2023-11-24 15:33:21', '');
INSERT INTO `sys_menu` VALUES (2024, '新增采购计划', 2006, 1, 'insert', 'purchase/otb/insert', NULL, 1, 0, 'C', '1', '0', 'system:plan:list', 'drag', 'admin', '2023-11-24 15:37:01', 'admin', '2023-11-24 15:37:12', '');
INSERT INTO `sys_menu` VALUES (2025, '进入项目', 2000, 5, 'bidding', 'tender/tender1/bidding', '{\"type\":\"bidding\",\"sid\":0}', 1, 0, 'C', '1', '0', 'tender:tender1:bidding', '#', 'admin', '2023-11-26 14:40:04', 'admin', '2023-12-28 09:07:45', '');
INSERT INTO `sys_menu` VALUES (2028, '供应商风险监控', 2008, 2, 'risk', 'supplier/risk/riskMonitor', NULL, 1, 0, 'C', '0', '0', 'system:monitor:riskMonitor', 'monitor', 'admin', '2023-11-28 19:41:05', 'admin', '2023-12-26 15:00:16', '');
INSERT INTO `sys_menu` VALUES (2029, '供应商风险处理', 2008, 2, 'riskHandling', 'supplier/risk/riskHandling', '{\"rm_id\":0}', 1, 0, 'C', '1', '0', 'supplier:risk:riskHandling', '#', 'admin', '2023-11-30 09:19:30', 'admin', '2023-11-30 09:34:47', '');
INSERT INTO `sys_menu` VALUES (2030, '采购寻源', 2006, 2, 'procurementSourcing', 'procurementSourcing/index', NULL, 1, 0, 'C', '0', '0', NULL, 'button', 'admin', '2023-11-30 16:48:17', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2031, '专家管理', 0, 7, 'expert', NULL, NULL, 1, 0, 'M', '0', '0', '', 'people', 'admin', '2023-12-01 09:48:32', 'admin', '2023-12-05 09:43:35', '');
INSERT INTO `sys_menu` VALUES (2032, '专家入库', 2031, 1, 'expertWare', 'expert/ewh/expertWare', NULL, 1, 0, 'C', '0', '0', 'expert:ewh:expertWare', 'list', 'admin', '2023-12-01 09:52:37', 'admin', '2023-12-14 12:08:53', '');
INSERT INTO `sys_menu` VALUES (2033, '审核或查看', 2031, 2, 'auditOrView', 'expert/ewh/auditOrView', '{\"jid\":0,\"param\":0}', 1, 0, 'C', '1', '0', 'expert:ewh:auditOrView', '#', 'admin', '2023-12-04 14:32:49', 'admin', '2023-12-04 14:41:10', '');
INSERT INTO `sys_menu` VALUES (2034, '编辑框架计划', 2006, 4, 'planIndex', 'frameworkPlan/index', NULL, 1, 0, 'C', '0', '0', '', 'tree-table', 'admin', '2023-12-05 15:53:15', 'admin', '2023-12-07 15:55:14', '');
INSERT INTO `sys_menu` VALUES (2036, '非招标项目', 0, 9, 'noTender', NULL, NULL, 1, 0, 'M', '0', '0', '', 'dict', 'admin', '2023-12-11 11:49:03', 'admin', '2023-12-11 12:06:15', '');
INSERT INTO `sys_menu` VALUES (2037, '非招标项目', 2036, 1, 'project', 'noTender/index', NULL, 1, 0, 'C', '0', '0', 'noTender:list', 'documentation', 'admin', '2023-12-11 12:07:29', 'admin', '2024-01-02 21:07:10', '');
INSERT INTO `sys_menu` VALUES (2039, '下单', 2015, 4, 'addFa', 'contract/fam/addFa', '{\"jhId\": 1}', 1, 0, 'C', '1', '0', '', '#', 'admin', '2023-12-13 20:40:07', 'admin', '2023-12-25 04:28:55', '');
INSERT INTO `sys_menu` VALUES (2040, '抽取专家', 2000, 6, 'drawExpert', 'tender/tender1/drawExpert', '{\"sid\":0}', 1, 0, 'C', '1', '0', 'tender:tender1:add', '#', 'admin', '2023-12-18 20:27:10', 'admin', '2023-12-28 09:07:52', '');
INSERT INTO `sys_menu` VALUES (2042, '修改合同', 2015, 5, 'update', 'contract/cm/update', '{\"eid\": 1}', 1, 0, 'C', '1', '0', '', '#', 'admin', '2023-12-21 10:51:22', 'admin', '2023-12-25 15:34:33', '');
INSERT INTO `sys_menu` VALUES (2043, '修改框架协议', 2015, 6, 'updateFa', 'contract/fam/updateFa', '{\"oid\":1}', 1, 0, 'C', '1', '0', '', '#', 'admin', '2023-12-21 20:05:59', 'admin', '2023-12-22 04:03:14', '');
INSERT INTO `sys_menu` VALUES (2045, '合同详情', 2015, 8, 'details', 'contract/cm/details', '{\"eid\":1}', 1, 0, 'C', '1', '0', '', '#', 'admin', '2023-12-22 03:45:03', 'admin', '2023-12-25 15:34:22', '');
INSERT INTO `sys_menu` VALUES (2046, '框架协议审核', 2015, 9, 'examineFa', 'contract/fam/examineFa', '{\"oid\":1}', 1, 0, 'C', '1', '0', '', '#', 'admin', '2023-12-22 04:12:18', 'admin', '2023-12-25 09:02:42', '');
INSERT INTO `sys_menu` VALUES (2047, '审核', 2023, 0, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:procurement:allow', '#', 'admin', '2023-12-22 11:26:22', 'admin', '2023-12-25 09:36:38', '');
INSERT INTO `sys_menu` VALUES (2048, '提交', 2023, 7, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:procurement:submit', '#', 'admin', '2023-12-22 11:34:24', 'admin', '2023-12-24 23:16:13', '');
INSERT INTO `sys_menu` VALUES (2049, '驳回', 2023, 8, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:procurement:reject', '#', 'admin', '2023-12-22 11:34:44', 'admin', '2023-12-24 23:16:22', '');
INSERT INTO `sys_menu` VALUES (2050, '删除', 2023, 3, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:procurement:remove', '#', 'admin', '2023-12-22 11:36:05', 'admin', '2023-12-22 11:38:42', '');
INSERT INTO `sys_menu` VALUES (2051, '编辑', 2023, 5, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:procurement:edit', '#', 'admin', '2023-12-22 11:39:19', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2052, 'list', 2023, 6, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:attachments:list', '#', 'admin', '2023-12-22 11:53:49', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2053, '审核', 2015, 10, 'examine', 'contract/cm/examine', '{\"eid\":1}', 1, 0, 'C', '1', '0', '', '#', 'admin', '2023-12-24 02:43:36', 'admin', '2023-12-25 15:34:15', '');
INSERT INTO `sys_menu` VALUES (2054, 'list', 2018, 0, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:rules:list', '#', 'admin', '2023-12-24 19:47:33', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2055, '新增', 2018, 1, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:rules:add', '#', 'admin', '2023-12-24 19:51:03', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2056, '导出', 2018, 2, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:rules:export', '#', 'admin', '2023-12-24 19:51:33', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2057, '修改', 2018, 3, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:rules:edit', '#', 'admin', '2023-12-24 19:51:52', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2058, '查询', 2018, 4, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:rules:query', '#', 'admin', '2023-12-24 19:55:06', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2059, '导出', 2023, 5, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:plan:export', '#', 'admin', '2023-12-24 19:59:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2060, '查询', 2023, 1, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:plan:query', '#', 'admin', '2023-12-24 19:59:30', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2061, '新增', 2023, 2, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:plan:add', '#', 'admin', '2023-12-24 20:00:01', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2062, '预算查询', 2024, 1, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:budget:query', '#', 'admin', '2023-12-24 20:03:42', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2063, '预算删除', 2024, 2, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:budget:remove', '#', 'admin', '2023-12-24 20:04:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2064, '预算修改', 2024, 1, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:budget:edit', '#', 'admin', '2023-12-24 20:04:34', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2065, '预算新增', 2024, 1, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:budget:add', '#', 'admin', '2023-12-24 20:04:52', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2066, '修改采购计划', 2024, 1, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:plan:edit', '#', 'admin', '2023-12-24 20:06:08', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2067, '新增采购计划', 2024, 1, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:plan:add', '#', 'admin', '2023-12-24 20:06:30', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2068, '设备list', 2024, 6, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:device:list', '#', 'admin', '2023-12-25 10:14:26', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2071, '审批', 2034, 0, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:procurement:allow', '#', 'admin', '2023-12-25 16:39:08', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2072, '新增', 2036, 2, 'add', '', '', 1, 0, 'C', '1', '0', '', '#', 'admin', '2023-12-25 19:28:07', 'admin', '2023-12-28 11:58:24', '');
INSERT INTO `sys_menu` VALUES (2073, '查看询价', 2036, 3, 'details1', 'noTender/RFQ/details1', '{\"gid\":1}', 1, 0, 'C', '1', '0', '', '#', 'admin', '2023-12-26 02:45:53', 'admin', '2023-12-28 11:57:26', '');
INSERT INTO `sys_menu` VALUES (2074, '风险添加', 2028, 1, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:monitor:add', '#', 'admin', '2023-12-26 14:33:09', 'admin', '2023-12-26 15:13:24', '');
INSERT INTO `sys_menu` VALUES (2075, '风险修改', 2028, 2, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:monitor:edit', '#', 'admin', '2023-12-26 14:35:41', 'admin', '2023-12-26 15:13:35', '');
INSERT INTO `sys_menu` VALUES (2078, '查看按钮', 2009, 1, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:supplier:look', '#', 'admin', '2023-12-26 19:27:09', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2079, '审核按钮', 2009, 1, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:supplier:process', '#', 'admin', '2023-12-26 19:28:18', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2080, 'list', 2001, 1, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:tender:list', '#', 'admin', '2023-12-26 19:41:22', 'admin', '2023-12-26 19:43:01', '');
INSERT INTO `sys_menu` VALUES (2081, 'tenderDetail', 2013, 2, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:tender:query', '#', 'admin', '2023-12-26 21:24:49', 'admin', '2023-12-26 21:52:57', '');
INSERT INTO `sys_menu` VALUES (2082, 'many', 2013, 1, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:plan:query', '#', 'admin', '2023-12-26 21:27:36', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2083, 'update', 2013, 3, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:tender:edit', '#', 'admin', '2023-12-26 21:41:01', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2084, 'documentList', 2025, 8, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:documents:list', '#', 'admin', '2023-12-26 22:12:30', 'admin', '2023-12-27 00:25:39', '');
INSERT INTO `sys_menu` VALUES (2085, 'addDoc', 2025, 1, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:documents:add', '#', 'admin', '2023-12-26 22:15:00', 'admin', '2023-12-27 00:25:23', '');
INSERT INTO `sys_menu` VALUES (2086, 'editDoc', 2025, 3, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:documents:edit', '#', 'admin', '2023-12-26 22:15:35', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2087, 'removeDoc', 2025, 4, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:documents:remove', '#', 'admin', '2023-12-26 22:15:58', 'admin', '2023-12-26 22:23:46', '');
INSERT INTO `sys_menu` VALUES (2088, 'queryNotice', 2025, 5, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:notice:query', '#', 'admin', '2023-12-26 22:29:24', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2089, 'addNotice', 2025, 7, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:notice:add', '#', 'admin', '2023-12-26 22:38:33', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2090, 'editNotice', 2025, 6, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:notice:edit', '#', 'admin', '2023-12-26 22:39:13', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2091, 'queryDoc', 2025, 2, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:documents:query', '#', 'admin', '2023-12-27 00:24:36', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2092, 'applicationList', 2025, 9, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:applications:list', '#', 'admin', '2023-12-27 00:35:16', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2093, 'addApplication', 2025, 10, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:applications:add', '#', 'admin', '2023-12-27 00:38:38', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2094, 'editApplication', 2025, 11, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:applications:edit', '#', 'admin', '2023-12-27 00:39:20', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2095, 'removeCommittee', 2025, 12, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:committee:remove', '#', 'admin', '2023-12-27 00:41:28', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2096, 'addCommittee', 2025, 13, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:committee:add', '#', 'admin', '2023-12-27 00:48:21', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2097, 'candidateList', 2025, 14, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:candidate:list', '#', 'admin', '2023-12-27 00:56:20', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2098, 'addCandidate', 2025, 15, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:candidate:add', '#', 'admin', '2023-12-27 01:00:14', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2099, 'editCandidate', 2025, 16, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:candidate:edit', '#', 'admin', '2023-12-27 01:00:45', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2100, 'queryCandidate', 2025, 17, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:candidate:query', '#', 'admin', '2023-12-27 01:03:32', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2101, 'removeCandidate', 2025, 18, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:candidate:remove', '#', 'admin', '2023-12-27 01:04:12', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2102, 'resultList', 2025, 19, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:results:list', '#', 'admin', '2023-12-27 01:10:37', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2103, 'addResult', 2025, 20, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:results:add', '#', 'admin', '2023-12-27 01:11:54', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2104, '查看竞争性谈判', 2036, 4, 'details2', 'noTender/RFQ/details2', '{\"gid\":1}', 1, 0, 'C', '1', '0', '', '#', 'admin', '2023-12-27 15:52:08', 'admin', '2023-12-28 11:57:31', '');
INSERT INTO `sys_menu` VALUES (2105, '查看委托', 2036, 5, 'details3', 'noTender/RFQ/details3', '{\"gid\":3}', 1, 0, 'C', '1', '0', '', '#', 'admin', '2023-12-27 15:53:49', 'admin', '2023-12-28 11:57:35', '');
INSERT INTO `sys_menu` VALUES (2106, '查看单一来源', 2036, 6, 'details4', 'noTender/RFQ/details4', '{\"gid\":1}', 1, 0, 'C', '1', '0', '', '#', 'admin', '2023-12-27 15:54:29', 'admin', '2023-12-28 11:57:39', '');
INSERT INTO `sys_menu` VALUES (2107, '查看按钮', 2032, 1, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:expert:look', '#', 'admin', '2023-12-27 17:39:50', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2108, '审核按钮', 2032, 2, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:expert:process', '#', 'admin', '2023-12-27 17:40:18', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2109, '新增非招标采购合同', 2036, 7, 'addNoTender', 'noTender/addNoTender', '{\"gid\":1}', 1, 0, 'C', '1', '0', '', '#', 'admin', '2023-12-28 06:17:30', 'admin', '2023-12-28 11:57:42', '');
INSERT INTO `sys_menu` VALUES (2112, '非招标合同管理', 2036, 8, 'noContract', 'noTender/noContract', NULL, 1, 0, 'C', '0', '0', NULL, 'documentation', 'admin', '2023-12-28 11:51:38', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2113, '合同详情', 2036, 9, 'upNoTender', 'noTender/upNoTender', '{\"eid\":1}', 1, 0, 'C', '1', '0', '', '#', 'admin', '2024-01-01 16:23:19', 'admin', '2024-01-01 18:13:54', '');
INSERT INTO `sys_menu` VALUES (2114, '合同审核', 2036, 10, 'examineNo', 'noTender/examineNo', '{\"eid\":1}', 1, 0, 'C', '1', '0', '', '#', 'admin', '2024-01-01 17:54:22', 'admin', '2024-01-01 18:13:50', '');
INSERT INTO `sys_menu` VALUES (2115, '合同查看', 2036, 11, 'viewNo', 'noTender/viewNo', '{\"eid\":1}', 1, 0, 'C', '1', '0', '', '#', 'admin', '2024-01-01 18:07:24', 'admin', '2024-01-02 02:39:04', '');
INSERT INTO `sys_menu` VALUES (2116, '单一来源', 2036, 12, 'details5', 'noTender/RFQ/details5', '{\"gid\":1}', 1, 0, 'C', '1', '0', '', '#', 'admin', '2024-01-02 10:27:14', 'admin', '2024-01-02 14:17:49', '');
INSERT INTO `sys_menu` VALUES (2117, '审核', 2112, 1, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:user:examine', '#', 'admin', '2024-01-02 14:23:23', '', NULL, '');
INSERT INTO `sys_menu` VALUES (2118, '新增协议', 2015, 11, 'faAdd', 'contract/fam/faAdd', '{\"jhId\":1}', 1, 0, 'C', '1', '0', '', '#', 'admin', '2024-01-02 15:59:53', 'admin', '2024-01-03 15:31:03', '');
INSERT INTO `sys_menu` VALUES (2119, '审批记录', 2023, 9, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:record:list', '#', 'admin', '2024-01-05 10:15:02', 'admin', '2024-01-05 10:15:19', '');
INSERT INTO `sys_menu` VALUES (2120, 'committeeList', 2025, 21, '', NULL, NULL, 1, 0, 'F', '0', '0', 'system:committee:list', '#', 'admin', '2024-01-05 10:53:59', '', NULL, '');

-- ----------------------------
-- Table structure for sys_notice
-- ----------------------------
DROP TABLE IF EXISTS `sys_notice`;
CREATE TABLE `sys_notice`  (
  `notice_id` int(4) NOT NULL AUTO_INCREMENT COMMENT '公告ID',
  `notice_title` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '公告标题',
  `notice_type` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '公告类型（1通知 2公告）',
  `notice_content` longblob NULL COMMENT '公告内容',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '公告状态（0正常 1关闭）',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`notice_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '通知公告表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_notice
-- ----------------------------
INSERT INTO `sys_notice` VALUES (1, '温馨提醒：2018-07-01 若依新版本发布啦', '2', 0x3C683120636C6173733D22716C2D616C69676E2D63656E746572223EE5A4A7E58EA6E68CA8E4B8AA3C2F68313E3C703EE890A8E6B395E696BDE5B7A5E696B9E4BEBF3C2F703E3C703E3C7374726F6E673E343335343635373C2F7374726F6E673E3C2F703E3C703E3C7374726F6E6720636C6173733D22716C2D73697A652D68756765223E7777777777777777773C2F7374726F6E673E3C2F703E, '0', 'admin', '2023-11-16 19:03:10', 'admin', '2023-11-30 14:58:30', '管理员');
INSERT INTO `sys_notice` VALUES (2, '维护通知：2018-07-01 若依系统凌晨维护', '1', 0xE7BBB4E68AA4E58685E5AEB9, '0', 'admin', '2023-11-16 19:03:10', '', NULL, '管理员');
INSERT INTO `sys_notice` VALUES (3, '666', '2', 0x3C7020636C6173733D22716C2D616C69676E2D63656E746572223E36363636363C2F703E, '0', 'admin', '2023-12-06 10:33:39', '', NULL, NULL);

-- ----------------------------
-- Table structure for sys_oper_log
-- ----------------------------
DROP TABLE IF EXISTS `sys_oper_log`;
CREATE TABLE `sys_oper_log`  (
  `oper_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '日志主键',
  `title` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '模块标题',
  `business_type` int(2) NULL DEFAULT 0 COMMENT '业务类型（0其它 1新增 2修改 3删除）',
  `method` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '方法名称',
  `request_method` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '请求方式',
  `operator_type` int(1) NULL DEFAULT 0 COMMENT '操作类别（0其它 1后台用户 2手机端用户）',
  `oper_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '操作人员',
  `dept_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '部门名称',
  `oper_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '请求URL',
  `oper_ip` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '主机地址',
  `oper_location` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '操作地点',
  `oper_param` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '请求参数',
  `json_result` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '返回参数',
  `status` int(1) NULL DEFAULT 0 COMMENT '操作状态（0正常 1异常）',
  `error_msg` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '错误消息',
  `oper_time` datetime(0) NULL DEFAULT NULL COMMENT '操作时间',
  `cost_time` bigint(20) NULL DEFAULT 0 COMMENT '消耗时间',
  PRIMARY KEY (`oper_id`) USING BTREE,
  INDEX `idx_sys_oper_log_bt`(`business_type`) USING BTREE,
  INDEX `idx_sys_oper_log_s`(`status`) USING BTREE,
  INDEX `idx_sys_oper_log_ot`(`oper_time`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2751 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '操作日志记录' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_oper_log
-- ----------------------------
INSERT INTO `sys_oper_log` VALUES (100, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '127.0.0.1', '', '{\"tables\":\"sys_dict_data\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 11:39:46', 3540);
INSERT INTO `sys_oper_log` VALUES (101, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '127.0.0.1', '', '{\"tables\":\"sys_dict_data\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 11:39:47', 3721);
INSERT INTO `sys_oper_log` VALUES (102, '代码生成', 3, 'com.ruoyi.gen.controller.GenController.remove()', 'DELETE', 1, 'admin', NULL, '/gen/2', '127.0.0.1', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 11:39:52', 1091);
INSERT INTO `sys_oper_log` VALUES (103, '代码生成', 8, 'com.ruoyi.gen.controller.GenController.batchGenCode()', 'GET', 1, 'admin', NULL, '/gen/batchGenCode', '127.0.0.1', '', '{\"tables\":\"sys_dict_data\"}', NULL, 0, NULL, '2023-11-17 11:39:57', 800);
INSERT INTO `sys_oper_log` VALUES (104, '代码生成', 8, 'com.ruoyi.gen.controller.GenController.batchGenCode()', 'GET', 1, 'admin', NULL, '/gen/batchGenCode', '192.168.148.224', '', '{\"tables\":\"sys_dict_data\"}', NULL, 0, NULL, '2023-11-17 11:41:34', 542);
INSERT INTO `sys_oper_log` VALUES (105, '代码生成', 8, 'com.ruoyi.gen.controller.GenController.batchGenCode()', 'GET', 1, 'admin', NULL, '/gen/batchGenCode', '127.0.0.1', '', '{\"tables\":\"sys_dict_data\"}', NULL, 0, NULL, '2023-11-17 11:51:24', 675);
INSERT INTO `sys_oper_log` VALUES (106, '代码生成', 2, 'com.ruoyi.gen.controller.GenController.synchDb()', 'GET', 1, 'admin', NULL, '/gen/synchDb/sys_dict_data', '127.0.0.1', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 11:52:07', 4191);
INSERT INTO `sys_oper_log` VALUES (107, '代码生成', 8, 'com.ruoyi.gen.controller.GenController.batchGenCode()', 'GET', 1, 'admin', NULL, '/gen/batchGenCode', '172.20.10.5', '', '{\"tables\":\"sys_dict_data\"}', NULL, 0, NULL, '2023-11-17 11:53:43', 529);
INSERT INTO `sys_oper_log` VALUES (108, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '172.20.10.5', '', '{\"tables\":\"core_technical_personnel\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 12:10:53', 5285);
INSERT INTO `sys_oper_log` VALUES (109, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '172.20.10.5', '', '{\"tables\":\"business_operator_information,budget,educate\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 12:12:31', 9010);
INSERT INTO `sys_oper_log` VALUES (110, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '172.20.10.5', '', '{\"tables\":\"core_technical_personnel,candidate,business_operator_information,budget,educate,documents,device_information,training,bid_evaluation_committee,applications,achievement,winning_results,tender_projects,tender,supplier_access,supplier,submission_of_bids,sourcing,related_accessories,quotation,public_attachments,notice,procurement_plan,occupation,non_bidding_projects,line_items,job,gf_projects,framework_plan,framework_agreement_management,experience,financial_status,expert,enterprise_qualification,employee,contract\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 12:12:46', 148206);
INSERT INTO `sys_oper_log` VALUES (111, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '172.20.10.5', '', '{\"tables\":\"core_technical_personnel,candidate,business_operator_information,budget,educate,documents,device_information,training,bid_evaluation_committee,applications,achievement,winning_results,tender_projects,tender,supplier_access,supplier,submission_of_bids,sourcing,related_accessories,quotation,public_attachments,notice,procurement_plan,occupation,non_bidding_projects,line_items,job,gf_projects,framework_plan,framework_agreement_management,experience,financial_status,expert,enterprise_qualification,employee,contract\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 12:13:03', 159538);
INSERT INTO `sys_oper_log` VALUES (112, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '172.20.10.5', '', '{\"tables\":\"documents,device_information,candidate,bid_evaluation_committee,applications,achievement,winning_results,training,tender,supplier_access,tender_projects\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 12:13:30', 41575);
INSERT INTO `sys_oper_log` VALUES (113, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '172.20.10.5', '', '{\"tables\":\"documents,device_information,candidate,bid_evaluation_committee,applications,achievement,winning_results,training,tender,supplier_access,tender_projects\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 12:13:52', 39150);
INSERT INTO `sys_oper_log` VALUES (114, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '172.20.10.5', '', '{\"tables\":\"business_operator_information,budget,educate,documents,device_information,core_technical_personnel,candidate,bid_evaluation_committee,applications,achievement\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 12:14:59', 40941);
INSERT INTO `sys_oper_log` VALUES (115, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '172.20.10.5', '', '{\"tables\":\"winning_results,training,tender,supplier_access,tender_projects,supplier,submission_of_bids,sourcing,related_accessories,quotation\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 12:23:33', 38017);
INSERT INTO `sys_oper_log` VALUES (116, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '172.20.10.5', '', '{\"tables\":\"public_attachments,procurement_plan,occupation,notice,line_items,job,non_bidding_projects,gf_projects,framework_plan,framework_agreement_management\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 12:24:28', 41801);
INSERT INTO `sys_oper_log` VALUES (117, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '172.20.10.5', '', '{\"tables\":\"experience,financial_status,expert,enterprise_qualification,employee,contract\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 12:28:20', 22781);
INSERT INTO `sys_oper_log` VALUES (118, '代码生成', 8, 'com.ruoyi.gen.controller.GenController.batchGenCode()', 'GET', 1, 'admin', NULL, '/gen/batchGenCode', '192.168.21.247', '', '{\"tables\":\"achievement,applications,bid_evaluation_committee,budget,business_operator_information,candidate,core_technical_personnel,device_information,documents,educate\"}', NULL, 0, NULL, '2023-11-17 13:25:56', 3121);
INSERT INTO `sys_oper_log` VALUES (119, '代码生成', 8, 'com.ruoyi.gen.controller.GenController.batchGenCode()', 'GET', 1, 'admin', NULL, '/gen/batchGenCode', '192.168.21.247', '', '{\"tables\":\"achievement,applications,bid_evaluation_committee,budget,business_operator_information,candidate,core_technical_personnel,device_information,documents,educate\"}', NULL, 0, NULL, '2023-11-17 13:28:35', 2982);
INSERT INTO `sys_oper_log` VALUES (120, '代码生成', 8, 'com.ruoyi.gen.controller.GenController.batchGenCode()', 'GET', 1, 'admin', NULL, '/gen/batchGenCode', '192.168.21.247', '', '{\"tables\":\"achievement\"}', NULL, 0, NULL, '2023-11-17 13:29:52', 502);
INSERT INTO `sys_oper_log` VALUES (121, '代码生成', 8, 'com.ruoyi.gen.controller.GenController.batchGenCode()', 'GET', 1, 'admin', NULL, '/gen/batchGenCode', '192.168.21.247', '', '{\"tables\":\"achievement,applications\"}', NULL, 0, NULL, '2023-11-17 13:31:50', 752);
INSERT INTO `sys_oper_log` VALUES (122, '代码生成', 8, 'com.ruoyi.gen.controller.GenController.batchGenCode()', 'GET', 1, 'admin', NULL, '/gen/batchGenCode', '192.168.21.247', '', '{\"tables\":\"achievement,applications,bid_evaluation_committee,budget,business_operator_information,candidate,core_technical_personnel,device_information,documents,educate,quotation,related_accessories,sourcing,submission_of_bids,supplier,supplier_access,tender,tender_projects,training,winning_results,framework_agreement_management,framework_plan,gf_projects,job,line_items,non_bidding_projects,notice,occupation,procurement_plan,public_attachments,contract,employee,enterprise_qualification,experience,expert,financial_status\"}', NULL, 0, NULL, '2023-11-17 13:33:04', 9905);
INSERT INTO `sys_oper_log` VALUES (123, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '172.20.10.5', '', '{\"children\":[],\"component\":\"system/user/index\",\"createTime\":\"2023-11-16 19:03:09\",\"icon\":\"user\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":100,\"menuName\":\"用户\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":100,\"path\":\"user\",\"perms\":\"system:user:list\",\"query\":\"\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"修改菜单\'用户\'失败，上级菜单不能选择自己\",\"code\":500}', 0, NULL, '2023-11-17 13:45:04', 196);
INSERT INTO `sys_oper_log` VALUES (124, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '172.20.10.5', '', '{\"children\":[],\"component\":\"system/user/index\",\"createTime\":\"2023-11-16 19:03:09\",\"icon\":\"user\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":100,\"menuName\":\"用户\",\"menuType\":\"M\",\"orderNum\":1,\"params\":{},\"parentId\":100,\"path\":\"user\",\"perms\":\"system:user:list\",\"query\":\"\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"修改菜单\'用户\'失败，上级菜单不能选择自己\",\"code\":500}', 0, NULL, '2023-11-17 13:45:19', 174);
INSERT INTO `sys_oper_log` VALUES (125, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '172.20.10.5', '', '{\"children\":[],\"component\":\"system/user/index\",\"createTime\":\"2023-11-16 19:03:09\",\"icon\":\"user\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":100,\"menuName\":\"用户\",\"menuType\":\"M\",\"orderNum\":1,\"params\":{},\"parentId\":100,\"path\":\"user\",\"perms\":\"system:user:list\",\"query\":\"\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"修改菜单\'用户\'失败，上级菜单不能选择自己\",\"code\":500}', 0, NULL, '2023-11-17 13:45:23', 185);
INSERT INTO `sys_oper_log` VALUES (126, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '172.20.10.5', '', '{\"children\":[],\"component\":\"system/user/index\",\"createTime\":\"2023-11-16 19:03:09\",\"icon\":\"user\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":100,\"menuName\":\"用户\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":1,\"path\":\"user\",\"perms\":\"system:user:list\",\"query\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 13:48:00', 523);
INSERT INTO `sys_oper_log` VALUES (127, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '172.20.10.5', '', '{\"children\":[],\"component\":\"system/user/index\",\"createTime\":\"2023-11-16 19:03:09\",\"icon\":\"user\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":100,\"menuName\":\"采购需求管理\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":1,\"path\":\"user\",\"perms\":\"system:user:list\",\"query\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 13:55:39', 625);
INSERT INTO `sys_oper_log` VALUES (128, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '172.20.10.5', '', '{\"children\":[],\"component\":\"system/user/index\",\"createTime\":\"2023-11-16 19:03:09\",\"icon\":\"user\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":100,\"menuName\":\"采购需求管理\",\"menuType\":\"M\",\"orderNum\":1,\"params\":{},\"parentId\":1,\"path\":\"user\",\"perms\":\"system:user:list\",\"query\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 13:56:59', 528);
INSERT INTO `sys_oper_log` VALUES (129, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '172.20.10.5', '', '{\"children\":[],\"component\":\"system/user/index\",\"createTime\":\"2023-11-16 19:03:09\",\"icon\":\"user\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":100,\"menuName\":\"采购需求管理\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":1,\"path\":\"user\",\"perms\":\"system:user:list\",\"query\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 13:57:50', 499);
INSERT INTO `sys_oper_log` VALUES (130, '参数管理', 9, 'com.ruoyi.system.controller.SysConfigController.refreshCache()', 'DELETE', 1, 'admin', NULL, '/config/refreshCache', '127.0.0.1', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 14:43:41', 307);
INSERT INTO `sys_oper_log` VALUES (131, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '192.168.148.224', '', '{\"children\":[],\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"招标项目\",\"menuType\":\"M\",\"orderNum\":1,\"params\":{},\"parentId\":0,\"path\":\"Tender\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 15:00:42', 412);
INSERT INTO `sys_oper_log` VALUES (132, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.148.224', '', '{\"children\":[],\"createTime\":\"2023-11-17 15:00:42\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2000,\"menuName\":\"招标项目\",\"menuType\":\"M\",\"orderNum\":1,\"params\":{},\"parentId\":0,\"path\":\"tender\",\"perms\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 15:03:33', 390);
INSERT INTO `sys_oper_log` VALUES (133, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '192.168.148.224', '', '{\"children\":[],\"component\":\"tender/tender1\",\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"招标项目\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2000,\"path\":\"tender2\",\"perms\":\"tender:tender1:list\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 15:23:41', 503);
INSERT INTO `sys_oper_log` VALUES (134, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.148.224', '', '{\"children\":[],\"component\":\"tender/tender1/index\",\"createTime\":\"2023-11-17 15:23:40\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2001,\"menuName\":\"招标项目\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2000,\"path\":\"tender2\",\"perms\":\"tender:tender1:list\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 15:24:47', 414);
INSERT INTO `sys_oper_log` VALUES (135, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.148.224', '', '{\"children\":[],\"component\":\"tender/tender1/index\",\"createTime\":\"2023-11-17 15:23:40\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2001,\"menuName\":\"招标项目\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2000,\"path\":\"tender1\",\"perms\":\"tender:tender1:list\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 15:25:33', 6406);
INSERT INTO `sys_oper_log` VALUES (136, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.148.224', '', '{\"children\":[],\"component\":\"tender/tender1/index\",\"createTime\":\"2023-11-17 15:23:40\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2001,\"menuName\":\"招标项目\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2000,\"path\":\"tender1\",\"perms\":\"tender:tender1:list\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 15:25:33', 405);
INSERT INTO `sys_oper_log` VALUES (137, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.148.224', '', '{\"children\":[],\"component\":\"tender/tender/index\",\"createTime\":\"2023-11-17 15:23:40\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2001,\"menuName\":\"招标项目\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2000,\"path\":\"tender\",\"perms\":\"tender:tender:list\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 15:27:19', 461);
INSERT INTO `sys_oper_log` VALUES (138, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '192.168.148.224', '', '{\"tables\":\"com_quotation\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 15:37:36', 1836);
INSERT INTO `sys_oper_log` VALUES (139, '代码生成', 3, 'com.ruoyi.gen.controller.GenController.remove()', 'DELETE', 1, 'admin', NULL, '/gen/1', '192.168.148.224', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 15:40:25', 873);
INSERT INTO `sys_oper_log` VALUES (140, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '192.168.148.224', '', '{\"tables\":\"bid_tender\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 15:41:13', 5418);
INSERT INTO `sys_oper_log` VALUES (141, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '192.168.148.224', '', '{\"tables\":\"bid_tender\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 15:41:19', 5801);
INSERT INTO `sys_oper_log` VALUES (142, '代码生成', 3, 'com.ruoyi.gen.controller.GenController.remove()', 'DELETE', 1, 'admin', NULL, '/gen/3', '192.168.148.224', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 15:41:23', 819);
INSERT INTO `sys_oper_log` VALUES (143, '代码生成', 8, 'com.ruoyi.gen.controller.GenController.batchGenCode()', 'GET', 1, 'admin', NULL, '/gen/batchGenCode', '192.168.148.224', '', '{\"tables\":\"bid_tender\"}', NULL, 0, NULL, '2023-11-17 15:42:18', 289);
INSERT INTO `sys_oper_log` VALUES (144, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '192.168.148.224', '', '{\"tables\":\"bid_tender\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 15:54:06', 5180);
INSERT INTO `sys_oper_log` VALUES (145, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '192.168.148.224', '', '{\"tables\":\"bid_tender\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 15:54:08', 5202);
INSERT INTO `sys_oper_log` VALUES (146, '代码生成', 3, 'com.ruoyi.gen.controller.GenController.remove()', 'DELETE', 1, 'admin', NULL, '/gen/5', '192.168.148.224', '', '{}', NULL, 1, '\r\n### Error updating database.  Cause: com.mysql.cj.jdbc.exceptions.MySQLTransactionRollbackException: Lock wait timeout exceeded; try restarting transaction\r\n### The error may exist in file [D:\\Users\\lenovo\\Desktop\\HH\\RuoYi-Cloud-master\\ruoyi-modules\\ruoyi-gen\\target\\classes\\mapper\\generator\\GenTableColumnMapper.xml]\r\n### The error may involve com.ruoyi.gen.mapper.GenTableColumnMapper.deleteGenTableColumnByIds-Inline\r\n### The error occurred while setting parameters\r\n### SQL: delete from gen_table_column where table_id in          (               ?          )\r\n### Cause: com.mysql.cj.jdbc.exceptions.MySQLTransactionRollbackException: Lock wait timeout exceeded; try restarting transaction\n; Lock wait timeout exceeded; try restarting transaction; nested exception is com.mysql.cj.jdbc.exceptions.MySQLTransactionRollbackException: Lock wait timeout exceeded; try restarting transaction', '2023-11-17 15:55:05', 51794);
INSERT INTO `sys_oper_log` VALUES (147, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.148.224', '', '{\"children\":[],\"component\":\"tender/tender1/index\",\"createTime\":\"2023-11-17 15:23:40\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2001,\"menuName\":\"招标项目\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2000,\"path\":\"tender1\",\"perms\":\"tender:tender1:list\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 15:55:37', 476);
INSERT INTO `sys_oper_log` VALUES (148, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '127.0.0.1', '', '{\"tables\":\"nobid_non_pro,nobid_sup_non_pro,ppm_frame_plan,ppm_frame_management,com_quotation,bs_applications,bs_committee,bs_training,bs_occupation,bs_job,bs_experience,bs_educate,bs_achievement,bs_financial_status,bs_accessories,bs_enterprise,bs_personnel,bs_operator,bs_access,bs_contract,bs_expert,bs_supplier,bs_employee,com_pub_attachments,com_sourcing,bid_submission,bid_winning_results,bid_candidate,bid_documents,bid_notice,bid_get_tender,bid_tender,ppm_device,ppm_line_items,ppm_budget,ppm_procurement_plan\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 15:57:30', 204893);
INSERT INTO `sys_oper_log` VALUES (149, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '192.168.148.224', '', '{\"children\":[],\"component\":\"tender/formEC/index\",\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"formEC\",\"menuType\":\"C\",\"orderNum\":2,\"params\":{},\"parentId\":2000,\"path\":\"formEC\",\"perms\":\"tender:formEC:list\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 15:59:40', 396);
INSERT INTO `sys_oper_log` VALUES (150, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.148.224', '', '{\"children\":[],\"component\":\"tender/formEC/index\",\"createTime\":\"2023-11-17 15:59:39\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2002,\"menuName\":\"组建评标委员会\",\"menuType\":\"C\",\"orderNum\":2,\"params\":{},\"parentId\":2000,\"path\":\"formEC\",\"perms\":\"tender:formEC:list\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 16:00:01', 338);
INSERT INTO `sys_oper_log` VALUES (151, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '127.0.0.1', '', '{\"tables\":\"nobid_non_pro,nobid_sup_non_pro,ppm_frame_plan,ppm_frame_management,com_quotation,bs_applications,bs_committee,bs_training,bs_occupation,bs_job\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 16:01:04', 21342);
INSERT INTO `sys_oper_log` VALUES (152, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '127.0.0.1', '', '{\"tables\":\"bs_expert,bs_supplier,bs_employee,com_pub_attachments,com_sourcing,bid_submission,bid_winning_results,bid_candidate,bid_documents,bid_notice\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 16:01:55', 31265);
INSERT INTO `sys_oper_log` VALUES (153, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '127.0.0.1', '', '{\"tables\":\"nobid_non_pro,nobid_sup_non_pro,ppm_frame_plan,ppm_frame_management,com_quotation,bs_applications,bs_committee,bs_training,bs_occupation,bs_job,bs_experience,bs_educate,bs_achievement,bs_financial_status,bs_accessories,bs_enterprise,bs_personnel,bs_operator,bs_access,bs_contract,bs_expert,bs_supplier,bs_employee,com_pub_attachments,com_sourcing,bid_submission,bid_winning_results,bid_candidate,bid_documents,bid_notice,bid_get_tender,bid_tender,ppm_device,ppm_line_items,ppm_budget,ppm_procurement_plan\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 16:02:15', 137588);
INSERT INTO `sys_oper_log` VALUES (154, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '127.0.0.1', '', '{\"tables\":\"nobid_non_pro,nobid_sup_non_pro,ppm_frame_plan,ppm_frame_management,com_quotation,bs_applications,bs_committee,bs_training,bs_occupation,bs_job,bs_experience,bs_educate,bs_achievement,bs_financial_status,bs_accessories,bs_enterprise,bs_personnel,bs_operator,bs_access,bs_contract,bs_expert,bs_supplier,bs_employee,com_pub_attachments,com_sourcing,bid_submission,bid_winning_results,bid_candidate,bid_documents,bid_notice,bid_get_tender,bid_tender,ppm_device,ppm_line_items,ppm_budget,ppm_procurement_plan\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-17 16:05:28', 107641);
INSERT INTO `sys_oper_log` VALUES (155, '代码生成', 8, 'com.ruoyi.gen.controller.GenController.batchGenCode()', 'GET', 1, 'admin', NULL, '/gen/batchGenCode', '127.0.0.1', '', '{\"tables\":\"bid_candidate,bid_documents,bid_get_tender,bid_notice,bid_submission,bid_tender,bid_winning_results,bs_access,bs_accessories,bs_achievement\"}', NULL, 0, NULL, '2023-11-17 16:46:16', 3594);
INSERT INTO `sys_oper_log` VALUES (156, '代码生成', 8, 'com.ruoyi.gen.controller.GenController.batchGenCode()', 'GET', 1, 'admin', NULL, '/gen/batchGenCode', '127.0.0.1', '', '{\"tables\":\"bid_candidate,bid_documents,bid_get_tender,bid_notice,bid_submission,bid_tender,bid_winning_results,bs_access,bs_accessories,bs_achievement,bs_applications,bs_committee,bs_contract,bs_educate,bs_employee,bs_enterprise,bs_experience,bs_expert,bs_financial_status,bs_job,bs_occupation,bs_operator,bs_personnel,bs_supplier,bs_training,com_pub_attachments,com_quotation,com_sourcing,nobid_non_pro,nobid_sup_non_pro,ppm_budget,ppm_device,ppm_frame_management,ppm_frame_plan,ppm_line_items,ppm_procurement_plan\"}', NULL, 0, NULL, '2023-11-19 15:09:24', 10784);
INSERT INTO `sys_oper_log` VALUES (157, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '192.168.148.224', '', '{\"children\":[],\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"查询\",\"menuType\":\"F\",\"orderNum\":1,\"params\":{},\"parentId\":2001,\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-19 23:51:33', 4633);
INSERT INTO `sys_oper_log` VALUES (158, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '192.168.148.224', '', '{\"children\":[],\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"查询\",\"menuType\":\"F\",\"orderNum\":1,\"params\":{},\"parentId\":2001,\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-19 23:51:33', 1209);
INSERT INTO `sys_oper_log` VALUES (159, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '192.168.148.224', '', '{\"children\":[],\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"查询\",\"menuType\":\"F\",\"orderNum\":1,\"params\":{},\"parentId\":2001,\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-19 23:51:33', 3475);
INSERT INTO `sys_oper_log` VALUES (160, '菜单管理', 3, 'com.ruoyi.system.controller.SysMenuController.remove()', 'DELETE', 1, 'admin', NULL, '/menu/2004', '192.168.148.224', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-19 23:51:39', 489);
INSERT INTO `sys_oper_log` VALUES (161, '菜单管理', 3, 'com.ruoyi.system.controller.SysMenuController.remove()', 'DELETE', 1, 'admin', NULL, '/menu/2005', '192.168.148.224', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-19 23:51:42', 637);
INSERT INTO `sys_oper_log` VALUES (162, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.148.224', '', '{\"children\":[],\"createTime\":\"2023-11-19 23:51:32\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2003,\"menuName\":\"查询\",\"menuType\":\"F\",\"orderNum\":1,\"params\":{},\"parentId\":2001,\"path\":\"\",\"perms\":\"tender:tender1:query\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-19 23:52:50', 259);
INSERT INTO `sys_oper_log` VALUES (163, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"采购计划\",\"menuType\":\"M\",\"orderNum\":1,\"params\":{},\"parentId\":0,\"path\":\"OTB\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-20 09:18:03', 326);
INSERT INTO `sys_oper_log` VALUES (164, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"createTime\":\"2023-11-20 09:18:03\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2006,\"menuName\":\"采购计划\",\"menuType\":\"M\",\"orderNum\":1,\"params\":{},\"parentId\":0,\"path\":\"otb\",\"perms\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-20 09:18:12', 411);
INSERT INTO `sys_oper_log` VALUES (165, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"createTime\":\"2023-11-20 09:18:03\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2006,\"menuName\":\"采购需求管理\",\"menuType\":\"M\",\"orderNum\":1,\"params\":{},\"parentId\":0,\"path\":\"purchase\",\"perms\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-20 09:19:26', 344);
INSERT INTO `sys_oper_log` VALUES (166, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"采购计划管理\",\"menuType\":\"M\",\"orderNum\":1,\"params\":{},\"parentId\":2006,\"path\":\"otb\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-20 09:19:54', 359);
INSERT INTO `sys_oper_log` VALUES (167, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"component\":\"purchase/otb/index\",\"createTime\":\"2023-11-20 09:19:54\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2007,\"menuName\":\"采购计划管理\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2006,\"path\":\"otb\",\"perms\":\"purchase:otb:list\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-20 09:20:53', 300);
INSERT INTO `sys_oper_log` VALUES (168, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"createTime\":\"2023-11-17 15:00:42\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2000,\"menuName\":\"招标项目\",\"menuType\":\"M\",\"orderNum\":5,\"params\":{},\"parentId\":0,\"path\":\"tender\",\"perms\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-20 10:34:35', 501);
INSERT INTO `sys_oper_log` VALUES (169, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"createTime\":\"2023-11-20 09:18:03\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2006,\"menuName\":\"采购需求管理\",\"menuType\":\"M\",\"orderNum\":6,\"params\":{},\"parentId\":0,\"path\":\"purchase\",\"perms\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-20 10:34:42', 365);
INSERT INTO `sys_oper_log` VALUES (170, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"createTime\":\"2023-11-16 19:03:09\",\"icon\":\"guide\",\"isCache\":\"0\",\"isFrame\":\"0\",\"menuId\":4,\"menuName\":\"若依官网\",\"menuType\":\"M\",\"orderNum\":4,\"params\":{},\"parentId\":0,\"path\":\"http://ruoyi.vip\",\"perms\":\"\",\"query\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"1\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-20 12:08:45', 345);
INSERT INTO `sys_oper_log` VALUES (171, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"createTime\":\"2023-11-16 19:03:09\",\"icon\":\"guide\",\"isCache\":\"0\",\"isFrame\":\"0\",\"menuId\":4,\"menuName\":\"若依官网\",\"menuType\":\"M\",\"orderNum\":4,\"params\":{},\"parentId\":0,\"path\":\"http://ruoyi.vip\",\"perms\":\"\",\"query\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-20 12:09:08', 321);
INSERT INTO `sys_oper_log` VALUES (172, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/index\",\"createTime\":\"2023-11-17 15:23:40\",\"icon\":\"monitor\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2001,\"menuName\":\"招标项目\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2000,\"path\":\"tender1\",\"perms\":\"tender:tender1:list\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-20 15:49:17', 709);
INSERT INTO `sys_oper_log` VALUES (173, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"供应商管理\",\"menuType\":\"M\",\"orderNum\":10,\"params\":{},\"parentId\":0,\"path\":\"supplier\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-20 16:55:58', 338);
INSERT INTO `sys_oper_log` VALUES (174, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"createTime\":\"2023-11-20 16:55:58\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2008,\"menuName\":\"供应商管理\",\"menuType\":\"M\",\"orderNum\":7,\"params\":{},\"parentId\":0,\"path\":\"supplier\",\"perms\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-20 16:56:06', 376);
INSERT INTO `sys_oper_log` VALUES (175, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"component\":\"supplier/sqe/index\",\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"供应商\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2008,\"path\":\"sqe\",\"perms\":\"supplier:sqe:list\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-20 16:57:22', 453);
INSERT INTO `sys_oper_log` VALUES (176, '员工', 5, 'com.hh.pms.sae.controller.BsEmployeeController.export()', 'POST', 1, NULL, NULL, '/employee/export', '127.0.0.1', '', '{\"params\":{}}', NULL, 1, 'system:employee:export', '2023-11-20 17:27:07', 141);
INSERT INTO `sys_oper_log` VALUES (177, '代码生成', 8, 'com.ruoyi.gen.controller.GenController.batchGenCode()', 'GET', 1, 'admin', NULL, '/gen/batchGenCode', '127.0.0.1', '', '{\"tables\":\"bid_tender\"}', NULL, 0, NULL, '2023-11-20 19:08:26', 653);
INSERT INTO `sys_oper_log` VALUES (178, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"修改\",\"menuType\":\"F\",\"orderNum\":1,\"params\":{},\"parentId\":2001,\"perms\":\"system:tender:edit\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-20 19:24:46', 752);
INSERT INTO `sys_oper_log` VALUES (179, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"createTime\":\"2023-11-20 19:24:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2010,\"menuName\":\"修改\",\"menuType\":\"F\",\"orderNum\":1,\"params\":{},\"parentId\":2001,\"path\":\"\",\"perms\":\"tender:tender1:deit\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-20 19:27:15', 739);
INSERT INTO `sys_oper_log` VALUES (180, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"删除\",\"menuType\":\"F\",\"orderNum\":2,\"params\":{},\"parentId\":2001,\"perms\":\"tender:tender1:remove\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-20 19:27:41', 769);
INSERT INTO `sys_oper_log` VALUES (181, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"status\":\"0\",\"visible\":\"1\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 10:47:09', 826);
INSERT INTO `sys_oper_log` VALUES (182, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 10:47:08\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2012,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"1\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 10:49:11', 576);
INSERT INTO `sys_oper_log` VALUES (183, '菜单管理', 3, 'com.ruoyi.system.controller.SysMenuController.remove()', 'DELETE', 1, 'admin', NULL, '/menu/2012', '192.168.176.224', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 10:49:40', 830);
INSERT INTO `sys_oper_log` VALUES (184, '字典类型', 1, 'com.ruoyi.system.controller.SysDictTypeController.add()', 'POST', 1, 'admin', NULL, '/dict/type', '127.0.0.1', '', '{\"createBy\":\"admin\",\"dictName\":\"采购业务类型\",\"dictType\":\"ppm_procurement_plan\",\"params\":{},\"status\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 10:49:43', 2027);
INSERT INTO `sys_oper_log` VALUES (185, '字典数据', 1, 'com.ruoyi.system.controller.SysDictDataController.add()', 'POST', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"default\":false,\"dictLabel\":\"业务1\",\"dictSort\":0,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"0\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 10:51:59', 494);
INSERT INTO `sys_oper_log` VALUES (186, '字典数据', 1, 'com.ruoyi.system.controller.SysDictDataController.add()', 'POST', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"default\":false,\"dictLabel\":\"业务2\",\"dictSort\":0,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"1\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 10:52:12', 511);
INSERT INTO `sys_oper_log` VALUES (187, '字典数据', 1, 'com.ruoyi.system.controller.SysDictDataController.add()', 'POST', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"default\":false,\"dictLabel\":\"业务3\",\"dictSort\":0,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"3\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 10:52:40', 1628);
INSERT INTO `sys_oper_log` VALUES (188, '字典数据', 1, 'com.ruoyi.system.controller.SysDictDataController.add()', 'POST', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"default\":false,\"dictLabel\":\"业务4\",\"dictSort\":0,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"4\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 10:53:03', 566);
INSERT INTO `sys_oper_log` VALUES (189, '字典数据', 2, 'com.ruoyi.system.controller.SysDictDataController.edit()', 'PUT', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"createTime\":\"2023-11-21 10:52:39\",\"default\":false,\"dictCode\":102,\"dictLabel\":\"业务3\",\"dictSort\":0,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"2\",\"isDefault\":\"N\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\",\"updateBy\":\"admin\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 10:53:25', 555);
INSERT INTO `sys_oper_log` VALUES (190, '字典数据', 2, 'com.ruoyi.system.controller.SysDictDataController.edit()', 'PUT', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"createTime\":\"2023-11-21 10:53:02\",\"default\":false,\"dictCode\":103,\"dictLabel\":\"业务4\",\"dictSort\":0,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"3\",\"isDefault\":\"N\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\",\"updateBy\":\"admin\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 10:53:36', 607);
INSERT INTO `sys_oper_log` VALUES (191, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"component\":\"tender/tender1/dateils\",\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"dateils\",\"perms\":\"tender:tender1:dateils\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 11:06:46', 513);
INSERT INTO `sys_oper_log` VALUES (192, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"dateils\",\"perms\":\"tender:tender1:details\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 11:09:14', 542);
INSERT INTO `sys_oper_log` VALUES (193, '字典数据', 2, 'com.ruoyi.system.controller.SysDictDataController.edit()', 'PUT', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"createTime\":\"2023-11-21 10:51:59\",\"default\":false,\"dictCode\":100,\"dictLabel\":\"办公类型\",\"dictSort\":0,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"0\",\"isDefault\":\"N\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\",\"updateBy\":\"admin\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 11:15:45', 1372);
INSERT INTO `sys_oper_log` VALUES (194, '字典数据', 2, 'com.ruoyi.system.controller.SysDictDataController.edit()', 'PUT', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"createTime\":\"2023-11-21 10:51:59\",\"default\":false,\"dictCode\":100,\"dictLabel\":\"办公类型\",\"dictSort\":0,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"1\",\"isDefault\":\"N\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\",\"updateBy\":\"admin\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 11:16:10', 568);
INSERT INTO `sys_oper_log` VALUES (195, '字典数据', 2, 'com.ruoyi.system.controller.SysDictDataController.edit()', 'PUT', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"createTime\":\"2023-11-21 10:52:11\",\"default\":false,\"dictCode\":101,\"dictLabel\":\"服务类\",\"dictSort\":0,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"2\",\"isDefault\":\"N\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\",\"updateBy\":\"admin\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 11:16:41', 563);
INSERT INTO `sys_oper_log` VALUES (196, '字典数据', 2, 'com.ruoyi.system.controller.SysDictDataController.edit()', 'PUT', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"createTime\":\"2023-11-21 10:52:39\",\"default\":false,\"dictCode\":102,\"dictLabel\":\"资讯类\",\"dictSort\":0,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"2\",\"isDefault\":\"N\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\",\"updateBy\":\"admin\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 11:17:05', 499);
INSERT INTO `sys_oper_log` VALUES (197, '字典数据', 2, 'com.ruoyi.system.controller.SysDictDataController.edit()', 'PUT', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"createTime\":\"2023-11-21 10:52:39\",\"default\":false,\"dictCode\":102,\"dictLabel\":\"资讯类\",\"dictSort\":0,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"3\",\"isDefault\":\"N\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\",\"updateBy\":\"admin\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 11:17:21', 534);
INSERT INTO `sys_oper_log` VALUES (198, '字典数据', 2, 'com.ruoyi.system.controller.SysDictDataController.edit()', 'PUT', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"createTime\":\"2023-11-21 10:53:02\",\"default\":false,\"dictCode\":103,\"dictLabel\":\"固定资产\",\"dictSort\":0,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"4\",\"isDefault\":\"N\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\",\"updateBy\":\"admin\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 11:17:32', 538);
INSERT INTO `sys_oper_log` VALUES (199, '字典数据', 1, 'com.ruoyi.system.controller.SysDictDataController.add()', 'POST', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"default\":false,\"dictLabel\":\"全部类型\",\"dictSort\":0,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"0\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 13:50:35', 691);
INSERT INTO `sys_oper_log` VALUES (200, '字典数据', 2, 'com.ruoyi.system.controller.SysDictDataController.edit()', 'PUT', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"createTime\":\"2023-11-21 13:50:34\",\"default\":false,\"dictCode\":104,\"dictLabel\":\"全部类型\",\"dictSort\":1,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"0\",\"isDefault\":\"N\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\",\"updateBy\":\"admin\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 13:51:06', 815);
INSERT INTO `sys_oper_log` VALUES (201, '字典数据', 2, 'com.ruoyi.system.controller.SysDictDataController.edit()', 'PUT', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"createTime\":\"2023-11-21 13:50:34\",\"default\":false,\"dictCode\":104,\"dictLabel\":\"全部类型\",\"dictSort\":0,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"0\",\"isDefault\":\"N\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\",\"updateBy\":\"admin\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 13:51:36', 670);
INSERT INTO `sys_oper_log` VALUES (202, '字典数据', 2, 'com.ruoyi.system.controller.SysDictDataController.edit()', 'PUT', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"createTime\":\"2023-11-21 10:51:59\",\"default\":false,\"dictCode\":100,\"dictLabel\":\"办公类型\",\"dictSort\":1,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"1\",\"isDefault\":\"N\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\",\"updateBy\":\"admin\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 13:51:42', 675);
INSERT INTO `sys_oper_log` VALUES (203, '字典数据', 2, 'com.ruoyi.system.controller.SysDictDataController.edit()', 'PUT', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"createTime\":\"2023-11-21 10:53:02\",\"default\":false,\"dictCode\":103,\"dictLabel\":\"固定资产\",\"dictSort\":2,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"4\",\"isDefault\":\"N\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\",\"updateBy\":\"admin\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 13:51:53', 656);
INSERT INTO `sys_oper_log` VALUES (204, '字典数据', 2, 'com.ruoyi.system.controller.SysDictDataController.edit()', 'PUT', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"createTime\":\"2023-11-21 10:52:39\",\"default\":false,\"dictCode\":102,\"dictLabel\":\"资讯类\",\"dictSort\":3,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"3\",\"isDefault\":\"N\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\",\"updateBy\":\"admin\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 13:52:00', 588);
INSERT INTO `sys_oper_log` VALUES (205, '字典数据', 2, 'com.ruoyi.system.controller.SysDictDataController.edit()', 'PUT', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"createTime\":\"2023-11-21 13:50:34\",\"default\":false,\"dictCode\":104,\"dictLabel\":\"全部类型\",\"dictSort\":4,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"0\",\"isDefault\":\"N\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\",\"updateBy\":\"admin\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 13:52:07', 716);
INSERT INTO `sys_oper_log` VALUES (206, '字典数据', 2, 'com.ruoyi.system.controller.SysDictDataController.edit()', 'PUT', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"createTime\":\"2023-11-21 10:52:11\",\"default\":false,\"dictCode\":101,\"dictLabel\":\"服务类\",\"dictSort\":5,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"2\",\"isDefault\":\"N\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\",\"updateBy\":\"admin\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 13:52:15', 707);
INSERT INTO `sys_oper_log` VALUES (207, '字典数据', 2, 'com.ruoyi.system.controller.SysDictDataController.edit()', 'PUT', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"createTime\":\"2023-11-21 13:50:34\",\"default\":false,\"dictCode\":104,\"dictLabel\":\"全部类型\",\"dictSort\":0,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"0\",\"isDefault\":\"N\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\",\"updateBy\":\"admin\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 13:52:24', 671);
INSERT INTO `sys_oper_log` VALUES (208, '字典数据', 2, 'com.ruoyi.system.controller.SysDictDataController.edit()', 'PUT', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"createTime\":\"2023-11-21 10:52:11\",\"default\":false,\"dictCode\":101,\"dictLabel\":\"服务类\",\"dictSort\":4,\"dictType\":\"ppm_procurement_plan\",\"dictValue\":\"2\",\"isDefault\":\"N\",\"listClass\":\"default\",\"params\":{},\"status\":\"0\",\"updateBy\":\"admin\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 13:52:35', 1418);
INSERT INTO `sys_oper_log` VALUES (209, '员工', 0, 'com.hh.pms.cm.controller.BsEmployeeController.login()', 'POST', 1, NULL, NULL, '/employee/login', '127.0.0.1', '', '', NULL, 1, 'system:employee:login', '2023-11-21 14:00:35', 5);
INSERT INTO `sys_oper_log` VALUES (210, '员工', 0, 'com.hh.pms.cm.controller.BsEmployeeController.login()', 'POST', 1, NULL, NULL, '/employee/login', '127.0.0.1', '', '', NULL, 1, 'system:employee:login', '2023-11-21 14:00:36', 1);
INSERT INTO `sys_oper_log` VALUES (211, '员工', 0, 'com.hh.pms.cm.controller.BsEmployeeController.login()', 'POST', 1, NULL, NULL, '/employee/login', '127.0.0.1', '', '', NULL, 1, 'system:employee:login', '2023-11-21 14:00:37', 0);
INSERT INTO `sys_oper_log` VALUES (212, '员工', 0, 'com.hh.pms.cm.controller.BsEmployeeController.login()', 'POST', 1, NULL, NULL, '/employee/login', '127.0.0.1', '', '', NULL, 1, 'system:employee:login', '2023-11-21 14:00:38', 0);
INSERT INTO `sys_oper_log` VALUES (213, '员工', 0, 'com.hh.pms.cm.controller.BsEmployeeController.login()', 'POST', 1, NULL, NULL, '/employee/login', '127.0.0.1', '', '', NULL, 1, 'system:employee:login', '2023-11-21 14:00:38', 0);
INSERT INTO `sys_oper_log` VALUES (214, '员工', 0, 'com.hh.pms.cm.controller.BsEmployeeController.login()', 'POST', 1, NULL, NULL, '/employee/login', '127.0.0.1', '', '', NULL, 1, 'system:employee:login', '2023-11-21 14:00:39', 0);
INSERT INTO `sys_oper_log` VALUES (215, '员工', 0, 'com.hh.pms.cm.controller.BsEmployeeController.login()', 'POST', 1, NULL, NULL, '/employee/login', '127.0.0.1', '', '', NULL, 1, 'system:employee:login', '2023-11-21 14:00:39', 0);
INSERT INTO `sys_oper_log` VALUES (216, '员工', 0, 'com.hh.pms.cm.controller.BsEmployeeController.login()', 'POST', 1, NULL, NULL, '/employee/login', '127.0.0.1', '', '', NULL, 1, 'system:employee:login', '2023-11-21 14:00:49', 0);
INSERT INTO `sys_oper_log` VALUES (217, '字典类型', 1, 'com.ruoyi.system.controller.SysDictTypeController.add()', 'POST', 1, 'admin', NULL, '/dict/type', '127.0.0.1', '', '{\"createBy\":\"admin\",\"dictName\":\"招标方式\",\"dictType\":\"bid_tender_biddingmethod\",\"params\":{},\"remark\":\"招标项目列表（方式）\",\"status\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 14:30:39', 1007);
INSERT INTO `sys_oper_log` VALUES (218, '字典数据', 1, 'com.ruoyi.system.controller.SysDictDataController.add()', 'POST', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"default\":false,\"dictLabel\":\"公开招标\",\"dictSort\":1,\"dictType\":\"bid_tender_biddingmethod\",\"dictValue\":\"1\",\"listClass\":\"default\",\"params\":{},\"remark\":\"方式：公开招标\",\"status\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 14:31:20', 754);
INSERT INTO `sys_oper_log` VALUES (219, '字典数据', 1, 'com.ruoyi.system.controller.SysDictDataController.add()', 'POST', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"default\":false,\"dictLabel\":\"邀请招标\",\"dictSort\":2,\"dictType\":\"bid_tender_biddingmethod\",\"dictValue\":\"2\",\"listClass\":\"default\",\"params\":{},\"remark\":\"方式：邀请招标\",\"status\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 14:31:49', 724);
INSERT INTO `sys_oper_log` VALUES (220, '字典类型', 1, 'com.ruoyi.system.controller.SysDictTypeController.add()', 'POST', 1, 'admin', NULL, '/dict/type', '127.0.0.1', '', '{\"createBy\":\"admin\",\"dictName\":\"项目状态\",\"dictType\":\"bid_tender_state\",\"params\":{},\"remark\":\"招标项目列表（状态）\",\"status\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 14:59:27', 750);
INSERT INTO `sys_oper_log` VALUES (221, '字典数据', 1, 'com.ruoyi.system.controller.SysDictDataController.add()', 'POST', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"default\":false,\"dictLabel\":\"招标公告\",\"dictSort\":1,\"dictType\":\"bid_tender_state\",\"dictValue\":\"1\",\"listClass\":\"default\",\"params\":{},\"remark\":\"项目状态：招标公告\",\"status\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 15:00:32', 749);
INSERT INTO `sys_oper_log` VALUES (222, '字典数据', 1, 'com.ruoyi.system.controller.SysDictDataController.add()', 'POST', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"default\":false,\"dictLabel\":\"立项中\",\"dictSort\":2,\"dictType\":\"bid_tender_state\",\"dictValue\":\"2\",\"listClass\":\"default\",\"params\":{},\"remark\":\"项目状态：立项中\\n\",\"status\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 15:01:16', 762);
INSERT INTO `sys_oper_log` VALUES (223, '招标项目', 3, 'com.hh.pms.controller.BidTenderController.remove()', 'DELETE', 1, NULL, NULL, '/tender/2', '127.0.0.1', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 15:58:54', 792);
INSERT INTO `sys_oper_log` VALUES (224, '代码生成', 3, 'com.ruoyi.gen.controller.GenController.remove()', 'DELETE', 1, 'admin', NULL, '/gen/132,129', '192.168.176.224', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 17:13:03', 2047);
INSERT INTO `sys_oper_log` VALUES (225, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '192.168.176.224', '', '{\"tables\":\"ppm_device,ppm_line_items\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 17:15:10', 13390);
INSERT INTO `sys_oper_log` VALUES (226, '代码生成', 2, 'com.ruoyi.gen.controller.GenController.synchDb()', 'GET', 1, 'admin', NULL, '/gen/synchDb/ppm_device', '192.168.176.224', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 17:53:02', 4837);
INSERT INTO `sys_oper_log` VALUES (227, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"component\":\"tender/tender1/update\",\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"招标项目-编辑\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"update\",\"perms\":\"tender:tender1:update\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-21 20:33:43', 515);
INSERT INTO `sys_oper_log` VALUES (228, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"合同管理\",\"menuType\":\"M\",\"orderNum\":8,\"params\":{},\"parentId\":0,\"path\":\"contract\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 11:09:59', 337);
INSERT INTO `sys_oper_log` VALUES (229, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"component\":\"contract/cm/index\",\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"合同管理\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2015,\"path\":\"cm\",\"perms\":\"contract:cm:index\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 11:10:41', 432);
INSERT INTO `sys_oper_log` VALUES (230, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"component\":\"contract/fam/index\",\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"框架协议管理\",\"menuType\":\"C\",\"orderNum\":2,\"params\":{},\"parentId\":2015,\"path\":\"fam\",\"perms\":\"contract:fam:index\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 11:11:49', 449);
INSERT INTO `sys_oper_log` VALUES (231, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"createTime\":\"2023-11-20 16:55:58\",\"icon\":\"peoples\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2008,\"menuName\":\"供应商管理\",\"menuType\":\"M\",\"orderNum\":7,\"params\":{},\"parentId\":0,\"path\":\"supplier\",\"perms\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 11:29:29', 900);
INSERT INTO `sys_oper_log` VALUES (232, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"createTime\":\"2023-11-20 16:55:58\",\"icon\":\"peoples\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2008,\"menuName\":\"供应商管理\",\"menuType\":\"M\",\"orderNum\":7,\"params\":{},\"parentId\":0,\"path\":\"supplier\",\"perms\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 11:29:29', 474);
INSERT INTO `sys_oper_log` VALUES (233, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/index\",\"createTime\":\"2023-11-20 16:57:22\",\"icon\":\"documentation\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2009,\"menuName\":\"供应商\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2008,\"path\":\"sqe\",\"perms\":\"supplier:sqe:list\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 11:30:56', 682);
INSERT INTO `sys_oper_log` VALUES (234, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"dateils\",\"perms\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 11:49:23', 786);
INSERT INTO `sys_oper_log` VALUES (235, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"dateils\",\"perms\":\"tender:tender1:details\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 11:50:04', 736);
INSERT INTO `sys_oper_log` VALUES (236, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"system/dict/index\",\"createTime\":\"2023-11-16 19:03:09\",\"icon\":\"dict\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":105,\"menuName\":\"字典管理\",\"menuType\":\"C\",\"orderNum\":6,\"params\":{},\"parentId\":1,\"path\":\"dict\",\"perms\":\"system:dict:list\",\"query\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 11:51:02', 728);
INSERT INTO `sys_oper_log` VALUES (237, '采购计划', 3, 'com.hh.pms.controller.PpmProcurementPlanController.remove()', 'DELETE', 1, NULL, NULL, '/frameworkPlan/1', '127.0.0.1', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 12:49:11', 417);
INSERT INTO `sys_oper_log` VALUES (238, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"createTime\":\"2023-11-20 09:18:03\",\"icon\":\"clipboard\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2006,\"menuName\":\"采购需求管理\",\"menuType\":\"M\",\"orderNum\":6,\"params\":{},\"parentId\":0,\"path\":\"purchase\",\"perms\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 12:50:15', 866);
INSERT INTO `sys_oper_log` VALUES (239, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"createTime\":\"2023-11-20 09:18:03\",\"icon\":\"edit\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2006,\"menuName\":\"采购需求管理\",\"menuType\":\"M\",\"orderNum\":6,\"params\":{},\"parentId\":0,\"path\":\"purchase\",\"perms\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 12:50:56', 537);
INSERT INTO `sys_oper_log` VALUES (240, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"purchase/otb/index\",\"createTime\":\"2023-11-20 09:19:54\",\"icon\":\"education\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2007,\"menuName\":\"采购计划管理\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2006,\"path\":\"otb\",\"perms\":\"purchase:otb:list\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 13:00:52', 709);
INSERT INTO `sys_oper_log` VALUES (241, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"createTime\":\"2023-11-16 19:03:09\",\"icon\":\"guide\",\"isCache\":\"0\",\"isFrame\":\"0\",\"menuId\":4,\"menuName\":\"若依官网\",\"menuType\":\"M\",\"orderNum\":4,\"params\":{},\"parentId\":0,\"path\":\"http://ruoyi.vip\",\"perms\":\"\",\"query\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"1\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 14:08:28', 630);
INSERT INTO `sys_oper_log` VALUES (242, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"createTime\":\"2023-11-22 11:09:59\",\"icon\":\"clipboard\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2015,\"menuName\":\"合同管理\",\"menuType\":\"M\",\"orderNum\":8,\"params\":{},\"parentId\":0,\"path\":\"contract\",\"perms\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 14:09:44', 655);
INSERT INTO `sys_oper_log` VALUES (243, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"component\":\"contract/cm/index\",\"createTime\":\"2023-11-22 11:10:41\",\"icon\":\"documentation\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2016,\"menuName\":\"合同管理\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2015,\"path\":\"cm\",\"perms\":\"contract:cm:index\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 14:10:25', 365);
INSERT INTO `sys_oper_log` VALUES (244, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"component\":\"contract/fam/index\",\"createTime\":\"2023-11-22 11:11:49\",\"icon\":\"documentation\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2017,\"menuName\":\"框架协议管理\",\"menuType\":\"C\",\"orderNum\":2,\"params\":{},\"parentId\":2015,\"path\":\"fam\",\"perms\":\"contract:fam:index\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 14:11:11', 472);
INSERT INTO `sys_oper_log` VALUES (245, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"createBy\":\"admin\",\"icon\":\"druid\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"编号规则\",\"menuType\":\"C\",\"orderNum\":9,\"params\":{},\"parentId\":1,\"path\":\"code_rules\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 14:28:26', 881);
INSERT INTO `sys_oper_log` VALUES (246, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"createTime\":\"2023-11-22 14:28:26\",\"icon\":\"druid\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2018,\"menuName\":\"编号规则\",\"menuType\":\"C\",\"orderNum\":9,\"params\":{},\"parentId\":1,\"path\":\"code\",\"perms\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 14:29:04', 628);
INSERT INTO `sys_oper_log` VALUES (247, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"code/rules/index\",\"createTime\":\"2023-11-22 14:28:26\",\"icon\":\"druid\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2018,\"menuName\":\"编号规则\",\"menuType\":\"C\",\"orderNum\":9,\"params\":{},\"parentId\":1,\"path\":\"code\",\"perms\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 14:32:23', 654);
INSERT INTO `sys_oper_log` VALUES (248, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '127.0.0.1', '', '{\"tables\":\"com_code_rules\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 14:33:31', 5410);
INSERT INTO `sys_oper_log` VALUES (249, '代码生成', 8, 'com.ruoyi.gen.controller.GenController.batchGenCode()', 'GET', 1, 'admin', NULL, '/gen/batchGenCode', '127.0.0.1', '', '{\"tables\":\"com_code_rules\"}', NULL, 0, NULL, '2023-11-22 14:36:55', 1888);
INSERT INTO `sys_oper_log` VALUES (250, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details?:sid\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"dateils\",\"perms\":\"tender:tender1:details\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 15:28:51', 730);
INSERT INTO `sys_oper_log` VALUES (251, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"dateils\",\"perms\":\"tender:tender1:details\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 15:33:05', 754);
INSERT INTO `sys_oper_log` VALUES (252, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 15:55:15', 817);
INSERT INTO `sys_oper_log` VALUES (253, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 15:55:56', 730);
INSERT INTO `sys_oper_log` VALUES (254, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details/:sid\",\"perms\":\"tender:tender1:details\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 15:58:27', 754);
INSERT INTO `sys_oper_log` VALUES (255, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:01:20', 787);
INSERT INTO `sys_oper_log` VALUES (256, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"sid\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:02:52', 822);
INSERT INTO `sys_oper_log` VALUES (257, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\":sid\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:03:33', 787);
INSERT INTO `sys_oper_log` VALUES (258, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"sid\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:05:56', 1029);
INSERT INTO `sys_oper_log` VALUES (259, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"sid\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:07:33', 740);
INSERT INTO `sys_oper_log` VALUES (260, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:08:53', 763);
INSERT INTO `sys_oper_log` VALUES (261, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"sid\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:09:39', 709);
INSERT INTO `sys_oper_log` VALUES (262, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"sid\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:21:36', 737);
INSERT INTO `sys_oper_log` VALUES (263, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"sid\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:25:16', 757);
INSERT INTO `sys_oper_log` VALUES (264, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"sid\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:27:58', 723);
INSERT INTO `sys_oper_log` VALUES (265, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/update\",\"createTime\":\"2023-11-21 20:33:42\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2014,\"menuName\":\"招标项目-编辑\",\"menuType\":\"C\",\"orderNum\":4,\"params\":{},\"parentId\":2000,\"path\":\"update\",\"perms\":\"tender:tender1:update\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:32:59', 769);
INSERT INTO `sys_oper_log` VALUES (266, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:33:16', 786);
INSERT INTO `sys_oper_log` VALUES (267, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"dateils\",\"perms\":\"tender:tender1:details\",\"query\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:33:38', 733);
INSERT INTO `sys_oper_log` VALUES (268, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"sid\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:34:05', 730);
INSERT INTO `sys_oper_log` VALUES (269, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/index\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"sid\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:35:36', 752);
INSERT INTO `sys_oper_log` VALUES (270, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"sid\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:35:55', 753);
INSERT INTO `sys_oper_log` VALUES (271, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:38:42', 331);
INSERT INTO `sys_oper_log` VALUES (272, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\":sid\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:39:33', 782);
INSERT INTO `sys_oper_log` VALUES (273, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:40:01', 866);
INSERT INTO `sys_oper_log` VALUES (274, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"{\\\"sid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:44:55', 732);
INSERT INTO `sys_oper_log` VALUES (275, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"{sid}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:46:51', 724);
INSERT INTO `sys_oper_log` VALUES (276, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"{\\\"sid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 16:47:22', 708);
INSERT INTO `sys_oper_log` VALUES (277, '代码生成', 3, 'com.ruoyi.gen.controller.GenController.remove()', 'DELETE', 1, 'admin', NULL, '/gen/136', '127.0.0.1', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 17:51:43', 1840);
INSERT INTO `sys_oper_log` VALUES (278, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '127.0.0.1', '', '{\"tables\":\"com_code_rules\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 17:51:43', 6511);
INSERT INTO `sys_oper_log` VALUES (279, '代码生成', 2, 'com.ruoyi.gen.controller.GenController.synchDb()', 'GET', 1, 'admin', NULL, '/gen/synchDb/bid_tender', '192.168.176.224', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 19:47:02', 6729);
INSERT INTO `sys_oper_log` VALUES (280, '代码生成', 2, 'com.ruoyi.gen.controller.GenController.synchDb()', 'GET', 1, 'admin', NULL, '/gen/synchDb/ppm_frame_plan', '192.168.176.224', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 19:47:45', 2782);
INSERT INTO `sys_oper_log` VALUES (281, '代码生成', 2, 'com.ruoyi.gen.controller.GenController.synchDb()', 'GET', 1, 'admin', NULL, '/gen/synchDb/ppm_procurement_plan', '192.168.176.224', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 19:49:41', 3477);
INSERT INTO `sys_oper_log` VALUES (282, '代码生成', 2, 'com.ruoyi.gen.controller.GenController.synchDb()', 'GET', 1, 'admin', NULL, '/gen/synchDb/ppm_line_items', '192.168.176.224', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-22 20:11:51', 2629);
INSERT INTO `sys_oper_log` VALUES (283, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"{\\\"sid\\\":0,\\\"type\\\":\\\"detail\\\"}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 10:52:26', 756);
INSERT INTO `sys_oper_log` VALUES (284, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"{\\\"sid\\\":0,\\\"type\\\":\\\"detail\\\"}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 10:53:21', 717);
INSERT INTO `sys_oper_log` VALUES (285, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/details\",\"createTime\":\"2023-11-21 11:06:45\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2013,\"menuName\":\"招标项目-查看\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2000,\"path\":\"details\",\"perms\":\"tender:tender1:details\",\"query\":\"{\\\"type\\\":\\\"detail\\\",\\\"sid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 10:58:02', 1009);
INSERT INTO `sys_oper_log` VALUES (286, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/update\",\"createTime\":\"2023-11-21 20:33:42\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2014,\"menuName\":\"招标项目-编辑\",\"menuType\":\"C\",\"orderNum\":4,\"params\":{},\"parentId\":2000,\"path\":\"update\",\"perms\":\"tender:tender1:update\",\"query\":\"{\\\"type\\\":\\\"update\\\",\\\"sid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 11:01:46', 700);
INSERT INTO `sys_oper_log` VALUES (287, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/detail\",\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"1111\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2009,\"path\":\"detail\",\"status\":\"0\",\"visible\":\"1\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 11:27:43', 638);
INSERT INTO `sys_oper_log` VALUES (288, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/detail\",\"createTime\":\"2023-11-23 11:27:43\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2019,\"menuName\":\"1111\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2009,\"path\":\"detail\",\"perms\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 11:28:14', 711);
INSERT INTO `sys_oper_log` VALUES (289, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/xiang/detail\",\"createTime\":\"2023-11-23 11:27:43\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2019,\"menuName\":\"1111\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2009,\"path\":\"xiang\",\"perms\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 11:29:46', 608);
INSERT INTO `sys_oper_log` VALUES (290, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/xiang/detail\",\"createTime\":\"2023-11-23 11:27:43\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2019,\"menuName\":\"1111\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2009,\"path\":\"detail\",\"perms\":\"\",\"query\":\"{\\\"hid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 11:34:55', 799);
INSERT INTO `sys_oper_log` VALUES (291, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/xiang/detail\",\"createTime\":\"2023-11-23 11:27:43\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2019,\"menuName\":\"1111\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2009,\"path\":\"detail\",\"perms\":\"\",\"query\":\"{\\\"hid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 11:35:14', 479);
INSERT INTO `sys_oper_log` VALUES (292, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/xiang/detail\",\"createTime\":\"2023-11-23 11:27:43\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2019,\"menuName\":\"1111\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2008,\"path\":\"detail\",\"perms\":\"\",\"query\":\"{\\\"hid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 11:35:51', 2351);
INSERT INTO `sys_oper_log` VALUES (293, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/xiang/detail\",\"createTime\":\"2023-11-23 11:27:43\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2019,\"menuName\":\"1111\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2008,\"path\":\"detail\",\"perms\":\"\",\"query\":\"{\\\"hid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 11:35:53', 1461);
INSERT INTO `sys_oper_log` VALUES (294, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/detail\",\"createTime\":\"2023-11-23 11:27:43\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2019,\"menuName\":\"1111\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2008,\"path\":\"detail\",\"perms\":\"\",\"query\":\"{\\\"hid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 11:36:49', 504);
INSERT INTO `sys_oper_log` VALUES (295, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/detail\",\"createTime\":\"2023-11-23 11:27:43\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2019,\"menuName\":\"1111\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2009,\"path\":\"detail\",\"perms\":\"\",\"query\":\"{\\\"hid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 11:54:49', 539);
INSERT INTO `sys_oper_log` VALUES (296, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/detail\",\"createTime\":\"2023-11-23 11:27:43\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2019,\"menuName\":\"查看\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2009,\"path\":\"detail\",\"perms\":\"\",\"query\":\"{\\\"hid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 11:57:24', 483);
INSERT INTO `sys_oper_log` VALUES (297, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/detail\",\"createTime\":\"2023-11-23 11:27:43\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2019,\"menuName\":\"查看\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2009,\"path\":\"detail\",\"perms\":\"supplier:sqe:detail\",\"query\":\"{\\\"hid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 12:01:07', 694);
INSERT INTO `sys_oper_log` VALUES (298, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/detail\",\"createTime\":\"2023-11-23 11:27:43\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2019,\"menuName\":\"查看\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2009,\"path\":\"detail\",\"perms\":\"supplier:sqe:detail\",\"query\":\"{\\\"hid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 12:02:43', 1139);
INSERT INTO `sys_oper_log` VALUES (299, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/detail\",\"createTime\":\"2023-11-23 11:27:43\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2019,\"menuName\":\"查看\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2008,\"path\":\"detail\",\"perms\":\"supplier:sqe:detail\",\"query\":\"{\\\"hid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 12:07:03', 508);
INSERT INTO `sys_oper_log` VALUES (300, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/detail\",\"createTime\":\"2023-11-23 11:27:43\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2019,\"menuName\":\"查看\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2008,\"path\":\"detail\",\"perms\":\"supplier:sqe:detail\",\"query\":\"{\\\"hid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"1\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 12:25:03', 622);
INSERT INTO `sys_oper_log` VALUES (301, '【请填写功能名称】', 1, 'com.hh.pms.controller.ComCodeRulesController.add()', 'POST', 1, NULL, NULL, '/rules', '172.20.10.5', '', '{\"day\":\"DD\",\"hour\":\"HH\",\"id\":3,\"minute\":\"mm\",\"mouth\":\"MM\",\"operator\":\"雷建\",\"params\":{},\"prefix\":\"ZB\",\"second\":\"SS\",\"serialNumber\":1,\"step\":1,\"targetForm\":\"招标\",\"year\":\"YYYY\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 13:58:06', 773);
INSERT INTO `sys_oper_log` VALUES (302, '【请填写功能名称】', 1, 'com.hh.pms.controller.ComCodeRulesController.add()', 'POST', 1, NULL, NULL, '/rules', '172.20.10.5', '', '{\"codeRules\":\"TBYYYYMMDD001\",\"day\":\"DD\",\"hour\":\"\",\"id\":4,\"minute\":\"\",\"mouth\":\"MM\",\"operator\":\"雷健\",\"params\":{},\"prefix\":\"TB\",\"second\":\"\",\"serialNumber\":3,\"step\":1,\"targetForm\":\"投标\",\"year\":\"YYYY\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 14:05:41', 3470);
INSERT INTO `sys_oper_log` VALUES (303, '【请填写功能名称】', 1, 'com.hh.pms.controller.ComCodeRulesController.add()', 'POST', 1, NULL, NULL, '/rules', '172.20.10.5', '', '{\"codeRules\":\"HTMMDDHHmmSS01\",\"day\":\"DD\",\"hour\":\"HH\",\"id\":5,\"minute\":\"mm\",\"mouth\":\"MM\",\"operator\":\"欧明鑫\",\"params\":{},\"prefix\":\"HT\",\"second\":\"SS\",\"serialNumber\":2,\"step\":1,\"targetForm\":\"合同\",\"year\":\"\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 14:09:23', 493);
INSERT INTO `sys_oper_log` VALUES (304, '【请填写功能名称】', 1, 'com.hh.pms.controller.ComCodeRulesController.add()', 'POST', 1, NULL, NULL, '/rules', '172.20.10.5', '', '{\"codeRules\":\"2DD1\",\"day\":\"DD\",\"hour\":\"\",\"id\":6,\"minute\":\"\",\"mouth\":\"\",\"operator\":\"4\",\"params\":{},\"prefix\":\"2\",\"second\":\"\",\"serialNumber\":1,\"step\":1,\"targetForm\":\"采购计划\",\"year\":\"\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 14:15:24', 440);
INSERT INTO `sys_oper_log` VALUES (305, '【请填写功能名称】', 3, 'com.hh.pms.controller.ComCodeRulesController.remove()', 'DELETE', 1, NULL, NULL, '/rules/6', '172.20.10.5', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 14:15:31', 1503);
INSERT INTO `sys_oper_log` VALUES (306, '【请填写功能名称】', 2, 'com.hh.pms.controller.ComCodeRulesController.edit()', 'PUT', 1, NULL, NULL, '/rules', '172.20.10.5', '', '{\"codeRules\":\"HTYYYYMMDD01\",\"day\":\"DD\",\"hour\":\"\",\"id\":5,\"minute\":\"\",\"mouth\":\"MM\",\"operator\":\"曾林\",\"params\":{},\"prefix\":\"HT\",\"second\":\"\",\"serialNumber\":2,\"step\":1,\"targetForm\":\"合同\",\"updateTime\":\"2023-11-23 14:41:51\",\"year\":\"YYYY\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 14:42:12', 654);
INSERT INTO `sys_oper_log` VALUES (307, '代码生成', 2, 'com.ruoyi.gen.controller.GenController.synchDb()', 'GET', 1, 'admin', NULL, '/gen/synchDb/nobid_non_pro', '192.168.176.224', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 14:55:24', 5473);
INSERT INTO `sys_oper_log` VALUES (308, '代码生成', 2, 'com.ruoyi.gen.controller.GenController.synchDb()', 'GET', 1, 'admin', NULL, '/gen/synchDb/bid_tender', '192.168.176.224', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 14:55:38', 9924);
INSERT INTO `sys_oper_log` VALUES (309, '代码生成', 2, 'com.ruoyi.gen.controller.GenController.synchDb()', 'GET', 1, 'admin', NULL, '/gen/synchDb/ppm_line_items', '192.168.176.224', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 14:55:46', 5757);
INSERT INTO `sys_oper_log` VALUES (310, '代码生成', 2, 'com.ruoyi.gen.controller.GenController.synchDb()', 'GET', 1, 'admin', NULL, '/gen/synchDb/ppm_procurement_plan', '192.168.176.224', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 14:55:54', 6031);
INSERT INTO `sys_oper_log` VALUES (311, '代码生成', 2, 'com.ruoyi.gen.controller.GenController.synchDb()', 'GET', 1, 'admin', NULL, '/gen/synchDb/ppm_frame_plan', '192.168.176.224', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 14:56:01', 4071);
INSERT INTO `sys_oper_log` VALUES (312, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/detail\",\"createTime\":\"2023-11-23 11:27:43\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2019,\"menuName\":\"查看\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2008,\"path\":\"detail\",\"perms\":\"supplier:sqe:detail\",\"query\":\"{\\\"hid\\\":0,\\\"zr_id\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"1\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 16:39:22', 359);
INSERT INTO `sys_oper_log` VALUES (313, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/detail\",\"createTime\":\"2023-11-23 11:27:43\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2019,\"menuName\":\"查看\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2008,\"path\":\"detail\",\"perms\":\"supplier:sqe:detail\",\"query\":\"{\\\"hid\\\":0,\\\"zr_id\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 16:41:11', 487);
INSERT INTO `sys_oper_log` VALUES (314, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/detail\",\"createTime\":\"2023-11-23 11:27:43\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2019,\"menuName\":\"查看\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2008,\"path\":\"detail\",\"perms\":\"supplier:sqe:detail\",\"query\":\"{\\\"hid\\\":0,\\\"zr_id\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"1\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 16:43:46', 476);
INSERT INTO `sys_oper_log` VALUES (315, '编号规则', 5, 'com.hh.pms.controller.ComCodeRulesController.export()', 'POST', 1, NULL, NULL, '/rules/export', '172.20.10.5', '', '{\"pageSize\":\"10\",\"pageNum\":\"1\"}', NULL, 0, NULL, '2023-11-23 17:28:00', 1053);
INSERT INTO `sys_oper_log` VALUES (316, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"创建合同\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2015,\"path\":\"add\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 17:43:19', 382);
INSERT INTO `sys_oper_log` VALUES (317, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"component\":\"contract/add/add\",\"createTime\":\"2023-11-23 17:43:18\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2020,\"menuName\":\"创建合同\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2015,\"path\":\"add\",\"perms\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 17:43:53', 345);
INSERT INTO `sys_oper_log` VALUES (318, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '192.168.176.224', '', '{\"children\":[],\"component\":\"contract/cm/add\",\"createTime\":\"2023-11-23 17:43:18\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2020,\"menuName\":\"创建合同\",\"menuType\":\"C\",\"orderNum\":3,\"params\":{},\"parentId\":2015,\"path\":\"add\",\"perms\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 17:44:30', 289);
INSERT INTO `sys_oper_log` VALUES (319, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/update\",\"createTime\":\"2023-11-21 20:33:42\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2014,\"menuName\":\"招标项目-编辑\",\"menuType\":\"C\",\"orderNum\":4,\"params\":{},\"parentId\":2000,\"path\":\"update\",\"perms\":\"tender:tender1:update\",\"query\":\"{\\\"type\\\":\\\"update\\\",\\\"sid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-23 17:59:57', 676);
INSERT INTO `sys_oper_log` VALUES (320, '代码生成', 3, 'com.ruoyi.gen.controller.GenController.remove()', 'DELETE', 1, 'admin', NULL, '/gen/134', '127.0.0.1', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 12:16:03', 1313);
INSERT INTO `sys_oper_log` VALUES (321, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '127.0.0.1', '', '{\"tables\":\"ppm_device\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 12:16:17', 8344);
INSERT INTO `sys_oper_log` VALUES (322, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '127.0.0.1', '', '{\"tables\":\"ppm_approval_record\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 12:42:53', 4071);
INSERT INTO `sys_oper_log` VALUES (323, '代码生成', 8, 'com.ruoyi.gen.controller.GenController.batchGenCode()', 'GET', 1, 'admin', NULL, '/gen/batchGenCode', '127.0.0.1', '', '{\"tables\":\"ppm_approval_record\"}', NULL, 0, NULL, '2023-11-24 12:46:11', 369);
INSERT INTO `sys_oper_log` VALUES (324, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/process\",\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"审核\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2008,\"path\":\"process\",\"perms\":\"supplier:sqe:process\",\"query\":\"{\\\"zr_id\\\":0}\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 14:37:13', 683);
INSERT INTO `sys_oper_log` VALUES (325, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"supplier/sqe/process\",\"createTime\":\"2023-11-24 14:37:12\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2021,\"menuName\":\"审核\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2008,\"path\":\"process\",\"perms\":\"supplier:sqe:process\",\"query\":\"{\\\"zr_id\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"1\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 14:56:55', 545);
INSERT INTO `sys_oper_log` VALUES (326, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"\",\"createBy\":\"admin\",\"icon\":\"drag\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"新增采购计划\",\"menuType\":\"C\",\"orderNum\":0,\"params\":{},\"parentId\":2006,\"path\":\"insertPlan\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 15:09:36', 896);
INSERT INTO `sys_oper_log` VALUES (327, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"purchase/otb/index\",\"createTime\":\"2023-11-24 15:09:25\",\"icon\":\"drag\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2022,\"menuName\":\"新增采购计划\",\"menuType\":\"C\",\"orderNum\":0,\"params\":{},\"parentId\":2006,\"path\":\"insertPlan\",\"perms\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 15:10:30', 651);
INSERT INTO `sys_oper_log` VALUES (328, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"purchase/otb/index\",\"createTime\":\"2023-11-24 15:09:25\",\"icon\":\"drag\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2022,\"menuName\":\"新增采购计划\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2006,\"path\":\"insertPlan\",\"perms\":\"system:plan:list\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 15:11:43', 537);
INSERT INTO `sys_oper_log` VALUES (329, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"purchase/otb/insert\",\"createTime\":\"2023-11-24 15:09:25\",\"icon\":\"drag\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2022,\"menuName\":\"新增采购计划\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2006,\"path\":\"insertPlan\",\"perms\":\"system:plan:list\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 15:19:07', 628);
INSERT INTO `sys_oper_log` VALUES (330, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"purchase/otb/insert\",\"createTime\":\"2023-11-24 15:09:25\",\"icon\":\"drag\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2022,\"menuName\":\"新增采购计划\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2006,\"path\":\"insertPlan\",\"perms\":\"system:plan:list\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"1\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 15:20:30', 484);
INSERT INTO `sys_oper_log` VALUES (331, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"purchase/otb/insert\",\"createTime\":\"2023-11-24 15:09:25\",\"icon\":\"drag\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2022,\"menuName\":\"新增采购计划\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2006,\"path\":\"insertPlan\",\"perms\":\"system:plan:list\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 15:25:20', 686);
INSERT INTO `sys_oper_log` VALUES (332, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"purchase/otb/insert\",\"createTime\":\"2023-11-24 15:09:25\",\"icon\":\"drag\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2022,\"menuName\":\"新增采购计划\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2006,\"path\":\"insert\",\"perms\":\"system:plan:list\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 15:26:27', 472);
INSERT INTO `sys_oper_log` VALUES (333, '菜单管理', 3, 'com.ruoyi.system.controller.SysMenuController.remove()', 'DELETE', 1, 'admin', NULL, '/menu/2007', '127.0.0.1', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 15:30:55', 685);
INSERT INTO `sys_oper_log` VALUES (334, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"purchase/otb/index\",\"createBy\":\"admin\",\"icon\":\"edit\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"采购计划管理\",\"menuType\":\"C\",\"orderNum\":0,\"params\":{},\"parentId\":2006,\"path\":\"purchase\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 15:33:09', 771);
INSERT INTO `sys_oper_log` VALUES (335, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"purchase/otb/index\",\"createTime\":\"2023-11-24 15:33:09\",\"icon\":\"edit\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2023,\"menuName\":\"采购计划管理\",\"menuType\":\"C\",\"orderNum\":0,\"params\":{},\"parentId\":2006,\"path\":\"purchase\",\"perms\":\"system:plan:list\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 15:33:21', 1159);
INSERT INTO `sys_oper_log` VALUES (336, '菜单管理', 3, 'com.ruoyi.system.controller.SysMenuController.remove()', 'DELETE', 1, 'admin', NULL, '/menu/2022', '127.0.0.1', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 15:35:35', 811);
INSERT INTO `sys_oper_log` VALUES (337, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"purchase/otb/insert\",\"createBy\":\"admin\",\"icon\":\"drag\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"新增采购计划\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2006,\"path\":\"insert\",\"perms\":\"system:plan:list\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 15:37:01', 862);
INSERT INTO `sys_oper_log` VALUES (338, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"purchase/otb/insert\",\"createTime\":\"2023-11-24 15:37:01\",\"icon\":\"drag\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2024,\"menuName\":\"新增采购计划\",\"menuType\":\"C\",\"orderNum\":1,\"params\":{},\"parentId\":2006,\"path\":\"insert\",\"perms\":\"system:plan:list\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"1\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 15:37:13', 549);
INSERT INTO `sys_oper_log` VALUES (339, '招标项目', 2, 'com.hh.pms.controller.BidTenderController.edit()', 'PUT', 1, NULL, NULL, '/tender', '127.0.0.1', '', '{\"email\":\"1232@qq.com\",\"params\":{},\"sAddress\":\"天心区\",\"sBudget\":100000,\"sCode\":\"ZB20231123\",\"sMust\":2,\"sName\":\"北鼻招标2\",\"sPerson\":\"小王\",\"sPhone\":\"17365765463\",\"sSway\":1,\"sType\":2,\"sUnit\":\"聚鼎灯具制造有限公司\",\"sWay\":2,\"sid\":2,\"updateTime\":\"2023-11-24 16:12:34\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 16:12:38', 781);
INSERT INTO `sys_oper_log` VALUES (340, '招标项目', 2, 'com.hh.pms.controller.BidTenderController.edit()', 'PUT', 1, NULL, NULL, '/tender', '127.0.0.1', '', '{\"email\":\"1232@qq.com\",\"params\":{},\"sAddress\":\"天心区\",\"sBudget\":100000,\"sCode\":\"ZB20231123\",\"sMust\":2,\"sName\":\"北鼻招标\",\"sPerson\":\"小王\",\"sPhone\":\"17365765463\",\"sSway\":1,\"sType\":2,\"sUnit\":\"聚鼎灯具制造有限公司\",\"sWay\":2,\"sid\":2,\"updateTime\":\"2023-11-24 16:13:20\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 16:13:23', 519);
INSERT INTO `sys_oper_log` VALUES (341, '招标项目', 2, 'com.hh.pms.controller.BidTenderController.edit()', 'PUT', 1, NULL, NULL, '/tender', '127.0.0.1', '', '{\"params\":{},\"sCode\":\"ZB20231146\",\"sMust\":1,\"sName\":\"鸿鹄seven\",\"sSway\":2,\"sType\":0,\"sWay\":2,\"sid\":5,\"updateTime\":\"2023-11-24 16:14:36\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 16:14:39', 552);
INSERT INTO `sys_oper_log` VALUES (342, '招标项目', 2, 'com.hh.pms.controller.BidTenderController.edit()', 'PUT', 1, NULL, NULL, '/tender', '127.0.0.1', '', '{\"email\":\"1243@qq.com\",\"params\":{},\"sAddress\":\"长沙北大青鸟\",\"sBudget\":100000,\"sCode\":\"ZB20231146\",\"sMust\":1,\"sName\":\"鸿鹄7\",\"sPerson\":\"小鹏\",\"sPhone\":\"17743254367\",\"sSway\":2,\"sType\":1,\"sUnit\":\"长沙实力欣喜科技公司\",\"sWay\":2,\"sid\":5,\"updateTime\":\"2023-11-24 16:15:53\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 16:15:56', 482);
INSERT INTO `sys_oper_log` VALUES (343, '代码生成', 8, 'com.ruoyi.gen.controller.GenController.batchGenCode()', 'GET', 1, 'admin', NULL, '/gen/batchGenCode', '192.168.176.224', '', '{\"tables\":\"bs_experience\"}', NULL, 0, NULL, '2023-11-24 16:26:52', 484);
INSERT INTO `sys_oper_log` VALUES (344, '招标项目', 3, 'com.hh.pms.controller.BidTenderController.remove()', 'DELETE', 1, NULL, NULL, '/tender/11', '127.0.0.1', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-24 16:46:18', 481);
INSERT INTO `sys_oper_log` VALUES (345, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/bidding\",\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"进入项目\",\"menuType\":\"C\",\"orderNum\":5,\"params\":{},\"parentId\":2000,\"path\":\"bidding\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 14:40:05', 955);
INSERT INTO `sys_oper_log` VALUES (346, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/bidding\",\"createTime\":\"2023-11-26 14:40:04\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2025,\"menuName\":\"进入项目\",\"menuType\":\"C\",\"orderNum\":5,\"params\":{},\"parentId\":2000,\"path\":\"bidding\",\"perms\":\"tender:tender1:bidding\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 14:40:36', 732);
INSERT INTO `sys_oper_log` VALUES (347, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/bidding\",\"createTime\":\"2023-11-26 14:40:04\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2025,\"menuName\":\"进入项目\",\"menuType\":\"C\",\"orderNum\":5,\"params\":{},\"parentId\":2000,\"path\":\"bidding\",\"perms\":\"tender:tender1:bidding\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 14:40:53', 754);
INSERT INTO `sys_oper_log` VALUES (348, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/bidding\",\"createTime\":\"2023-11-26 14:40:04\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2025,\"menuName\":\"进入项目\",\"menuType\":\"C\",\"orderNum\":5,\"params\":{},\"parentId\":2000,\"path\":\"bidding\",\"perms\":\"tender:tender1:bidding\",\"query\":\"{\\\"sid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 16:05:03', 676);
INSERT INTO `sys_oper_log` VALUES (349, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/bidding\",\"createTime\":\"2023-11-26 14:40:04\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2025,\"menuName\":\"进入项目\",\"menuType\":\"C\",\"orderNum\":5,\"params\":{},\"parentId\":2000,\"path\":\"bidding\",\"perms\":\"tender:tender1:bidding\",\"query\":\"{\\\"bidding\\\",\\\"sid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 16:21:27', 678);
INSERT INTO `sys_oper_log` VALUES (350, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/bidding\",\"createTime\":\"2023-11-26 14:40:04\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2025,\"menuName\":\"进入项目\",\"menuType\":\"C\",\"orderNum\":5,\"params\":{},\"parentId\":2000,\"path\":\"bidding\",\"perms\":\"tender:tender1:bidding\",\"query\":\"{\\\"type\\\":\\\"bidding\\\",\\\"sid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 16:22:16', 692);
INSERT INTO `sys_oper_log` VALUES (351, '供应商', 2, 'com.hh.pms.sae.controller.BsSupplierController.edit()', 'PUT', 1, NULL, NULL, '/supplier', '127.0.0.1', '', '{\"fStatus\":1,\"hid\":6,\"params\":{},\"zrId\":0}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 16:24:39', 440);
INSERT INTO `sys_oper_log` VALUES (352, '供应商', 2, 'com.hh.pms.sae.controller.BsSupplierController.edit()', 'PUT', 1, NULL, NULL, '/supplier', '127.0.0.1', '', '{\"fOpinion\":\"\",\"fStatus\":1,\"hid\":0,\"params\":{},\"zrId\":0}', '{\"msg\":\"操作失败\",\"code\":500}', 0, NULL, '2023-11-26 16:29:36', 505);
INSERT INTO `sys_oper_log` VALUES (353, '供应商', 2, 'com.hh.pms.sae.controller.BsSupplierController.edit()', 'PUT', 1, NULL, NULL, '/supplier', '127.0.0.1', '', '{\"fStatus\":1,\"hid\":6,\"params\":{},\"zrId\":0}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 16:30:33', 525);
INSERT INTO `sys_oper_log` VALUES (354, '供应商', 2, 'com.hh.pms.sae.controller.BsSupplierController.edit()', 'PUT', 1, NULL, NULL, '/supplier', '127.0.0.1', '', '{\"fStatus\":1,\"hid\":6,\"params\":{},\"zrId\":0}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 16:37:04', 374);
INSERT INTO `sys_oper_log` VALUES (355, '供应商准入', 3, 'com.hh.pms.sae.controller.BsAccessController.remove()', 'DELETE', 1, NULL, NULL, '/access/1', '127.0.0.1', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 16:37:04', 345);
INSERT INTO `sys_oper_log` VALUES (356, '供应商', 2, 'com.hh.pms.sae.controller.BsSupplierController.edit()', 'PUT', 1, NULL, NULL, '/supplier', '127.0.0.1', '', '{\"fStatus\":1,\"hid\":7,\"params\":{},\"zrId\":0}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 16:38:35', 555);
INSERT INTO `sys_oper_log` VALUES (357, '供应商准入', 3, 'com.hh.pms.sae.controller.BsAccessController.remove()', 'DELETE', 1, NULL, NULL, '/access/2', '127.0.0.1', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 16:38:35', 152);
INSERT INTO `sys_oper_log` VALUES (358, '供应商', 2, 'com.hh.pms.sae.controller.BsSupplierController.edit()', 'PUT', 1, NULL, NULL, '/supplier', '127.0.0.1', '', '{\"fStatus\":2,\"hid\":8,\"params\":{}}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 16:50:43', 568);
INSERT INTO `sys_oper_log` VALUES (359, '供应商', 2, 'com.hh.pms.sae.controller.BsSupplierController.edit()', 'PUT', 1, NULL, NULL, '/supplier', '127.0.0.1', '', '{\"fStatus\":2,\"hid\":9,\"params\":{}}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 16:59:23', 174);
INSERT INTO `sys_oper_log` VALUES (360, '字典类型', 1, 'com.ruoyi.system.controller.SysDictTypeController.add()', 'POST', 1, 'admin', NULL, '/dict/type', '127.0.0.1', '', '{\"createBy\":\"admin\",\"dictName\":\"招标公告审批状态\",\"dictType\":\"bid_notice_state\",\"params\":{},\"status\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 17:45:50', 694);
INSERT INTO `sys_oper_log` VALUES (361, '字典数据', 1, 'com.ruoyi.system.controller.SysDictDataController.add()', 'POST', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"default\":false,\"dictLabel\":\"草稿\",\"dictSort\":1,\"dictType\":\"bid_notice_state\",\"dictValue\":\"1\",\"listClass\":\"default\",\"params\":{},\"remark\":\"状态：草稿\",\"status\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 17:47:02', 714);
INSERT INTO `sys_oper_log` VALUES (362, '字典数据', 1, 'com.ruoyi.system.controller.SysDictDataController.add()', 'POST', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"default\":false,\"dictLabel\":\"审核中\",\"dictSort\":2,\"dictType\":\"bid_notice_state\",\"dictValue\":\"2\",\"listClass\":\"default\",\"params\":{},\"remark\":\"状态：审核中\",\"status\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 17:47:21', 686);
INSERT INTO `sys_oper_log` VALUES (363, '字典数据', 1, 'com.ruoyi.system.controller.SysDictDataController.add()', 'POST', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"default\":false,\"dictLabel\":\"审核通过\",\"dictSort\":3,\"dictType\":\"bid_notice_state\",\"dictValue\":\"3\",\"listClass\":\"default\",\"params\":{},\"remark\":\"状态：审核通过\",\"status\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 17:47:49', 690);
INSERT INTO `sys_oper_log` VALUES (364, '字典数据', 1, 'com.ruoyi.system.controller.SysDictDataController.add()', 'POST', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"default\":false,\"dictLabel\":\"已驳回\",\"dictSort\":4,\"dictType\":\"bid_notice_state\",\"dictValue\":\"4\",\"listClass\":\"default\",\"params\":{},\"remark\":\"状态：已1驳回\",\"status\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 17:48:20', 717);
INSERT INTO `sys_oper_log` VALUES (365, '菜单管理', 1, 'com.ruoyi.system.controller.SysMenuController.add()', 'POST', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/updateNotice\",\"createBy\":\"admin\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuName\":\"招标公告详情\",\"menuType\":\"C\",\"orderNum\":6,\"params\":{},\"parentId\":2000,\"path\":\"updateNotice\",\"query\":\"{\\\"type\\\":\\\"\\\",\\\"uid\\\":0}\",\"status\":\"0\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 18:28:51', 968);
INSERT INTO `sys_oper_log` VALUES (366, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/updateNotice\",\"createTime\":\"2023-11-26 18:28:50\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2026,\"menuName\":\"招标公告详情\",\"menuType\":\"C\",\"orderNum\":6,\"params\":{},\"parentId\":2000,\"path\":\"updateNotice\",\"perms\":\"tender:tender1:updateNotice\",\"query\":\"{\\\"type\\\":\\\"\\\",\\\"uid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 18:29:46', 694);
INSERT INTO `sys_oper_log` VALUES (367, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/updateNotice\",\"createTime\":\"2023-11-26 18:28:50\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2026,\"menuName\":\"招标公告详情\",\"menuType\":\"C\",\"orderNum\":6,\"params\":{},\"parentId\":2000,\"path\":\"updateNotice\",\"perms\":\"tender:tender1:updateNotice\",\"query\":\"{\\\"type\\\":\\\"\\\",\\\"uid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 18:31:15', 722);
INSERT INTO `sys_oper_log` VALUES (368, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/updateNotice\",\"createTime\":\"2023-11-26 18:28:50\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2026,\"menuName\":\"招标公告详情\",\"menuType\":\"C\",\"orderNum\":6,\"params\":{},\"parentId\":2000,\"path\":\"updateNotice\",\"perms\":\"tender:tender1:updateNotice\",\"query\":\"{\\\"type\\\":\\\"\\\",\\\"uid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 18:31:16', 838);
INSERT INTO `sys_oper_log` VALUES (369, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/updateNotice\",\"createTime\":\"2023-11-26 18:28:50\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2026,\"menuName\":\"招标公告详情\",\"menuType\":\"C\",\"orderNum\":6,\"params\":{},\"parentId\":2000,\"path\":\"updateNotice\",\"perms\":\"tender:tender1:updateNotice\",\"query\":\"{\\\"type\\\":\\\"\\\",\\\"uid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 18:33:03', 700);
INSERT INTO `sys_oper_log` VALUES (370, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/updateNotice\",\"createTime\":\"2023-11-26 18:28:50\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2026,\"menuName\":\"招标公告详情\",\"menuType\":\"C\",\"orderNum\":6,\"params\":{},\"parentId\":2000,\"path\":\"updateNotice\",\"perms\":\"tender:tender1:updateNotice\",\"query\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 18:34:18', 681);
INSERT INTO `sys_oper_log` VALUES (371, '代码生成', 3, 'com.ruoyi.gen.controller.GenController.remove()', 'DELETE', 1, 'admin', NULL, '/gen/138', '127.0.0.1', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 18:56:25', 1277);
INSERT INTO `sys_oper_log` VALUES (372, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '127.0.0.1', '', '{\"tables\":\"ppm_device\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 18:56:49', 8278);
INSERT INTO `sys_oper_log` VALUES (373, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/updateNotice\",\"createTime\":\"2023-11-26 18:28:50\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2026,\"menuName\":\"招标公告详情\",\"menuType\":\"C\",\"orderNum\":6,\"params\":{},\"parentId\":2000,\"path\":\"updateNotice\",\"perms\":\"tender:tender1:updateNotice\",\"query\":\"｛\\\"type\\\":\\\"\\\",\\\"uid\\\":0｝\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 19:21:01', 702);
INSERT INTO `sys_oper_log` VALUES (374, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/updateNotice\",\"createTime\":\"2023-11-26 18:28:50\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2026,\"menuName\":\"招标公告详情\",\"menuType\":\"C\",\"orderNum\":6,\"params\":{},\"parentId\":2000,\"path\":\"updateNotice\",\"perms\":\"tender:tender1:updateNotice\",\"query\":\"｛\\\"type\\\":,\\\"uid\\\":0｝\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 19:22:00', 723);
INSERT INTO `sys_oper_log` VALUES (375, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/updateNotice\",\"createTime\":\"2023-11-26 18:28:50\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2026,\"menuName\":\"招标公告详情\",\"menuType\":\"C\",\"orderNum\":6,\"params\":{},\"parentId\":2000,\"path\":\"updateNotice\",\"perms\":\"tender:tender1:updateNotice\",\"query\":\"｛\\\"type\\\":\\\" \\\",\\\"uid\\\":0｝\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 19:22:38', 711);
INSERT INTO `sys_oper_log` VALUES (376, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/updateNotice\",\"createTime\":\"2023-11-26 18:28:50\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2026,\"menuName\":\"招标公告详情\",\"menuType\":\"C\",\"orderNum\":6,\"params\":{},\"parentId\":2000,\"path\":\"updateNotice\",\"perms\":\"tender:tender1:updateNotice\",\"query\":\"｛\\\"type\\\":null,\\\"uid\\\":0｝\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 19:23:21', 668);
INSERT INTO `sys_oper_log` VALUES (377, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/updateNotice\",\"createTime\":\"2023-11-26 18:28:50\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2026,\"menuName\":\"招标公告详情\",\"menuType\":\"C\",\"orderNum\":6,\"params\":{},\"parentId\":2000,\"path\":\"updateNotice\",\"perms\":\"tender:tender1:updateNotice\",\"query\":\"\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 19:23:46', 674);
INSERT INTO `sys_oper_log` VALUES (378, '菜单管理', 2, 'com.ruoyi.system.controller.SysMenuController.edit()', 'PUT', 1, 'admin', NULL, '/menu', '127.0.0.1', '', '{\"children\":[],\"component\":\"tender/tender1/updateNotice\",\"createTime\":\"2023-11-26 18:28:50\",\"icon\":\"#\",\"isCache\":\"0\",\"isFrame\":\"1\",\"menuId\":2026,\"menuName\":\"招标公告详情\",\"menuType\":\"C\",\"orderNum\":6,\"params\":{},\"parentId\":2000,\"path\":\"updateNotice\",\"perms\":\"tender:tender1:updateNotice\",\"query\":\"{\\\"type\\\":\\\"\\\",\\\"uid\\\":0}\",\"status\":\"0\",\"updateBy\":\"admin\",\"visible\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-26 19:24:22', 680);
INSERT INTO `sys_oper_log` VALUES (379, '招标公告', 2, 'com.hh.pms.controller.BidNoticeController.edit()', 'PUT', 1, NULL, NULL, '/notice', '127.0.0.1', '', '{\"fjRemark\":\"正规招标，公平公正\",\"fjStatus\":1,\"params\":{},\"sid\":1,\"uAcceptTime\":\"2023-11-15\",\"uEndTime\":\"2023-11-20\",\"uGetTime\":\"2023-11-13\",\"uKaiTime\":\"2023-11-25\",\"uMoney\":100000,\"uProject\":\"南天招标123\",\"uTitle\":\"南天招标了。。。\",\"uid\":1}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-27 11:07:34', 722);
INSERT INTO `sys_oper_log` VALUES (380, '招标公告', 2, 'com.hh.pms.controller.BidNoticeController.edit()', 'PUT', 1, NULL, NULL, '/notice', '127.0.0.1', '', '{\"fjRemark\":\"正规招标，公平公正\",\"fjStatus\":1,\"params\":{},\"sid\":1,\"uAcceptTime\":\"2023-11-15\",\"uEndTime\":\"2023-11-20\",\"uGetTime\":\"2023-11-13\",\"uKaiTime\":\"2023-11-25\",\"uMoney\":100000,\"uProject\":\"南天招标\",\"uTitle\":\"南天招标了。。。\",\"uid\":1}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-27 11:16:17', 493);
INSERT INTO `sys_oper_log` VALUES (381, '招标公告', 2, 'com.hh.pms.controller.BidNoticeController.edit()', 'PUT', 1, NULL, NULL, '/notice', '127.0.0.1', '', '{\"fjStatus\":2,\"params\":{},\"sid\":1,\"uAcceptTime\":\"2023-11-15\",\"uEndTime\":\"2023-11-19\",\"uGetTime\":\"2023-11-13\",\"uKaiTime\":\"2023-11-25\",\"uMoney\":100000,\"uProject\":\"南天招标\",\"uTitle\":\"南天招标进行中\",\"uid\":2}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-27 11:22:48', 527);
INSERT INTO `sys_oper_log` VALUES (382, '招标公告', 2, 'com.hh.pms.controller.BidNoticeController.edit()', 'PUT', 1, NULL, NULL, '/notice', '127.0.0.1', '', '{\"fjStatus\":2,\"params\":{},\"sid\":1,\"uAcceptTime\":\"2023-11-15\",\"uEndTime\":\"2023-11-19\",\"uGetTime\":\"2023-11-13\",\"uKaiTime\":\"2023-11-25\",\"uMoney\":100000,\"uProject\":\"南天招标\",\"uTitle\":\"南天招标进行中\",\"uid\":2}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-27 11:23:48', 465);
INSERT INTO `sys_oper_log` VALUES (383, '代码生成', 3, 'com.ruoyi.gen.controller.GenController.remove()', 'DELETE', 1, 'admin', NULL, '/gen/128', '127.0.0.1', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-27 11:26:06', 1547);
INSERT INTO `sys_oper_log` VALUES (384, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '127.0.0.1', '', '{\"tables\":\"ppm_budget\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-27 11:26:17', 5532);
INSERT INTO `sys_oper_log` VALUES (385, '招标公告', 2, 'com.hh.pms.controller.BidNoticeController.edit()', 'PUT', 1, NULL, NULL, '/notice', '127.0.0.1', '', '{\"fjRemark\":\"正规招标，公平公正，童叟无欺\",\"fjStatus\":1,\"params\":{},\"sid\":1,\"uAcceptTime\":\"2023-11-15\",\"uEndTime\":\"2023-11-20\",\"uGetTime\":\"2023-11-13\",\"uKaiTime\":\"2023-11-25\",\"uMoney\":100000,\"uProject\":\"南天招标\",\"uTitle\":\"南天招标了。。。\",\"uid\":1}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-27 11:36:58', 461);
INSERT INTO `sys_oper_log` VALUES (386, '招标公告', 1, 'com.hh.pms.controller.BidNoticeController.add()', 'POST', 1, NULL, NULL, '/notice', '127.0.0.1', '', '{\"fjRemark\":\"哈哈哈哈\",\"params\":{},\"uAcceptTime\":\"2023-11-15\",\"uEndTime\":\"2023-11-20\",\"uGetTime\":\"2023-11-13\",\"uKaiTime\":\"2023-11-25\",\"uMoney\":100000,\"uProject\":\"南天招标\",\"uTitle\":\"南天二次招标\"}', NULL, 1, '\r\n### Error updating database.  Cause: java.sql.SQLException: Field \'uid\' doesn\'t have a default value\r\n### The error may exist in file [D:\\gm\\RouYi-Cloud\\honghu-backend-master\\ruoyi-modules\\hh-bidding\\target\\classes\\mapper\\BidNoticeMapper.xml]\r\n### The error may involve com.hh.pms.mapper.BidNoticeMapper.insertBidNotice-Inline\r\n### The error occurred while setting parameters\r\n### SQL: insert into bid_notice          ( u_title,             u_project,             u_money,             u_get_time,             u_accept_time,             u_end_time,             u_kai_time,                                       fj_remark )           values ( ?,             ?,             ?,             ?,             ?,             ?,             ?,                                       ? )\r\n### Cause: java.sql.SQLException: Field \'uid\' doesn\'t have a default value\n; Field \'uid\' doesn\'t have a default value; nested exception is java.sql.SQLException: Field \'uid\' doesn\'t have a default value', '2023-11-27 11:53:16', 535);
INSERT INTO `sys_oper_log` VALUES (387, '招标公告', 1, 'com.hh.pms.controller.BidNoticeController.add()', 'POST', 1, NULL, NULL, '/notice', '127.0.0.1', '', '{\"fjRemark\":\"哈哈哈哈\",\"params\":{},\"uAcceptTime\":\"2023-11-15\",\"uEndTime\":\"2023-11-20\",\"uGetTime\":\"2023-11-13\",\"uKaiTime\":\"2023-11-25\",\"uMoney\":100000,\"uProject\":\"南天招标\",\"uTitle\":\"南天招标二次\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-27 11:54:54', 714);
INSERT INTO `sys_oper_log` VALUES (388, '招标公告', 1, 'com.hh.pms.controller.BidNoticeController.add()', 'POST', 1, NULL, NULL, '/notice', '127.0.0.1', '', '{\"fjRemark\":\"呜呜呜呜\",\"params\":{},\"sid\":1,\"uAcceptTime\":\"2023-11-15\",\"uEndTime\":\"2023-11-20\",\"uGetTime\":\"2023-11-13\",\"uKaiTime\":\"2023-11-25\",\"uMoney\":100000,\"uProject\":\"南天招标\",\"uTitle\":\"南天计划招标\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-27 12:00:25', 526);
INSERT INTO `sys_oper_log` VALUES (389, '招标公告', 2, 'com.hh.pms.controller.BidNoticeController.edit()', 'PUT', 1, NULL, NULL, '/notice', '127.0.0.1', '', '{\"fjRemark\":\"呜呜呜呜哈哈哈\",\"fjStatus\":1,\"params\":{},\"sid\":1,\"uAcceptTime\":\"2023-11-15\",\"uEndTime\":\"2023-11-20\",\"uGetTime\":\"2023-11-13\",\"uKaiTime\":\"2023-11-25\",\"uMoney\":100000,\"uProject\":\"南天招标\",\"uTitle\":\"南天计划招标\",\"uid\":5}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-27 12:04:25', 508);
INSERT INTO `sys_oper_log` VALUES (390, '招标公告', 2, 'com.hh.pms.controller.BidNoticeController.edit()', 'PUT', 1, NULL, NULL, '/notice', '127.0.0.1', '', '{\"fjRemark\":\"正规招标，公平公正，童叟无欺\",\"fjStatus\":1,\"params\":{},\"sid\":1,\"uAcceptTime\":\"2023-11-15\",\"uEndTime\":\"2023-11-20\",\"uGetTime\":\"2023-11-13\",\"uKaiTime\":\"2023-11-25\",\"uMoney\":100000,\"uProject\":\"南天招标\",\"uTitle\":\"南天招标了a。。。\",\"uid\":1}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-27 12:08:06', 469);
INSERT INTO `sys_oper_log` VALUES (391, '招标公告', 1, 'com.hh.pms.controller.BidNoticeController.add()', 'POST', 1, NULL, NULL, '/notice', '127.0.0.1', '', '{\"fjRemark\":\"芜湖受到广泛的过\",\"params\":{},\"sid\":1,\"uAcceptTime\":\"2023-11-16\",\"uEndTime\":\"2023-11-20\",\"uGetTime\":\"2023-11-13\",\"uKaiTime\":\"2023-11-25\",\"uMoney\":100000,\"uProject\":\"南天招标\",\"uTitle\":\"南天招标真的真的开始咯\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-27 15:14:02', 725);
INSERT INTO `sys_oper_log` VALUES (392, '招标公告', 3, 'com.hh.pms.controller.BidNoticeController.remove()', 'DELETE', 1, NULL, NULL, '/notice/6', '127.0.0.1', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-27 15:16:59', 495);
INSERT INTO `sys_oper_log` VALUES (393, '代码生成', 6, 'com.ruoyi.gen.controller.GenController.importTableSave()', 'POST', 1, 'admin', NULL, '/gen/importTable', '127.0.0.1', '', '{\"tables\":\"com_code_rules\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-27 15:33:28', 6331);
INSERT INTO `sys_oper_log` VALUES (394, '代码生成', 3, 'com.ruoyi.gen.controller.GenController.remove()', 'DELETE', 1, 'admin', NULL, '/gen/137', '127.0.0.1', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-27 15:33:35', 1268);
INSERT INTO `sys_oper_log` VALUES (395, '【请填写功能名称】', 1, 'com.hh.pms.controller.ComCodeRulesController.add()', 'POST', 1, NULL, NULL, '/rules', '127.0.0.1', '', '{\"codeRules\":\"YSYYYYMMDD0001\",\"day\":\"DD\",\"hour\":\"\",\"id\":7,\"minute\":\"\",\"mouth\":\"MM\",\"operator\":\"小欧领导\",\"params\":{},\"prefix\":\"YS\",\"second\":\"\",\"serialNumber\":4,\"step\":2,\"targetForm\":\"预算\",\"year\":\"YYYY\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-27 15:44:35', 343);
INSERT INTO `sys_oper_log` VALUES (396, '代码生成', 2, 'com.ruoyi.gen.controller.GenController.synchDb()', 'GET', 1, 'admin', NULL, '/gen/synchDb/ppm_device', '192.168.152.224', '', '{}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-27 15:44:48', 7512);
INSERT INTO `sys_oper_log` VALUES (397, '字典数据', 1, 'com.ruoyi.system.controller.SysDictDataController.add()', 'POST', 1, 'admin', NULL, '/dict/data', '127.0.0.1', '', '{\"createBy\":\"admin\",\"default\":false,\"dictLabel\":\"已发布\",\"dictSort\":5,\"dictType\":\"bid_notice_state\",\"dictValue\":\"5\",\"listClass\":\"default\",\"params\":{},\"remark\":\"状态：已发布\",\"status\":\"0\"}', '{\"msg\":\"操作成功\",\"code\":200}', 0, NULL, '2023-11-27 16:41:18', 762);

-- ----------------------------
-- Table structure for sys_post
-- ----------------------------
DROP TABLE IF EXISTS `sys_post`;
CREATE TABLE `sys_post`  (
  `post_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '岗位ID',
  `post_code` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '岗位编码',
  `post_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '岗位名称',
  `post_sort` int(4) NOT NULL COMMENT '显示顺序',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '状态（0正常 1停用）',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`post_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '岗位信息表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_post
-- ----------------------------
INSERT INTO `sys_post` VALUES (1, 'ceo', '董事长', 1, '0', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_post` VALUES (2, 'se', '项目经理', 2, '0', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_post` VALUES (3, 'hr', '人力资源', 3, '0', 'admin', '2023-11-16 19:03:09', '', NULL, '');
INSERT INTO `sys_post` VALUES (4, 'user', '普通员工', 4, '0', 'admin', '2023-11-16 19:03:09', '', NULL, '');

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `role_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `role_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '角色名称',
  `role_key` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '角色权限字符串',
  `role_sort` int(4) NOT NULL COMMENT '显示顺序',
  `data_scope` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '1' COMMENT '数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）',
  `menu_check_strictly` tinyint(1) NULL DEFAULT 1 COMMENT '菜单树选择项是否关联显示',
  `dept_check_strictly` tinyint(1) NULL DEFAULT 1 COMMENT '部门树选择项是否关联显示',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '角色状态（0正常 1停用）',
  `del_flag` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '删除标志（0代表存在 2代表删除）',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`role_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '角色信息表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES (1, '超级管理员', 'admin', 1, '1', 1, 1, '0', '0', 'admin', '2023-11-16 19:03:09', '', NULL, '超级管理员');
INSERT INTO `sys_role` VALUES (2, '普通角色', 'common', 2, '2', 1, 1, '0', '0', 'admin', '2023-11-16 19:03:09', 'admin', '2024-01-05 10:54:30', '普通角色');
INSERT INTO `sys_role` VALUES (3, '管理员', 'controller', 2, '1', 1, 1, '0', '0', 'admin', '2023-12-26 11:04:49', 'admin', '2024-01-05 10:54:45', NULL);

-- ----------------------------
-- Table structure for sys_role_dept
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_dept`;
CREATE TABLE `sys_role_dept`  (
  `role_id` bigint(20) NOT NULL COMMENT '角色ID',
  `dept_id` bigint(20) NOT NULL COMMENT '部门ID',
  PRIMARY KEY (`role_id`, `dept_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '角色和部门关联表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_role_dept
-- ----------------------------
INSERT INTO `sys_role_dept` VALUES (2, 100);
INSERT INTO `sys_role_dept` VALUES (2, 101);
INSERT INTO `sys_role_dept` VALUES (2, 105);

-- ----------------------------
-- Table structure for sys_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_menu`;
CREATE TABLE `sys_role_menu`  (
  `role_id` bigint(20) NOT NULL COMMENT '角色ID',
  `menu_id` bigint(20) NOT NULL COMMENT '菜单ID',
  PRIMARY KEY (`role_id`, `menu_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '角色和菜单关联表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_role_menu
-- ----------------------------
INSERT INTO `sys_role_menu` VALUES (2, 1);
INSERT INTO `sys_role_menu` VALUES (2, 2000);
INSERT INTO `sys_role_menu` VALUES (2, 2001);
INSERT INTO `sys_role_menu` VALUES (2, 2002);
INSERT INTO `sys_role_menu` VALUES (2, 2003);
INSERT INTO `sys_role_menu` VALUES (2, 2006);
INSERT INTO `sys_role_menu` VALUES (2, 2008);
INSERT INTO `sys_role_menu` VALUES (2, 2009);
INSERT INTO `sys_role_menu` VALUES (2, 2010);
INSERT INTO `sys_role_menu` VALUES (2, 2011);
INSERT INTO `sys_role_menu` VALUES (2, 2013);
INSERT INTO `sys_role_menu` VALUES (2, 2014);
INSERT INTO `sys_role_menu` VALUES (2, 2015);
INSERT INTO `sys_role_menu` VALUES (2, 2016);
INSERT INTO `sys_role_menu` VALUES (2, 2017);
INSERT INTO `sys_role_menu` VALUES (2, 2018);
INSERT INTO `sys_role_menu` VALUES (2, 2019);
INSERT INTO `sys_role_menu` VALUES (2, 2020);
INSERT INTO `sys_role_menu` VALUES (2, 2021);
INSERT INTO `sys_role_menu` VALUES (2, 2023);
INSERT INTO `sys_role_menu` VALUES (2, 2024);
INSERT INTO `sys_role_menu` VALUES (2, 2025);
INSERT INTO `sys_role_menu` VALUES (2, 2028);
INSERT INTO `sys_role_menu` VALUES (2, 2030);
INSERT INTO `sys_role_menu` VALUES (2, 2031);
INSERT INTO `sys_role_menu` VALUES (2, 2032);
INSERT INTO `sys_role_menu` VALUES (2, 2033);
INSERT INTO `sys_role_menu` VALUES (2, 2034);
INSERT INTO `sys_role_menu` VALUES (2, 2036);
INSERT INTO `sys_role_menu` VALUES (2, 2037);
INSERT INTO `sys_role_menu` VALUES (2, 2039);
INSERT INTO `sys_role_menu` VALUES (2, 2040);
INSERT INTO `sys_role_menu` VALUES (2, 2042);
INSERT INTO `sys_role_menu` VALUES (2, 2043);
INSERT INTO `sys_role_menu` VALUES (2, 2045);
INSERT INTO `sys_role_menu` VALUES (2, 2046);
INSERT INTO `sys_role_menu` VALUES (2, 2048);
INSERT INTO `sys_role_menu` VALUES (2, 2050);
INSERT INTO `sys_role_menu` VALUES (2, 2051);
INSERT INTO `sys_role_menu` VALUES (2, 2052);
INSERT INTO `sys_role_menu` VALUES (2, 2053);
INSERT INTO `sys_role_menu` VALUES (2, 2054);
INSERT INTO `sys_role_menu` VALUES (2, 2055);
INSERT INTO `sys_role_menu` VALUES (2, 2056);
INSERT INTO `sys_role_menu` VALUES (2, 2057);
INSERT INTO `sys_role_menu` VALUES (2, 2058);
INSERT INTO `sys_role_menu` VALUES (2, 2059);
INSERT INTO `sys_role_menu` VALUES (2, 2060);
INSERT INTO `sys_role_menu` VALUES (2, 2061);
INSERT INTO `sys_role_menu` VALUES (2, 2062);
INSERT INTO `sys_role_menu` VALUES (2, 2063);
INSERT INTO `sys_role_menu` VALUES (2, 2064);
INSERT INTO `sys_role_menu` VALUES (2, 2065);
INSERT INTO `sys_role_menu` VALUES (2, 2066);
INSERT INTO `sys_role_menu` VALUES (2, 2067);
INSERT INTO `sys_role_menu` VALUES (2, 2068);
INSERT INTO `sys_role_menu` VALUES (2, 2072);
INSERT INTO `sys_role_menu` VALUES (2, 2073);
INSERT INTO `sys_role_menu` VALUES (2, 2074);
INSERT INTO `sys_role_menu` VALUES (2, 2075);
INSERT INTO `sys_role_menu` VALUES (2, 2078);
INSERT INTO `sys_role_menu` VALUES (2, 2080);
INSERT INTO `sys_role_menu` VALUES (2, 2081);
INSERT INTO `sys_role_menu` VALUES (2, 2082);
INSERT INTO `sys_role_menu` VALUES (2, 2083);
INSERT INTO `sys_role_menu` VALUES (2, 2084);
INSERT INTO `sys_role_menu` VALUES (2, 2085);
INSERT INTO `sys_role_menu` VALUES (2, 2086);
INSERT INTO `sys_role_menu` VALUES (2, 2087);
INSERT INTO `sys_role_menu` VALUES (2, 2088);
INSERT INTO `sys_role_menu` VALUES (2, 2089);
INSERT INTO `sys_role_menu` VALUES (2, 2090);
INSERT INTO `sys_role_menu` VALUES (2, 2091);
INSERT INTO `sys_role_menu` VALUES (2, 2092);
INSERT INTO `sys_role_menu` VALUES (2, 2093);
INSERT INTO `sys_role_menu` VALUES (2, 2094);
INSERT INTO `sys_role_menu` VALUES (2, 2095);
INSERT INTO `sys_role_menu` VALUES (2, 2096);
INSERT INTO `sys_role_menu` VALUES (2, 2097);
INSERT INTO `sys_role_menu` VALUES (2, 2098);
INSERT INTO `sys_role_menu` VALUES (2, 2099);
INSERT INTO `sys_role_menu` VALUES (2, 2100);
INSERT INTO `sys_role_menu` VALUES (2, 2101);
INSERT INTO `sys_role_menu` VALUES (2, 2102);
INSERT INTO `sys_role_menu` VALUES (2, 2103);
INSERT INTO `sys_role_menu` VALUES (2, 2104);
INSERT INTO `sys_role_menu` VALUES (2, 2105);
INSERT INTO `sys_role_menu` VALUES (2, 2106);
INSERT INTO `sys_role_menu` VALUES (2, 2109);
INSERT INTO `sys_role_menu` VALUES (2, 2113);
INSERT INTO `sys_role_menu` VALUES (2, 2115);
INSERT INTO `sys_role_menu` VALUES (2, 2116);
INSERT INTO `sys_role_menu` VALUES (2, 2118);
INSERT INTO `sys_role_menu` VALUES (2, 2120);
INSERT INTO `sys_role_menu` VALUES (3, 1);
INSERT INTO `sys_role_menu` VALUES (3, 103);
INSERT INTO `sys_role_menu` VALUES (3, 104);
INSERT INTO `sys_role_menu` VALUES (3, 106);
INSERT INTO `sys_role_menu` VALUES (3, 107);
INSERT INTO `sys_role_menu` VALUES (3, 108);
INSERT INTO `sys_role_menu` VALUES (3, 500);
INSERT INTO `sys_role_menu` VALUES (3, 501);
INSERT INTO `sys_role_menu` VALUES (3, 1016);
INSERT INTO `sys_role_menu` VALUES (3, 1017);
INSERT INTO `sys_role_menu` VALUES (3, 1018);
INSERT INTO `sys_role_menu` VALUES (3, 1019);
INSERT INTO `sys_role_menu` VALUES (3, 1020);
INSERT INTO `sys_role_menu` VALUES (3, 1021);
INSERT INTO `sys_role_menu` VALUES (3, 1022);
INSERT INTO `sys_role_menu` VALUES (3, 1023);
INSERT INTO `sys_role_menu` VALUES (3, 1024);
INSERT INTO `sys_role_menu` VALUES (3, 1030);
INSERT INTO `sys_role_menu` VALUES (3, 1031);
INSERT INTO `sys_role_menu` VALUES (3, 1032);
INSERT INTO `sys_role_menu` VALUES (3, 1033);
INSERT INTO `sys_role_menu` VALUES (3, 1034);
INSERT INTO `sys_role_menu` VALUES (3, 1035);
INSERT INTO `sys_role_menu` VALUES (3, 1036);
INSERT INTO `sys_role_menu` VALUES (3, 1037);
INSERT INTO `sys_role_menu` VALUES (3, 1038);
INSERT INTO `sys_role_menu` VALUES (3, 1039);
INSERT INTO `sys_role_menu` VALUES (3, 1040);
INSERT INTO `sys_role_menu` VALUES (3, 1041);
INSERT INTO `sys_role_menu` VALUES (3, 1042);
INSERT INTO `sys_role_menu` VALUES (3, 1043);
INSERT INTO `sys_role_menu` VALUES (3, 1044);
INSERT INTO `sys_role_menu` VALUES (3, 1045);
INSERT INTO `sys_role_menu` VALUES (3, 2000);
INSERT INTO `sys_role_menu` VALUES (3, 2001);
INSERT INTO `sys_role_menu` VALUES (3, 2002);
INSERT INTO `sys_role_menu` VALUES (3, 2003);
INSERT INTO `sys_role_menu` VALUES (3, 2006);
INSERT INTO `sys_role_menu` VALUES (3, 2008);
INSERT INTO `sys_role_menu` VALUES (3, 2009);
INSERT INTO `sys_role_menu` VALUES (3, 2013);
INSERT INTO `sys_role_menu` VALUES (3, 2014);
INSERT INTO `sys_role_menu` VALUES (3, 2015);
INSERT INTO `sys_role_menu` VALUES (3, 2016);
INSERT INTO `sys_role_menu` VALUES (3, 2017);
INSERT INTO `sys_role_menu` VALUES (3, 2018);
INSERT INTO `sys_role_menu` VALUES (3, 2019);
INSERT INTO `sys_role_menu` VALUES (3, 2020);
INSERT INTO `sys_role_menu` VALUES (3, 2021);
INSERT INTO `sys_role_menu` VALUES (3, 2023);
INSERT INTO `sys_role_menu` VALUES (3, 2024);
INSERT INTO `sys_role_menu` VALUES (3, 2025);
INSERT INTO `sys_role_menu` VALUES (3, 2028);
INSERT INTO `sys_role_menu` VALUES (3, 2029);
INSERT INTO `sys_role_menu` VALUES (3, 2030);
INSERT INTO `sys_role_menu` VALUES (3, 2031);
INSERT INTO `sys_role_menu` VALUES (3, 2032);
INSERT INTO `sys_role_menu` VALUES (3, 2033);
INSERT INTO `sys_role_menu` VALUES (3, 2034);
INSERT INTO `sys_role_menu` VALUES (3, 2036);
INSERT INTO `sys_role_menu` VALUES (3, 2037);
INSERT INTO `sys_role_menu` VALUES (3, 2039);
INSERT INTO `sys_role_menu` VALUES (3, 2040);
INSERT INTO `sys_role_menu` VALUES (3, 2042);
INSERT INTO `sys_role_menu` VALUES (3, 2043);
INSERT INTO `sys_role_menu` VALUES (3, 2045);
INSERT INTO `sys_role_menu` VALUES (3, 2046);
INSERT INTO `sys_role_menu` VALUES (3, 2047);
INSERT INTO `sys_role_menu` VALUES (3, 2048);
INSERT INTO `sys_role_menu` VALUES (3, 2049);
INSERT INTO `sys_role_menu` VALUES (3, 2050);
INSERT INTO `sys_role_menu` VALUES (3, 2051);
INSERT INTO `sys_role_menu` VALUES (3, 2052);
INSERT INTO `sys_role_menu` VALUES (3, 2053);
INSERT INTO `sys_role_menu` VALUES (3, 2054);
INSERT INTO `sys_role_menu` VALUES (3, 2055);
INSERT INTO `sys_role_menu` VALUES (3, 2056);
INSERT INTO `sys_role_menu` VALUES (3, 2057);
INSERT INTO `sys_role_menu` VALUES (3, 2058);
INSERT INTO `sys_role_menu` VALUES (3, 2059);
INSERT INTO `sys_role_menu` VALUES (3, 2060);
INSERT INTO `sys_role_menu` VALUES (3, 2061);
INSERT INTO `sys_role_menu` VALUES (3, 2062);
INSERT INTO `sys_role_menu` VALUES (3, 2063);
INSERT INTO `sys_role_menu` VALUES (3, 2064);
INSERT INTO `sys_role_menu` VALUES (3, 2065);
INSERT INTO `sys_role_menu` VALUES (3, 2066);
INSERT INTO `sys_role_menu` VALUES (3, 2067);
INSERT INTO `sys_role_menu` VALUES (3, 2068);
INSERT INTO `sys_role_menu` VALUES (3, 2071);
INSERT INTO `sys_role_menu` VALUES (3, 2072);
INSERT INTO `sys_role_menu` VALUES (3, 2073);
INSERT INTO `sys_role_menu` VALUES (3, 2074);
INSERT INTO `sys_role_menu` VALUES (3, 2075);
INSERT INTO `sys_role_menu` VALUES (3, 2078);
INSERT INTO `sys_role_menu` VALUES (3, 2079);
INSERT INTO `sys_role_menu` VALUES (3, 2080);
INSERT INTO `sys_role_menu` VALUES (3, 2081);
INSERT INTO `sys_role_menu` VALUES (3, 2082);
INSERT INTO `sys_role_menu` VALUES (3, 2084);
INSERT INTO `sys_role_menu` VALUES (3, 2088);
INSERT INTO `sys_role_menu` VALUES (3, 2091);
INSERT INTO `sys_role_menu` VALUES (3, 2092);
INSERT INTO `sys_role_menu` VALUES (3, 2097);
INSERT INTO `sys_role_menu` VALUES (3, 2100);
INSERT INTO `sys_role_menu` VALUES (3, 2102);
INSERT INTO `sys_role_menu` VALUES (3, 2104);
INSERT INTO `sys_role_menu` VALUES (3, 2105);
INSERT INTO `sys_role_menu` VALUES (3, 2106);
INSERT INTO `sys_role_menu` VALUES (3, 2109);
INSERT INTO `sys_role_menu` VALUES (3, 2112);
INSERT INTO `sys_role_menu` VALUES (3, 2113);
INSERT INTO `sys_role_menu` VALUES (3, 2114);
INSERT INTO `sys_role_menu` VALUES (3, 2115);
INSERT INTO `sys_role_menu` VALUES (3, 2116);
INSERT INTO `sys_role_menu` VALUES (3, 2117);
INSERT INTO `sys_role_menu` VALUES (3, 2118);
INSERT INTO `sys_role_menu` VALUES (3, 2119);
INSERT INTO `sys_role_menu` VALUES (3, 2120);

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `dept_id` bigint(20) NULL DEFAULT NULL COMMENT '部门ID',
  `user_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户账号',
  `nick_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户昵称',
  `user_type` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '00' COMMENT '用户类型（00系统用户）',
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '用户邮箱',
  `phonenumber` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '手机号码',
  `sex` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '用户性别（0男 1女 2未知）',
  `avatar` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '头像地址',
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '密码',
  `status` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '帐号状态（0正常 1停用）',
  `del_flag` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0' COMMENT '删除标志（0代表存在 2代表删除）',
  `login_ip` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '最后登录IP',
  `login_date` datetime(0) NULL DEFAULT NULL COMMENT '最后登录时间',
  `create_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '创建者',
  `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '更新者',
  `update_time` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户信息表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (1, 103, 'admin', '超级管理员', '00', 'ry@163.com', '15888888888', '1', 'http://localhost:9610/static/2023/12/13/blob_20231213144326A005.png', '$2a$10$7JB720yubVSZvUI0rEqK/.VqGOZTH.ulu33dHOiBE8ByOhJIrdAu2', '0', '0', '127.0.0.1', '2023-11-16 19:03:09', 'admin', '2023-11-16 19:03:09', '', '2023-12-06 10:02:24', '管理员');
INSERT INTO `sys_user` VALUES (2, 105, 'ry', '若依', '00', 'ry@qq.com', '15666666666', '1', '', '$2a$10$qpR2tyWUgIgTKQvYAthL4eJKjG/T2zWSGXuGPygYQORoQxVKvb1Tq', '0', '2', '127.0.0.1', '2023-11-16 19:03:09', 'admin', '2023-11-16 19:03:09', 'admin', '2023-12-22 12:54:25', '测试员');
INSERT INTO `sys_user` VALUES (3, NULL, 'test', 'test', '00', '', '', '0', '', '$2a$10$zBQp0gWM76qJcU.bVO/cCOqDis9A.FT4FTkNEA6I1e3ZLxJoQiete', '0', '2', '', NULL, 'admin', '2023-12-22 12:55:17', 'admin', '2023-12-25 09:37:33', NULL);
INSERT INTO `sys_user` VALUES (4, 111, 'test02', 'test02', '00', '', '', '0', '', '$2a$10$gXerxEuGI.gi1c72g0ed2ugKzloEa0Q1aT0O.XyLec6aFE3x69kMG', '0', '2', '', NULL, 'admin', '2023-12-25 09:39:02', 'admin', '2023-12-26 11:02:18', NULL);
INSERT INTO `sys_user` VALUES (5, 101, 'leijian', '雷经理', '00', '', '', '0', '', '$2a$10$OJGycLMGOqO3tNE5P/Iyk.qo2Y0b8l3wW1qaAyTNp0r.Osv2Lv3F2', '0', '0', '', NULL, 'admin', '2023-12-26 11:05:51', 'admin', '2023-12-26 16:04:05', NULL);
INSERT INTO `sys_user` VALUES (6, NULL, '123', '123', '00', '', '', '0', '', '$2a$10$dQ0g.PfGwJQAnHSlrZ4L5eXdrRiOHLOYDMhFXDOfFGlKMAFpJKN6u', '0', '2', '', NULL, '', '2023-12-26 11:16:03', '', NULL, NULL);
INSERT INTO `sys_user` VALUES (7, 101, 'gzl', '曾国华', '00', '', '', '2', '', '$2a$10$T2TLGnv8SIPbIeOejNeV.OdL8u92Nm5UJFNJOxaVcWYRw2GAYxA0a', '0', '0', '', NULL, 'admin', '2023-12-26 20:16:04', 'admin', '2024-01-02 20:13:09', NULL);
INSERT INTO `sys_user` VALUES (8, 101, 'gdk', '雷建国', '00', '', '', '2', '', '$2a$10$PWACuYZYyZgeRnVEps2qru02FgiVHO5WwWUvmmGzTfsS6rezgf3NW', '0', '0', '', NULL, 'admin', '2023-12-26 20:16:48', 'admin', '2024-01-02 20:13:29', NULL);

-- ----------------------------
-- Table structure for sys_user_post
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_post`;
CREATE TABLE `sys_user_post`  (
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `post_id` bigint(20) NOT NULL COMMENT '岗位ID',
  PRIMARY KEY (`user_id`, `post_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户与岗位关联表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_user_post
-- ----------------------------
INSERT INTO `sys_user_post` VALUES (1, 1);
INSERT INTO `sys_user_post` VALUES (5, 2);
INSERT INTO `sys_user_post` VALUES (7, 4);
INSERT INTO `sys_user_post` VALUES (8, 4);

-- ----------------------------
-- Table structure for sys_user_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_role`;
CREATE TABLE `sys_user_role`  (
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `role_id` bigint(20) NOT NULL COMMENT '角色ID',
  PRIMARY KEY (`user_id`, `role_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户和角色关联表' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_user_role
-- ----------------------------
INSERT INTO `sys_user_role` VALUES (1, 1);
INSERT INTO `sys_user_role` VALUES (5, 3);
INSERT INTO `sys_user_role` VALUES (7, 2);
INSERT INTO `sys_user_role` VALUES (8, 2);

SET FOREIGN_KEY_CHECKS = 1;
