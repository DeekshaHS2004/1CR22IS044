import React, { useState } from "react";

function App() {
  const [URL, setURL] = useState("");
  const [list, setList] = useState([]);

  const shorten = () => {
    if (!URL) return alert("Please enter a URL");

    const link = Math.random().toString(36).substring(2, 8);
    const shortURL = "http://localhost:3000/" + link;

    const data = {
      long: URL,
      short: shortURL,
      created_time: new Date().toLocaleString(),
      clicks: 0,
    };

    setList([...list, data]);
    setURL("");
  };

  return (
    <div style={{ padding: 10 }}>
      <h2>Simple URL Shortener</h2>

      <input
        type="text"
        value={URL}
        onChange={(e) => setURL(e.target.value)}
        placeholder="Enter URL"
        style={{ width: 300, marginRight: 10 }}
      />
      <button onClick={shorten}>Shorten</button>

      <h3>Statistics</h3>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Short URL</th>
            <th>Original URL</th>
            <th>Created</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, i) => (
            <tr key={i}>
              <td>
                <a
                  href={item.long}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    const copy = [...list];
                    copy[i].clicks += 1;
                    setList(copy);
                  }}
                >
                  {item.short}
                </a>
              </td>
              <td>{item.long}</td>
              <td>{item.created_time}</td>
              <td>{item.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
