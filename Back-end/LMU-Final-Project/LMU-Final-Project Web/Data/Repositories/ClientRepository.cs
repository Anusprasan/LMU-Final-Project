using LMU_Final_Project_Web.Models;

namespace LMU_Final_Project_Web.Data.Repositories
{
    public class ClientRepository
    {
        SqlAccess sqlAccess = new SqlAccess();

        public List<Client> GetClients()
        {
            string sqlString = "Select Client_id,Vehicle_id,Name,Address,Phone_no,Nic_no,Drivinglicence_photo,Client_photo,Created_by,Created_on,Modify_by,Modify_on from dbo.Client order by Client_id";
            return sqlAccess.LoadClientData(sqlString);
        }
    }

    
}
