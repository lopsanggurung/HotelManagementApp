using System.Collections.Generic;
using System.Threading.Tasks;
using App.API.Models;
using Microsoft.EntityFrameworkCore;

namespace App.API.Data
{
    public class WakeUpCallServiceRepository : IWakeUpCallServiceRepository
    {
        private readonly DataContext _context;
        public WakeUpCallServiceRepository(DataContext context)
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

        public async Task<WakeUpCallService> GetWakeUpCallService(int id)
        {
            var wakeUpCallService = await _context.WakeUpCallServices.FirstOrDefaultAsync(w => w.Id == id);
            return wakeUpCallService;
        }

        public async Task<IEnumerable<WakeUpCallService>> GetWakeUpCallServices()
        {
            var wakeUpCallServices = await _context.WakeUpCallServices.ToListAsync();
            return wakeUpCallServices;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}