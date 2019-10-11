using System;
using System.Collections.Generic;
using App.API.Models;

namespace App.API.Dtos
{
    public class RestaurantOrderForCreationDto
    {
        public int? BookingId { get; set; }
        public string OrderFor { get; set; }
        public DateTime OrderDate { get; set; }
        public bool IsCompleted { get; set; }
        public bool IsPaid { get; set; }
        public decimal TotalPriceBeforeTax { get; set; }
        public decimal TaxAmount { get; set; }
        public decimal TotalPrice { get; set; }
        public ICollection<RestaurantOrderItem> RestaurantOrderItems { get; set; }
        public RestaurantOrderForCreationDto() {
            OrderDate = DateTime.Now;
        }
    }
}
