# Biblioteca do Jasão

Um sistema inovador para gerenciamento de biblioteca pessoal, desenvolvido com Python Flask e MySQL.

## Sobre o Desenvolvedor

- **Nome:** João Lucas de Oliveira
- **Localização:** Minas Gerais
- **Email:** jl.lucas.oliveira@hotmail.com
- **WhatsApp:** (33) 99951-6555

## Funcionalidades

- Gerenciamento de livros (cadastro, edição, exclusão)
- Geração de QR Code para acesso rápido
- Controle de empréstimos e reservas
- Dashboard com estatísticas
- Interface responsiva e moderna
- Sistema de autenticação seguro

## Requisitos

- Python 3.8 ou superior
- MySQL Server
- pip (gerenciador de pacotes Python)

## Instalação

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

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Contato

- **Email:** jl.lucas.oliveira@hotmail.com
- **WhatsApp:** (33) 99951-6555
- **Localização:** Minas Gerais

Link do Projeto: [https://github.com/joaolucas/biblioteca-jasao](https://github.com/joaolucas/biblioteca-jasao) 