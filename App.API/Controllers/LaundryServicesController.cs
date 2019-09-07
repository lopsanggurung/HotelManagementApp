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
    public class LaundryServicesController : ControllerBase
    {
        private readonly ILaundryServiceRepository _repo;
        private readonly IMapper _mapper;
        public LaundryServicesController(ILaundryServiceRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetLaundryServices()
        {
            var laundryServices = await _repo.GetLaundryServices();

            var laundryServicesToReturn = _mapper.Map<IEnumerable<LaundryServiceForListDto>>(laundryServices);

            return Ok(laundryServicesToReturn);
        }

        [HttpGet("{id}", Name = "GetLaundryService")]
        public async Task<IActionResult> GetLaundryService(int id)
        {
            var laundryService = await _repo.GetLaundryService(id);

            return Ok(laundryService);
        }
    }
}