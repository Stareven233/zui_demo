DROP DATABASE IF EXISTS javaWebTest;
CREATE DATABASE javaWebTest DEFAULT CHARACTER SET utf8;

use javaWebTest;

CREATE TABLE user (
  id int(10) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  username varchar(20) NOT NULL COMMENT '用户名',
  password varchar(25) NOT NULL COMMENT '账号密码',
  status int(10) NOT NULL COMMENT '用户状态',
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8
