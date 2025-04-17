// Timetable data for first year departments with flexible time slots
const timetableData = {
  mechanical: {
    schedule: [
      // Sunday (empty for mechanical)
      [],
      // Monday
      [
        {
          subject: "Electrical/Properties of engineering Material Lab practical",
          teacher: "Demonstrators",
          room: "Lab",
          startTime: "09:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        {
          subject: "Engineering Mechanics",
          teacher: "Mrs.Sujeewani",
          room: "Room 404",
          startTime: "13:00",
          endTime: "16:00",
        },
      ],
      // Tuesday
      [
        { subject: "MAT LAB", teacher: "Mrs.Samarathunga", room: "IT LAB 02", startTime: "09:30", endTime: "12:30" },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        { subject: "IT LAB", teacher: "Mrs.Chandima", room: "IT Lab 01", startTime: "13:00", endTime: "16:00" },
      ],
      // Wednesday
      [
        {
          subject: "Introduction to Thermodynamics",
          teacher: "Mr.Shayan Perera",
          room: "Room 304",
          startTime: "08:30",
          endTime: "10:30",
        },
        {
          subject: "Human Values",
          teacher: "Ms.Shashika Udeni",
          room: "Room 304",
          startTime: "10:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        { subject: "Lab practical", teacher: "Demonstrators", room: "Labs", startTime: "13:00", endTime: "16:00" },
      ],
      // Thursday
      [
        {
          subject: "Computer Technology and Networking",
          teacher: "Mrs.Chandima",
          room: "Room 404",
          startTime: "08:30",
          endTime: "09:30",
        },
        {
          subject: "English and communication skills",
          teacher: "Ms.Shashika Udeni",
          room: "Room 404",
          startTime: "09:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        {
          subject: "Properties of Engineering Materials",
          teacher: "Ms.Asha Liyanage",
          room: "Room 404",
          startTime: "13:00",
          endTime: "15:00",
        },
      ],
      // Friday
      [
        {
          subject: "Engineering Mathematics",
          teacher: "Mrs.Sattar",
          room: "Room 404",
          startTime: "09:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        {
          subject: "Computer Technology and Networking",
          teacher: "Mrs.Chandima",
          room: "Room 404",
          startTime: "13:00",
          endTime: "15:00",
        },
      ],
      // Saturday
      [
        {
          subject: "E.E Engineering",
          teacher: "Awaiting Data",
          room: "404",
          startTime: "07:30",
          endTime: "09:30",
        },
      ],
    ],
  },
  civil: {
    schedule: [
      // Sunday (empty for civil)
      [],
      // Monday
      [
        { subject: "Lab Practical", teacher: "Demonstrators", room: "Labs", startTime: "09:30", endTime: "12:30" },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        {
          subject: "Introduction to Thermodynamics",
          teacher: "Mr.Shayan Perera",
          room: "Room 304",
          startTime: "13:00",
          endTime: "15:00",
        },
        {
          subject: "Human Values",
          teacher: "Ms.Shashika Udeni",
          room: "Room 304",
          startTime: "15:00",
          endTime: "17:00",
        },
        {
          subject: "Engineering Mechanics",
          teacher: "Mr.Illagolla",
          room: "Room 304",
          startTime: "17:00",
          endTime: "18:00",
        },
      ],
      // Tuesday
      [
        {
          subject: "MAT Lab practical or Electrical Engineering",
          teacher: "Ms.Samarathunga or Ms.Morapitiya",
          room: "IT Lab or Room 404",
          startTime: "08:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        {
          subject: "IT Lab or Electrical Engineering",
          teacher: "Ms.Chandima or Ms.Morapitiya",
          room: "IT Lab or Room 404",
          startTime: "13:00",
          endTime: "16:00",
        },
      ],
      // Wednesday
      [
        {
          subject: "E.E Engineering Lab ",
          teacher: "Demonstrators",
          room: "Electrical Engineering Lab",
          startTime: "09:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
      ],
      // Thursday
      [
        {
          subject: "Engineering Mathematics",
          teacher: "Ms.Sattar",
          room: "Room 304",
          startTime: "08:30",
          endTime: "11:30",
        },
        {
          subject: "Computer Technology and Networking",
          teacher: "Ms.Chandima",
          room: "Room 304",
          startTime: "11:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        {
          subject: "English and Communication Skills",
          teacher: "Ms.Shashika Udeni",
          room: "Room 304",
          startTime: "13:00",
          endTime: "16:00",
        },
        {
          subject: "Engineering Mechanics",
          teacher: "Mr.Illagolla",
          room: "Room 304",
          startTime: "16:00",
          endTime: "18:00",
        },
      ],
      // Friday
      [
        {
          subject: "Computer Technology and Networking",
          teacher: "Ms.Chandima",
          room: "Room 304",
          startTime: "08:30",
          endTime: "10:30",
        },
        {
          subject: "Properties of Engineering Materials",
          teacher: "Ms.A.K Liyanage",
          room: "Room 304",
          startTime: "10:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        { subject: "Lab Practicals", teacher: "Demonstrators", room: "Labs", startTime: "13:00", endTime: "16:00" },
      ],
    ],
  },
  electrical: {
    schedule: [
      // Sunday (empty for electrical)
      [],
      // Monday
      [
        {
          subject: "Computer Technology and Networking",
          teacher: "Mrs.S.Jayawardena",
          room: "Room 404",
          startTime: "07:30",
          endTime: "10:30",
        },
        {
          subject: "English and Communication Skills",
          teacher: "Ms.Shashika Udeni",
          room: "Room 404",
          startTime: "10:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        {
          subject: "Introduction to Thermodynamics",
          teacher: "Mr.Ilagolla",
          room: "Room 405",
          startTime: "13:00",
          endTime: "15:00",
        },
        {
          subject: "Computer Technology and Networking",
          teacher: "Mrs.S.Jayawardena",
          room: "Room",
          startTime: "15:00",
          endTime: "16:00",
        },
      ],
      // Tuesday
      [
        { subject: "MAT LAB", teacher: "Mrs.Samarathunga", room: "IT LAB", startTime: "09:30", endTime: "12:30" },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        { subject: "IT LAB", teacher: "Mrs.S.Jayawardena", room: "IT LAB", startTime: "13:00", endTime: "16:00" },
      ],
      // Wednesday
      [
        {
          subject: "Engineering Mathematics",
          teacher: "Mrs.Samarathunga",
          room: "Room 404",
          startTime: "07:30",
          endTime: "08:30",
        },
        {
          subject: "English and Communication Skills",
          teacher: "Ms.Shashika Udeni",
          room: "Room 404",
          startTime: "08:30",
          endTime: "09:30",
        },
        { subject: "Lab Practicals", teacher: "Demonstrators", room: "Labs", startTime: "09:30", endTime: "12:30" },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        { subject: "Human Values", teacher: "Mrs.Jayawardena", room: "Room 404", startTime: "13:00", endTime: "15:00" },
      ],
      // Thursday
      [
        {
          subject: "Engineering Mechanics",
          teacher: "Mrs.Sujeewani",
          room: "Room 404",
          startTime: "07:30",
          endTime: "10:30",
        },
        {
          subject: "E.E Engineering",
          teacher: "Mrs.Shifla Musthafa",
          room: "Room 404",
          startTime: "10:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        {
          subject: "Engineering Mathematics",
          teacher: "Mrs.Samarathunga",
          room: "Room 404",
          startTime: "13:00",
          endTime: "15:00",
        },
        {
          subject: "Properties of Engineering Materials",
          teacher: "Mrs.Asha Liyanage",
          room: "Room 305",
          startTime: "15:00",
          endTime: "17:00",
        },
      ],
      // Friday
      [
        { subject: "Lab Practical", teacher: "Demonstrators", room: "Labs", startTime: "09:30", endTime: "12:30" },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        {
          subject: "E.E Engineering Lab",
          teacher: "Demonstrators",
          room: "Labs",
          startTime: "13:00",
          endTime: "16:00",
        },
      ],
    ],
  },
  qs: {
    schedule: [
      // Sunday
      [
        {
          subject: "Principles of Management",
          teacher: "Ms.A.S.S.D Perera",
          room: "Room 304",
          startTime: "08:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        {
          subject: "Introduction to Law",
          teacher: "Ms.G.M.N Alahakon",
          room: "Room 304",
          startTime: "13:00",
          endTime: "17:00",
        },
      ],
      // Monday
      [
        {
          subject: "Computer Aided Drawing",
          teacher: "Ms.B.k.D Balasuriya",
          room: "Lab 2",
          startTime: "08:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:15" },
        {
          subject: "English and Communication Skills",
          teacher: "Ms.Shashika Udeni",
          room: "Room 305",
          startTime: "13:00",
          endTime: "15:00",
        },
      ],
      // Tuesday
      [
        {
          subject: "Engineering Surveying",
          teacher: "Demonstrators",
          room: "Practical",
          startTime: "09:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        {
          subject: "Engineering Surveying",
          teacher: "Demonstrators",
          room: "Practical",
          startTime: "13:00",
          endTime: "15:00",
        },
      ],
      // Wednesday
      [
        {
          subject: "Engineering Surveying",
          teacher: "Ms.B.k.D.Balasuriya",
          room: "Room 305",
          startTime: "09:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
      ],
      // Thursday
      [
        {
          subject: "English and Communication Skills",
          teacher: "Ms.Shashika Udeni",
          room: "Drawing Room",
          startTime: "08:30",
          endTime: "09:30",
        },
        {
          subject: "Measurement",
          teacher: "Ms.B.k.D.Balasuriya",
          room: "Drawing Room",
          startTime: "09:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        {
          subject: "Engineering Surveying",
          teacher: "Demonstrators",
          room: "Practical",
          startTime: "13:00",
          endTime: "16:00",
        },
        {
          subject: "Structural Mechanics",
          teacher: "Ms.W.A.Sujeewani",
          room: "Room 305",
          startTime: "16:15",
          endTime: "19:15",
        },
      ],
      // Friday
      [
        {
          subject: "Measurement",
          teacher: "Ms.B.k.D.Balasuriya",
          room: "Room 405",
          startTime: "08:30",
          endTime: "10:30",
        },
        {
          subject: "Human Values",
          teacher: "Ms.Shashika Udeni",
          room: "Room 405",
          startTime: "10:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
      ],
    ],
  },
  bse: {
    schedule: [
      // Sunday
      [
        {
          subject: "E.E Engineering",
          teacher: "Awaiting Data",
          room: "Room 303",
          startTime: "10:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
      ],
      // Monday
      [
        {
          subject: "E.E Engineering Lab",
          teacher: "Demonstrators",
          room: "Labs",
          startTime: "09:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        {
          subject: "Properties of Engineering Materials",
          teacher: "Ms.Asha Liyanage",
          room: "Room 303",
          startTime: "13:00",
          endTime: "15:00",
        },
      ],
      // Tuesday
      [
        {
          subject: "Computer Technology and Networking",
          teacher: "Ms.Chandima",
          room: "Room 406",
          startTime: "09:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        {
          subject: "IT Lab",
          teacher: "Ms.Chandima",
          room: "IT Lab 01",
          startTime: "13:00",
          endTime: "16:00",
        },
      ],
      // Wednesday
      [
        {
          subject: "Engineering Mechanics",
          teacher: "Mrs.Sujeewani",
          room: "Room 303",
          startTime: "07:30",
          endTime: "10:30",
        },
        {
          subject: "Introduction to Thermodynamics",
          teacher: "Mr.Shayan Perera",
          room: "Room 303",
          startTime: "10:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        {
          subject: "English and Communication Skills",
          teacher: "Ms.Shashika Udeni",
          room: "Room 303",
          startTime: "13:00",
          endTime: "16:00",
        },
      ],
      // Thursday
      [
        {
          subject: "Engineering Mathematics",
          teacher: "Mrs.Sattar",
          room: "Room 107",
          startTime: "11:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        {
          subject: "Lab Practical",
          teacher: "Demonstrators",
          room: "Labs",
          startTime: "13:00",
          endTime: "16:00",
        },
      ],
      // Friday
      [
        {
          subject: "Engineering Mathematics",
          teacher: "Mrs.Sattar",
          room: "Room 303",
          startTime: "07:30",
          endTime: "09:30",
        },
        {
          subject: "Human Values",
          teacher: "Ms.Shashika Udeni",
          room: "Room 107",
          startTime: "10:30",
          endTime: "12:30",
        },
        { type: "break", text: "Lunch Break", startTime: "12:30", endTime: "13:00" },
        {
          subject: "MAT Lab",
          teacher: "Mrs.Samarathunga",
          room: "IT Lab 02",
          startTime: "13:00",
          endTime: "16:00",
        },
      ],
    ],
  },
}

// Global variables
let currentDepartment = "mechanical"
let currentDay = 0 // 0 = Sunday, 1 = Monday, etc.
let selectedDay = null // For user-selected day, null means use current day
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

// Initialize the app when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Load saved department from localStorage if available
  const savedDepartment = localStorage.getItem("selectedDepartment")
  if (savedDepartment && timetableData[savedDepartment]) {
    currentDepartment = savedDepartment

    // Update the active tab
    const deptTabs = document.querySelectorAll(".dept-tab")
    deptTabs.forEach((tab) => {
      tab.classList.remove("active")
      if (tab.getAttribute("data-department") === currentDepartment) {
        tab.classList.add("active")
      }
    })
  }

  // Get current date and time and always reset to current day on page load
  updateDateTime()

  // Always set to current day on page load
  selectedDay = currentDay

  // Update active day tab
  const dayTabs = document.querySelectorAll(".day-tab")
  dayTabs.forEach((tab) => {
    tab.classList.remove("active")
    if (Number.parseInt(tab.getAttribute("data-day")) === currentDay) {
      tab.classList.add("active")
    }
  })

  // Set up department tabs
  setupDepartmentTabs()

  // Set up weekday tabs
  setupWeekdayTabs()

  // Load initial timetable
  loadTimetable(currentDepartment)

  // Update time every minute
  setInterval(updateDateTime, 60000)
})

// Format time for display (HH:MM)
function formatTimeForDisplay(timeString) {
  return timeString
}

// Parse time string to minutes since midnight
function parseTimeToMinutes(timeString) {
  const [hours, minutes] = timeString.split(":").map(Number)
  return hours * 60 + minutes
}

// Update date and time
function updateDateTime() {
  const now = new Date()
  currentDay = now.getDay() // 0 = Sunday, 1 = Monday, etc.

  // Format time
  const hours = now.getHours().toString().padStart(2, "0")
  const minutes = now.getMinutes().toString().padStart(2, "0")
  const currentTime = `${hours}:${minutes}`

  // Update the display
  document.getElementById("current-day-display").textContent = `Today is ${days[currentDay]}, ${currentTime}`

  // Highlight current time slot if viewing current day
  if (selectedDay === currentDay && hasScheduleForDay(currentDepartment, currentDay)) {
    highlightCurrentTimeSlot(hours, minutes)
  }
}

// Check if department has schedule for specific day
function hasScheduleForDay(department, day) {
  // Get the schedule for the department
  const departmentSchedule = timetableData[department].schedule

  // Check if the day index exists and has entries
  return departmentSchedule[day] && departmentSchedule[day].length > 0
}

// Set up department tabs
function setupDepartmentTabs() {
  const tabs = document.querySelectorAll(".dept-tab")
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"))

      // Add active class to clicked tab
      this.classList.add("active")

      // Load timetable for selected department
      const department = this.getAttribute("data-department")

      // Save selected department to localStorage
      localStorage.setItem("selectedDepartment", department)

      loadTimetable(department)
    })
  })
}

