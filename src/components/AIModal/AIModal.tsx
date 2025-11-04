import React, { useState } from 'react';
import { X, Sparkles, Send, Check } from 'lucide-react';
import type { Calendar, Task, AIResult } from '../../types/index';
import '../../styles/colors.css';
import './AIModal.css';

interface AIModalProps {
  onClose: () => void;
  onSave: (result: AIResult) => void;
  onProcessRequest: (input: string) => Promise<AIResult>;
}

const AIModal: React.FC<AIModalProps> = ({
  onClose,
  onSave,
  onProcessRequest,
}) => {
  const [aiInput, setAiInput] = useState('');
  const [aiProcessing, setAiProcessing] = useState(false);
  const [aiResult, setAiResult] = useState<AIResult | null>(null);

  const handleProcess = async () => {
    if (!aiInput.trim()) return;

    setAiProcessing(true);
    try {
      const result = await onProcessRequest(aiInput);
      setAiResult(result);
    } finally {
      setAiProcessing(false);
    }
  };

  const handleSave = () => {
    if (aiResult) {
      onSave(aiResult);
      setAiInput('');
      setAiResult(null);
      onClose();
    }
  };

  const handleClose = () => {
    setAiInput('');
    setAiResult(null);
    onClose();
  };

  return (
    <div className="ai-modal-overlay">
      <div className="ai-modal">
        <div className="ai-modal-content">
          <div className="ai-modal-header">
            <h2 className="ai-modal-title">
              <Sparkles className="ai-modal-icon" />
              AI Scheduler
            </h2>
            <X className="ai-modal-close" onClick={handleClose} />
          </div>

          {!aiResult ? (
            <>
              <p className="ai-modal-description">
                Tell me what schedule you need and I'll create it for you!
              </p>

              <div className="ai-modal-input-container">
                <textarea
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  placeholder="E.g., I need a gym plan for Monday, Wednesday, Friday at 7pm and a diet plan for all week"
                  className="ai-modal-textarea"
                  disabled={aiProcessing}
                />
              </div>

              {aiProcessing ? (
                <div className="ai-modal-loading">
                  <div className="ai-modal-spinner"></div>
                  <p className="ai-modal-loading-text">
                    AI is creating your schedule...
                  </p>
                </div>
              ) : (
                <button
                  onClick={handleProcess}
                  disabled={!aiInput.trim()}
                  className="ai-modal-button"
                >
                  <Send className="ai-modal-button-icon" />
                  Create Schedule
                </button>
              )}
            </>
          ) : (
            <>
              <div className="ai-modal-success">
                <div className="ai-modal-success-header">
                  <Check className="ai-modal-success-icon" />
                  <span className="ai-modal-success-title">Schedule Created!</span>
                </div>
                <p className="ai-modal-success-text">
                  Created {aiResult.calendarsCreated.length} calendar(s) with{' '}
                  {aiResult.tasksCreated.length} tasks
                </p>
              </div>

              <div className="ai-modal-result-section">
                <h3 className="ai-modal-result-title">New Calendars:</h3>
                {aiResult.calendarsCreated.map((cal) => (
                  <div key={cal.id} className="ai-modal-calendar-item">
                    <div className={`ai-modal-calendar-dot ${cal.color}`}></div>
                    <span className="ai-modal-calendar-name">{cal.name}</span>
                  </div>
                ))}
              </div>

              <div className="ai-modal-result-section">
                <h3 className="ai-modal-result-title">Sample Tasks:</h3>
                {aiResult.tasksCreated.slice(0, 3).map((task) => (
                  <div key={task.id} className="ai-modal-task-item">
                    <p className="ai-modal-task-title">{task.title}</p>
                    <p className="ai-modal-task-time">{task.time}</p>
                  </div>
                ))}
              </div>

              <button onClick={handleSave} className="ai-modal-button">
                Save to My Calendar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIModal;

