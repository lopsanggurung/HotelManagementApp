using System;
using System.Collections.Generic;
using App.API.Models;

namespace App.API.Dtos
{
    public class RoomServiceToReturnDto
    {
        public int Id { get; set; }
        public int BookingId { get; set; }
        public DateTime ServiceDate { get; set; }
        public bool IsCompleted { get; set; }
        public bool IsPaid { get; set; }
        public decimal TotalPriceBeforeTax { get; set; }
        public decimal TaxAmount { get; set; }
        public decimal TotalPrice { get; set; }
        public ICollection<RoomServiceItem> RoomServiceItems { get; set; }
    }
}