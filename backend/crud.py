from database import db
from models import Employee
from schemas import EmployeeSchema
from datetime import datetime
from marshmallow import ValidationError

def add_employee(data):
    schema = EmployeeSchema(session=db.session)
    # # Convert join_date from string to date object
    # if "join_date" in data and isinstance(data["join_date"], str):
    #     try:
    #         # Assuming frontend sends date in DD/MM/YYYY format
    #         data["join_date"] = datetime.strptime(data["join_date"], "%d-%m-%Y").date()
    #     except ValueError as ve:
    #         return {"errors": f"Invalid date format: {str(ve)}"}, 400

    try:
        employee = schema.load(data)
        print("✅ Deserialized employee:", employee)

        db.session.add(employee)
        print("✅ Added to session")

        db.session.commit()
        print("✅ Committed to DB")

        print("✅ Employee saved:", employee)
        db.session.commit()
        return employee 
    except ValidationError as err:
        print("❌ Validation Error:", err.messages)
        return {"errors": err.messages}, 400
    
def get_employee():
    print("Get Employee", Employee.query.all())
    return Employee.query.all()

def get_single_employee(emp_id):
    return Employee.query.get_or_404(emp_id)

def delete_employee(emp_id):
    employee = Employee.query.get_or_404(emp_id)
    db.session.delete(employee)
    db.session.commit()
    return employee
