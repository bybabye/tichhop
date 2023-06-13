import { executeQuery } from "../database/sqlserver.js";

export class Employment {
 

  /**
   *
   * result = {error,data}
   * executeQuery sẽ trả dữ liệu từ database về.
   * nếu có data sẽ set result = {error = null,data = data}
   * Nếu không có data or lỗi  thì sẽ result = {error = error,data = null}
   */
  addEmployment = async (body, result) => {
    try {
      const query = `INSERT INTO dbo.Employment 
        (Employee_ID, Employment_Status, Hire_Date, Workers_Comp_Code,
             Termination_Date)
        VALUES ('${body.id}', '${body.status}', '${body.hireDate}', '${body.code}', '${body.TerminationDate}');`;
      await executeQuery(query);
      return result(null, "success");
    } catch (error) {
      return result(error, null);
    }
  };
  employmentForGender = async (result) => {
    try {
      const query = `SELECT `;
      const data  = await executeQuery(query);
      return result(null, data);
    } catch (error) {
      
    }
  }




}


