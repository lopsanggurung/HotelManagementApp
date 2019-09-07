using System;

namespace App.API.Dtos
{
    public class RoomServiceForListDto
    {
        public int Id { get; set; }
        public int BookingId { get; set; }
        public DateTime ServiceDate { get; set; }
        public bool IsCompleted { get; set; }
        public bool IsPaid { get; set; }
        public decimal TotalPriceBeforeTax { get; set; }
        public decimal TaxAmount { get; set; }
        public decimal TotalPrice { get; set; }
    }
}