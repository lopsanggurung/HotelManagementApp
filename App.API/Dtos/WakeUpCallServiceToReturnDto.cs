using System;

namespace App.API.Models
{
    public class WakeUpCallServiceToReturnDto
    {
        public int Id { get; set; }
        public int BookingId { get; set; }
        public DateTime WakeUpCallDate { get; set; }
        public bool IsCompleted { get; set; }
    }
}