using LMU_Final_Project_Web.Models;
using Microsoft.AspNetCore.Mvc;
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


        public List<Vehicle> LoadVehicles(string sqlQuery)

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
                    vehicle.Vehicle_id = Convert.ToInt32(reader["Vehicle_id"]);
                    vehicle.Model = Convert.ToString(reader["Model"]);
                    vehicle.Plate_no = Convert.ToString(reader["Plate_no"]);
                    vehicle.Type = Convert.ToString(reader["Type"]);
                    vehicle.Brand = Convert.ToString(reader["Brand"]);
                    vehicle.LicenceIssuedDate = Convert.ToDateTime(reader["Licence_Issued_Date"]);
                    vehicle.LicenceExpiryDate = Convert.ToDateTime(reader["Licence_Expiry_Date"]);
                    vehicle.InsuranceIssuedDate = Convert.ToDateTime(reader["Insurance_Issued_Date"]);
                    vehicle.InsuranceExpiryDate = Convert.ToDateTime(reader["Insurance_Expiry_Date"]);
                    vehicle.VehicleStatus = Convert.ToString(reader["VehicleStatus"]);

                    vehicles.Add(vehicle);
                }

                reader.Close();




            }
            return vehicles;

        }





        public List<Client> LoadClientData(string sqlQuery)
        {
            List<Client> Clients = new List<Client>();
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sqlQuery, conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    Client client = new Client();
                    client.Client_id = Convert.ToInt32(reader["Client_id"]);
                    client.Vehicle_id = Convert.ToInt32(reader["Vehicle_id"]);
                    client.Name = Convert.ToString(reader["Name"]);
                    client.Address = Convert.ToString(reader["Address"]);
                    client.Phone_no = Convert.ToInt32(reader["Phone_no"]);
                    client.Nic_no = Convert.ToString(reader["Nic_no"]);
                    client.Drivinglicence_photo = Convert.ToString(reader["Drivinglicence_photo"]);
                    client.Client_photo = Convert.ToString(reader["Client_photo"]);
                    client.Created_by = Convert.ToString(reader["Created_by"]);
                    client.Created_on = Convert.ToDateTime(reader["Created_on"]);
                    client.Modify_by = Convert.ToString(reader["Modify_by"]);
                    client.Modify_on = Convert.ToDateTime(reader["Modify_on"]);


                    Clients.Add(client);

                }
                reader.Close();
                return Clients;


            }
        }

        public List<User> LoadUserData(string sqlQuery)
        {
            List<User> users = new List<User>();
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sqlQuery, conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    User user = new User();
                    user.User_id = Convert.ToInt32(reader["User_id"]);
                    user.User_name = Convert.ToString(reader["User_name"]);
                    user.Password = Convert.ToString(reader["Password"]);
                    //user.Email = Convert.ToString(reader["Email"]);
                    //user.Salt = Convert.ToString(reader["Salt"]);
                    //user.created_by = Convert.ToString(reader["Created_by"]);
                    //user.created_on = Convert.ToDateTime(reader["Created_on"]);
                    //user.modify_by = Convert.ToString(reader["Modify_by"]);
                    //user.modify_on = Convert.ToDateTime(reader["Modify_on"]);

                    users.Add(user);






                }
                reader.Close();
                return users;
                ;
            }
        }

        public List<Service> LoadServiceData(string sqlQuery)
        {
            List<Service> services = new List<Service>();
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sqlQuery, conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    Service service = new Service();
                    service.Service_id = Convert.ToInt32(reader["Service_id"]);
                    service.Service_center = Convert.ToString(reader["Service_center"]);
                    service.Phone_no = Convert.ToInt32(reader["Phone_no"]);
                    service.Odometer_reading = Convert.ToInt32(reader["Odometer_reading"]);
                    service.Description = Convert.ToString(reader["Description"]);
                    service.Date = Convert.ToDateTime(reader["Date"]);
                    service.Amount = Convert.ToDouble(reader["Amount"]);
                    service.Additional_expensesdescription = Convert.ToString(reader["Additional_expensesdescription"]);
                    service.Additional_expensesamount = Convert.ToInt32(reader["Additional_expensesamount"]);
                    service.Created_by = Convert.ToString(reader["Created_by"]);
                    service.Created_on = Convert.ToDateTime(reader["Created_on"]);
                    service.Modify_by = Convert.ToString(reader["Modify_by"]);
                    service.Modify_on = Convert.ToDateTime(reader["Modify_on"]);

                    services.Add(service);

                }
                reader.Close();
                return services;
            }
        }


        public List<Repair> LoadRepairData(string SqlQuery)
        {
            List<Repair> repairs = new List<Repair>();
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(SqlQuery, conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    Repair repair = new Repair();
                    repair.Repair_id = Convert.ToInt32(reader["Repair_id"]);
                    repair.Vehicle_id = Convert.ToInt32(reader["Vehicle_id"]);
                    repair.Garage_name = Convert.ToString(reader["Garage_name"]);
                    repair.Date = Convert.ToDateTime(reader["Date"]);
                    repair.Address = Convert.ToString(reader["Address"]);
                    repair.Phone_no = Convert.ToInt32(reader["Phone_no"]);
                    repair.Malfunction_details = Convert.ToString(reader["Malfunction_details"]);
                    repair.Total_amount = Convert.ToDouble(reader["Total_amount"]);
                    repair.Repaired_parts = Convert.ToString(reader["Repaired_parts"]); ;
                    repair.Created_by = Convert.ToString(reader["Created_by"]);
                    repair.Created_on = Convert.ToDateTime(reader["created_on"]);
                    repair.Modify_by = Convert.ToString(reader["Modify_by"]);
                    repair.Modify_on = Convert.ToDateTime(reader["Modify_on"]);

                    repairs.Add(repair);



                }

                reader.Close();
                return repairs;
            }
        }

        public List<Devicedata> LoadDeviceData(string SqlQuery)
        {
            List<Devicedata> devicedatas = new List<Devicedata>();
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(SqlQuery, conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    Devicedata devicedata = new Devicedata();
                    devicedata.Device_id = Convert.ToInt32(reader["Device_id"]);
                    devicedata.DTC_code = Convert.ToString(reader["DTC_id"]);
                    devicedata.DateTime = Convert.ToDateTime(reader["DateTime"]);

                    devicedatas.Add(devicedata);

                }
                reader.Close();

            }
            return devicedatas;

        }
        public List<Journey> LoadJourneyDetails(string SqlQuery)
        {
            List<Journey> journeys = new List<Journey>(); ;
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(SqlQuery, conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    Journey journey = new Journey();
                    journey.Journey_id = Convert.ToInt32(reader["Journey_id"]);
                    journey.vehicle_id = Convert.ToInt32(reader["Vehicle_id"]);
                    journey.Started_date = Convert.ToDateTime(reader["Started_date"]);
                    journey.End_date = Convert.ToDateTime(reader["End_date"]);
                    journey.Odometerreading_beforejourney = Convert.ToInt32(reader["Odometerreading_beforejourney"]);
                    journey.Odometerreading_afterjourney = Convert.ToInt32(reader["Odometerreading_afterreading"]);
                    journey.Journey_description = Convert.ToString(reader["Journey_description"]);
                    journey.Vehiclestatus_beforejourney = Convert.ToString(reader["Vehiclestatus_beforejourney"]);
                    journey.Vehiclestatus_afterjourney = Convert.ToString(reader["Vehiclestatus_afterjourney"]);
                    journey.Vehiclephoto_beforejourney = Convert.ToString(reader["Vehiclephoto_beforejourney"]);
                    journey.Vehiclephoto_afterjourney = Convert.ToString(reader["Vehiclephoto_afterjourney"]);
                    journey.Journeystarted_createdby = Convert.ToString(reader["Journeyatarted_createdby"]);
                    journey.Journeystarted_createdon = Convert.ToDateTime(reader["Journeyend_createdon"]);
                    journey.Journeystarted_modifyby = Convert.ToString(reader["Journeystarted_modifyby"]);
                    journey.Journeystarted_modifyon = Convert.ToDateTime(reader["Journeystarted_modifyon"]);
                    journey.Journeyend_createdby = Convert.ToString(reader["Journeyend_createdby"]);
                    journey.Journeyend_createdon = Convert.ToDateTime(reader["Journeyend_createdon"]);
                    journey.Journeyend_modifyby = Convert.ToString(reader["Journeyend_modifyby"]);
                    journey.Journeyend_modifyon = Convert.ToDateTime(reader["Journeyend_modifyon"]);

                    journeys.Add(journey);



                }
                reader.Close();
            }
            return journeys;
        }


        public List<VehicleType> LoadVehicleTypes(string sqlQuery)
        {
            List<VehicleType> vehicleTypes = new List<VehicleType>();
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sqlQuery, conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    VehicleType vehicleType = new VehicleType();
                    vehicleType.Type_id = Convert.ToInt32(reader["Type_id"]);
                    vehicleType.Type = Convert.ToString(reader["Type"]);

                    vehicleTypes.Add(vehicleType);


                }
                conn.Close();
            }
            return vehicleTypes;


        }

        public List<VehicleBrand> LoadVehicleBrands(string sqlQuery)
        {
            List<VehicleBrand> vehicleBrands = new List<VehicleBrand>();
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(sqlQuery, conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    VehicleBrand vehicleBrand = new VehicleBrand();
                    vehicleBrand.Brand_id = Convert.ToInt32(reader["Brand_id"]);
                    vehicleBrand.Brand = Convert.ToString(reader["Brand"]);

                    vehicleBrands.Add(vehicleBrand);
                }
                conn.Close();

            }
            return vehicleBrands;
        }

        public List<Vehicle> LoadVehicleById(string SqlQuery)
        {
            List<Vehicle> vehicles = new List<Vehicle>();
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(SqlQuery, conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    Vehicle vehicle = new Vehicle();
                    vehicle.Vehicle_id = Convert.ToInt32(reader["Vehicle_id"]);
                    vehicle.Model = Convert.ToString(reader["Model"]);
                    vehicle.Plate_no = Convert.ToString(reader["Plate_no"]);
                    vehicle.Type = Convert.ToString(reader["Type"]);
                    vehicle.Brand = Convert.ToString(reader["Brand"]);
                    vehicle.LicenceIssuedDate = Convert.ToDateTime(reader["Licence_Issued_Date"]);
                    vehicle.LicenceExpiryDate = Convert.ToDateTime(reader["Licence_Expiry_Date"]);
                    vehicle.InsuranceIssuedDate = Convert.ToDateTime(reader["Insurance_Issued_Date"]);
                    vehicle.InsuranceExpiryDate = Convert.ToDateTime(reader["Insurance_Expiry_Date"]);


                    vehicles.Add(vehicle);

                }
                conn.Close();

            }
            return vehicles;
        }

        public void InsertVehicle(string SqlQuery)
        {
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand();
                SqlDataAdapter sqlDataAdapter = new SqlDataAdapter();
                sqlDataAdapter.InsertCommand = new SqlCommand(SqlQuery, conn);
                sqlDataAdapter.InsertCommand.ExecuteNonQuery();
                conn.Close();
            }


        }

        public void InsertUpdateVehicle(string SqlQuery)
        {
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand();
                SqlDataAdapter sqlDataAdapter = new SqlDataAdapter();
                sqlDataAdapter.InsertCommand = new SqlCommand(SqlQuery, conn);
                sqlDataAdapter.InsertCommand.ExecuteNonQuery();
                conn.Close();

            }
        }


        public void InsertDeleteVehicle(string SqlQuery)
        {
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand();
                SqlDataAdapter sqlDataAdapter = new SqlDataAdapter();
                sqlDataAdapter.InsertCommand = new SqlCommand(SqlQuery, conn);
                sqlDataAdapter.InsertCommand.ExecuteNonQuery();
                conn.Close();

            }

        }

        public bool ValidateUser(string SqlQuery)
        {
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                using (SqlCommand cmd = new SqlCommand(SqlQuery, conn))
                {


                    conn.Open();
                    int result = (int)cmd.ExecuteScalar();
                    conn.Close();

                    return result > 0;
                }

            }



        }

        public List<string> GetPlateNo(string SqlQuery)
        {
            List<string> PlateNos= new List<string>();
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                conn.Open();
                SqlCommand cmd = new SqlCommand(SqlQuery, conn);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    
                    string Plate_no = Convert.ToString(reader["Plate_no"]);
                    PlateNos.Add(Plate_no);
                }
                conn.Close();

            }
            return PlateNos;
        }

        public bool GetSessionData(string SqlQuery)
        {
            using (SqlConnection conn = new SqlConnection(_connectionString))
            {
                SqlCommand command = new SqlCommand(SqlQuery, conn);


                conn.Open();
                SqlDataReader reader = command.ExecuteReader();

                if (reader.Read())
                {
                    // Credentials are valid, store session data
                    Session.ID = Convert.ToInt32(reader["User_id"]);
                    Session.UserName = reader["User_name"].ToString();
                    Session.FullName = reader["FullName"].ToString();
                    return true;
                }


                else
                {
                    return false;
                }

                reader.Close();
            }
        }
    }
}

        
