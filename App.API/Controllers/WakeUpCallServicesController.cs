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
    public class WakeUpCallServicesController : ControllerBase
    {
        private readonly IWakeUpCallServiceRepository _repo;
        private readonly IMapper _mapper;
        public WakeUpCallServicesController(IWakeUpCallServiceRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetWakeUpCallServices()
        {
            var wakeUpCallServices = await _repo.GetWakeUpCallServices();

            var wakeUpCallServicesToReturn = _mapper.Map<IEnumerable<WakeUpCallServiceForListDto>>(wakeUpCallServices);

            return Ok(wakeUpCallServicesToReturn);
        }

        [HttpGet("{id}", Name = "GetWakeUpCallService")]
        public async Task<IActionResult> GetWakeUpCallService(int id)
        {
            var wakeUpCallService = await _repo.GetWakeUpCallService(id);

            return Ok(wakeUpCallService);
        }
    }
}