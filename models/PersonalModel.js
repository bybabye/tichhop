import { executeQuery } from "../database/sqlserver.js";

export class Personal {
  /**
   *
   * result = {error,data}
   * executeQuery sẽ trả dữ liệu từ database về.
   * nếu có data sẽ set result = {error = null,data = data}
   * Nếu không có data or lỗi  thì sẽ result = {error = error,data = null}
   */
  getList = async (result) => {
    try {
      const query = `SELECT * FROM PERSONAL`;
      const data = await executeQuery(query);
      return result(null, data);
    } catch (error) {
      return result(error, null);
    }
  };

  addPersonal = async (body, result) => {
    try {
      const query = `INSERT INTO dbo.Personal (Employee_ID,First_Name
                ,Last_Name,Middle_Initial,Address1,Address2,City,State,Zip,Email,Phone_Number,Social_Security_Number,
                Drivers_License,Marital_Status,Gender,Shareholder_Status,Benefit_Plans,Ethnicity) 
                VALUES('${body.uid}',N'${body.firstName}',N'${body.lastName}',N'${body.middleName}',N'${body.address}',N'${body.address2}'
                ,N'${body.city}',N'${body.state}','${body.zip}'
                ,N'${body.email}',N'${body.phoneNumber}',N'${body.ssn}',
                N'${body.driversLicense}',N'${body.maritalStatus}',${body.gender},${body.shareholderStatus},${body.BenefitPlans},N'${body.Ethnicity}')`;
      await executeQuery(query);
      return result(null, "success");   
    } catch (error) {
      return result(error, null);
    }
  };
  
}
