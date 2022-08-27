import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Mumbai",
    },
    {
      id: 2,
      title: "Munich",
    },
    {
      id: 3,
      title: "Hyderabad",
    },
    {
      id: 4,
      title: "Sikkim",
    },
    {
      id: 5,
      title: "Manali",
    },
  ];

  return (
    <div className="flex items-center justify-around my-4">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;