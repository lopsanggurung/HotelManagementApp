using System;

namespace App.API.Dtos
{
    public class LaundryServiceForListDto
    {
        public int Id { get; set; }
        public int BookingId { get; set; }
        public DateTime DateOrdered { get; set; }
        public DateTime DateReturnedFromLaundry { get; set; }
        public DateTime DateReturnedToGuest { get; set; }
        public bool IsPaid { get; set; }
        public decimal TotalPriceBeforeTax { get; set; }
        public decimal TaxAmount { get; set; }
        public decimal TotalPrice { get; set; }
    }
}