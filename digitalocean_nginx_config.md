# Configuração do servidor

1. Configurar chave SSH
2. Criar Droplet
3. Realizar update e upgrade
4. Crua usuário `adduser deploy` e `usermod -aG sudo deploy`
5. Cria pasta `.ssh` pro `deploy`
6. `cp ~/.ssh/authorized_keys /home/deploy/.ssh/authorized_keys`
7. `chown -R deploy:deploy .ssh/`
8. `chmod 700 .ssh`
9. `chmod 600 .ssh/authorized_keys`
10. Testa conexão com usuário deploy
11. `curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -`
12. `sudo apt install nodejs`
13. Install Yarn
14. `apt install docker.io`
15. `sudo usermod -aG docker $USER`

# Configuração do banco de dados

1. `docker run --name database -e POSTGRES_PASSWORD=E5ag2rSm6Pz7UZC4 -p 5432:5432 --restart always -d postgres`
2. `docker exec postgres -it /bin/bash`
3. `su -u postgres` e `psql`
4. `CREATE DATABASE myapp;`
3. `CREATE USER rocketseat WITH ENCRYPTED PASSWORD 'uBaPt2H4rJTp8T59';`
4. `GRANT ALL PRIVILEGES ON DATABASE myapp TO rocketseat;`

# Configuração da aplicação

1. Clone Masterclass SQL
2. Configurar script `"start": "node src/server.js"`
3. Testar aplicação
4. Configurar dotenv

```
NODE_ENV=development
PORT=3333

DB_HOST=localhost
DB_NAME=sqlnode
DB_USER=docker
DB_PASS=docker
```

5. Adiciona `.env` no `.gitignore`
6. Cria `.env.example`

# Configuração de deploy

1. Sobe app no Github
2. Realiza clone
3. Cria `.env` com credenciais do banco e `production`
4. Executa `yarn sequelize db:migrate`
5. Executa app e testa no Insomnia
6. `yarn global add pm2`
7. `export PATH="$(yarn global bin):$PATH"` no `.bashrc`
8. `source ~/.bashrc`
9. `pm2 start src/server.js --name myapp-server`
10. `pm2 startup ubuntu -u deploy`
11. Executa comando retornado
12. `pm2 save`
13. `sudo reboot`

# Configuração do NGINx/domínio/SSL

1. `apt install nginx` (como root)
2. `cp /etc/nginx/sites-available/default /etc/nginx/sites-available/myapp-server`

```
server {
  server_name nodedeploy.rocketseat.com.br;

  location / {
    proxy_pass http://127.0.0.1:4000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_cache_bypass $http_upgrade;
  }
}
```

4. `ln -s /etc/nginx/sites-available/myapp-server /etc/nginx/sites-enabled/`
5. `nginx -t` e `service nginx restart`
6. Configura DNS e aguarda propagação
7. Acompanha em https://www.whatsmydns.net/
8. Executa certbot (https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx)

# Configuração de monitoramento e logs

- Configurar Amplify (https://amplify.nginx.com/)