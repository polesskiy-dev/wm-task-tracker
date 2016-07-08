define({ "api": [
  {
    "type": "post",
    "url": "/sign-in/",
    "title": "Log in to system.",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "login",
            "description": "<p>user's login</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>users's password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>jwt auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInJvbGUiOiJ1c2VyIiwibG9naW4iOiJ1c2VyIiwiZW1haWwiOiJ1c2VyQHVzZXIuY29tIiwibmFtZSI6InRlc3QgdXNlciB1c2Vyb3ZpY2giLCJjb250YWN0X251bWJlciI6IjA5OSA5OTkgOTk5OSIsInBhc3N3b3JkIjoiJDJhJDEwJGtUR2pGZXF3ODh5ZTdWbVJXdno0RmV6bW9raXdkWFZOYUNGcmp5blpxMHJ6NHhqbXluSXMyIiwiX2lkIjoiNTc3Zjk1YTQ1ODg4YmE2ODQ3MmJmYWRiIn0._wRkAlJdX-wAfxtD-a9douRkYSm1aZ3d_6xT_ycZoxY\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "NoSuchUser",
            "description": ""
          },
          {
            "group": "400",
            "optional": false,
            "field": "NoLoginOrPassword",
            "description": ""
          }
        ],
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "WrongPassword",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Auth",
    "name": "PostSignIn"
  },
  {
    "type": "post",
    "url": "/sign-up/",
    "title": "Register in system.",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>jwt auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\"token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInJvbGUiOiJ1c2VyIiwibG9naW4iOiJ1c2VyIiwiZW1haWwiOiJ1c2VyQHVzZXIuY29tIiwibmFtZSI6InRlc3QgdXNlciB1c2Vyb3ZpY2giLCJjb250YWN0X251bWJlciI6IjA5OSA5OTkgOTk5OSIsInBhc3N3b3JkIjoiJDJhJDEwJGtUR2pGZXF3ODh5ZTdWbVJXdno0RmV6bW9raXdkWFZOYUNGcmp5blpxMHJ6NHhqbXluSXMyIiwiX2lkIjoiNTc3Zjk1YTQ1ODg4YmE2ODQ3MmJmYWRiIn0._wRkAlJdX-wAfxtD-a9douRkYSm1aZ3d_6xT_ycZoxY\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>invalid fields</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "optional": false,
            "field": "ConflictInDB",
            "description": "<p>user with one or more unique fields already exists</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\"email\":{\"message\":\"Invalid email!\",\"name\":\"ValidatorError\",\"properties\":{\"regexp\":{},\"type\":\"regexp\",\"message\":\"Invalid email!\",\"path\":\"email\",\"value\":\"admin@a.ruuuuuuuuuuuuuuu\"},\"kind\":\"regexp\",\"path\":\"email\",\"value\":\"admin@a.ruuuuuuuuuuuuuuu\"}}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\"password\":{\"message\":\"No password!\",\"name\":\"ValidatorError\",\"properties\":{\"type\":\"required\",\"message\":\"No password!\",\"path\":\"password\"},\"kind\":\"required\",\"path\":\"password\"},\"contact_number\":{\"message\":\"No contact number!\",\"name\":\"ValidatorError\",\"properties\":{\"type\":\"required\",\"message\":\"No contact number!\",\"path\":\"contact_number\"},\"kind\":\"required\",\"path\":\"contact_number\"},\"name\":{\"message\":\"No full name!\",\"name\":\"ValidatorError\",\"properties\":{\"type\":\"required\",\"message\":\"No full name!\",\"path\":\"name\"},\"kind\":\"required\",\"path\":\"name\"},\"email\":{\"message\":\"No email!\",\"name\":\"ValidatorError\",\"properties\":{\"type\":\"required\",\"message\":\"No email!\",\"path\":\"email\"},\"kind\":\"required\",\"path\":\"email\"}}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "Auth",
    "name": "PostSignUp"
  },
  {
    "type": "delete",
    "url": "/api/tasks/:task_id",
    "title": "Delete task.",
    "group": "TaskTickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "task_id",
            "description": "<p>task's _id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>jwt auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInJvbGUiOiJ1c2VyIiwibG9naW4iOiJ1c2VyIiwiZW1haWwiOiJ1c2VyQHVzZXIuY29tIiwibmFtZSI6InRlc3QgdXNlciB1c2Vyb3ZpY2giLCJjb250YWN0X251bWJlciI6IjA5OSA5OTkgOTk5OSIsInBhc3N3b3JkIjoiJDJhJDEwJGtUR2pGZXF3ODh5ZTdWbVJXdno0RmV6bW9raXdkWFZOYUNGcmp5blpxMHJ6NHhqbXluSXMyIiwiX2lkIjoiNTc3Zjk1YTQ1ODg4YmE2ODQ3MmJmYWRiIn0._wRkAlJdX-wAfxtD-a9douRkYSm1aZ3d_6xT_ycZoxY\"\n}",
          "type": "String"
        }
      ]
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>invalid auth token</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "TaskTickets",
    "name": "DeleteApiTasksTask_id"
  },
  {
    "type": "get",
    "url": "/api/tasks/:status",
    "title": "Get all tasks from DB.",
    "group": "TaskTickets",
    "description": "<p>Get all tickets from DB with appropriate status or all existing tasks.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "http://localhost:3000/api/tasks/",
        "type": "browser"
      },
      {
        "title": "Example:",
        "content": "http://localhost:3000/api/tasks/free",
        "type": "browser"
      },
      {
        "title": "Example:",
        "content": "http://localhost:3000/api/tasks/finish-request",
        "type": "browser"
      },
      {
        "title": "Example:",
        "content": "http://localhost:3000/api/tasks/finished",
        "type": "browser"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>jwt auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInJvbGUiOiJ1c2VyIiwibG9naW4iOiJ1c2VyIiwiZW1haWwiOiJ1c2VyQHVzZXIuY29tIiwibmFtZSI6InRlc3QgdXNlciB1c2Vyb3ZpY2giLCJjb250YWN0X251bWJlciI6IjA5OSA5OTkgOTk5OSIsInBhc3N3b3JkIjoiJDJhJDEwJGtUR2pGZXF3ODh5ZTdWbVJXdno0RmV6bW9raXdkWFZOYUNGcmp5blpxMHJ6NHhqbXluSXMyIiwiX2lkIjoiNTc3Zjk1YTQ1ODg4YmE2ODQ3MmJmYWRiIn0._wRkAlJdX-wAfxtD-a9douRkYSm1aZ3d_6xT_ycZoxY\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "taskTickets",
            "description": "<p>array of Task tickets</p>"
          }
        ],
        "204": [
          {
            "group": "204",
            "optional": false,
            "field": "NoContent",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>invalid auth token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "TaskTickets",
    "name": "GetApiTasksStatus"
  },
  {
    "type": "get",
    "url": "/api/tasks/:task_id",
    "title": "Fetch single task ticket by _id.",
    "group": "TaskTickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "task_id",
            "description": "<p>task's _id</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>jwt auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInJvbGUiOiJ1c2VyIiwibG9naW4iOiJ1c2VyIiwiZW1haWwiOiJ1c2VyQHVzZXIuY29tIiwibmFtZSI6InRlc3QgdXNlciB1c2Vyb3ZpY2giLCJjb250YWN0X251bWJlciI6IjA5OSA5OTkgOTk5OSIsInBhc3N3b3JkIjoiJDJhJDEwJGtUR2pGZXF3ODh5ZTdWbVJXdno0RmV6bW9raXdkWFZOYUNGcmp5blpxMHJ6NHhqbXluSXMyIiwiX2lkIjoiNTc3Zjk1YTQ1ODg4YmE2ODQ3MmJmYWRiIn0._wRkAlJdX-wAfxtD-a9douRkYSm1aZ3d_6xT_ycZoxY\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "taskTicket",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>invalid auth token</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "TaskTickets",
    "name": "GetApiTasksTask_id"
  },
  {
    "type": "get",
    "url": "/api/users/:user_login/tickets/:status",
    "title": "Get all tasks assigned to user.",
    "group": "TaskTickets",
    "description": "<p>Get all tickets assigned to user from DB with appropriate status or all assigned to user tasks.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "http://localhost:3000/api/users/test-user/tickets/",
        "type": "browser"
      },
      {
        "title": "Example:",
        "content": "http://localhost:3000/api/users/test-user/tickets/finished",
        "type": "browser"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_login",
            "description": "<p>user's login</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>ticket_status</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>jwt auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInJvbGUiOiJ1c2VyIiwibG9naW4iOiJ1c2VyIiwiZW1haWwiOiJ1c2VyQHVzZXIuY29tIiwibmFtZSI6InRlc3QgdXNlciB1c2Vyb3ZpY2giLCJjb250YWN0X251bWJlciI6IjA5OSA5OTkgOTk5OSIsInBhc3N3b3JkIjoiJDJhJDEwJGtUR2pGZXF3ODh5ZTdWbVJXdno0RmV6bW9raXdkWFZOYUNGcmp5blpxMHJ6NHhqbXluSXMyIiwiX2lkIjoiNTc3Zjk1YTQ1ODg4YmE2ODQ3MmJmYWRiIn0._wRkAlJdX-wAfxtD-a9douRkYSm1aZ3d_6xT_ycZoxY\"\n}",
          "type": "String"
        }
      ]
    },
    "permission": [
      {
        "name": "this user of admin"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "tickets_array",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>invalid auth token</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "TaskTickets",
    "name": "GetApiUsersUser_loginTicketsStatus"
  },
  {
    "type": "patch",
    "url": "/api/tasks/:task_id/task_text",
    "title": "",
    "group": "TaskTickets",
    "description": "<p>JavaScript Object Notation (JSON) Patch  RFC 6902 compatible. <a href=\"http://jsonpatch.com/\"></a></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "task_id",
            "description": "<p>task's _id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "changesDescription",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"op\": \"replace\", \"path\": \"/task_text\", \"value\": \"new task text\"\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n\"op\": \"replace\", \"path\": \"/task_status\", \"value\": \"finish-request\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>jwt auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInJvbGUiOiJ1c2VyIiwibG9naW4iOiJ1c2VyIiwiZW1haWwiOiJ1c2VyQHVzZXIuY29tIiwibmFtZSI6InRlc3QgdXNlciB1c2Vyb3ZpY2giLCJjb250YWN0X251bWJlciI6IjA5OSA5OTkgOTk5OSIsInBhc3N3b3JkIjoiJDJhJDEwJGtUR2pGZXF3ODh5ZTdWbVJXdno0RmV6bW9raXdkWFZOYUNGcmp5blpxMHJ6NHhqbXluSXMyIiwiX2lkIjoiNTc3Zjk1YTQ1ODg4YmE2ODQ3MmJmYWRiIn0._wRkAlJdX-wAfxtD-a9douRkYSm1aZ3d_6xT_ycZoxY\"\n}",
          "type": "String"
        }
      ]
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>invalid auth token</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "TaskTickets",
    "name": "PatchApiTasksTask_idTask_text"
  },
  {
    "type": "post",
    "url": "/api/tasks/",
    "title": "Create new task.",
    "group": "TaskTickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "taskTicket",
            "description": ""
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "taskTicket",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>invalid fields</p>"
          }
        ],
        "409": [
          {
            "group": "409",
            "optional": false,
            "field": "ConflictInDB",
            "description": "<p>task ticket with one or more unique fields already exists</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BadRequest\n{}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "TaskTickets",
    "name": "PostApiTasks"
  },
  {
    "type": "put",
    "url": "/api/tasks/:task_id",
    "title": "Replace task by new one.",
    "group": "TaskTickets",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "task_id",
            "description": "<p>task's _id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "task",
            "description": "<p>new task</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>jwt auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInJvbGUiOiJ1c2VyIiwibG9naW4iOiJ1c2VyIiwiZW1haWwiOiJ1c2VyQHVzZXIuY29tIiwibmFtZSI6InRlc3QgdXNlciB1c2Vyb3ZpY2giLCJjb250YWN0X251bWJlciI6IjA5OSA5OTkgOTk5OSIsInBhc3N3b3JkIjoiJDJhJDEwJGtUR2pGZXF3ODh5ZTdWbVJXdno0RmV6bW9raXdkWFZOYUNGcmp5blpxMHJ6NHhqbXluSXMyIiwiX2lkIjoiNTc3Zjk1YTQ1ODg4YmE2ODQ3MmJmYWRiIn0._wRkAlJdX-wAfxtD-a9douRkYSm1aZ3d_6xT_ycZoxY\"\n  \"content-type\": \"application/json\"\n}",
          "type": "String"
        }
      ]
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "new",
            "description": "<p>task</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": ""
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>invalid auth token</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "TaskTickets",
    "name": "PutApiTasksTask_id"
  },
  {
    "type": "delete",
    "url": "/api/users/:user_login",
    "title": "Delete user.",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_login",
            "description": "<p>user's login</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>jwt auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInJvbGUiOiJ1c2VyIiwibG9naW4iOiJ1c2VyIiwiZW1haWwiOiJ1c2VyQHVzZXIuY29tIiwibmFtZSI6InRlc3QgdXNlciB1c2Vyb3ZpY2giLCJjb250YWN0X251bWJlciI6IjA5OSA5OTkgOTk5OSIsInBhc3N3b3JkIjoiJDJhJDEwJGtUR2pGZXF3ODh5ZTdWbVJXdno0RmV6bW9raXdkWFZOYUNGcmp5blpxMHJ6NHhqbXluSXMyIiwiX2lkIjoiNTc3Zjk1YTQ1ODg4YmE2ODQ3MmJmYWRiIn0._wRkAlJdX-wAfxtD-a9douRkYSm1aZ3d_6xT_ycZoxY\"\n}",
          "type": "String"
        }
      ]
    },
    "permission": [
      {
        "name": "this user of admin"
      }
    ],
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>invalid auth token</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "User",
    "name": "DeleteApiUsersUser_login"
  },
  {
    "type": "get",
    "url": "/api/users/",
    "title": "Get all users from DB.",
    "group": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>jwt auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInJvbGUiOiJ1c2VyIiwibG9naW4iOiJ1c2VyIiwiZW1haWwiOiJ1c2VyQHVzZXIuY29tIiwibmFtZSI6InRlc3QgdXNlciB1c2Vyb3ZpY2giLCJjb250YWN0X251bWJlciI6IjA5OSA5OTkgOTk5OSIsInBhc3N3b3JkIjoiJDJhJDEwJGtUR2pGZXF3ODh5ZTdWbVJXdno0RmV6bW9raXdkWFZOYUNGcmp5blpxMHJ6NHhqbXluSXMyIiwiX2lkIjoiNTc3Zjk1YTQ1ODg4YmE2ODQ3MmJmYWRiIn0._wRkAlJdX-wAfxtD-a9douRkYSm1aZ3d_6xT_ycZoxY\"\n}",
          "type": "String"
        }
      ]
    },
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "users",
            "description": "<p>array of users</p>"
          }
        ],
        "204": [
          {
            "group": "204",
            "optional": false,
            "field": "NoContent",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>invalid auth token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "User",
    "name": "GetApiUsers"
  },
  {
    "type": "get",
    "url": "/api/users/:user_login",
    "title": "Fetch single user by login.",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_login",
            "description": "<p>user's login</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>jwt auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInJvbGUiOiJ1c2VyIiwibG9naW4iOiJ1c2VyIiwiZW1haWwiOiJ1c2VyQHVzZXIuY29tIiwibmFtZSI6InRlc3QgdXNlciB1c2Vyb3ZpY2giLCJjb250YWN0X251bWJlciI6IjA5OSA5OTkgOTk5OSIsInBhc3N3b3JkIjoiJDJhJDEwJGtUR2pGZXF3ODh5ZTdWbVJXdno0RmV6bW9raXdkWFZOYUNGcmp5blpxMHJ6NHhqbXluSXMyIiwiX2lkIjoiNTc3Zjk1YTQ1ODg4YmE2ODQ3MmJmYWRiIn0._wRkAlJdX-wAfxtD-a9douRkYSm1aZ3d_6xT_ycZoxY\"\n}",
          "type": "String"
        }
      ]
    },
    "permission": [
      {
        "name": "this user of admin"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "user",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>invalid auth token</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "User",
    "name": "GetApiUsersUser_login"
  },
  {
    "type": "put",
    "url": "/api/users/:user_login",
    "title": "Replace user by new one.",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_login",
            "description": "<p>user's login</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>new user</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>jwt auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfX3YiOjAsInJvbGUiOiJ1c2VyIiwibG9naW4iOiJ1c2VyIiwiZW1haWwiOiJ1c2VyQHVzZXIuY29tIiwibmFtZSI6InRlc3QgdXNlciB1c2Vyb3ZpY2giLCJjb250YWN0X251bWJlciI6IjA5OSA5OTkgOTk5OSIsInBhc3N3b3JkIjoiJDJhJDEwJGtUR2pGZXF3ODh5ZTdWbVJXdno0RmV6bW9raXdkWFZOYUNGcmp5blpxMHJ6NHhqbXluSXMyIiwiX2lkIjoiNTc3Zjk1YTQ1ODg4YmE2ODQ3MmJmYWRiIn0._wRkAlJdX-wAfxtD-a9douRkYSm1aZ3d_6xT_ycZoxY\"\n  \"content-type\": \"application/json\"\n}",
          "type": "String"
        }
      ]
    },
    "permission": [
      {
        "name": "this user of admin"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "new",
            "description": "<p>user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "BadRequest",
            "description": ""
          }
        ],
        "403": [
          {
            "group": "403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>invalid auth token</p>"
          }
        ],
        "404": [
          {
            "group": "404",
            "optional": false,
            "field": "NotFound",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app.js",
    "groupTitle": "User",
    "name": "PutApiUsersUser_login"
  }
] });