// Set up weekday tabs
function setupWeekdayTabs() {
  const tabs = document.querySelectorAll(".day-tab")
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"))

      // Add active class to clicked tab
      this.classList.add("active")

      // Get selected day
      const day = Number.parseInt(this.getAttribute("data-day"))

      // Update selected day
      selectedDay = day

      // Update the schedule title based on whether it's today or another day
      const scheduleTitle = document.getElementById("schedule-title")
      if (day === currentDay) {
        scheduleTitle.textContent = "Today's Schedule"
      } else {
        scheduleTitle.textContent = `${days[day]}'s Schedule`
      }

      // Show weekend notice if it's weekend and department doesn't have weekend classes
      updateWeekendNotice()

      // Load schedule for selected day
      loadSchedule()
    })
  })
}

// Load timetable for selected department
function loadTimetable(department) {
  currentDepartment = department

  // Always reset to current day when changing departments
  selectedDay = currentDay

  // Update active day tab
  const dayTabs = document.querySelectorAll(".day-tab")
  dayTabs.forEach((tab) => {
    tab.classList.remove("active")
    if (Number.parseInt(tab.getAttribute("data-day")) === currentDay) {
      tab.classList.add("active")
    }
  })

  // Set the schedule title to "Today's Schedule"
  document.getElementById("schedule-title").textContent = "Today's Schedule"

  // Load schedule
  loadSchedule()

  // Update weekend notice
  updateWeekendNotice()
}

