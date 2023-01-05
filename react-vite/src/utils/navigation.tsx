import { useNavigate, useParams } from "react-router-dom";
import { FC } from "react";

export const withRouter = (Component: any) => {
  const Wrapper = (props: any) => {
    const navigate = useNavigate();
    const params = useParams();

    return <Component {...props} navigate={navigate} params={params} />;
  };

  return Wrapper;
};

/*
withRouter merupakan HOC (High Order Component), yang nantinya bakal membungkus suatu component agar bisa menggunakan hooks seperti useNavigate dan useParams didalam sebuah class component.

notes: hooks tidak bisa digunakan didalam class component.
*/
