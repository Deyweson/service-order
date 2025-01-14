create table users (
  id serial primary key,
  username varchar(255) not null,
  password varchar(255) not null,
)

create table clients (
  id serial primary key,
  name varchar(255) not null,
)

create table orders (
  id serial primary key,
  client_id integer not null,
  user_id integer not null,
  title text not null,
  order_date DATETIME not null,
  order_local text not null,
  status text not null default 'EM_ABERTO',

  foreign key (client_id) references clients(id),
  foreign key (user_id) references users(id),
)
--  STATUS ORDER
--   'EM_ABERTO',
--   'EM_ANDAMENTO',
--   'FINALIZADA',
--   'CANCELADA'