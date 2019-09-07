using System.Collections.Generic;
using System.Threading.Tasks;
using App.API.Models;

namespace App.API.Data
{
    public interface IRestaurantOrderRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<RestaurantOrder>> GetRestaurantOrders();
        Task<RestaurantOrder> GetRestaurantOrder(int id);
    }
}