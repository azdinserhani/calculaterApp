using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MySql.Data.MySqlClient;
using System.Windows.Forms;
namespace MiniProjet
{
    class db
    {
        public static MySqlCommand cmd;
        public static MySqlDataReader dr;
        public static MySqlConnection cn = new MySqlConnection("server=127.0.0.1;uid=root;pwd=;database=rendi-vous;charset=utf8");

       
       
        public static void excute(String st)
        {
            try
            {
                db.cn.Open();
                cmd = new MySqlCommand(st, db.cn);
                cmd.ExecuteNonQuery();
                db.cn.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
            finally
            {
                db.cn.Close();
            }
        }
    }
}

