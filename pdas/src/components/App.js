import ProfileCard from "./ProfileCard";

// Have to write extensions on non Javascript files
import AlexaImage from "../static/images/alexa.png";
import CortanaImage from "../static/images/cortana.png";
import SiriImage from "../static/images/siri.png";

import "bulma/css/bulma.css";

function App() {
  return (
    <div>
      <section class="hero is-link">
        <div class="hero-body">
          <p class="title">Personal Digital Assistants</p>
          <p class="subtitle">None nearly as good as EDI</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                username="@alexa97"
                image={AlexaImage}
                description="Alexa sucks."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                username="@cortana24"
                image={CortanaImage}
                description="Cortana sucks."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                username="@siri11"
                image={SiriImage}
                description="Siri sucks."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
