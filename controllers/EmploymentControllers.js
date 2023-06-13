import axios from "axios";
import { Employment } from "../models/EmploymentModel.js";
import { Personal } from "../models/PersonalModel.js";
import { JobHistory } from "../models/JobHistoryModel.js";
import { JobHistorys, generateRandomNumber } from "./JobHistoryController.js";
import { PayRates } from "../models/PayRatesModel.js";
import { Employee } from "../models/EmployeeModel.js";

var model = new Employment();
// var personal = new Personal();
// var jobHistory = new JobHistory();
// var payRates = new PayRates();
// var employee = new Employee();
export const add = async (req, res) => {
  await model.addEmployment(req.body, (err, data) => {
    if (err) {
      res.status(404).json({ messages: "BAD REQUEST" });
    } else {
      res.send({ data: data });
    }
  });
};

export const autoData = async (req, res) => {
  // axios
  //   .get("https://dummyjson.com/users")
  //   .then(async (response) => {
  //     // Xử lý dữ liệu nhận được từ API
  //     const users = await response.data.users;
  //     let n = 17; // user thứ n 
  //     let j = 1; // job title thứ
  //     let benifit = 12; // benifit thứ 11 12 13
  //     let vac = 12;
  //     const ame = ['African Americans',"White America"]
  //     const body = {
  //       uid: users[n].id,
  //       firstName: users[n].firstName,
  //       lastName: users[n].lastName,
  //       middleName: users[n].maidenName,
  //       address: users[n].address.address,
  //       city: users[n].address.city,
  //       state: users[n].address.state,
  //       zip: users[n].address.postalCode,
  //       email: users[n].email,
  //       phoneNumber: users[n].phone,
  //       driversLicense: "A1",
  //       maritalStatus: "Single",
  //       gender: users[n].gender === "male" ? 0 : 1,
  //       shareholderStatus: 0,
  //       BenefitPlans: benifit,
  //       Ethnicity: 'African Americans',
  //       ssn: users[n].company.ssn,
  //     };
  //     const emp = {
  //       id: users[n].id,
  //       status: "Full-Time",
  //       hireDate: "2021-06-13",
  //       code: `WC00${users[n].id}`,
  //       TerminationDate: "2024-06-13",
  //     };
  //     const job = {
  //       employeeID : users[n].id,
  //       department : JobHistorys.fullTime.humanResources.department,
  //       departmentCode : JobHistorys.fullTime.humanResources.departmentCode,
  //       division : JobHistorys.fullTime.humanResources.division,
  //       hireDate: "2021-06-13",
  //       TerminationDate: "2024-06-13",
  //       jobTitle : JobHistorys.fullTime.humanResources.jobTitle[j].name,
  //       jobCategory : JobHistorys.fullTime.humanResources.jobCategory,
  //       location : users[n].address.city,
  //       salaryType : JobHistorys.fullTime.humanResources.jobTitle[j].salaryType,
  //       payPeriod : JobHistorys.fullTime.humanResources.payPeriod,
  //       hoursPerWeek : JobHistorys.fullTime.humanResources.hoursPerWeek
  //     }
  //     const pay = {
  //       id :users[n].id,
  //       payRateName : JobHistorys.fullTime.humanResources.jobTitle[j].name,
  //       value :( JobHistorys.fullTime.humanResources.jobTitle[j].salaryType / JobHistorys.fullTime.humanResources.hoursPerWeek),
  //       payAmount : JobHistorys.fullTime.humanResources.jobTitle[j].salaryType
  //     }
  //     const employy = {
  //       id : users[n].id,
  //       empNumber : users[n].id,
  //       lastName :users[n].lastName,
  //       firstName : users[n].firstName,
  //       ssn : 0,
  //       payRateName : JobHistorys.fullTime.accountant.jobTitle[j].name,
  //       vacation : vac

  //     }
  //     // await personal.addPersonal(body, (err, data) => {
  //     //   if (err) {
  //     //     console.log(err);
  //     //   } else {
  //     //     console.log(data);
  //     //   }
  //     // });
  //     // await model.addEmployment(emp, (err, data) => {
  //     //   if (err) {
  //     //     console.log(err);
  //     //   } else {
  //     //     console.log(data);
  //     //   }
  //     // });
  //     // await jobHistory.addJobHistory(job, (err, data) => {
  //     //   if (err) {
  //     //     console.log(err);
  //     //   } else {
  //     //     console.log(data);
  //     //   }
  //     // });
  //     // await payRates.addPayrate(pay,(err, data) => {
  //     //   if (err) {
  //     //     console.log(err);
  //     //   } else {
  //     //     console.log(data);
  //     //   }
  //     // })
  //     await employee.addEmployee(employy,(err, data) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         console.log(data);
  //       }
  //     })
  //     res.send("success");
  //   })
  //   .catch((error) => {
  //     // Xử lý lỗi nếu có
  //     console.error(error);
  //   });
};
