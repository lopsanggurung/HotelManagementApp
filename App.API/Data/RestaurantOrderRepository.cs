using System.Collections.Generic;
using System.Threading.Tasks;
using App.API.Models;
using Microsoft.EntityFrameworkCore;

namespace App.API.Data
{
    public class RestaurantOrderRepository : IRestaurantOrderRepository
    {
        private readonly DataContext _context;
        public RestaurantOrderRepository(DataContext context)
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

        public async Task<RestaurantOrder> GetRestaurantOrder(int id)
        {
            var restaurantOrder = await _context.RestaurantOrders.Include(r => r.RestaurantOrderItems).ThenInclude(rsi => rsi.MenuItem).FirstOrDefaultAsync(r => r.Id == id);
            return restaurantOrder;
        }

        public async Task<IEnumerable<RestaurantOrder>> GetRestaurantOrders()
        {
            var restaurantOrders = await _context.RestaurantOrders.ToListAsync();
            return restaurantOrders;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}