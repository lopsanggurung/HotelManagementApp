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
    public class GuestsController : ControllerBase
    {
        private readonly IGuestRepository _repo;
        private readonly IMapper _mapper;
        public GuestsController(IGuestRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetGuests()
        {
            var guests = await _repo.GetGuests();

            var guestsToReturn = _mapper.Map<IEnumerable<GuestForListDto>>(guests);

            return Ok(guestsToReturn);
        }

        [HttpGet("{id}", Name = "GetGuest")]
        public async Task<IActionResult> GetGuest(int id)
        {
            var guest = await _repo.GetGuest(id);

            return Ok(guest);
        }
    }
}