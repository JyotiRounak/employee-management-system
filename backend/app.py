from flask import request, jsonify
from flask_cors import CORS
from database import db, init_app
from models import Employee
from schemas import EmployeeSchema
from crud import add_employee, get_employee, delete_employee, get_single_employee

app = init_app()
CORS(app)

@app.route("/employee", methods=['POST'])
def create_employee():
   data = request.get_json()
   print("data", data)
   schema = EmployeeSchema()
   employee = add_employee(data)
   return jsonify(schema.dump(employee)), 201

@app.route("/employee", methods=['GET'])
def getter_employee():
   employee = get_employee()
   print("get employee", employee)
   schema = EmployeeSchema(many=True)
   return jsonify(schema.dump(employee)), 200

@app.route("/employee/<int:empId>", methods=['DELETE'])
def delete_employee_route(empId):
   del_employee = delete_employee(empId)
   return jsonify({"message": "Employee Deletetd Successfully"}), 200

@app.route('/')
def home():
  return "Hi Flask Project"

if __name__ == "__main__":
  with app.app_context():
     db.create_all()
  app.run(debug=True)