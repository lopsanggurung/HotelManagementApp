using System;
using System.Collections.Generic;

namespace App.API.Models
{
    public class RestaurantOrder
    {
        public int Id { get; set; }
        public string OrderFor { get; set; }
        public DateTime OrderDate { get; set; }
        public bool IsCompleted { get; set; }
        public bool IsPaid { get; set; }
        public decimal TotalPriceBeforeTax { get; set; }
        public decimal TaxAmount { get; set; }
        public decimal TotalPrice { get; set; }
        public ICollection<RestaurantOrderItem> RestaurantOrderItems { get; set; }
    }
}