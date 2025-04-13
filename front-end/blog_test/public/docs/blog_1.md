# README: Setting Up Raspberry Pi as an SQL Server

This guide provides a step-by-step walkthrough to set up a Raspberry Pi running Kali Linux as an SQL (MariaDB) server, configure it for remote access, and manage databases using stored procedures.

---

## Prerequisites

- A Raspberry Pi running Kali Linux  
- Internet connection for the Raspberry Pi  
- Basic knowledge of Linux commands and SQL

![photo](https://thumbs.dreamstime.com/b/image-conceptuelle-d-une-grande-pierre-sous-forme-de-brai-humain-110748113.jpg)
---

## Steps to Set Up the Raspberry Pi as an SQL Server

### 1. Install MariaDB

MariaDB is a fork of \`MySQL\` and is fully compatible with it.

[watch on youtube](https://www.youtube.com/watch?v=vJp3f6fb_Xo)

**Update the package list:**

```bash
sudo apt update
```

**Install the MariaDB server and client:**

```bash
sudo apt install mariadb-server mariadb-client
```

### 2. Secure the MariaDB Installation

```bash
sudo mysql_secure_installation
```

Follow the prompts to set a root password and secure the database server.

### 3. Configure MariaDB for Remote Access

Open the MariaDB configuration file:

```bash
sudo nano /etc/mysql/mariadb.conf.d/50-server.cnf
```

Find the line:

```
bind-address = 127.0.0.1
```

Change it to:

```
bind-address = 0.0.0.0
```

Then restart MariaDB:

```bash
sudo systemctl restart mariadb
```

### 4. Create a Remote User

Log into MariaDB:

```bash
sudo mysql -u root -p
```

Then run:

```sql
CREATE USER 'username'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'username'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

### 5. Allow Port 3306 Through the Firewall

```bash
sudo ufw allow 3306/tcp
sudo uf
```