const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Submit weekly report",
        "description": "Complete and submit the weekly performance report.",
        "date": "2025-06-24",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Client meeting",
        "description": "Attend the scheduled meeting with ABC Corp.",
        "date": "2025-06-20",
        "category": "Meetings"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Code review",
        "description": "Review code submissions from junior devs.",
        "date": "2025-06-22",
        "category": "Development"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Update CRM",
        "description": "Log the latest customer interactions.",
        "date": "2025-06-24",
        "category": "CRM"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Product demo",
        "description": "Deliver demo to internal sales team.",
        "date": "2025-06-19",
        "category": "Presentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Survey analysis",
        "description": "Analyze the recent customer feedback survey.",
        "date": "2025-06-18",
        "category": "Analysis"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Create task flow diagram",
        "description": "Draw a new flowchart for onboarding process.",
        "date": "2025-06-24",
        "category": "Planning"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Design homepage mockup",
        "description": "Draft the new homepage layout in Figma.",
        "date": "2025-06-24",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Team feedback session",
        "description": "Gather feedback from UI team.",
        "date": "2025-06-21",
        "category": "Collaboration"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Bug fix sprint",
        "description": "Fix UI bugs reported in sprint review.",
        "date": "2025-06-22",
        "category": "Bug Fixes"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Test mobile layout",
        "description": "Ensure responsiveness on iOS and Android.",
        "date": "2025-06-24",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Design system update",
        "description": "Refactor components in design system.",
        "date": "2025-06-19",
        "category": "Design"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Deploy staging build",
        "description": "Deploy the latest code to the staging server.",
        "date": "2025-06-24",
        "category": "Deployment"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Refactor auth module",
        "description": "Clean up and modularize authentication logic.",
        "date": "2025-06-20",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Server monitoring setup",
        "description": "Set up monitoring with Prometheus and Grafana.",
        "date": "2025-06-22",
        "category": "Infrastructure"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Schedule training",
        "description": "Plan internal training session on new tools.",
        "date": "2025-06-24",
        "category": "Training"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Internal newsletter",
        "description": "Write and send June edition.",
        "date": "2025-06-20",
        "category": "Communication"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Employee onboarding checklist",
        "description": "Update HR onboarding docs.",
        "date": "2025-06-21",
        "category": "HR"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Plan team event",
        "description": "Organize end-of-quarter celebration.",
        "date": "2025-06-25",
        "category": "Events"
      }
    ]
  }
];

const admin = {
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
};

export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}