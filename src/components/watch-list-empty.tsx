
import React from "react";

export const WatchListEmpty: React.FC<{}> = () => {
 return  <div className="flex flex-col items-center justify-center gap-2 px-4">
    <div className="text-2xl font-bold text-center">No coins in watchlist</div>
    <p className="text-center text-gray-500">Add some coins to your watchlist by searching for them above</p>
  </div>
};