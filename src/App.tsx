import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Header as ListHeader } from './components/List/Header';
import { Empty } from './components/List/Empty';
import { Item } from './components/List/Item';
import { useState } from 'react';

export function App() {
  interface Task {
    id: number;
    content: string;
    isChecked: boolean;
  }

  interface TaskCounter {
    created: number;
    finished: {
      id: number;
      status: boolean;
    }[];
  }  

  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksCounter, setTasksCounter] = useState<TaskCounter>({
    created: 0,
    finished: []
  });

  function addNewTask(taskContent: string) {
    const newTask = {
      id: tasks.length + 1,
      content: taskContent,
      isChecked: false
    }

    setTasks([...tasks, newTask])
    const newTasksCounter = {
      created: tasksCounter.created + 1,
      finished: [
        ...tasksCounter.finished,
        {
          id: newTask.id,
          status: newTask.isChecked
        }
      ],
    }
    setTasksCounter(newTasksCounter);
  }

  function removeTask(taskId: number) {
    const tasksWithoutRemovedOne = tasks.filter((task) => {
      if (task.id !== taskId) {
        return task;
      }
    })

    setTasks(tasksWithoutRemovedOne);

    const counterTasksWithoutRemovedOne = tasksCounter.finished.filter(
      (task) => task.id !== taskId
    );
    const newTasksCounter = {
      created: tasksCounter.created - 1,
      finished: counterTasksWithoutRemovedOne,
    };
    
    setTasksCounter(newTasksCounter);
  }

  function toggleTask(taskId: number) {  
    const tasksWithToggledOne = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isChecked: !task.isChecked };
      }
      return task;
    });
  
    setTasks(tasksWithToggledOne);
  
    const tasksCounterWithToggledOne = tasksCounter.finished.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: !task.status };
      }
      return task;
    });
  
    setTasksCounter((prevCounter) => ({
      ...prevCounter,
      finished: tasksCounterWithToggledOne,
    }));
  }  

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <div>
          <Input onAddTask={addNewTask} />
        </div>
        <div>
          <ListHeader created={tasksCounter.created} finished={tasksCounter.finished}/>
          {
            tasks.length === 0 ? (
              <Empty />
            ) : (
              tasks.map((task) => (
                <Item 
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  isChecked={task.isChecked}
                  onRemoveTask={removeTask}
                  onToggleTask={toggleTask}
                />
              ))
            )
          }
        </div>
      </main>
    </>
  );
}