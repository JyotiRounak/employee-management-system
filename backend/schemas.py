from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields
from models import Employee

class EmployeeSchema(SQLAlchemyAutoSchema):
    join_date = fields.Date(format="%d-%m-%Y")
    class Meta:
        model = Employee
        load_instance = True
