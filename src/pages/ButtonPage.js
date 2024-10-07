import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("Click!");
  };
  return (
    <div>
      <div>
        <Button
          onClick={handleClick}
          className="mb-5"
          secondary
          rounded
          outline
        >
          <GoBell />
          hi there
        </Button>
      </div>

      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <GoCloudDownload />
          hi there
        </Button>
      </div>

      <div>
        <Button warning onMouseLeave={handleClick}>
          <GoDatabase />
          bye there
        </Button>
      </div>

      <div>
        <Button secondary>doerg</Button>
      </div>

      <div>
        <Button primary rounded>
          smtg
        </Button>
      </div>
    </div>
  );
}
export default ButtonPage;
