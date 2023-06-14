

export const getJobHistorys = (req,res) => {
    res.send(JobHistorys)
}


export const generateRandomNumber = () => {
    let randomSequence = '';
    for (let i = 0; i < 18; i++) {
      const randomDigit = Math.floor(Math.random() * 10);
      randomSequence += randomDigit.toString();
    }
    return randomSequence;
}
export const JobHistorys = {
    fullTime : {
      marketing : {
        jobCategory : 'Marketing',
        division : 'Marketing',
        department : 'Marketing Department',
        departmentCode : '001',
        payPeriod : 'Monthly',
        jobTitle : [
            {
                name : 'Marketing Manager',
                salaryType : 5000,
            },
            {
                name : 'Marketing Coordinator',
                salaryType : 3300,
            },
            {
                name : 'Digital Marketing Specialist',
                salaryType : 4000,
            }
        ],
        hoursPerWeek : 48
      },
      accountant : {
        jobCategory : 'Accountant',
        division : 'Accountant',
        department : 'Accountant Department',
        departmentCode : '002',
        payPeriod : 'Monthly',
        jobTitle : [
            {
                name : 'Staff Accountant',
                salaryType : 3750,
            },
            {
                name : 'Senior Accountant',
                salaryType : 5400,
            },
            {
                name : 'Certified Public Accountant',
                salaryType : 5840,
            }
        ],
        hoursPerWeek : 48
      },
      developer: {
        jobCategory : 'Technique',
        division : 'Information technology',
        department : 'Software Development Department',
        departmentCode : '003',
        payPeriod : 'Monthly',
        jobTitle : [
            {
                name : 'Web Developer',
                salaryType : 3750,
            },
            {
                name : 'Mobile App Developer',
                salaryType : 5000,
            },
            {
                name : 'Software Developer',
                salaryType : 5840,
            }
        ],
        hoursPerWeek : 48
      },
      humanResources : {
        jobCategory : 'Personnel',
        division : 'Personnel',
        department : 'Personnel Department',
        departmentCode : '004',
        payPeriod : 'Monthly',
        jobTitle : [
            {
                name : 'HR Specialist',
                salaryType : 3300,
            },
            {
                name : 'HR Manager',
                salaryType : 5000,
            },
            {
                name : 'HR Assistant',
                salaryType : 2500,
            }
        ],
        hoursPerWeek : 48
      },
      technique : {
        jobCategory : 'Technique',
        division : 'Technique',
        department : 'Technique Department',
        departmentCode : '005',
        
        payPeriod : 'Monthly',
        jobTitle : [
            {
                name : 'IT Technician',
                salaryType : 2500,
            },
            {
                name : 'Electronics Technician',
                salaryType : 2800,
            },
            {
                name : 'HVAC Technician',
                salaryType : 2500,
            }
        ],
        hoursPerWeek : 48
      }
    },
    partTime : {
      marketing : {
        jobCategory : 'Marketing',
        division : 'Marketing',
        department : 'Marketing Department',
        departmentCode : '001',
        salaryType : 12,
        payPeriod : 'Monthly',
        hoursPerWeek : 24
      },
      developer: {
        jobCategory : 'Technique',
        division : 'Information technology',
        department : 'Software Development Department',
        departmentCode : '003',
        salaryType : 14,
        payPeriod : 'Monthly',
        hoursPerWeek : 24
      },
      humanResources : {
        jobCategory : 'Personnel',
        division : 'Personnel',
        department : 'Personnel Department',
        departmentCode : '004',
        salaryType : 10,
        payPeriod : 'Monthly',
        hoursPerWeek : 24
      },
    }
}