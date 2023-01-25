import { GoAlert, GoBell, GoCheck, GoComment, GoFold } from "react-icons/go";

import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicking!");
  };
  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick} className="mb-5">
          <GoCheck />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary hollow rounded>
          <GoComment />
          Secondary
        </Button>
      </div>
      <div>
        <Button success rounded>
          <GoFold />
          Success
        </Button>
      </div>
      <div>
        <Button warning>
          <GoAlert />
          Warning
        </Button>
      </div>
      <div>
        <Button danger hollow rounded>
          <GoBell />
          Danger
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
