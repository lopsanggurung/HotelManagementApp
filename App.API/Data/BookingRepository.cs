using System.Collections.Generic;
using System.Threading.Tasks;
using App.API.Models;
using Microsoft.EntityFrameworkCore;

namespace App.API.Data
{
    public class BookingRepository : IBookingRepository
    {
        private readonly DataContext _context;
        public BookingRepository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Booking> GetBooking(int id)
        {
            var booking = await _context.Bookings
            .Include(b => b.Guest)
            .Include(b => b.Room)
            .Include(b => b.RoomServices)
            .Include(b => b.RestaurantOrders)
            .Include(b => b.WakeUpCallServices)
            .Include(b => b.LaundryServices)
            .FirstOrDefaultAsync(b => b.Id == id);
            return booking;
        }

        public async Task<IEnumerable<Booking>> GetBookings()
        {
            var bookings = await _context.Bookings.ToListAsync();
            return bookings;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}