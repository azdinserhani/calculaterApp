


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
            public String st;
        public MySqlCommand cmd;
        public MySqlDataReader dr;
        try
            {
                db.cn.Open();

                
                string st = "SELECT id FROM patient"; 

                cmd = new MySqlCommand(st, db.cn);

                dr = cmd.ExecuteReader();

                cmbPatNum.Items.Clear();

                while (dr.Read())
                {
                    cmbPatNum.Items.Add(dr["id"].ToString());
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Erreur lors de la récupération des patients: " + ex.Message);
            }
            finally
            {
                // Ensure the database connection is always closed
                if (db.cn.State == ConnectionState.Open)
                {
                    db.cn.Close();
                }
            }
