# adonis5-many-to-many
This instance use ``sqlite3`` Database, just run.

## Install Adonis CLI

<pre>sudo npm i -g @adonisjs/cli</pre>

## *DEV STEPS*

#### create .env file

<pre>cp .env.example .env</pre>

> ## Install packages

<pre>npm install</pre>

##### Generate Key packages

<pre>node ace generate:key</pre>

##### RUN Migration to create tables

<pre>node ace migration:run</pre>

##### RUN apps

<pre>node ace serve --watch</pre>

# Endpoints
# POST ```http://localhost:3333/users``` -- Will create to Users && SKILLS (without body)
# POST ```http://localhost:3333/skills``` -- Will create to SKILLS (without body)

# GET ```http://localhost:3333/users``` -- get all Users && our SKILLS
# GET ```http://localhost:3333/skills``` -- get all SKILLS && our Users

## PRODUCTION STEPS - Ubuntu Server 18.04 TLS OR 20.04 TLS

##### Update Ubuntu packages

<pre>
sudo apt update
sudo apt upgrade
</pre>

##### Install node 16.1.0 && npm if not onstalled yet

```
sudo apt install -y nodejs
node -v
```

##### Install `nvm` to manage node node versions

<pre>
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
nvm install 16.1.0
node -v
</pre>

##### Install Adonis CLI

<pre>sudo npm i -g @adonisjs/cli</pre>

> #### Compiling for production

<pre>
cd project_folder
cp .env.example .env
node ace generate:key
sudo npm i
node ace build --production
cd build/
npm ci --production
</pre>

##### use `PM2` to run node app on background (if PM2 not installed, install it)

<pre>
pm2 start build/server.js --name api-many-to-many
pm2 save
pm2 info server
pm2 monit
pm2 ps
pm2 stop api-many-to-many
pm2 restart api-many-to-many
</pre>

### **Update Prod**

<pre>
sudo git pull
npm run build
pm2 restart api-many-to-many
</pre>

> ##### OR

<pre>
sudo git pull
sudo npm i
sudo node ace invoke adonis5-swagger
node ace build --production
node ace swagger:generate && cp -a docs/ build/docs && cp .env build/.env

cd build/
npm ci --production
pm2 restart api-many-to-many
</pre>

##### copy docs if erro on Docs page

<pre>cd build/
sudo cp -R ../docs/ .
</pre>


# For more see adonis documentation [Many to Many](https://docs.adonisjs.com/reference/orm/relations/many-to-many#sidenav-open) reference.