namespace App.API.Models
{
    public class RoomServiceItem
    {
        public int Id { get; set; }
        public int RoomServiceId { get; set; }
        public int MenuItemId { get; set; }
        public int Quantity { get; set; }
        public decimal PricePerItem { get; set; }
        public RoomService RoomService { get; set; }
        public MenuItem MenuItem { get; set; }
    }
}