using System;

namespace App.API.Dtos
{
    public class RestaurantOrderForListDto
    {
        public int Id { get; set; }
        public int BookingId { get; set; }
        public string OrderFor { get; set; }
        public DateTime OrderDate { get; set; }
        public bool IsCompleted { get; set; }
        public bool IsPaid { get; set; }
        public decimal TotalPriceBeforeTax { get; set; }
        public decimal TaxAmount { get; set; }
        public decimal TotalPrice { get; set; }
    }
}