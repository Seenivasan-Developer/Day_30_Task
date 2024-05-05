//DESIGN DB MODEL FOR GUVI ZEN CLASS

create database zenclass;
show databases;
use zenclass;

CREATE TABLE batch_data(
batchid int auto_increment primary key,
batchname varchar(100)
);

create table users(
userid integer auto_increment primary key,
username varchar (50),
email varchar (50),
createdAt datetime,
batch_id integer,
foreign key (batch_id) references batch_data (batchid)
);

alter table batch_data
add foreign key (batchid)references users(batch_id);

create table codeketa(
codeid integer auto_increment primary key,
userid integer,
topic varchar(50),
noofproblem integer,
solvedproblem int,
FOREIGN KEY (userid) REFERENCES users(userid)
);

CREATE TABLE company_drives (
driveid INTEGER AUTO_INCREMENT PRIMARY KEY,
userid INTEGER,
drivedate DATE,
company VARCHAR(100),
FOREIGN KEY (userid) REFERENCES users(userid)
);

CREATE TABLE mentors (
mentorid INTEGER AUTO_INCREMENT PRIMARY KEY,
mentorname VARCHAR(100),
mentoremail VARCHAR(100)
);

CREATE TABLE topics (
topicid INTEGER AUTO_INCREMENT PRIMARY KEY,
topic VARCHAR(200),
topicdate DATE,
mentorid integer,
FOREIGN KEY (mentorid) REFERENCES mentors(mentorid)
);

CREATE TABLE tasks (
taskid INTEGER AUTO_INCREMENT PRIMARY KEY,
topicid integer,
task VARCHAR(1000),
batch_id INTEGER,
FOREIGN KEY (topicid) REFERENCES topics(topicid)
);

CREATE TABLE attendance (
attid INTEGER AUTO_INCREMENT PRIMARY KEY,
userid integer,
topicsid INTEGER,
attended BOOLEAN,
FOREIGN KEY (userid) REFERENCES users(userid),
FOREIGN KEY (topicsid) REFERENCES topics(topicid)
);

alter table topics add userid integer;

alter table tasks add userid integer;

alter table topics
add FOREIGN KEY (userid) REFERENCES users(userid);

alter table tasks
add foreign key (userid)references users(userid);

