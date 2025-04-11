import os

DATABASE_URL =  os.getenv("DATABASE_URL", "postgresql://postgres:root@localhost:5432/employees")