// Update weekend notice
function updateWeekendNotice() {
  const weekendNotice = document.getElementById("weekend-notice")
  const weekendMessage = document.getElementById("weekend-message")

  if (!hasScheduleForDay(currentDepartment, selectedDay)) {
    weekendNotice.classList.remove("hidden")
    weekendMessage.textContent = `There are no classes scheduled for ${days[selectedDay]}.`
  } else {
    weekendNotice.classList.add("hidden")
  }
}

// Load schedule for selected day
function loadSchedule() {
  const scheduleTableBody = document.querySelector("#schedule-table tbody")
  scheduleTableBody.innerHTML = ""

  // If schedule exists for this day
  if (hasScheduleForDay(currentDepartment, selectedDay)) {
    const schedule = timetableData[currentDepartment].schedule[selectedDay]

    schedule.forEach((slot) => {
      const row = document.createElement("tr")

      // Add data-start and data-end attributes for highlighting current time slot
      row.setAttribute("data-start", slot.startTime)
      row.setAttribute("data-end", slot.endTime)

      // Time cell
      const timeCell = document.createElement("td")
      timeCell.textContent = `${formatTimeForDisplay(slot.startTime)} - ${formatTimeForDisplay(slot.endTime)}`
      row.appendChild(timeCell)

      if (slot.type === "break") {
        // Break cell (spans 3 columns)
        const breakCell = document.createElement("td")
        breakCell.classList.add("break-cell")
        breakCell.colSpan = 3
        breakCell.textContent = slot.text
        row.appendChild(breakCell)
      } else {
        // Subject cell
        const subjectCell = document.createElement("td")
        subjectCell.textContent = slot.subject
        row.appendChild(subjectCell)

        // Lecturer cell
        const lecturerCell = document.createElement("td")
        lecturerCell.textContent = slot.teacher
        row.appendChild(lecturerCell)

        // Room cell
        const roomCell = document.createElement("td")
        roomCell.textContent = slot.room
        row.appendChild(roomCell)
      }

      scheduleTableBody.appendChild(row)
    })

    // Highlight current time slot if viewing current day
    if (selectedDay === currentDay) {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      highlightCurrentTimeSlot(hours, minutes)
    }
  } else {
    // No schedule for the selected day
    const messageRow = document.createElement("tr")
    const messageCell = document.createElement("td")
    messageCell.colSpan = 4
    messageCell.textContent = `No classes scheduled for ${days[selectedDay]}.`
    messageCell.style.textAlign = "center"
    messageCell.style.fontStyle = "italic"
    messageCell.style.padding = "10px"
    messageCell.style.backgroundColor = "#fff3cd"
    messageRow.appendChild(messageCell)
    scheduleTableBody.appendChild(messageRow)
  }
}

