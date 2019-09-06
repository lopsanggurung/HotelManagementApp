namespace App.API.Models
{
    public class RestaurantOrderItem
    {
        public int Id { get; set; }
        public int RestaurantOrderId { get; set; }
        public int MenuItemId { get; set; }
        public int Quantity { get; set; }
        public decimal PricePerItem { get; set; }
        public RestaurantOrder RestaurantOrder { get; set; }
        public MenuItem MenuItem { get; set; }
    }
}