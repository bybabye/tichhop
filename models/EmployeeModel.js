import { executeQueryMySQL } from "../database/mysql.js";


export class Employee {
  /**
   *
   * result = {error,data}
   * executeQuery sẽ trả dữ liệu từ database về.
   * nếu có data sẽ set result = {error = null,data = data}
   * Nếu không có data or lỗi  thì sẽ result = {error = error,data = null}
   */
  addEmployee = async (body, result) => {
    try {
      const query = `INSERT INTO Employee (idEmployee, \`Employee Number\`,\`Last Name\`,
      \`First Name\`,SSN,\`Pay Rate\`,\`Pay Rates_idPay Rates\`,\`Vacation Days\`
      ) VALUES ('${body.id}',${body.empNumber},
      N'${body.lastName}',N'${body.firstName}',${body.ssn},
      N'${body.payRateName}',${body.id},${body.vacation}
      )`;
      await executeQueryMySQL(query);
      return result(null, "success");   
    } catch (error) {
      return result(error, null);
    }
  };
}
