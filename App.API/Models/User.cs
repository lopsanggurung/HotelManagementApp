using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace App.API.Models
{
    public class User : IdentityUser<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }
    }
}