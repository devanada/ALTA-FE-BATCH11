import { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import Button from "../components/Button";
import { useFetchGet } from "../utils/hooks/customHooks";

const Sandbox = () => {
  const [first, setFirst] = useState("test");
  const [trigger, setTrigger] = useState(false);
  const [data] = useFetchGet("https://jsonplaceholder.typicode.com/todos/1");

  /*
  Ketika ada perubahan state pada saat useEffect berjalan, maka terjadi sebuah re-render component.

  Mirip dengan componentDidMount, artinya dia hanya dipanggil sekali setelah komponent dimuat/render (menambahkan empty scope)
  useEffect(() => {
    ...
  }, [])

  useEffect akan jalan terus atau dipanggil kalau penulisannya tanpa scope ([])
  useEffect(() => {
    ...
  })

  Seperti componentDidMount + componentDidUpdate, dijalankan sekali pada saat komponen telah dimuat, lalu dia akan jalan kembali ketika ada perubahan nilai dari salah satu state yang ditulis didalam scope.
  useEffect(() => {
    ...
  }, [state1, state2, state3])

  Mirip dengan componentDidUpdate + componentDidMount + componentWillUnmount, dia bakal dijalankan setiap waktu (mirip dengan penulisan useEffect tanpa scope), namun dia bakal berhenti/unsubscribe ketika kita meninggalkan halaman, dengan harap agar performa dari web tetap terjaga, implementasinya seperti OTP (ada perhitungan mundur yang dijalankan setiap detik), status online.
  useEffect(() => {
    ...
    return () => {
      ...
    }
  })
  */
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // console.log("RUNNING");
  }, [trigger]);

  function funcTest() {
    console.log("RUNNING BUTTON");
  }

  function fetchData() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log(data);
  return (
    <Layout>
      <p>Test</p>
      <Button label="BUTTON" onClick={() => funcTest()} />
    </Layout>
  );
};

export default Sandbox;
