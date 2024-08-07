namespace WindowsFormsApp1
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.txthr = new System.Windows.Forms.TextBox();
            this.contextMenuStrip1 = new System.Windows.Forms.ContextMenuStrip(this.components);
            this.txthrrate = new System.Windows.Forms.TextBox();
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // txthr
            // 
            this.txthr.Location = new System.Drawing.Point(42, 48);
            this.txthr.Name = "txthr";
            this.txthr.Size = new System.Drawing.Size(150, 20);
            this.txthr.TabIndex = 0;
            this.txthr.Text = "No of Hrs/Week";
            // 
            // contextMenuStrip1
            // 
            this.contextMenuStrip1.Name = "contextMenuStrip1";
            this.contextMenuStrip1.Size = new System.Drawing.Size(61, 4);
            // 
            // txthrrate
            // 
            this.txthrrate.Location = new System.Drawing.Point(41, 107);
            this.txthrrate.Name = "txthrrate";
            this.txthrrate.Size = new System.Drawing.Size(150, 20);
            this.txthrrate.TabIndex = 2;
            this.txthrrate.Text = "Hourly payment rate ";
            // 
            // textBox1
            // 
            this.textBox1.Location = new System.Drawing.Point(294, 45);
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new System.Drawing.Size(89, 20);
            this.textBox1.TabIndex = 3;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(634, 450);
            this.Controls.Add(this.textBox1);
            this.Controls.Add(this.txthrrate);
            this.Controls.Add(this.txthr);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox txthr;
        private System.Windows.Forms.ContextMenuStrip contextMenuStrip1;
        private System.Windows.Forms.TextBox txthrrate;
        private System.Windows.Forms.TextBox textBox1;
    }
}

