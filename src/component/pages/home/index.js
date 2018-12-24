import React, { Component } from "react";
import { AppContext } from "../../utils/provider";
import Gallery from "./gallery/gallery";
import Layout from "../../../component/layout/Layout";
import Header from "../../header/header";
import Section from "../../section/Section";

export default class Home extends Component {
  static contextType = AppContext;

  componentDidMount() {
    console.log(this.context);
    document.title = "SV19";
    setTimeout(() => {
      this.context.setState({ username: "sev" });
    }, 1000);
  }

  render() {
    return (
      <Layout>
        <Header />
        <div className="home-wrapper mt-10" divider={false}>
          <Section title="blog" textLeft extendClassText="pl-4">
            <div className="blog-container flex">
              <div className="mb-10 p-4">
                <div className="text-xl font-sans capitalize font-bold mb-5 text-grey-darker">
                  Last day at aitindo
                </div>
                <div className="text-sm text-grey-dark font-sans leading-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  ex. Eligendi, excepturi eaque exercitationem harum dolore
                  magnam sed ab, voluptatibus molestiae ullam maxime, quo error
                  necessitatibus a sint commodi veniam.
                </div>
                <button
                  className="rounded py-1 px-2 bg-grey-darker text-white cursor-pointer mt-5 text-sm capitalize"
                  style={{ backgroundColor: "turquoise" }}
                >
                  continue reading
                </button>
              </div>
              <div className="mb-10 p-4">
                <div className="text-xl font-sans capitalize font-bold mb-5 text-grey-darker">
                  First day at Tokopedia
                </div>
                <div className="text-sm text-grey-dark font-sans leading-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  ex. Eligendi, excepturi eaque exercitationem harum dolore
                  magnam sed ab, voluptatibus molestiae ullam maxime, quo error
                  necessitatibus a sint commodi veniam.
                </div>
                <button
                  className="rounded py-1 px-2 bg-grey-darker text-white cursor-pointer mt-5 text-sm capitalize"
                  style={{ backgroundColor: "turquoise" }}
                >
                  continue reading
                </button>
              </div>
              <div className="mb-10 p-4">
                <div className="text-xl font-sans capitalize font-bold mb-5 text-grey-darker">
                  First day at Tokopedia
                </div>
                <div className="text-sm text-grey-dark font-sans leading-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  ex. Eligendi, excepturi eaque exercitationem harum dolore
                  magnam sed ab, voluptatibus molestiae ullam maxime, quo error
                  necessitatibus a sint commodi veniam.
                </div>
                <button
                  className="rounded py-1 px-2 bg-grey-darker text-white cursor-pointer mt-5 text-sm capitalize"
                  style={{ backgroundColor: "turquoise" }}
                >
                  continue reading
                </button>
              </div>
            </div>
          </Section>
          <div className="flex items-center justify-center">
            <div
              className="divider my-16 w-16 h-2 bg-grey-darker mr-3"
              style={{ backgroundColor: "black", borderRadius: 4 }}
            />
            <div
              className="divider my-16 w-6 mr-3 h-2 bg-grey-darker"
              style={{ backgroundColor: "black", borderRadius: 4 }}
            />
            <div
              className="divider my-16 w-3 h-2 bg-grey-darker"
              style={{ backgroundColor: "black", borderRadius: 4 }}
            />
          </div>
          <Section title="portofolio" divider={false} textLeft>
            <Gallery />
          </Section>
        </div>
      </Layout>
    );
  }
}
