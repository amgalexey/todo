import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../../api';

export const Form = () => {
  const [todos, setTodos] = useState([]);
  const { register, handleSubmit, formState: {
    errors
  } 
} = useForm();

useEffect(() => {
  api.fetchAll().then(setTodos)
}, []);

 const onSubmit = (values) => api.create(values).then((data) => {
  setTodos(todos => [...todos, data])
})
console.log(todos)
  return (
    <div className="container">
      <div className="wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Добавить задачу</h1>
          <input {...register('name', {required: true})} /><br/>
          {errors.name && <p className="error">Обязательное поле. Не более 15 символов</p>}
          <input className="input__text" {...register('text', {required: true})} /><br/>
          {errors.text && <p className="error">Обязательное поле.</p>}
          <input className="input__btn" type="submit" />
        </form>
        <ul>
          {todos.map(item => (
            <li key={item.id}>
              <div className="todo">
              <h2>{item.name}</h2> 
              <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
