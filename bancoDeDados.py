import sqlite3
import csv
import pandas as pd
from flask import render_template
conn = sqlite3.connect('ComprasLab.db')
cursor = conn.cursor()
cursor.execute("""
CREATE TABLE IF NOT EXISTS Compras,
        id INTEGER PRIMARY KEY,
        nome TEXT,
        preco REAL,
        quantidade INTEGER,
        numero_compra INTEGER,
               )
               )""")
nome = input('Digite o nome do Cliente: ')
preco = input('Digite o preço do produto: ')
quantidade = input('Digite a quantidade de produtos: ')
numero_compra = input('Digite o número da compra: ')
cursor.execute('INSERT INTO Compras (nome, preco, quantidade, numero_compra) VALUES (?,?,?,?)', (nome, preco, quantidade, numero_compra))
conn.commit()
print('Dados inseridos com sucesso.')
cursor.execute('SELECT * FROM Compras')

with open('compras.csv', 'w', newline='') as csvfile:
    csvwriter = csv.writer(csvfile)
    csvwriter.writerow(['id', 'nome', 'preco', 'quantidade', 'numero_compra'])  # Escreve o cabeçalho
    csvwriter.writerows(cursor.fetchall())
from flask import Flask, render_template
import sqlite3

app = Flask(__name__)

@app.route('/')
def exibir_compras():
    conn = sqlite3.connect('ComprasLab.db')
    cursor = conn.cursor()
    
    cursor.execute('SELECT * FROM Compras')
    compras = cursor.fetchall()
    
    conn.close()
    
    return render_template('exibir_compras.html', compras=compras)

if __name__ == '__main__':
    app.run(debug=True)



# Conecte-se ao banco de dados
conn = sqlite3.connect('DataBase.db')

# Execute uma consulta SQL para obter os dados
query = "SELECT * FROM Produto;"
df = pd.read_sql_query(query, conn)

# Salve os dados em um arquivo Excel
df.to_excel('dados_produtos.xlsx', index=False)

# Feche a conexão
conn.close()


