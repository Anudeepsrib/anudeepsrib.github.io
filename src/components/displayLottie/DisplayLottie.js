import React, {Component, Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const animationData = this.props.animationData;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <Suspense fallback={<Loading />}>
        <div className="lottie-container">
          <Lottie
            animationData={defaultOptions.animationData}
            loop={defaultOptions.loop}
            rendererSettings={defaultOptions.rendererSettings}
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '500px',
              maxHeight: '500px'
            }}
          />
        </div>
      </Suspense>
    );
  }
}
