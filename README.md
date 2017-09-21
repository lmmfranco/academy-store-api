# academy-store-api

Uma RESTFul API simples em Node JS, criada por [Luiz Franco](https://github.com/lmmfranco), para utilização no curso [Desenvolvimento front-end com Bootstrap e Angular JS](http://academy.fpftech.com/produto/desenvolvimento-front-end-com-bootstrap-e-angular-js/).

---

1) Clone ou baixe este repositório e, estando no diretório do projeto, abra o console: 
`npm install`

1) Para executar, estando no diretório do projeto, abra o console: 
`npm start`

3) Para testar as requisições, utilize o software de sua preferência ([Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop), por exemplo) e acesse:
`http://localhost:8080`

## Exemplo de requisição (POST):

URL:
`localhost:8080/produto`

Body (JSON):
```
{
	"nome": "Nome do produto",
	"codigo": "1",
	"valor": "1.55",
	"imagem": "",
	"quantidade": "1",
	"descricao": "Descrição do Produto"
}
```

	

