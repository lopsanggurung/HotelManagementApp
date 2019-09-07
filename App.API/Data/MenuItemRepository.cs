using System.Collections.Generic;
using System.Threading.Tasks;
using App.API.Models;
using Microsoft.EntityFrameworkCore;

namespace App.API.Data
{
    public class MenuItemRepository : IMenuItemRepository
    {
        private readonly DataContext _context;
        public MenuItemRepository(DataContext context)
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

        public async Task<MenuItem> GetMenuItem(int id)
        {
            var menuItem = await _context.MenuItems.FirstOrDefaultAsync(m => m.Id == id);
            return menuItem;
        }

        public async Task<IEnumerable<MenuItem>> GetMenuItems()
        {
            var menuItems = await _context.MenuItems.ToListAsync();
            return menuItems;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}