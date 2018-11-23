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
    ('cold', 'jacket.jpg', 'torso');
insert into wardrobe
    (type_clothing, name_clothing, body_part)
values
    ('cold', 'winterPants.jpg', 'leg');
insert into wardrobe
    (type_clothing, name_clothing, body_part)
values
    ('cold', 'rainBoots.jpg', 'feet');
insert into wardrobe
    (type_clothing, name_clothing, body_part)
values
    ('hot', 'whiteShirt.jpg', 'torso');
insert into wardrobe
    (type_clothing, name_clothing, body_part)
values
    ('hot', 'shirt.jpg', 'leg');
insert into wardrobe
    (type_clothing, name_clothing, body_part)
values
    ('hot', 'sandels.jpg', 'feet');
insert into wardrobe
    (type_clothing, name_clothing, body_part)
values
    ('mid', 'longSleeve.jpg', 'torso');
insert into wardrobe
    (type_clothing, name_clothing, body_part)
values
    ('mid', 'threeQuater.jpg', 'leg');
insert into wardrobe
    (type_clothing, name_clothing, body_part)
values
    ('mid', 'takkies.jpgs', 'feet');