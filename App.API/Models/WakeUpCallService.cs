using System;

namespace App.API.Models
{
    public class WakeUpCallService
    {
        public int Id { get; set; }
        public int BookingId { get; set; }
        public DateTime WakeUpCallDate { get; set; }
        public bool IsCompleted { get; set; }
        public Booking Booking { get; set; }
    }
}