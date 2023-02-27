import RecipeHeader from "./RecipeHeader";
import type { RootState } from '../app/store';
import { useSelector } from "react-redux";

export default function Bookmarks() {
  const authenticated = useSelector((state: RootState) => state.auth.authenticated);
  const bookmarks = useSelector(
    (state: RootState) => Object.values(state.bookmarks.bookmarks)
  );
  // const bookmarks = useSelector((state: RootState) => state.recipes.recipes);
  const username = useSelector((state: RootState) => state.auth.name);
  return (
    authenticated ?
      <div>
        <h2 className="text-xl mb-4 font-semibold">{username}'s Bookmarks</h2>
        <ul className="flex flex-col space-y-4">
          {
            bookmarks.map((recipe, i) => (
              <li key={i}>
                <RecipeHeader variant="bookmark" recipe={recipe} />
              </li>
            ))
          }
        </ul>
      </div> :
      <div>Sign in to start saving recipes.</div>
  );
}