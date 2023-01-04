import { Component } from "react";
import moment from "moment";

import { LoadingAnimation } from "../components/Loading";
import Layout from "../components/Layout";

type GenreType = {
  id?: number;
  name?: string;
};

interface DataType {
  id?: number;
  title?: string;
  poster_path?: string;
  overview?: string;
  release_date?: string;
  runtime?: number;
  genres?: GenreType[];
}

interface PropsType {}

interface StateType {
  loading: boolean;
  data: DataType;
}

export default class DetailMovie extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      // state: default value
      data: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(
      `https://api.themoviedb.org/3/movie/683328?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`,
      { method: "GET" }
    )
      .then((response) => response.json()) // untuk mengkonversi response menjadi json
      .then((data) => {
        // dia akan masuk ke then jikalau dia berstatus OK atau berhasil
        this.setState({ data }); // this.setState({ data: data });
      })
      .catch((error) => {
        // masuk catch ketika server mengirimkan status tidak berhasil
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <Layout>
        {this.state.loading ? (
          <LoadingAnimation />
        ) : (
          <div className="flex w-full h-[50vh] bg-gray-500">
            <img
              src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`}
              alt={this.state.data.title}
            />
            <div className="p-5">
              <p>Title: {this.state.data.title}</p>
              <p>
                Release Date:{" "}
                {moment(this.state.data.release_date).format("DD MMMM YYYY")}
              </p>
              <p>Runtime: {this.state.data.runtime}</p>
              <p>
                Genre:{" "}
                {this.state.data.genres
                  ?.map((genre) => {
                    return genre.name;
                  })
                  .join(", ")}
              </p>
              <p className="text-justify">
                Overview: {this.state.data.overview}
              </p>
            </div>
          </div>
        )}
      </Layout>
    );
  }
}
