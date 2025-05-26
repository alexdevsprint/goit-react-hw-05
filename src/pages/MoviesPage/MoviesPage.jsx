import { useState, useEffect } from "react";





export default function Movies() {
  return (
    <div>
      <form>
        <input type="text" name="searchMovie" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
