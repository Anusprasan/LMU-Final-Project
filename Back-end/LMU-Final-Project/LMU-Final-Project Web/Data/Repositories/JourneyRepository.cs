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
    }
}
