CREATE TABLE icts_test.compras (
	id INTEGER auto_increment NOT NULL,
	total DOUBLE NULL,
	data_criacao DATE NULL,
	tipo_pagamento VARCHAR(50) NULL,
	status varchar(50) NULL,
	CONSTRAINT compras_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=latin1
COLLATE=latin1_swedish_ci;