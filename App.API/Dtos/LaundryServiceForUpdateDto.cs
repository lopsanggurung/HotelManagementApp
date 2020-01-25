using System;
using System.Collections.Generic;

namespace App.API.Models
{
    public class LaundryServiceForUpdateDto
    {
        public DateTime DateReturnedFromLaundry { get; set; }
        public DateTime DateReturnedToGuest { get; set; }
        public bool IsPaid { get; set; }
        public decimal TotalPriceBeforeTax { get; set; }
        public decimal TaxAmount { get; set; }
        public decimal TotalPrice { get; set; }
        public ICollection<LaundryServiceItem> LaundryServiceItems { get; set; }
    }
}