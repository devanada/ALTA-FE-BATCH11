import { Component } from "react";
import moment from "moment";

import { LoadingAnimation } from "../components/Loading";
import Carousel from "../components/Carousel";
import Layout from "../components/Layout";
import { withRouter } from "../utils/navigation";
import { MovieType, VideosType } from "../utils/types/movie";

interface PropsType {
  params?: any;
}

interface StateType {
  loading: boolean;
  data: MovieType;
  videos: VideosType[];
}

class DetailMovie extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      // state: default value
      data: {},
      videos: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const { id_movie } = this.props.params;
    fetch(
      `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&append_to_response=videos`,
      { method: "GET" }
    )
      .then((response) => response.json()) // untuk mengkonversi response menjadi json
      .then((data) => {
        // dia akan masuk ke then jikalau dia berstatus OK atau berhasil
        this.setState({ data, videos: data.videos.results }); // this.setState({ data: data });
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
          <>
            {/*Fragment*/}
            <div className="flex w-full h-[50vh] bg-gray-500">
              <img
                src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`}
                alt={this.state.data.title}
              />
              <div className="p-5 w-full h-full">
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
            <Carousel
              datas={this.state.videos.slice(0, 5)}
              content={(data) => (
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${data.key}`}
                  title={data.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            />
          </>
        )}
      </Layout>
    );
  }
}

export default withRouter(DetailMovie);
