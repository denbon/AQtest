pragma foreight_keys=on;
drop table if exists weight;
create table weight (
'id' integer primary key autoincrement,
'value' decimal (3, 2) not null
);

drop table if exists location;
create table location (
'id' integer primary key autoincrement,
city varchar (20) not null
);

drop table if exists distance;
create table distance (
'id' integer primary key autoincrement,
'value' integer not null
);



drop table if exists delivery;
create table delivery (
'id' integer primary key autoincrement,
'user' varchar(40) not null,
'price' decimal (4,2),
'weight_id' integer,
'location_id' integer,
'distance_id' integer,
foreign key(weight_id) references weight(id),
foreign key(location_id) references location(id),
foreign key(distance_id) references distance_id(id)
);



