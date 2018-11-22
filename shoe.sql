drop table wardrobe;

create table wardrobe
(
    id serial not null primary key,
    type_clothing text not null,
    name_clothing text not null,
    body_part text not null
);

insert into wardrobe
    (type_clothing, name_clothing, body_part)
values
    ('cold', 'jacket', 'torso');
insert into wardrobe
    (type_clothing, name_clothing, body_part)
values
    ('cold', 'winter pants', 'leg');
insert into wardrobe
    (type_clothing, name_clothing, body_part)
values
    ('cold', 'rain boots', 'feet');
insert into wardrobe
    (type_clothing, name_clothing, body_part)
values
    ('hot', 'white shirt', 'torso');
insert into wardrobe
    (type_clothing, name_clothing, body_part)
values
    ('hot', 'shirts', 'leg');
insert into wardrobe
    (type_clothing, name_clothing, body_part)
values
    ('hot', 'sandels', 'feet');
insert into wardrobe
    (type_clothing, name_clothing, body_part)
values
    ('mid', 'long sleeve', 'torso');
insert into wardrobe
    (type_clothing, name_clothing, body_part)
values
    ('mid', 'three quater', 'leg');
insert into wardrobe
    (type_clothing, name_clothing, body_part)
values
    ('mid', 'takkies', 'feet');