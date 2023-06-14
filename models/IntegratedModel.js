import { executeQueryMySQL } from "../database/mysql.js";
import { executeQuery } from "../database/sqlserver.js";

export class IntegratedModel {
  getInComeGender = async (body, result) => {
    try {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const queryMySQL = `SELECT E.\`Employee Number\` AS Employee_ID, P.\`Pay Amount\`, P.\`Tax Percentage\`,
            (P.\`Pay Amount\` - (P.\`Pay Amount\` * (P.\`Tax Percentage\`/100))) * 12 AS IncomeLastYear,
            (P.\`Pay Amount\` - (P.\`Pay Amount\` * (P.\`Tax Percentage\`/100))) * ${currentMonth} AS IncomeToDate
            FROM employee E
            INNER JOIN \`pay rates\` P ON P.\`idPay Rates\` = E.\`Pay Rates_idPay Rates\`;`;
      const data1 = await executeQueryMySQL(queryMySQL);
      const querySQLServer = `SELECT P.Employee_ID,P.First_Name,P.Last_Name,P.Gender ,J.Job_Title,J.Salary_Type,P.Shareholder_Status,P.Ethnicity,J.Hours_per_Week
      FROM dbo.Personal P
      INNER JOIN dbo.Job_History J ON J.Employee_ID = P.Employee_ID
      WHERE P.Gender = ${body.gender}
      `;
      //
      const data2 = await executeQuery(querySQLServer);

      const data = dataMerger(data1, data2);
      return result(null, data);
    } catch (error) {
      return result(error, null);
    }
  };
  getIncomeShareholder = async (result) => {
    try {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const queryMySQL = `SELECT E.\`Employee Number\` AS Employee_ID, P.\`Pay Amount\`, P.\`Tax Percentage\`,
            (P.\`Pay Amount\` - (P.\`Pay Amount\` * (P.\`Tax Percentage\`/100))) * 12 AS IncomeLastYear,
            (P.\`Pay Amount\` - (P.\`Pay Amount\` * (P.\`Tax Percentage\`/100))) * ${currentMonth} AS IncomeToDate
            FROM employee E
            INNER JOIN \`pay rates\` P ON P.\`idPay Rates\` = E.\`Pay Rates_idPay Rates\`;`;
      const data1 = await executeQueryMySQL(queryMySQL);
      const querySQLServer = `SELECT P.Employee_ID,P.First_Name,P.Last_Name,P.Gender ,J.Job_Title,J.Salary_Type,P.Shareholder_Status,P.Ethnicity,J.Hours_per_Week
      FROM dbo.Personal P
      INNER JOIN dbo.Job_History J ON J.Employee_ID = P.Employee_ID
      WHERE P.Shareholder_Status = 1
      `;
      //
      const data2 = await executeQuery(querySQLServer);

      const data = dataMerger(data1, data2);
      return result(null, data);
    } catch (error) {
      return result(error, null);
    }
  };
  getIncomeEthnicity =  async (body, result) => {
    
    try {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const queryMySQL = `SELECT E.\`Employee Number\` AS Employee_ID, P.\`Pay Amount\`, P.\`Tax Percentage\`,
            (P.\`Pay Amount\` - (P.\`Pay Amount\` * (P.\`Tax Percentage\`/100))) * 12 AS IncomeLastYear,
            (P.\`Pay Amount\` - (P.\`Pay Amount\` * (P.\`Tax Percentage\`/100))) * ${currentMonth} AS IncomeToDate
            FROM employee E
            INNER JOIN \`pay rates\` P ON P.\`idPay Rates\` = E.\`Pay Rates_idPay Rates\`;`;
      const data1 = await executeQueryMySQL(queryMySQL);
      const querySQLServer = `SELECT P.Employee_ID,P.First_Name,P.Last_Name,P.Gender ,J.Job_Title,J.Salary_Type,P.Shareholder_Status,P.Ethnicity,J.Hours_per_Week
      FROM dbo.Personal P
      INNER JOIN dbo.Job_History J ON J.Employee_ID = P.Employee_ID
      WHERE P.Ethnicity = '${body}'
      `;
      //
      const data2 = await executeQuery(querySQLServer);

      const data = dataMerger(data1, data2);
      return result(null, data);
    } catch (error) {
      return result(error, null);
    }
  };
  getIncomeEmpFullTime =  async ( result) => {
    
    try {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const queryMySQL = `SELECT E.\`Employee Number\` AS Employee_ID, P.\`Pay Amount\`, P.\`Tax Percentage\`,
            (P.\`Pay Amount\` - (P.\`Pay Amount\` * (P.\`Tax Percentage\`/100))) * 12 AS IncomeLastYear,
            (P.\`Pay Amount\` - (P.\`Pay Amount\` * (P.\`Tax Percentage\`/100))) * ${currentMonth} AS IncomeToDate
            FROM employee E
            INNER JOIN \`pay rates\` P ON P.\`idPay Rates\` = E.\`Pay Rates_idPay Rates\`;`;
      const data1 = await executeQueryMySQL(queryMySQL);
      const querySQLServer = `SELECT P.Employee_ID,P.First_Name,P.Last_Name,P.Gender ,J.Job_Title,J.Salary_Type,P.Shareholder_Status,P.Ethnicity,J.Hours_per_Week
      FROM dbo.Personal P
      INNER JOIN dbo.Job_History J ON J.Employee_ID = P.Employee_ID
      WHERE J.Hours_per_Week = 48
      `;
      // sua lai thanh 48h
      const data2 = await executeQuery(querySQLServer);

      const data = dataMerger(data1, data2);
      return result(null, data);
    } catch (error) {
      return result(error, null);
    }
  };
  getIncomeEmpPartTime =  async ( result) => {
    
    try {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const queryMySQL = `SELECT E.\`Employee Number\` AS Employee_ID, P.\`Pay Amount\`, P.\`Tax Percentage\`,
            (P.\`Pay Amount\` - (P.\`Pay Amount\` * (P.\`Tax Percentage\`/100))) * 12 AS IncomeLastYear,
            (P.\`Pay Amount\` - (P.\`Pay Amount\` * (P.\`Tax Percentage\`/100))) * ${currentMonth} AS IncomeToDate
            FROM employee E
            INNER JOIN \`pay rates\` P ON P.\`idPay Rates\` = E.\`Pay Rates_idPay Rates\`;`;
      const data1 = await executeQueryMySQL(queryMySQL);
      const querySQLServer = `SELECT P.Employee_ID,P.First_Name,P.Last_Name,P.Gender ,J.Job_Title,J.Salary_Type,P.Shareholder_Status,P.Ethnicity,J.Hours_per_Week
      FROM dbo.Personal P
      INNER JOIN dbo.Job_History J ON J.Employee_ID = P.Employee_ID
      WHERE J.Hours_per_Week = 24
      `;
      // sua lai thanh 24
      const data2 = await executeQuery(querySQLServer);

      const data = dataMerger(data1, data2);
      return result(null, data);
    } catch (error) {
      return result(error, null);
    }
  };
  getVacationShareholder =  async (result) => {
    try {
      const queryMySQL = `SELECT \`Employee Number\` AS Employee_ID ,\`Vacation Days\` FROM \`si pay roll db\`.employee;`;
      const data1 = await executeQueryMySQL(queryMySQL);
      const querySQLServer = `SELECT P.Employee_ID,
      P.First_Name,P.Last_Name,P.Gender ,P.Shareholder_Status
      FROM dbo.Personal P
      WHERE P.Shareholder_Status = 1
      `;
      const data2 = await executeQuery(querySQLServer);

      const data = dataMerger(data1, data2);
      return result(null, data);
    } catch (error) {
      return result(error, null);
    }
  }
  getVacationMale =  async (result) => {
    try {
      const queryMySQL = `SELECT \`Employee Number\` AS Employee_ID ,\`Vacation Days\` FROM \`si pay roll db\`.employee;`;
      const data1 = await executeQueryMySQL(queryMySQL);
      const querySQLServer = `SELECT P.Employee_ID,
      P.First_Name,P.Last_Name,P.Gender 
      FROM dbo.Personal P
      WHERE P.Gender = 0
      `;
      const data2 = await executeQuery(querySQLServer);

      const data = dataMerger(data1, data2);
      return result(null, data);
    } catch (error) {
      return result(error, null);
    }
  }
  getVacationFemale =  async (result) => {
    try {
      const queryMySQL = `SELECT \`Employee Number\` AS Employee_ID ,\`Vacation Days\` FROM \`si pay roll db\`.employee;`;
      const data1 = await executeQueryMySQL(queryMySQL);
      const querySQLServer = `SELECT P.Employee_ID,
      P.First_Name,P.Last_Name,P.Gender 
      FROM dbo.Personal P
      WHERE P.Gender = 1
      `;
      const data2 = await executeQuery(querySQLServer);

      const data = dataMerger(data1, data2);
      return result(null, data);
    } catch (error) {
      return result(error, null);
    }
  }
  getVacationForEthnicity =  async (body,result) => {
    try {
      const queryMySQL = `SELECT \`Employee Number\` AS Employee_ID ,\`Vacation Days\` FROM employee;`;
      const data1 = await executeQueryMySQL(queryMySQL);
      const querySQLServer = `SELECT P.Employee_ID,
      P.First_Name,P.Last_Name,P.Ethnicity
      FROM dbo.Personal P
      WHERE P.Ethnicity = '${body.ethnicity === 1 ? 'White America' : 'African Americans'}'
      `;
      const data2 = await executeQuery(querySQLServer);

      const data = dataMerger(data1, data2);
      return result(null, data);
    } catch (error) {
      return result(error, null);
    }
  }
  getVacationEmpFullTime =  async (result) => {
    try {
      const queryMySQL = `SELECT \`Employee Number\` AS Employee_ID ,\`Vacation Days\` FROM \`si pay roll db\`.employee;`;
      const data1 = await executeQueryMySQL(queryMySQL);
      const querySQLServer = `
      SELECT P.Employee_ID,P.First_Name,P.Last_Name, J.Hours_per_Week
      FROM dbo.Personal P
      INNER JOIN dbo.Job_History J ON J.Employee_ID = P.Employee_ID
      WHERE J.Hours_per_Week = 48
      
      `;
      const data2 = await executeQuery(querySQLServer);

      const data = dataMerger(data1, data2);
      return result(null, data);
    } catch (error) {
      return result(error, null);
    }
  }
  getVacationEmpPartTime =  async (result) => {
    try {
      const queryMySQL = `SELECT \`Employee Number\` AS Employee_ID ,\`Vacation Days\` FROM \`si pay roll db\`.employee;`;
      const data1 = await executeQueryMySQL(queryMySQL);
      const querySQLServer = `
      SELECT P.Employee_ID,P.First_Name,P.Last_Name, J.Hours_per_Week
      FROM dbo.Personal P
      INNER JOIN dbo.Job_History J ON J.Employee_ID = P.Employee_ID
      WHERE J.Hours_per_Week = 24
      
      `;
      const data2 = await executeQuery(querySQLServer);

      const data = dataMerger(data1, data2);
      return result(null, data);
    } catch (error) {
      return result(error, null);
    }
  }

}

const dataMerger = (data1, data2) => {
  const data = data2.map((obj1) => {
    const matchingObj = data1.find(
      (obj2) => obj2.Employee_ID === obj1.Employee_ID
    );
    return { ...obj1, ...matchingObj };
  });
  return data;
};
