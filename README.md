# AQUI ANEXO MEU PORTFÓLIO, DE MANEIRA INTERATIVA E NÃO ORIGINAL PARA ENVIAR AO PRESTAR MEU SERVIÇO, UTILIZO-O DE MANEIRA TEMPORÁRIA PARA QUE EU MELHORE CONSTANTEMENTE ATÉ SE TORNAR O PRINCIPAL

Um sistema inovador para gerenciamento de biblioteca pessoal, desenvolvido com HTML,CSS,JS,bastante typescript... e umas partes em python e MySQL (mas para correr do Workbench o backend foi migrado para o firebase, aonde atualmente prefiro alocar meus projetos).

## Sobre o Desenvolvedor

- **Nome:** João Lucas de Oliveira
- **Localização:** Minas Gerais
- **Email:** jl.lucas.oliveira@hotmail.com
- **WhatsApp:** (33) 99951-6555

## Funcionalidades

Meu portfólio desenvolvido com o intuito ta interatividade de RPG ser uma inovação em meu portfólio, particulamente esse não é meu portfólio original, e sim uma interatividade visual 
que irei dar updates constantes ao longo de vários anos até o êxito e inovações em algo simples como um portfólio! 



## Instalação (não precisa) v

1. Clone o repositório:
```bash
git clone https://github.com/joaolucas/biblioteca-jasao.git
cd biblioteca-jasao
```

2. Crie um ambiente virtual e ative-o:
```bash
python -m venv venv
# Windows
venv\Scripts\activate
# Linux/Mac
source venv/bin/activate
```

3. Instale as dependências:
```bash
pip install -r requirements.txt
```

4. Configure o banco de dados:
- Crie um banco de dados MySQL chamado `biblioteca_jasao`
- Configure as credenciais no arquivo `.env`

5. Execute as migrações do banco de dados:
```bash
flask db init
flask db migrate
flask db upgrade
```
já disponibilizado no domínio do vercel para não ter esse processo de uso abaixo: 
(não precisa) v
## Uso

1. Inicie o servidor:
```bash
flask run
```

2. Acesse a aplicação no navegador:
```
http://localhost:5000
```

## Estrutura do Projeto

```
biblioteca-jasao/
├── app.py              # Aplicação principal
├── requirements.txt    # Dependências
├── .env               # Variáveis de ambiente
├── templates/         # Templates HTML
│   ├── base.html
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   └── dashboard.html
└── static/           # Arquivos estáticos
    ├── css/
    ├── js/
    └── img/
```

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Contato

- **Email:** jl.lucas.oliveira@hotmail.com
- **WhatsApp:** (33) 99951-6555
- **Localização:** Minas Gerais 
