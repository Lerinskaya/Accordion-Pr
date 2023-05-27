import CustomSelect from '../shared/Select';
import Icon from '../assets/arrow.svg'

const AccordionItem = ({ title, activeTab, handleClick, state, updateTaskStatus, tasks }) => {
  const isActive= activeTab === state;

  const handleChange = (event, taskId) => {
    updateTaskStatus(taskId, event.target.value);
  };

  const handleTitleClick = () => {
    handleClick(state);
  };
  
  const getStatusClassName = (status) => {
    switch (status) {
      case 'В работе':
        return 'current-option';
      case 'На паузе':
        return 'stop-option';
      default:
        return '';
    }
  };

  return (
    <div className="accordion-item">
      <div className="accordion-tab" onClick={handleTitleClick} >
        {title}
        <div className={`accordion-icon ${isActive ? 'active' : ''}`}>
        <img src={Icon} alt="arrow" />
      </div>
      </div>
      <div className={`accordion-item__content ${isActive ? 'active' : ''}`}>
      {isActive && activeTab === state && (
        <div>
          {tasks.map((todo) => (
            <div
              className={`table__item ${getStatusClassName(
                todo.status
              ) === 'current-option' ? 'current-task' : ''}`}
              key={todo.id}
            >
              <p className='item item-1'>{todo.date}</p>
              <p className='item item-2'>{todo.taskId}</p>
              <p className='item item-3'>{todo.projectId}</p>
              <p className='item item-4'>{todo.task}</p>
              <div className='item item-5'>
               <CustomSelect
                  status={todo.status}
                  onChange={(event) => handleChange(event, todo.id)}
                />
              </div>
              <p className='item item-6'>{todo.person}</p>
              <p className='item item-7'>{todo.replacement}</p>
              <p className='item item-8'>{todo.priority}</p>
              <p className='item item-9'>{todo.comment}</p>
              <p className='item item-10'>{todo.planTime}</p>
              <p className='item item-11'>{todo.factTime}</p>
              <p className='item item-12'>{todo.start}</p>
              <p className='item item-13'>{todo.end}</p>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default AccordionItem;
