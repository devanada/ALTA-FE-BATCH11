// Constructor start
import React, { Component } from "react";

import Layout from "../components/Layout";
import Card from "../components/Card";
import { SkeletonLoading, LoadingAnimation } from "../components/Loading";

interface DatasType {
  id: number;
  title: string;
  image: string;
}

export default class Index extends Component {
  state = {
    // state: default value
    datas: [],
    loading: true,
  };
  // Constructor end

  // side effect
  componentDidMount() {
    // Jika dilakukan perubahan nilai dari sebuah state didalam side effect, maka akan dilakukan rerender
    this.fetchData();
  }

  fetchData() {
    setTimeout(() => {
      // setState = updater, untuk merubah nilai dari sebuah state
      this.setState({
        datas: [
          {
            id: 1,
            title: "Avengers 1",
            image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
          },
          {
            id: 2,
            title: "Avengers 2",
            image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
          },
          {
            id: 3,
            title: "Avengers 3",
            image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
          },
          {
            id: 4,
            title: "Avengers 4",
            image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
          },
          {
            id: 5,
            title: "Avengers 5",
            image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
          },
        ],
        loading: false,
      });
    }, 6000);
  }

  render() {
    return (
      <Layout>
        <div className="grid grid-cols-4 gap-3">
          {this.state.loading ? (
            <LoadingAnimation />
          ) : (
            this.state.datas.map((data: DatasType) => (
              <Card key={data.id} title={data.title} image={data.image} />
            ))
          )}
        </div>
      </Layout>
    );
  }
}
