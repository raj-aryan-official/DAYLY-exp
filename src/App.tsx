import { useState, useEffect } from 'react';
import type { Calendar, Task, AIResult, Screen } from './types/index';
import SplashScreen from './pages/SplashScreen/SplashScreen';
import WelcomeScreen from './pages/WelcomeScreen/WelcomeScreen';
import DashboardScreen from './pages/DashboardScreen/DashboardScreen';
import ProfileScreen from './pages/ProfileScreen/ProfileScreen';
import TasksScreen from './pages/TasksScreen/TasksScreen';
import CalendarScreen from './pages/CalendarScreen/CalendarScreen';
import StoreScreen from './pages/StoreScreen/StoreScreen';
import SettingsScreen from './pages/SettingsScreen/SettingsScreen';
import FilterScreen from './pages/FilterScreen/FilterScreen';

const DaylyApp = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [userName] = useState('Rahul');
  const [calendars, setCalendars] = useState<Calendar[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showAIModal, setShowAIModal] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [selectedCalendar, setSelectedCalendar] = useState<Calendar | null>(null);

  // Splash screen auto-advance
  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => setCurrentScreen('welcome'), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  // Sample data initialization
  useEffect(() => {
    setCalendars([
      {
        id: 1,
        name: 'Gym Schedule',
        color: 'bg-blue-500',
        tasks: 12,
        completed: 8,
        favorite: true,
      },
      {
        id: 2,
        name: 'Food Diet',
        color: 'bg-green-500',
        tasks: 21,
        completed: 15,
        favorite: true,
      },
      {
        id: 3,
        name: 'Work Projects',
        color: 'bg-purple-500',
        tasks: 8,
        completed: 3,
        favorite: false,
      },
    ]);

    setTasks([
      {
        id: 1,
        calendarId: 1,
        title: 'Morning Cardio',
        time: '07:00 AM',
        status: 'completed',
        date: '2025-11-26',
      },
      {
        id: 2,
        calendarId: 1,
        title: 'Upper Body Workout',
        time: '07:30 AM',
        status: 'next',
        date: '2025-11-26',
      },
      {
        id: 3,
        calendarId: 2,
        title: 'Breakfast - Oats & Fruits',
        time: '08:30 AM',
        status: 'pending',
        date: '2025-11-26',
      },
      {
        id: 4,
        calendarId: 2,
        title: 'Lunch - Grilled Chicken',
        time: '01:00 PM',
        status: 'pending',
        date: '2025-11-26',
      },
      {
        id: 5,
        calendarId: 3,
        title: 'Team Meeting',
        time: '10:00 AM',
        status: 'next',
        date: '2025-11-26',
      },
    ]);
  }, []);

  const processAIRequest = async (input: string): Promise<AIResult> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const result: AIResult = {
      calendarsCreated: [],
      tasksCreated: [],
    };

    const inputLower = input.toLowerCase();

    if (inputLower.includes('gym')) {
      const gymCalendar: Calendar = {
        id: Date.now(),
        name: 'AI Gym Plan',
        color: 'bg-red-500',
        tasks: 15,
        completed: 0,
        favorite: false,
      };
      result.calendarsCreated.push(gymCalendar);

      const gymTasks: Task[] = [
        {
          id: Date.now() + 1,
          calendarId: gymCalendar.id,
          title: 'Warm up - 10 mins',
          time: '07:00 PM',
          status: 'pending',
          date: '2025-11-26',
        },
        {
          id: Date.now() + 2,
          calendarId: gymCalendar.id,
          title: 'Strength Training',
          time: '07:15 PM',
          status: 'pending',
          date: '2025-11-26',
        },
        {
          id: Date.now() + 3,
          calendarId: gymCalendar.id,
          title: 'Cool down & Stretch',
          time: '08:00 PM',
          status: 'pending',
          date: '2025-11-26',
        },
      ];
      result.tasksCreated.push(...gymTasks);
    }

    if (inputLower.includes('diet')) {
      const dietCalendar: Calendar = {
        id: Date.now() + 100,
        name: 'AI Diet Plan',
        color: 'bg-green-500',
        tasks: 21,
        completed: 0,
        favorite: false,
      };
      result.calendarsCreated.push(dietCalendar);

      const dietTasks: Task[] = [
        {
          id: Date.now() + 101,
          calendarId: dietCalendar.id,
          title: 'Breakfast - Protein Shake',
          time: '08:00 AM',
          status: 'pending',
          date: '2025-11-26',
        },
        {
          id: Date.now() + 102,
          calendarId: dietCalendar.id,
          title: 'Mid-morning Snack',
          time: '11:00 AM',
          status: 'pending',
          date: '2025-11-26',
        },
        {
          id: Date.now() + 103,
          calendarId: dietCalendar.id,
          title: 'Lunch - Balanced Meal',
          time: '01:00 PM',
          status: 'pending',
          date: '2025-11-26',
        },
      ];
      result.tasksCreated.push(...dietTasks);
    }

    return result;
  };

  const saveAISchedule = (result: AIResult) => {
    setCalendars([...calendars, ...result.calendarsCreated]);
    setTasks([...tasks, ...result.tasksCreated]);
    setCurrentScreen('dashboard');
  };

  const toggleFavorite = (calId: number) => {
    setCalendars(
      calendars.map((cal) =>
        cal.id === calId ? { ...cal, favorite: !cal.favorite } : cal
      )
    );
  };

  const handleTaskToggle = (taskId: number) => {
    setTasks(
      tasks.map((t) =>
        t.id === taskId
          ? {
              ...t,
              status: t.status === 'completed' ? 'pending' : 'completed',
            }
          : t
      )
    );
  };

  const handleCalendarClick = (calendar: Calendar) => {
    setSelectedCalendar(calendar);
    setCurrentScreen('tasks');
  };

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  // Render screens
  if (currentScreen === 'splash') {
    return <SplashScreen />;
  }

  if (currentScreen === 'welcome') {
    return <WelcomeScreen onGetStarted={() => setCurrentScreen('dashboard')} />;
  }

  if (currentScreen === 'dashboard') {
    return (
      <DashboardScreen
        userName={userName}
        calendars={calendars}
        onNavigate={handleNavigate}
        onShowSideMenu={() => setShowSideMenu(true)}
        showSideMenu={showSideMenu}
        onCloseSideMenu={() => setShowSideMenu(false)}
        showAIModal={showAIModal}
        onShowAIModal={() => setShowAIModal(true)}
        onCloseAIModal={() => setShowAIModal(false)}
        onProcessAIRequest={processAIRequest}
        onSaveAISchedule={saveAISchedule}
        onCalendarClick={handleCalendarClick}
      />
    );
  }

  if (currentScreen === 'profile') {
    return (
      <ProfileScreen
        userName={userName}
        calendars={calendars}
        onNavigate={handleNavigate}
      />
    );
  }

  if (currentScreen === 'tasks') {
    return (
      <TasksScreen
        tasks={tasks}
        selectedCalendar={selectedCalendar}
        onNavigate={handleNavigate}
        onShowSideMenu={() => setShowSideMenu(true)}
        showSideMenu={showSideMenu}
        onCloseSideMenu={() => setShowSideMenu(false)}
        onTaskToggle={handleTaskToggle}
      />
    );
  }

  if (currentScreen === 'calendar') {
    return (
      <CalendarScreen
        calendars={calendars}
        onNavigate={handleNavigate}
        onShowSideMenu={() => setShowSideMenu(true)}
        showSideMenu={showSideMenu}
        onCloseSideMenu={() => setShowSideMenu(false)}
        showAIModal={showAIModal}
        onShowAIModal={() => setShowAIModal(true)}
        onCloseAIModal={() => setShowAIModal(false)}
        onProcessAIRequest={processAIRequest}
        onSaveAISchedule={saveAISchedule}
        onCalendarClick={handleCalendarClick}
        onToggleFavorite={toggleFavorite}
      />
    );
  }

  if (currentScreen === 'store') {
    return (
      <StoreScreen
        onNavigate={handleNavigate}
        onShowSideMenu={() => setShowSideMenu(true)}
        showSideMenu={showSideMenu}
        onCloseSideMenu={() => setShowSideMenu(false)}
      />
    );
  }

  if (currentScreen === 'settings') {
    return <SettingsScreen onNavigate={handleNavigate} />;
  }

  if (currentScreen === 'filter') {
    return (
      <FilterScreen
        onNavigate={handleNavigate}
        onShowSideMenu={() => setShowSideMenu(true)}
        showSideMenu={showSideMenu}
        onCloseSideMenu={() => setShowSideMenu(false)}
      />
    );
  }

  return null;
};

export default DaylyApp;
