using System.Collections.Generic;
using System.Threading.Tasks;
using App.API.Models;

namespace App.API.Data
{
    public interface ILaundryServiceRepository
    {
        void Add<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveAll();
        Task<IEnumerable<LaundryService>> GetLaundryServices();
        Task<LaundryService> GetLaundryService(int id);
    }
}