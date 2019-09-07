using System.Collections.Generic;
using System.Threading.Tasks;
using App.API.Models;
using Microsoft.EntityFrameworkCore;

namespace App.API.Data
{
    public class RoomServiceRepository : IRoomServiceRepository
    {
        private readonly DataContext _context;
        public RoomServiceRepository(DataContext context)
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

        public async Task<RoomService> GetRoomService(int id)
        {
            var roomService = await _context.RoomServices.Include(r => r.RoomServiceItems).FirstOrDefaultAsync(r => r.Id == id);
            return roomService;
        }

        public async Task<IEnumerable<RoomService>> GetRoomServices()
        {
            var roomServices = await _context.RoomServices.ToListAsync();
            return roomServices;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}