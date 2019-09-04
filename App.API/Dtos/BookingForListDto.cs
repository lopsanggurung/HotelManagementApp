using System;

namespace App.API.Dtos
{
    public class BookingForListDto
    {
        public int Id { get; set; }
        public int GuestId { get; set; }
        public int RoomId { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastModifiedDate { get; set; }
        public string BookingStatus { get; set; }
        public DateTime CheckInDate { get; set; }
        public DateTime CheckOutDate { get; set; }
        public int NumberOfAdults { get; set; }
        public int NumberOfChildren { get; set; }
        public bool AdditionalBed { get; set; }
        public bool RequirePickUp { get; set; }
        public DateTime PickUpDate { get; set; }
        public string PickUpLocation { get; set; }
        public string PickUpDetails { get; set; }
        public DateTime CheckedInDate { get; set; }
        public DateTime CheckedOutDate { get; set; }
        public string Notes { get; set; }
        public string FeedBackOnCheckOut { get; set; }
        public string BookingSource { get; set; }
        public string PaymentStatus { get; set; }
        public decimal PricePerNight { get; set; }
        public decimal AdditionalBedPricePerNight { get; set; }
        public decimal TotalPriceBeforeTax { get; set; }
        public decimal TaxAmount { get; set; }
        public decimal DepositAmount { get; set; }
        public decimal TotalPrice { get; set; }
    }
}