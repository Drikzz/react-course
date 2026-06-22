import { Header } from "../components/Header";
import "./ErrorPage.css";

export function ErrorPage() {
  return (
    <>
      {<Header />}

      <div className="error-message-div">
        <p className="error-message">404 - Page not found</p>
      </div>
    </>
  );
}
