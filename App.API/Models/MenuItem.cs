using System.Collections.Generic;

namespace App.API.Models
{
    public class MenuItem
    {
        public int Id { get; set; }
        public bool IsArchived { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsBarItem { get; set; }
        public string Category { get; set; }
        public string SubCategory { get; set; }
        public decimal Price { get; set; }
        public ICollection<RoomServiceItem> RoomServiceItems { get; set; }
        public ICollection<RestaurantOrderItem> RestaurantOrderItems { get; set; }
    }
}