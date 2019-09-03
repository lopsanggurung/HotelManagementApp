using System.Collections.Generic;

namespace App.API.Models
{
    public class Room
    {
        public int Id { get; set; }
        public bool IsArchived { get; set; }
        public string RoomNumber { get; set; }
        public string RoomName { get; set; }
        public string RoomType { get; set; }
        public int TwinBed { get; set; }
        public int FullBed { get; set; }
        public int QueenBed { get; set; }
        public int KingBed { get; set; }
        public int MaxOccupancy { get; set; }
        public decimal Price { get; set; }
        public bool IsClean { get; set; }
        public ICollection<Booking> Bookings { get; set; }
    }
}