import { useState, useEffect } from "react";
import axios from "axios";

import Layout from "components/Layout";
import Button from "components/Button";
import { Input } from "components/Input";

interface TodoType {
  id: string;
  content: string;
  created_at: boolean;
}

const Sandbox = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [inputTask, setInputTask] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  /*
  GET: axios.get(url, config)
  DELETE: axios.delete(url, config)
  POST: axios.post(url, body, config)
  PUT: axios.put(url, body, config)
  */
  function fetchData() {
    axios
      .get("https://api.todoist.com/rest/v2/tasks", {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TODO_API}`,
        },
      })
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  function handleAddTask() {
    const body = {
      content: inputTask,
    };
    axios
      .post("https://api.todoist.com/rest/v2/tasks", body, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TODO_API}`,
        },
      })
      .then((res) => {
        alert("Berhasil menambahkan todo");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => fetchData());
    /*
    TODO: Setelah menambahkan newData ke todo list, pastikan input menjadi kosong kembali.
    TODO: Button tidak bisa di klik kalau input tidak ada nilai.
    */
  }

  function handleEditTask(todo: TodoType) {
    /*
    Pakai axios.put()
    TODO: Coba cari cara bagaimana merubah nilai suatu property didalam object yang ada di array of object (todos). Setelah property tersebut dirubah, silahkan tampilkan todos terbaru yang salah satu object nya telah di edit.
    */
  }

  function handleDeleteTask(todo: TodoType) {
    /*
    Pakai axios.delete()
    TODO: Menghapus todo dari list, bisa menggunakan method filter. Setelah dihapus, rubah state (todos) dengan data yang sudah di filter dan juga localStorage.setItem lagi dengan value yang sudah di filter.
    */
  }

  return (
    <Layout>
      <div className="rounded-2xl w-full flex flex-col p-6 bg-white dark:bg-gray-500 shadow-xl">
        <Input
          id="input-task"
          label="Insert a new task"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <Button label="Add Task" onClick={() => handleAddTask()} />
      </div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="p-2 mb-2 w-full bg-slate-400 gap-2 flex flex-col"
        >
          <p className="break-words">{todo.content}</p>
          <Button label="Edit" onClick={() => handleEditTask(todo)} />
          <Button label="Hapus" onClick={() => handleDeleteTask(todo)} />
        </div>
      ))}
    </Layout>
  );
};

export default Sandbox;
