import movie1 from "./assets/image1.jpg";
import movie2 from "./assets/image2.jpg";
import movie3 from "./assets/image3.jpg";
import movie4 from "./assets/image4.jpg";
import movie5 from "./assets/image5.jpg";
import movie6 from "./assets/image6.jpg";
import movie7 from "./assets/image7.jpg";
import movie8 from "./assets/image8.jpg";

function Dashboard() {
  const movies = [
    movie1,
    movie2,
    movie3,
    movie4,
    movie5,
    movie6,
    movie7,
    movie8,
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606813907291-d86efa9b94db')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 p-6">

        {/* Title + Logout */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-red-500">
            🎬 Netflix Dashboard
          </h1>

          <button
            onClick={() => {
              localStorage.removeItem("user");
              window.location.href = "/login";
            }}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {movies.map((movie, index) => (
            <div key={index} className="overflow-hidden rounded-xl">
              <img
                src={movie}
                alt="movie"
                className="w-full h-64 object-cover hover:scale-110 transition duration-300 shadow-xl"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Dashboard;