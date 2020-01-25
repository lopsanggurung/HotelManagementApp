using System;
using System.Collections.Generic;
using App.API.Models;

namespace App.API.Dtos
{
    public class RoomServiceForUpdateDto
    {
        public bool IsCompleted { get; set; }
        public bool IsPaid { get; set; }
        public decimal TotalPriceBeforeTax { get; set; }
        public decimal TaxAmount { get; set; }
        public decimal TotalPrice { get; set; }
        public ICollection<RoomServiceItem> RoomServiceItems { get; set; }
    }
}
