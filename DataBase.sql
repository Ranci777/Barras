
CREATE TABLE Produto (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    codigo_de_barras TEXT UNIQUE NOT NULL,
    valor REAL NOT NULL,
    nome_da_baixa TEXT NOT NULL
);
INSERT INTO Produto (nome, codigo_de_barras, valor, nome_da_baixa)
VALUES ('Produto A', '123456789', 10.50, 'VITÓRIA');
SELECT * FROM Produto;




