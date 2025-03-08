import { HomeContactFooter } from "./HomeContactFooter";
import { HomeContactForm } from "./HomeContactForm";

export const HomeContact = () => {
  return (
    <div className="home-Contact">
      <div className="home-Contact__Form">
        <HomeContactForm />
      </div>
      <div className="home-Contact__Footer">
        <HomeContactFooter />
      </div>
    </div>
  );
};
