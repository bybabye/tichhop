import { executeQueryMySQL } from "../database/mysql.js";

export class PayRates {
  addPayrate = async (body, result) => {
    try {
      const query = `INSERT INTO \`pay rates\` (\`idPay Rates\`
, \`Pay Rate Name\`,Value,\`Tax Percentage\`,\`Pay Type\`,\`Pay Amount\`,\`PT - Level C\`) 
VALUES(${body.id},'${body.payRateName}',${body.value},10,1,${body.payAmount},1)`;
      await executeQueryMySQL(query);
      return result(null, "success");
    } catch (error) {
      return result(error, null);
    }
  };
  
}
