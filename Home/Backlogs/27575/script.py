#!/usr/bin/env python

import re

palavrasChave = ['001', '002', '003', '004', '005', '006', '007', '008', '009',\
'010','011','012','013','014','015','016','017','018','019','020',\
'Enquanto','Dado que', 'Dado', 'E','Quero', 'Então','OU','Ou', 'RN1', 'RN2', 'RN3','RN4',\
'RN5','RN6','RN7','RN8','RN9','RN10','RN11','RN12','RN13','RN14','RN15','RN16',\
'Descrição', 'Critério de aceitação', 'Critério de Aceitação', 'Para', 'para']

# Primeiro passo, ler o arquivo #

with open('Descricao.txt', 'r') as d:
    lines = d.readlines()

#Segundo passo, criar um array intermediario#
semNegrito = []
# Segundo passo, remover negritos anteriores #

for line in lines:
    temp = line.replace('**','')
    semNegrito.append(temp)
# Terceiro passo, para cada linha, transformar as palavras-chave em negrito' #
novoNegrito = []

for line in semNegrito:
    linha = line 
    for palavra in palavrasChave:
        rep = palavra
        neg = '**' + palavra + '**'
        linha = re.sub(r'^{}\b'.format(rep),neg,linha)
    novoNegrito.append(linha)


    
# Mostrar na tela #

open('Descricao.txt','w').close()
with open('Descricao.txt', 'a') as d:
    for linha in novoNegrito:
        d.write(linha)


