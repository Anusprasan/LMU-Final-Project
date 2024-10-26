using LMU_Final_Project_Web.Models;
using System.Data;

namespace LMU_Final_Project_Web.Data.Repositories
{
    public class JourneyRepository
    {
        SqlAccess sqlAccess = new SqlAccess();

        public List<Journey> GetJourneys()
        {
            string SqlString = "select Journey_id,Vehicle_id,Started_date,End_date,Odometerreading_beforejourney,Odometerreading_afterreading,Journey_description,Vehiclestatus_beforejourney,Vehiclestatus_afterjourney," +
                "Vehiclephoto_beforejourney,Journeystarted_createdby,Journeystarted_createdon,Journeystarted_modifyby,Journeystarted_modifyon,Journeyend_createdby,Journeyend_createdon,journeyend_modifyby,journeyend_modifyon";
            return sqlAccess.LoadJourneyDetails(SqlString);

        }

        public List<int> GetVehicleId(int userId)
        {
            string sqlString = $"select Vehicle_id from [vehicle] where User_id='{userId}' and VehicleStatus='Available'";

            return sqlAccess.GetVehicleId(sqlString);
        }

        public bool AddJourney(Journey journey)
        {
            string SqlString = $"Insert into Journey (CompanyId,Vehicle_id,UserId,Started_date,Odometerreading_beforejourney,Journey_description,Vehiclestatus_beforejourney,JourneyStatus,CreatedBy,CreatedOn) values ('{journey.CompanyId}','{journey.Vehicle_id}','{journey.UserId}','{journey.Started_date}','{journey.Odometerreading_beforejourney}','{journey.Journey_description}','{journey.Vehiclestatus_beforejourney}','In Progress','{journey.UserId}',GETDATE())";

            return sqlAccess.Insertdata(SqlString);



        }

        public DataTable GetJourneyId()
        {
            string SqlString = "Select TOP 1 Journey_id , Vehicle_id from Journey order by Journey_id DESC ";

            return sqlAccess.GetDataFromTables(SqlString);
        }

        public DataTable GetJourneyDataTable()
        {
            string SqlString = "select Journey_id,Vehicle_id,Started_date,JourneyStatus";

            return sqlAccess.GetDataFromTables(SqlString);
        }

        public DataTable GetJourneyClients()
        {
            string SqlString = "select * from Journey join Client on Journey.Journey_id = Client.Journey_id";
            return sqlAccess.GetDataFromTables(SqlString);
        }

        public bool CheckDataForJourneyUpdate(int userId)
        {
            string SqlString = $"select 1 from Users where User_id = '{userId}' and UserType = 'Owner'";

            return sqlAccess.CheckData(SqlString);
        }

        public bool CheckJourneyId(int journeyId)
        {
            string SqlString = $"select 1 from journey where Journey_id='{journeyId}'";
            return sqlAccess.CheckData(SqlString);
        }

        public DataTable GetJourneyClientById(int journeyId)
        { 
            string SqlString = $"select * from Journey  join Client on Journey.Journey_id = Client.Journey_id where Journey.Journey_id = '{journeyId}'";
            
            
            return sqlAccess.GetDataFromTables(SqlString);
        }

        public bool checkEndJourneyData(Journey journey)
        {
            string SqlString = $"select 1 from Journey where Journey_id = '{journey.Journey_id}' and Vehicle_id ='{journey.Vehicle_id}'";
            return sqlAccess.CheckData(SqlString);

        }

        public bool InsertEndJourney(Journey journey)
        {
            string SqlStirng = $"update Journey set End_date = '{journey.End_date}', Odometerreading_afterjourney ='{journey.Odometerreading_afterjourney}',Payment ='{journey.Payment}', Vehiclestatus_afterjourney='{journey.Vehiclestatus_afterjourney}',Modify_by ='{journey.Journey_modifyby}',Modify_on = GETDATE(),JourneyStatus = 'Completed' where Journey_id = '{journey.Journey_id}'";
            return sqlAccess.Insertdata(SqlStirng);
        }

        public bool CheckUserType(int userId)
        {
            string SqlString = $"select 1 from Users where User_id ='{userId}' and UserType ='Owner'";

            return sqlAccess.CheckData(SqlString);  
        }

        public bool DeleteJourney (int journeyId)
        {
            string SqlString = $"delete from Journey where Journey_id = '{journeyId}'";

            return sqlAccess.Insertdata(SqlString);
        }
    }
} 
