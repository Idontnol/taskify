export const tasks = [
    {
      id: 1,
      title: "Finish React Project",
      description: "Complete the React project for Taskify by tomorrow.",
      dueDate: "2024-12-20",
      detailedInfo: 
        "This task involves completing the React project for the Taskify platform. The project needs to be finished by tomorrow, with all major features implemented and bugs resolved. Ensure proper testing is conducted before submission.",
      status: "completed",
    },
    {
      id: 2,
      title: "Plan Team Meeting",
      description: "Schedule a meeting with the team to discuss project updates.",
      dueDate: "2024-12-21",
      detailedInfo: 
        "Organize a team meeting to discuss the current status of ongoing projects, address any blockers, and plan the next set of tasks. The meeting should also include a review of deadlines and deliverables.",
      status: "pending",
    },
    {
      id: 3,
      title: "Update Documentation",
      description: "Revise the project documentation with the latest updates and screenshots.",
      dueDate: "2024-12-22",
      detailedInfo: 
        "Go through the project documentation and update it with the latest information. This includes adding screenshots of new features, revising outdated sections, and ensuring clarity for end-users and stakeholders.",
      status: "pending",
    },
    {
      id: 4,
      title: "Code Review Session",
      description: "Conduct a code review session for the newly committed features.",
      dueDate: "2024-12-23",
      detailedInfo: 
        "Facilitate a detailed code review session focusing on recently committed features. Evaluate the code quality, adherence to coding standards, and identify potential optimizations or issues.",
      status: "completed",
    },
    {
      id: 5,
      title: "Design Homepage Layout",
      description: "Create a mockup for the homepage redesign with updated branding.",
      dueDate: "2024-12-24",
      detailedInfo: 
        "Design a new layout for the homepage that incorporates updated branding guidelines. The mockup should reflect modern design principles and enhance user engagement and navigation.",
      status: "pending",
    },
    {
      id: 6,
      title: "Send Weekly Report",
      description: "Prepare and send the weekly status report to the project stakeholders.",
      dueDate: "2024-12-25",
      detailedInfo: 
        "Compile the weekly status report summarizing project progress, challenges faced, and plans for the upcoming week. Ensure the report is clear, concise, and includes key performance metrics.",
      status: "completed",
    },
    {
      id: 7,
      title: "Fix Critical Bug",
      description: "Investigate and resolve the critical issue causing login failures.",
      dueDate: "2024-12-26",
      detailedInfo: 
        "Analyze and debug the critical issue affecting user logins. Identify the root cause, implement a fix, and thoroughly test the solution to ensure the problem is resolved without introducing new issues.",
      status: "pending",
    },
    {
      id: 8,
      title: "Organize Knowledge Sharing Session",
      description: "Plan and conduct a knowledge sharing session on React hooks.",
      dueDate: "2024-12-27",
      detailedInfo: 
        "Prepare a comprehensive session on React hooks, covering fundamental concepts, practical examples, and advanced usage patterns. Engage participants with interactive discussions and Q&A.",
      status: "completed",
    },
  ];
  
  export const statusConverter=(stat)=>{
    console.log(stat,"sssssssssssssssssssssssssss");
    if(stat==="To DO") return "toDo";
    else if(stat==="In Progress") return "inProgress";
    else if(stat==="In Review") return "inReview";
    else return "completed";
  }
  export const projects = [
    {
      id: 0,
      name: "Freelance Project",
      details: {
        toDo: [
          { title: "Design Wireframes", startDate: "2024-01-10", endDate: "2024-01-15", status: "toDo" },
          { title: "Set Up Backend", startDate: "2024-01-16", endDate: "2024-01-20", status: "toDo" }
        ],
        inProgress: [
          { title: "Frontend Development", startDate: "2024-01-21", endDate: "2024-01-25", status: "inProgress" }
        ],
        inReview: [
          { title: "Code Review", startDate: "2024-01-26", endDate: "2024-01-28", status: "inReview" }
        ],
        completed: [
          { title: "Requirement Gathering", startDate: "2024-01-01", endDate: "2024-01-05", status: "completed" }
        ]
      }
    },
    {
      id: 1,
      name: "SBI Outsource",
      details: {
        toDo: [
          { title: "Initial Setup", startDate: "2024-02-01", endDate: "2024-02-05", status: "toDo" }
        ],
        inProgress: [
          { title: "Database Integration", startDate: "2024-02-06", endDate: "2024-02-10", status: "inProgress" }
        ],
        inReview: [
          { title: "Security Audit", startDate: "2024-02-11", endDate: "2024-02-12", status: "inReview" }
        ],
        completed: [
          { title: "Initial Planning", startDate: "2024-01-20", endDate: "2024-01-25", status: "completed" },
          { title: "Requirement Documentation", startDate: "2024-01-26", endDate: "2024-01-30", status: "completed" }
        ]
      }
    },
    {
      id: 2,
      name: "HPCL Project 1",
      details: {
        toDo: [
          { title: "User Interface Design", startDate: "2024-03-01", endDate: "2024-03-05", status: "toDo" }
        ],
        inProgress: [
          { title: "API Development", startDate: "2024-03-06", endDate: "2024-03-15", status: "inProgress" }
        ],
        inReview: [
          { title: "Client Feedback Session", startDate: "2024-03-16", endDate: "2024-03-17", status: "inReview" }
        ],
        completed: [
          { title: "Project Kickoff", startDate: "2024-02-20", endDate: "2024-02-22", status: "completed" }
        ]
      }
    }
  ];
  