// Highlight current time slot
function highlightCurrentTimeSlot(hours, minutes) {
  // Only highlight if we're viewing the current day
  if (selectedDay !== currentDay) {
    return
  }

  // Reset all time slot highlights
  const rows = document.querySelectorAll("#schedule-table tbody tr")
  rows.forEach((row) => {
    row.classList.remove("current-time-indicator")
    row.classList.remove("blink")
  })

  // Format current time to match data-time attribute (HH:MM)
  const currentTime = `${hours}:${minutes}`
  const currentTimeInMinutes = parseTimeToMinutes(currentTime)

  // Find time slots that include the current time
  rows.forEach((row) => {
    const startTime = row.getAttribute("data-start")
    const endTime = row.getAttribute("data-end")

    if (startTime && endTime) {
      const startTimeInMinutes = parseTimeToMinutes(startTime)
      const endTimeInMinutes = parseTimeToMinutes(endTime)

      // If current time is within this slot's range
      if (currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes < endTimeInMinutes) {
        row.classList.add("current-time-indicator")
        row.classList.add("blink")
      }
    }
  })
}

// Create a pulsing effect for the current time indicator
setInterval(() => {
  const currentIndicators = document.querySelectorAll(".current-time-indicator")
  currentIndicators.forEach((indicator) => {
    // Toggle the blink class to create a pulsing effect
    indicator.classList.toggle("blink")
  })
}, 1000)
