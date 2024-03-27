create table departamento (
	id serial primary key,
	nome varchar(100) not null,
	dataCriacao date not null
);

--alter table departamento
--alter column nome type varchar(100)

create table funcionarios (
	id serial primary key,
	nome varchar(100) not null,
	idade int not null,
	check(idade >= 14),
	cargo varchar(100) not null,
	salario decimal(8,2) not null,
	idDepartamento int not null,
	foreign key (idDepartamento) references departamento(id)
);

insert into departamento (nome, dataCriacao)
values ('Administrativo', '13-03-2024');
insert into departamento (nome, dataCriacao)
values ('Atendimento', '13-03-2024');
insert into departamento (nome, dataCriacao)
values ('Recursos Humanos', '13-03-2024')

select * from departamento

insert into funcionarios (nome, idade, cargo, salario, idDepartamento)
values ('Tati Talentosa', 38, 'Gerente de RH', 4200, 3);
insert into funcionarios (nome, idade, cargo, salario, idDepartamento)
values ('Paulo Planilha', 32, 'Analista Financeiro', 6000, 1);
insert into funcionarios (nome, idade, cargo, salario, idDepartamento)
values ('Hugo Hospitaleiro', 26, 'Caixa', 2300, 2)

insert into funcionarios (nome, idade, cargo, salario, idDepartamento)
values ('Suzana Socorro', 22, 'Atendente', 1800, 2), 
	   ('Sandra Sorriso', 22, 'Atendente', 1800, 2);
insert into funcionarios (nome, idade, cargo, salario, idDepartamento)
values ('Alice Arquivo', 28, 'Auxiliar Administrativo', 2350, 1),
	   ('Beatriz Boleto', 27, 'Auxiliar Financeiro', 2400, 1)

select * from funcionarios

select * from funcionarios as f inner join departamento as d
on f.idDepartamento = d.id

update departamento set nome = 'Talentos Humanos'
where id = 3

update funcionarios set idade = 33
where id = 2

delete from funcionarios where id = 5

delete from funcionarios where idDepartamento = 1


drop table funcionarios, departamento
