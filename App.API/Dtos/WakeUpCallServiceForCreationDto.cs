using System;

namespace App.API.Models
{
    public class WakeUpCallServiceForCreationDto
    {
        public int BookingId { get; set; }
        public DateTime WakeUpCallDate { get; set; }
        public bool IsCompleted { get; set; }
    }
}