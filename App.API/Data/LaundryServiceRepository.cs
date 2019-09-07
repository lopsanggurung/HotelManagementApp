using System.Collections.Generic;
using System.Threading.Tasks;
using App.API.Models;
using Microsoft.EntityFrameworkCore;

namespace App.API.Data
{
    public class LaundryServiceRepository : ILaundryServiceRepository
    {
        private readonly DataContext _context;
        public LaundryServiceRepository(DataContext context)
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

        public async Task<LaundryService> GetLaundryService(int id)
        {
            var laundryService = await _context.LaundryServices.Include(l => l.LaundryServiceItems).FirstOrDefaultAsync(r => r.Id == id);
            return laundryService;
        }

        public async Task<IEnumerable<LaundryService>> GetLaundryServices()
        {
            var laundryServices = await _context.LaundryServices.ToListAsync();
            return laundryServices;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}