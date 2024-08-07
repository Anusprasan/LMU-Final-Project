using LMU_Final_Project_Web.Models;
using System.Data.SqlClient;

namespace LMU_Final_Project_Web.Data
{
    public class SqlAccess
    {
        private readonly string _connectionString;

        public SqlAccess()
        {
            _connectionString = "Data Source=DESKTOP-14A84VG;Initial Catalog=vehiclemanagementappdb;Integrated Security=True";
        }

        public List<Vehicle> LoadData(String sqlQuery)
        {
            List<Vehicle> vehicles = new List<Vehicle>();
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sqlQuery, conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    Vehicle vehicle = new Vehicle();
                    vehicle.Vehicle_id = Convert.ToInt32(reader["vehicle_id"]);
                    vehicle.User_id = Convert.ToInt32(reader["user_id"]);
                    vehicle.Type = Convert.ToString(reader["type"]);
                    vehicle.Brand = Convert.ToString(reader["brand"]);

                    vehicles.Add(vehicle);
                }

                reader.Close();

                return vehicles;

            }
        }
    }
}
