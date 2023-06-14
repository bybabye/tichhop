import mysql from 'mysql'
import util from 'util'

const conn = mysql.createConnection({
  host: '34.30.146.8',
  user: 'mysqldata',
  password: '123456789',
  database: 'payroll',
});

const query = util.promisify(conn.query).bind(conn);


export const executeQueryMySQL = async (q) => {
  try {
    console.log('connect to MySQL');
    const data = await query(q);
    // Tiếp tục với các yêu cầu kết nối khác...
    return data;
  } catch (error) {
 
    console.error('Lỗi truy vấn:', error);
  } 
};