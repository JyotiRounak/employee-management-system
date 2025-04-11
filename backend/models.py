from sqlalchemy.types import Enum as SqlEnum
from database import db
ROLES = ("Admin", "Manager", "Employee", "Viewer", "IT Support")
DEPARTMENT = ("HR", "Engineering", "Finance", "Sales")
DESIGNATION	= ("Software Developer", "HR Manager", "Accountant", "Sales Executive")
class Employee(db.Model):
    id= db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    role = db.Column(SqlEnum(*ROLES, name="role_enum"))
    designation = db.Column(SqlEnum(*DESIGNATION, name="designation_enum"))
    department = db.Column(SqlEnum(*DEPARTMENT, name="depart_enum"))
    phone = db.Column(db.String(20))
    address = db.Column(db.Text)
    join_date = db.Column(db.Date)

    # def __repr__(self):
    #     return f"<Employee {self.name} - {self.email}>"


