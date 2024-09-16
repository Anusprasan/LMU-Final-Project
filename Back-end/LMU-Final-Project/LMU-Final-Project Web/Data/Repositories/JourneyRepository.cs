using LMU_Final_Project_Web.Models;

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

        public List<string> GetPlateNo()
        {
            string sqlString = $"select Plate_no from [vehicle]";

            return sqlAccess.GetPlateNo(sqlString);
        }
    }
}
