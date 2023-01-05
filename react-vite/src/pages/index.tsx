// Constructor start
import { Component } from "react";
import axios from "axios";

import { SkeletonLoading } from "../components/Loading";
import Carousel from "../components/Carousel";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { MovieType } from "../utils/types/movie";

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: MovieType[];
  page: number;
  totalPage: number;
}

export default class Index extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    // state sifatnya asynchronous, jadi tidak bisa langsung digunakan
    this.state = {
      // state: default value
      datas: [],
      loading: true,
      page: 1,
      totalPage: 1,
    };
  }
  // Constructor end

  // side effect
  componentDidMount() {
    // Jika dilakukan perubahan nilai dari sebuah state didalam side effect, maka akan dilakukan rerender
    this.fetchData(1);
  }

  fetchData(page: number) {
    axios
      .get(
        `now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=${page}`
      )
      .then((data) => {
        // apapun outputnya entah dia berhasil atau gagal, dimana terlihat ada jawaban dari backend, akan masuk ke then
        const { results, total_pages } = data.data; // destructuring
        this.setState({ datas: results, totalPage: total_pages });
      })
      .catch((error) => {
        // akan masuk ke catch jikalau sama sekali tidak menerima jawaban dari backend, tidak di response dari backend, biasanya server down
        alert(error.toString());
      })
      .finally(() => this.setState({ loading: false }));
  }

  nextPage() {
    const newPage = this.state.page + 1;
    this.setState({ page: newPage });
    this.fetchData(newPage);
  }

  prevPage() {
    const newPage = this.state.page - 1;
    this.setState({ page: newPage });
    this.fetchData(newPage);
  }

  handleFavorite(data: MovieType) {
    const checkExist = localStorage.getItem("FavMovie");
    if (checkExist) {
      /*
      TODO: Sebelum ditambahkan ke list favorit, silahkan buat pengkondisian/cek terlebih dahulu apakah film yang dipilih sudah ditambahkan atau belum, kasih alert jika ada, jika tidak silahkan push datanya ke localstorage
      */
      let parseFav: MovieType[] = JSON.parse(checkExist);
      parseFav.push(data);
      localStorage.setItem("FavMovie", JSON.stringify(parseFav));
    } else {
      localStorage.setItem("FavMovie", JSON.stringify([data]));
      alert("Movie added to favorite");
    }
  }

  render() {
    return (
      <Layout>
        {!this.state.loading && (
          <Carousel
            datas={this.state.datas.slice(0, 5)}
            content={(data) => (
              <div
                className="w-full h-full flex justify-center items-center bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ), url(https://image.tmdb.org/t/p/original${data.poster_path})`,
                }}
              >
                <p className="text-white tracking-widest font-bold break-words text-2xl">
                  {data.title}
                </p>
              </div>
            )}
          />
        )}
        <div className="grid grid-cols-4 gap-3 p-3">
          {this.state.loading
            ? [...Array(20).keys()].map((data) => (
                <SkeletonLoading key={data} />
              ))
            : this.state.datas.map((data) => (
                <Card
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                  id={data.id}
                  labelButton="ADD TO FAVORITE"
                  onClickFav={() => this.handleFavorite(data)}
                />
              ))}
        </div>
        <div className="btn-group w-full justify-center">
          <button
            className="btn"
            onClick={() => this.prevPage()}
            disabled={this.state.page === 1}
          >
            «
          </button>
          <button className="btn">{this.state.page}</button>
          <button
            className="btn"
            onClick={() => this.nextPage()}
            disabled={this.state.page === this.state.totalPage}
          >
            »
          </button>
        </div>
      </Layout>
    );
  }
}
