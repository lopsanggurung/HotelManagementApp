using App.API.Dtos;
using App.API.Models;
using AutoMapper;

namespace App.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User, UserForListDto>();
            CreateMap<User, UserForDetailedDto>();
            CreateMap<UserForUpdateDto, User>();
            CreateMap<UserForRegisterDto, User>();
            CreateMap<Guest, GuestForListDto>();
            CreateMap<Guest, GuestToReturnDto>();
            CreateMap<GuestForCreationDto, Guest>();
            CreateMap<Room, RoomForListDto>();
            CreateMap<Booking, BookingForListDto>();
            CreateMap<RoomService, RoomServiceForListDto>();
            CreateMap<LaundryService, LaundryServiceForListDto>();
            CreateMap<WakeUpCallService, WakeUpCallServiceForListDto>();
            CreateMap<RestaurantOrder, RestaurantOrderForListDto>();
            CreateMap<MenuItem, MenuItemForListDto>();
        }
    }
}