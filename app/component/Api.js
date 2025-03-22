"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [query, setQuery] = useState("song");
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchSpotifyData(searchQuery) {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://v1.nocodeapi.com/umangk/spotify/lPXDFQXnLtXtthXt/search?q=${searchQuery}&type=track`
      );
      setTracks(data.tracks.items);
    } catch (error) {
      console.error("Error fetching data:", error);
      setTracks([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchSpotifyData(query);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchSpotifyData(query);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Search song</h1>
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }} className="my-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a song..."
          style={{ padding: "10px", marginRight: "10px", width: "230px" }}
          className="bg-gray-500 rounded-3xl"
        />
        <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 rounded-3xl">Search</button>

      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "20px",
          }}

          className="overflow-y-scroll h-[70vh] rounded-lg"
        >
          {tracks.map((track) => (
            <div
              key={track.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <img
                src={track.album.images[0]?.url}
                alt={track.name}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <h3 style={{ fontSize: "16px", margin: "10px 0" }}>
                {track.name}
              </h3>
              <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
              <audio controls style={{ width: "100%" }}>
                <source src={track.preview_url} type="audio/mpeg" />
              </audio>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
