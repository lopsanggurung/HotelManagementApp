using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using App.API.Models;
using Microsoft.EntityFrameworkCore;

namespace App.API.Data
{
    public class RoomRepository : IRoomRepository
    {
        private readonly DataContext _context;
        public RoomRepository(DataContext context)
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

        public async Task<Room> GetRoom(int id)
        {
            var room = await _context.Rooms.Include(r => r.Bookings).ThenInclude(r => r.Guest).FirstOrDefaultAsync(r => r.Id == id);
            return room;
        }

        public async Task<IEnumerable<Room>> GetRooms()
        {
            var rooms = await _context.Rooms.ToListAsync();
            return rooms;
        }

        public async Task<IEnumerable<Room>> GetDirtyRooms()
        {
            var rooms = await _context.Rooms.Where(r => r.IsClean == false).ToListAsync();
            return rooms;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}