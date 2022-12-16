-- CREATE EXTENTION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    password VarChAR(255) NOT NULL
    
);