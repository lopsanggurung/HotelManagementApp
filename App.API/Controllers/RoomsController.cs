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
    public class RoomsController : ControllerBase
    {
        private readonly IRoomRepository _repo;
        private readonly IMapper _mapper;
        public RoomsController(IRoomRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetRooms()
        {
            var rooms = await _repo.GetRooms();

            var roomsToReturn = _mapper.Map<IEnumerable<RoomForListDto>>(rooms);

            return Ok(roomsToReturn);
        }

        [HttpGet("{id}", Name = "GetRoom")]
        public async Task<IActionResult> GetRoom(int id)
        {
            var room = await _repo.GetRoom(id);

            return Ok(room);
        }
    }
}