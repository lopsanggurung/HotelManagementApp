namespace App.API.Models
{
    public class LaundryServiceItem
    {
        public int Id { get; set; }
        public int LaundryServiceId { get; set; }
        public string Type { get; set; }
        public string Category { get; set; }
        public int Quantity { get; set; }
        public decimal PricePerItem { get; set; }
        public LaundryService LaundryService { get; set; }
    }
}