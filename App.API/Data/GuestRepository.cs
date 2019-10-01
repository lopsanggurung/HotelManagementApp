using System.Collections.Generic;
using System.Threading.Tasks;
using App.API.Models;
using Microsoft.EntityFrameworkCore;

namespace App.API.Data
{
    public class GuestRepository : IGuestRepository
    {
        private readonly DataContext _context;
        public GuestRepository(DataContext context)
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

        public async Task<Guest> GetGuest(int id)
        {
            var guest = await _context.Guests
                .Include(g => g.Bookings).ThenInclude(g => g.Room)
                .Include(g => g.Bookings).ThenInclude(b => b.WakeUpCallServices)
                .Include(g => g.Bookings).ThenInclude(b => b.LaundryServices)
                .Include(g => g.Bookings).ThenInclude(b => b.RoomServices)
                .Include(g => g.Bookings).ThenInclude(b => b.RestaurantOrders)
                .FirstOrDefaultAsync(g => g.Id == id);
                
            return guest;
        }

        public async Task<IEnumerable<Guest>> GetGuests()
        {
            var guests = await _context.Guests.ToListAsync();
            return guests;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}