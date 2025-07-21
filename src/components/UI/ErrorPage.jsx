import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);
  const handleHome = () => navigate("/");
  return (
    <section className="error">
      <h1>Error Met</h1>
      <div className="button">
        <button onClick={() => handleBack()}>Go Back</button>
        <button onClick={() => handleHome()}>Go Home</button>
      </div>
    </section>
  );
};
