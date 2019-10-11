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
            CreateMap<Booking, BookingToReturnDto>();
            CreateMap<BookingForCreationDto, Booking>();
            CreateMap<RoomService, RoomServiceForListDto>();
            CreateMap<RoomService, RoomServiceToReturnDto>();
            CreateMap<RoomServiceForCreationDto, RoomService>();
            CreateMap<LaundryService, LaundryServiceForListDto>();
            CreateMap<LaundryService, LaundryServiceToReturnDto>();
            CreateMap<LaundryServiceForCreationDto, LaundryService>();
            CreateMap<WakeUpCallService, WakeUpCallServiceForListDto>();
            CreateMap<WakeUpCallService, WakeUpCallServiceToReturnDto>();
            CreateMap<WakeUpCallServiceForCreationDto, WakeUpCallService>();
            CreateMap<RestaurantOrder, RestaurantOrderForListDto>();
            CreateMap<RestaurantOrder, RestaurantOrderToReturnDto>();
            CreateMap<RestaurantOrderForCreationDto, RestaurantOrder>();
            CreateMap<MenuItem, MenuItemForListDto>();
        }
    }
}