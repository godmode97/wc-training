GraphQL Training
===
- A repository for simple project in graphql training.

Up and Running
---
* install packages

```bash
$ npm install
```

Scripts
---

These are the available scripts in this project:

### `npm run serve`

Serves a quick server (`json-server`) for running a fake api server. Visit this [link](https://github.com/typicode/json-server) for more information.

How to Install (Install *Globally*):

```bash
$ sudo npm install --save json-server -g
```
create a `db.json` in your `/path/to/db`

### `npm run dev`

Serves a development server (`nodemon`) for quick reload.

Schema:
---

|`UserType`  |                  |            |                 |
|------------|:----------------:|-----------:|----------------:|
| id (`str`) | firstName (`str`)| age (`int`)| company         |
| 01         | Neil James       | 20         | 01              |
| 02         | Mary Grace       | 21         | 02              |
| 03         | Racquel          | 21         | 02              |

| `CompanyType` |                  |                     |                 |
|---------------|:----------------:|--------------------:|----------------:|
| id (`str`)    | name (`str`)     | description (`int`) | users           |
| 01            | Google           | Google Company      |                 |
| 02            | Microsoft        | Microsoft Company   |                 |

GraphQL Query/ies:
---

```javascript
{
  user(id: "01"){
    id, firstName, age
  }
}

//returns

{
  "data": {
    "id": "01",
    "firstName": "Neil James",
    "age": 20
  }
}
```
Query Fragments:

```javascript
{
  microsoft: company(id: "2"){
    ...companyDetails
  }
  google: company(id: "1"){
    ...companyDetails
  }

  fragment companyDetails on Company{
    id, name, description, users{
      name
    }
  }
}

//returns

{
  "data":{
    "microsoft":{
      "id": "2",
      "name": "Microsoft",
      "description": "Microsoft Company",
      "users": [
        { "name": "Mary Grace" },
        { "name": "Racquel" }
      ]
    },
    "google": {...}
  }
}
```
Mutation:

```javascript
// addUser, editUser, deleteUser
mutation{
  addUser(firstName: "Sample User", age: 22){
    id, firstName, age
  }
  editUser(id: "2", firstName: "Edited User", age: 50){
    id, firstName, age
  }
  deleteUser(id: "1")
}

returns
{
  "data"{
    "addUser": {
      "id":"3",
      "firstName":"Sample User",
      "age":22
    },
    "editUser": {
      "id":"2",
      "firstName":"Edited User",
      "age":50
    },
    "deleteUser": {
      "id": null
    }
  }
}
```


Contributor:
---
- Neil James Monzales
