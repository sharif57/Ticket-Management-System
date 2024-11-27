

# # # API Endpoints

# Authentication APIs

POST register: http://localhost:5000/api/users/
POST auth/login: http://localhost:5000/api/users/login
POST auth/logout: http://localhost:5000/api/users/logout

# Bus Api end points 

post Bus (isAdmin): http://localhost:5000/api/bus/
put Bus (isAdmin): http://localhost:5000/api/bus/:id
delete Bus (isAdmin): http://localhost:5000/api/bus/:id
get Bus (isUser): http://localhost:5000/api/bus


# Ticket Api end points

post Ticket (isAdmin): http://localhost:5000/api/ticket/    
put Ticket (isAdmin) : http://localhost:5000/api/ticket/:id
delete Ticket (isAdmin): http://localhost:5000/api/ticket/:id
get Ticket (isUser): http://localhost:5000/api/ticket


# purchase api end points

post Purchase (isUser): http://localhost:5000/api/purchase/    



## Folder Structure

src/  
│  
├── app/  
│   ├── module/  
│   │   ├── user/  
│   │   │   ├── user.controller.js  
│   │   │   ├── user.service.js  
│   │   │   └── user.route.js  
│   │   ├── Bus/  
│   │   │   ├── bus.controller.js  
│   │   │   ├── bus.service.js  
│   │   │   └── bus.route.js  
│   │   ├── Ticket/  
│   │   │   ├── ticket.controller.js  
│   │   │   ├── ticket.service.js  
│   │   │   └── ticket.route.js   
│   │         
│   ├── middleware/  
│   │   ├── auth.js  
│   │  
│   └── error/  
│       └── AppError.js  
├── .env  
├── package.json  
└── app.js  
└── server.js  
