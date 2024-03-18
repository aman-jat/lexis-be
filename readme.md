
# Lexis Movies - backend

An app to explore movie information


## Authors

- [@aman-jat](https://www.github.com/aman-jat)


## Run Locally

Clone the project

```bash
  git clone https://github.com/aman-jat/lexis-be
```

Go to the project directory

```bash
  cd lexis-be
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_USER` 

`DB_PASS`

`DB_HOST`

`DB_NAME`

`AUTH_SECRET_KEY`

`DB_PORT`

`PORT=9000`
## API Reference

#### Get all items
### Auth
```http
  POST /api/auth/login
```

```http
  POST /api/auth/register
```
```http
  PUT /api/auth/logout
```

```http
  GET /api/auth
```

### Movies


```http
  GET /api/movie?start=[startIndex]&end=[endIndex]&query=[searchText]
```