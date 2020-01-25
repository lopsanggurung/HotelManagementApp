using System;

namespace App.API.Models
{
    public class WakeUpCallServiceForUpdateDto
    {
        public DateTime WakeUpCallDate { get; set; }
        public bool IsCompleted { get; set; }
    }
}