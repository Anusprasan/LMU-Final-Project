using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.SqlClient;
     
namespace Formapplogin
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        SqlConnection conn = new SqlConnection(@"Data Source=DESKTOP-14A84VG;Initial Catalog=Topuppracticelogin;Integrated Security=True");

        private void Form1_Load(object sender, EventArgs e)
        {
            
        }

        private void button_login_Click(object sender, EventArgs e)
        {
            String username, user_password;

            username = txt_username.Text;
            user_password = txt_password.Text;

            try
            {
                String querry = "SELECT * From Login_new WHERE username = '"+txt_username.Text+"' AND password = '"+txt_password.Text+"'";
                SqlDataAdapter sda = new SqlDataAdapter(querry,conn);

                DataTable dtable = new DataTable();
                sda.Fill(dtable); 

                if(dtable.Rows.Count > 0 )
                {
                    username = txt_username.Text;
                    user_password = txt_password.Text;  

                    Menuform form2 = new Menuform();
                    form2.Show();
                    this.Hide();
                }

                else
                {
                    MessageBox.Show("Invalid  login details ", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                    txt_username.Clear();
                    txt_username.Clear();
                    txt_username.Focus();

                       
                }
            }
            catch
            {
                MessageBox.Show("Error");
            }
            finally
            {
                conn.Close();
            }
        }

        private void button_clear_Click(object sender, EventArgs e)
        {
            txt_username.Clear();
            txt_password.Clear();

            txt_username.Focus();
        }
    }
}
