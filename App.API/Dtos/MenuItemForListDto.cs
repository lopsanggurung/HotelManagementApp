using System;

namespace App.API.Dtos
{
    public class MenuItemForListDto
    {
        public int Id { get; set; }
        public bool IsArchived { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsBarItem { get; set; }
        public string Category { get; set; }
        public string SubCategory { get; set; }
        public decimal Price { get; set; }
    }
}