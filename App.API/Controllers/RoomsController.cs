using System.Collections.Generic;
using System.Linq;
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
    public class RoomsController : ControllerBase
    {
        private readonly IRoomRepository _repo;
        private readonly IMapper _mapper;
        private readonly DataContext _context;
        public RoomsController(IRoomRepository repo, IMapper mapper, DataContext context)
        {
            _mapper = mapper;
            _repo = repo;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetRooms()
        {
            var rooms = await _repo.GetRooms();

            var roomsToReturn = _mapper.Map<IEnumerable<RoomForListDto>>(rooms);

            return Ok(roomsToReturn);
        }

        [HttpGet]
        [Route("GetDirtyRooms")]
        public async Task<IActionResult> GetDirtyRooms()
        {
            var rooms = await _repo.GetDirtyRooms();

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