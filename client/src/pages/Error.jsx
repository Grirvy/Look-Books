import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page">
      <h1>Sorry!</h1>
      <p>An error has occurred in the application.</p>
      <p>
        <i>{error.message && error.statusText}</i>
      </p>
    </div>
  );
}