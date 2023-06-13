import { executeQuery } from "../database/sqlserver.js";

export class JobHistory {
  addJobHistory = async (body, result) => {
    // add job phải sửa lại start date và end date
    try {
      const query = `INSERT INTO dbo.Job_History(Employee_ID,
                Department,Department_Code,Division,Start_Date,End_Date
                ,Job_Title,Job_Category,Location,Salary_Type,Pay_Period,Hours_per_Week)
                VALUES(${body.employeeID},N'${body.department}',${body.departmentCode},N'${body.division}','${body.hireDate}','${body.TerminationDate}'
                ,N'${body.jobTitle}'
                ,N'${body.jobCategory}',N'${body.location}'
                ,${body.salaryType},'${body.payPeriod}',${body.hoursPerWeek})`;
      await executeQuery(query);
      return result(null, "success");
    } catch (error) {
      return result(error, null);
    }
  };
}
