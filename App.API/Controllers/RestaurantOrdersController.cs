using System.Collections.Generic;
using System.Threading.Tasks;
using App.API.Data;
using App.API.Dtos;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace App.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantOrdersController : ControllerBase
    {
        private readonly IRestaurantOrderRepository _repo;
        private readonly IMapper _mapper;
        public RestaurantOrdersController(IRestaurantOrderRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetRestaurantOrders()
        {
            var restaurantOrders = await _repo.GetRestaurantOrders();

            var restaurantOrdersToReturn = _mapper.Map<IEnumerable<RestaurantOrderForListDto>>(restaurantOrders);

            return Ok(restaurantOrdersToReturn);
        }

        [HttpGet("{id}", Name = "GetRestaurantOrder")]
        public async Task<IActionResult> GetRestaurantOrder(int id)
        {
            var restaurantOrder = await _repo.GetRestaurantOrder(id);

            return Ok(restaurantOrder);
        }
    }
}