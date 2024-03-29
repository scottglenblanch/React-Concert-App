export default function DisplayedConcert() {
    return (
      <div className="w-2/3 bg-zinc-500">
        <h1>Displayed Concert</h1>
        <div id="buttons" className="flex">
          <button id="add-concert">+ Add Concert</button>
          <button id="search-concert">Search</button>
        </div>
        <div className="flex">
          <h4>Date</h4>
          <h4>Artist/Band</h4>
          <h4>Venue</h4>
        </div>
      </div>
    );
  }