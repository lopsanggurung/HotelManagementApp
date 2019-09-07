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
    public class RoomServicesController : ControllerBase
    {
        private readonly IRoomServiceRepository _repo;
        private readonly IMapper _mapper;
        public RoomServicesController(IRoomServiceRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetRoomServices()
        {
            var roomServices = await _repo.GetRoomServices();

            var roomServicesToReturn = _mapper.Map<IEnumerable<RoomServiceForListDto>>(roomServices);

            return Ok(roomServicesToReturn);
        }

        [HttpGet("{id}", Name = "GetRoomService")]
        public async Task<IActionResult> GetRoomService(int id)
        {
            var roomService = await _repo.GetRoomService(id);

            return Ok(roomService);
        }
    }
}