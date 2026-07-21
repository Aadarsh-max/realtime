# Real-Time Task Scheduler - Frontend

An interactive CPU scheduling simulator built with React that visualizes how operating systems schedule processes in real-time. This educational project implements five major CPU scheduling algorithms and displays their performance metrics through Gantt charts, timeline visualizations, and detailed analytics.

Live Demo: https://realtime-khaki-delta.vercel.app/

## Project Overview

This frontend application is part of a 4th semester capstone project that bridges Operating Systems concepts with practical algorithm implementation. It allows users to input process details and simulate how different CPU scheduling algorithms execute those processes, providing visual and numerical insights into their efficiency and behavior.

## Features

**Interactive Process Input**
- Users can define processes with arrival time, burst time, and priority
- Dynamic process creation with intuitive interface
- Multiple process input methods for ease of use

**Five Scheduling Algorithms**
- FCFS (First Come First Serve)
- SJF Non-Preemptive (Shortest Job First)
- SJF Preemptive (Shortest Remaining Time First / SRTF)
- Priority Scheduling
- Round Robin

**Real-Time Visualization**
- Gantt Chart showing process execution timeline
- Step-by-step animation of CPU scheduling
- Visual representation of context switching
- Color-coded processes for easy identification

**Performance Metrics**
- CPU Utilization percentage
- Waiting Time for each process
- Turnaround Time (Completion Time - Arrival Time)
- Average waiting time across all processes
- Starvation detection and reporting
- Deadline miss ratio for real-time systems

**Educational Content**
- Algorithm explanations and OS concepts
- Advantages and disadvantages of each algorithm
- Time complexity analysis (Big O notation)
- Viva preparation content and answer frameworks
- Interactive learning with visual feedback

## Tech Stack

**Frontend Framework**
- React 18 - UI library for building interactive components
- Vite - Modern bundler for fast development and optimized builds

**Styling**
- Tailwind CSS - Utility-first CSS framework
- Framer Motion - Smooth animations for timeline visualization
- Custom CSS for Gantt chart rendering

**State Management**
- React Hooks (useState, useContext) - Local state and component communication
- Context API - Global state for process data and algorithm results

**Utilities**
- Axios - HTTP client for backend communication
- Chart libraries - Data visualization for metrics
- Custom components for algorithm selection and results display

## How It Works

**User Workflow**

1. User enters process details (arrival time, burst time, priority)
2. Selects scheduling algorithm to simulate
3. Clicks "Run Simulation"
4. Frontend sends data to backend API
5. Backend calculates scheduling and returns timeline
6. Frontend visualizes results with Gantt chart and metrics

**Algorithm Simulation Flow**

```
User Input → Backend Processing → Timeline Generation → Metrics Calculation → Visual Display
```

## Scheduling Algorithms Explained

### FCFS (First Come First Serve)

**Concept:** Processes execute in arrival order, like a queue.

**Characteristics:**
- Non-preemptive (no interruptions)
- Time Complexity: O(n)
- Simple to understand and implement

**Performance:**
- No starvation
- High waiting time due to convoy effect
- Poor for mixed short/long jobs

**Viva Answer:** "FCFS executes processes in arrival order without preemption using a queue, but suffers from high waiting time due to the convoy effect."

---

### SJF Non-Preemptive (Shortest Job First)

**Concept:** Select the process with smallest burst time and execute completely.

**Characteristics:**
- Based on Greedy Algorithm
- Time Complexity: O(n²) simple, O(n log n) with heap optimization
- Requires burst time knowledge

**Performance:**
- Minimum average waiting time
- Starvation possible for long jobs
- Optimal for minimizing average waiting time

**Viva Answer:** "SJF chooses the shortest job first to minimize average waiting time, but may cause starvation of longer processes."

---

### SRTF (Shortest Remaining Time First / SJF Preemptive)

**Concept:** Always execute the process with shortest remaining time; preempt if shorter job arrives.

**Characteristics:**
- Preemptive version of SJF
- Uses Priority Queue / Min Heap
- Time Complexity: O(n log n)
- Requires dynamic time prediction

**Performance:**
- Best average waiting time among preemptive algorithms
- More context switching overhead
- Starvation still possible

**Viva Answer:** "SRTF improves SJF by allowing preemption, dynamically selecting the process with shortest remaining time for optimal wait time reduction."

---

### Priority Scheduling

**Concept:** Each process has a priority value; higher priority executes first.

**Characteristics:**
- Can be preemptive or non-preemptive
- Uses Heap or Priority Queue
- Time Complexity: O(n log n)
- Priority assigned statically or dynamically

**Problems & Solutions:**
- Problem: Starvation of low-priority processes
- Solution: Aging (gradually increase priority over time)

**Performance:**
- Important tasks execute first
- Flexible priority assignment
- Starvation risk without aging

