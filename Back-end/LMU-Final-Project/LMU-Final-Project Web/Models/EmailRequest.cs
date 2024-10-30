namespace LMU_Final_Project_Web.Models
{
    public class EmailRequest
    {
        public string? To { get; set; }
        public string? From { get; set; }
        public string? Body { get; set; }
        public string? MailPassword { get; set; }
        public int? JounreyId { get; set; }


    }
}
