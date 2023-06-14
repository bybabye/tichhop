import sql from 'mssql';


const config = {
  server: '34.66.92.36', // e.g. '127.0.0.1'

  user: 'sqlserver', // e.g. 'my-db-user'
  password: '123456789', // e.g. 'my-db-password'
  database: 'HR', // e.g. 'my-database'
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
}

export const executeQuery = async query => {
  try {
    console.log('SQL SERVER Connected......');
    await sql.connect(config);
    const result = await sql.query(query);
    return result.recordset;
  } catch (error) {
    console.log('SQL SERVER ERROR' , error);

  }finally{
    sql.close();
    console.log('SQL SERVER CLOSE' );
  }
}