**Viva Answer:** "Priority scheduling assigns CPU based on priority levels, ensuring important tasks execute first, but may cause starvation solved using aging techniques."

---

### Round Robin (RR)

**Concept:** Each process gets fixed time quantum; if incomplete, move to back of queue.

**Characteristics:**
- Fair scheduling for all processes
- Uses Circular Queue data structure
- Time Complexity: O(n × number of cycles)
- Requires optimal time quantum selection

**Impact of Time Quantum:**
- Too small → high context switching overhead
- Too large → behaves like FCFS
- Optimal value balances fairness and efficiency

**Performance:**
- Fair CPU distribution
- No starvation
- Moderate average waiting time
- Suitable for time-sharing systems

**Viva Answer:** "Round Robin ensures fairness by giving each process equal time slices using a circular queue, preventing starvation."

---

## Performance Metrics Explained

### Waiting Time
**Formula:** Waiting Time = Turnaround Time - Burst Time

The total time a process spends waiting in the ready queue before execution.

### Turnaround Time
**Formula:** Turnaround Time = Completion Time - Arrival Time

The total time from when a process arrives until it completes execution.

### CPU Utilization
**Formula:** CPU Utilization = (CPU Busy Time / Total Time) × 100

Percentage of time the CPU is actively executing processes rather than idle.

### Starvation
A condition where a process never gets CPU time due to scheduling algorithm bias (common in Priority Scheduling and SJF).

### Deadline Miss Ratio
In real-time systems, the percentage of tasks that fail to complete by their deadline. Critical for real-time OS performance.

## Project Structure

The frontend consists of reusable React components organized by functionality:

**Core Components**
- Process Input Form - Capture process details from users
- Algorithm Selector - Choose which algorithm to simulate
- Gantt Chart Renderer - Display timeline visualization
- Metrics Dashboard - Show performance statistics

**Utilities**
- API service for backend communication
- Visualization helpers for chart rendering
- Data formatters for metrics display

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/task-scheduler-frontend.git
cd task-scheduler-frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Configuration

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=Real-Time Task Scheduler
```

## Using the Application

**Step 1: Input Processes**
- Click "Add Process"
- Enter arrival time, burst time, and priority
- Add multiple processes to simulate

**Step 2: Select Algorithm**
- Choose from 5 scheduling algorithms
- Read algorithm description
- Click "Run Simulation"

**Step 3: View Results**
- Gantt chart shows execution timeline
- Metrics panel displays performance statistics
- Compare different algorithms side-by-side

**Step 4: Analyze**
- Understand why certain algorithms perform better
- Learn OS scheduling concepts
- Prepare for interviews/viva

## Key Learning Outcomes

After using this simulator, you'll understand:
- How operating systems schedule CPU time among processes
- Trade-offs between different scheduling algorithms
- Why certain algorithms perform better for specific workloads
- Concepts like starvation, context switching, and CPU utilization
- Real-time systems and deadline management

## Algorithm Comparison

| Algorithm | Preemption | Avg Wait Time | Starvation | Best For |
|-----------|------------|---------------|-----------|----------|
| FCFS | No | High | No | Batch processing |
| SJF Non-Preemptive | No | Low | Yes | Known short jobs |
| SRTF | Yes | Very Low | Yes | Mixed workloads |
| Priority | Optional | Medium | Yes | Important tasks |
| Round Robin | Yes | Medium | No | Interactive systems |

## Technical Highlights

**Real-Time Simulation**
- Step-by-step execution animation
- Live metric calculation
- Responsive UI updates

**Educational Focus**
- Clear algorithm explanations
- Visual learning through Gantt charts
- Viva preparation content

**Performance**
- Optimized React rendering
- Lazy loading of components
- Efficient state management

## Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## Deployment

Currently deployed on Vercel with automatic deployments from main branch.

**Live URL:** https://realtime-khaki-delta.vercel.app/

## Future Enhancements

- Multi-level feedback queue scheduling
- Comparison view for running multiple algorithms simultaneously
- Export results as PDF or image
- Dark mode UI
- Mobile responsive improvements
- Advanced metrics (response time, throughput)

## Academic Context

This is a 4th semester capstone project that demonstrates:
- Understanding of OS scheduling concepts
- Algorithm implementation and analysis
- Full-stack development skills
- Educational software design

## References & Learning

The project implements concepts from:
- Operating Systems: Three Easy Pieces (OSTEP)
- Algorithm design and analysis courses
- Real-time systems theory

## Troubleshooting

**Simulation not running?**
- Ensure backend server is running
- Check browser console for errors
- Verify API URL in environment variables

**Metrics look incorrect?**
- Verify process input values
- Check algorithm selection
- Review backend logs

## Support & Feedback

For issues, suggestions, or questions about scheduling algorithms, please open an issue on GitHub.

---

**Built with passion for learning Operating Systems concepts through interactive visualization.**
