CREATE TABLE icts_test.produto (
	id INTEGER auto_increment NOT NULL,
	nome varchar(100) NULL,
	descricao varchar(100) NULL,
	preco DOUBLE NULL,
	data_criacao TIMESTAMP NULL,
	data_atualizacao TIMESTAMP NULL,
	CONSTRAINT Produto_PK PRIMARY KEY (id),
	CONSTRAINT produto_FK FOREIGN KEY (id) REFERENCES icts_test.compras(id)
)
ENGINE=InnoDB
DEFAULT CHARSET=latin1
COLLATE=latin1_swedish_ci;