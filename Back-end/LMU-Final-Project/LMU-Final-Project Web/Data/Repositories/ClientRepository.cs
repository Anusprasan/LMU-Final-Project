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


        public bool AddClients(Client client)
        {
            string SqlString = $" Insert into Client (Journey_id,Name,Address,Phone_no,Nic_no) values ('{client.Journey_id}','{client.Name}','{client.Address}','{client.Phone_no}','{client.Nic_no}')";
            return sqlAccess.Insertdata(SqlString);
        }

        public bool CancelJourney(int journeyId)
        {
            string sqlString = $" Delete from Journey where Journey_id='{journeyId}'";
            return sqlAccess.Insertdata(sqlString);
        }
    }

    
}
