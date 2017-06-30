SET NAMES UTF8;
USE anime;
DROP TABLE IF EXISTS news;
CREATE TABLE news(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL DEFAULT '',
title VARCHAR(300) NOT NULL DEFAULT '',
content VARCHAR(2000) NOT NULL DEFAULT '',
pic VARCHAR(50) NOT NULL DEFAULT '',
time DATETIME NOT NULL DEFAULT 0
);
INSERT INTO news VALUES
(null,' 《打工吧！魔王大人》','轻小说原作者回答《打工吧！魔王大人》动画为何没二期！','<p>在2013年的时候，由和原聪司原作、029负责插画的轻小说《打工吧！魔王大人》被WHITEFOX动画化播出。在当时动画全六卷的光盘销量都在1万张以上，不少粉丝都期待着第二期的到来。不过，现如今已经过去了4年的时间，但依然没有动画续篇的消息。本作的原作者趁着本作广播剧的推出，说明了为什么动画没有第二期的原因。</p><p>和原聪司表示，不论是在推特、签售会还是私人聚会上，都会有人问自己怎么没有动画第二期。每当这个时候，自己都会回答“不知道”或者“我还想问呢”。自己是《打工吧！魔王大人》所有作品的头号粉丝，早就期待着动画二期了。不过能否动画化并不是原作者说了算的，就算自己再怎么想，也不会有动画。动画是商业作品，这次广播剧的推出，也是因为作品的PV在N站上的播放数高。观众的支持才是动画化的最大原动力。</p>','images/news/7.jpg',now()),

