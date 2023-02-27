import type { RootState } from '../app/store';
import { useSelector } from "react-redux";
import RecipeHeader from "./RecipeHeader";

// Bookmarks component.
export default function Bookmarks() {
  // Auth-related state.
  const authenticated = useSelector((state: RootState) => state.auth.authenticated);
  const username = useSelector((state: RootState) => state.auth.name);

  // Bookmarks state.
  const bookmarks = useSelector(
    (state: RootState) => Object.values(state.bookmarks.bookmarks)
  );
  return (
    authenticated ?
      <div>
        <h2 className="text-xl mb-4 font-semibold">{username}'s Bookmarks</h2>
        {bookmarks.length > 0 ? <ul className="flex flex-col space-y-4">
          {
            bookmarks.map((recipe, i) => (
              <li key={i}>
                <RecipeHeader variant="bookmark" recipe={recipe} />
              </li>
            ))
          }
        </ul> : <div className="mt-2">Add some bookmarks!</div>}
      </div> :
      <div>Sign in to start saving recipes.</div>
  );
}