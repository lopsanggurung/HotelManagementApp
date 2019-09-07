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
    public class MenuItemsController : ControllerBase
    {
        private readonly IMenuItemRepository _repo;
        private readonly IMapper _mapper;
        public MenuItemsController(IMenuItemRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetMenuItems()
        {
            var menuItems = await _repo.GetMenuItems();

            var menuItemsToReturn = _mapper.Map<IEnumerable<MenuItemForListDto>>(menuItems);

            return Ok(menuItemsToReturn);
        }

        [HttpGet("{id}", Name = "GetMenuItem")]
        public async Task<IActionResult> GetMenuItem(int id)
        {
            var menuItem = await _repo.GetMenuItem(id);

            return Ok(menuItem);
        }
    }
}