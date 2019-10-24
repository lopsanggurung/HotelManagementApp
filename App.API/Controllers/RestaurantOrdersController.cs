using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using App.API.Data;
using App.API.Dtos;
using App.API.Models;
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

        [HttpPost]
        public async Task<IActionResult> CreateRestaurantOrder(RestaurantOrderForCreationDto restaurantOrderForCreationDto)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            if (currentUserId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var restaurantOrderToCreate = _mapper.Map<RestaurantOrder>(restaurantOrderForCreationDto);

            _repo.Add(restaurantOrderToCreate);

            if (await _repo.SaveAll())
            {
                var restaurantOrderToReturn = _mapper.Map<RestaurantOrderToReturnDto>(restaurantOrderToCreate);
                return CreatedAtRoute("GetRestaurantOrder", new { id = restaurantOrderToCreate.Id }, restaurantOrderToReturn);
            }
            throw new Exception("Creating the Restaurant Order failed on save");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRestaurantOrder(int id)
        {
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);

            if (currentUserId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();

            var restaurantOrderFromRepo = await _repo.GetRestaurantOrder(id);

            _repo.Delete(restaurantOrderFromRepo);

            if (await _repo.SaveAll())
            {
                return Ok();
            }
            throw new Exception("Failed to delete the Restaurant Order");
        }
    }
}