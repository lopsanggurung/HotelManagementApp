using System.ComponentModel.DataAnnotations;

namespace App.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(20, MinimumLength = 6, ErrorMessage = "You must specify password between 6 and 20 characters")]
        public string Password { get; set; }
    }
}