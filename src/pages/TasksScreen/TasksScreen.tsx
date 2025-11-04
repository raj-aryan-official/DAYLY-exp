import React from 'react';
import { X, Plus, Clock } from 'lucide-react';
import type { Task, Calendar as CalendarType, Screen } from '../../types/index';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import SideMenu from '../../components/SideMenu/SideMenu';
import './TasksScreen.css';

interface TasksScreenProps {
  tasks: Task[];
  selectedCalendar: CalendarType | null;
  onNavigate: (screen: Screen) => void;
  onShowSideMenu: () => void;
  showSideMenu: boolean;
  onCloseSideMenu: () => void;
  onTaskToggle: (taskId: number) => void;
}

const TasksScreen: React.FC<TasksScreenProps> = ({
  tasks,
  selectedCalendar,
  onNavigate,
  onShowSideMenu,
  showSideMenu,
  onCloseSideMenu,
  onTaskToggle,
}) => {
  const displayTasks = selectedCalendar
    ? tasks.filter((t) => t.calendarId === selectedCalendar.id)
    : tasks;

  return (
    <div className="tasks-screen">
      <div className="tasks-header">
        <div className="tasks-header-top">
          <button
            onClick={() => {
              onNavigate('dashboard');
            }}
            className="tasks-close-button"
          >
            <X className="tasks-close-icon" />
          </button>
          <h1 className="tasks-title">
            <img src="/logo.png" alt="DAYLY" className="app-logo" />{' '}
            {selectedCalendar ? selectedCalendar.name : 'All Tasks'}
          </h1>
          <Plus className="tasks-add-icon" />
        </div>
      </div>

      <div className="tasks-content">
        {displayTasks.map((task) => (
          <div key={task.id} className="tasks-task-item">
            <div className="tasks-task-content">
              <input
                type="checkbox"
                checked={task.status === 'completed'}
                className="tasks-checkbox"
                onChange={() => onTaskToggle(task.id)}
              />
              <div className="tasks-task-details">
                <h3
                  className={`tasks-task-title ${
                    task.status === 'completed' ? 'tasks-task-completed' : ''
                  }`}
                >
                  {task.title}
                </h3>
                <p className="tasks-task-time">
                  <Clock className="tasks-time-icon" />
                  {task.time}
                </p>
                {task.status === 'next' && (
                  <span className="tasks-next-badge">Next to do</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <BottomNavigation
        currentScreen="tasks"
        onNavigate={onNavigate}
        onMenuClick={onShowSideMenu}
      />

      {showSideMenu && (
        <SideMenu onClose={onCloseSideMenu} onNavigate={onNavigate} />
      )}
    </div>
  );
};

export default TasksScreen;

