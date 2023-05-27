import { useState } from 'react';
import AccordionItem from "./AccordionItem";
import { tabs } from '../constants/constants';
import { todos } from '../constants/constants';

const Accordion = () => {
  const [activeTab, setActiveTab] = useState('today');
  const [tasks, setTasks] = useState([...todos]);

  const handleClick = (tab) => {
    setActiveTab((prevTab) => (prevTab === tab ? null : tab));
  };

  const filterTasksByStatus = (status) => {
    if (status === 'completed') {
      return tasks.filter((task) => task.status === 'Выполнена');
    } else if (status === 'upcoming') {
      return tasks.filter((task) => task.status !== 'Выполнена');
    } else {
      return tasks;
    }
  };

  const updateTaskStatus = (taskId, status) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className='accordion-container'>
      <div className='accordion'>
        {tabs.map((item) => (
          <AccordionItem
            key={item.id}
            title={item.title}
            activeTab={activeTab}
            handleClick={handleClick}
            state={item.state}
            tasks={filterTasksByStatus(item.state)}
            updateTaskStatus={updateTaskStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;

