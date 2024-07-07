## Desafio Docker-composer
Desafio do curso FullCycle, no módulo de Docker.

## Descrição do desafio
A ideia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro no banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:
```html
<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.
```

## Requisitos
1. Toda a aplicação deve estar disponível na porta 8080.

  
## Subindo Ambiente
```
git clone https://github.com/ClaudionorJunior/desafio-docker-composer.git
```
```
cd desafio-docker-composer
```
```
docker-compose up -d
```
