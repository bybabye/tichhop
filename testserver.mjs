import { executeQuery } from "./database/sqlserver.js";

console.log(await executeQuery('select * from Personal'));


const q = `INSERT INTO dbo.Personal (Employee_ID,First_Name
  ,Last_Name,Middle_Initial,Address1,Address2,City,State,Zip,Email,Phone_Number,Social_Security_Number,
  Drivers_License,Marital_Status,Gender,Shareholder_Status,Benefit_Plans,Ethnicity) 
  VALUES('001',N'HUY',N'BUI',N'LE',N'87 Ông Ích Khiêm',N'116 Ông Ích Khiêm',N'TP.ĐÀ NẴNG',N'Việt Nam','50000'
  ,N'Luxi291000@gmail.com',N'0867409668',N'',N'A1',N'Độc Thân',1,1,1,N'Kinh')`;