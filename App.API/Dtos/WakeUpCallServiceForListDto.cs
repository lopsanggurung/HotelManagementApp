using System;

namespace App.API.Dtos
{
    public class WakeUpCallServiceForListDto
    {
        public int Id { get; set; }
        public int BookingId { get; set; }
        public DateTime WakeUpCallDate { get; set; }
        public bool IsCompleted { get; set; }
    }
}