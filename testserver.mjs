
import mysql from 'mysql'
import util from 'util'

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'si pay roll db',
  port : '3306'
});

const query = util.promisify(conn.query).bind(conn);


export const executeQueryMySQL = async (q) => {
  try {
    const data = await query(q);
    console.log(data);
    // Tiếp tục với các yêu cầu kết nối khác...
  } catch (error) {
    console.error('Lỗi truy vấn:', error);
  } finally {
    conn.end();
  }
};


await executeQueryMySQL('SELECT * FROM employee');