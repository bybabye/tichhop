import { executeQuery } from "../database/sqlserver.js";


export class Personal {
    /** */
    getList = async (result) => {
        
        try {
            
            const query = `SELECT * FROM PERSONAL`; 
            const data = await executeQuery(query);
            return result(null,data);
        } catch (error) {
            return result(error,null);
        }
    }
} 