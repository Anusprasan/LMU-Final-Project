using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMU_FinalProject.Data
{
    public class SqlAccess
    {
        public bool Insertdata(string SqlQuery)
        {
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(SqlQuery, conn);
                int rowCount = cmd.ExecuteNonQuery();
                conn.Close();

                if (rowCount > 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }

            }
        }
    }
}
