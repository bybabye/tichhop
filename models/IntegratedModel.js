import { executeQueryMySQL } from "../database/mysql.js";
import { executeQuery } from "../database/sqlserver.js";

export class IntegratedModel {
  getInComeGender = async (body, result) => {
    try {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const queryMySQL = `SELECT E.\`Employee Number\` AS Employee_ID, E.\`Vacation Days\`, P.\`Pay Amount\`, P.\`Tax Percentage\`,
            (P.\`Pay Amount\` - (P.\`Pay Amount\` * (P.\`Tax Percentage\`/100))) * 12 AS IncomeLastYear,
            (P.\`Pay Amount\` - (P.\`Pay Amount\` * (P.\`Tax Percentage\`/100))) * ${currentMonth} AS IncomeToDate
            FROM employee E
            INNER JOIN \`pay rates\` P ON P.\`idPay Rates\` = E.\`Pay Rates_idPay Rates\`;`;
      const data1 = await executeQueryMySQL(queryMySQL);
      const querySQLServer = `SELECT P.Employee_ID,P.First_Name,P.Last_Name,P.Gender ,J.Job_Title,J.Salary_Type
      FROM dbo.Personal P
      INNER JOIN dbo.Job_History J ON J.Employee_ID = P.Employee_ID
      WHERE P.Gender = ${body.gender}
      `;
      const data2 = await executeQuery(querySQLServer);
      console.log(data2);
      const data = data2.map((obj1) => {
        const matchingObj = data1.find(
          (obj2) => obj2.Employee_ID === obj1.Employee_ID
        );
        return { ...obj1, ...matchingObj };
      });
      return result(null, data);
    } catch (error) {
      return result(error, null);
    }
  };
}
