import RecipeHeader from "./RecipeHeader";
import type { RootState } from '../app/store';
import { useSelector } from "react-redux";

export default function Bookmarks() {
  const authenticated = useSelector((state: RootState) => state.auth.authenticated);
  const bookmarks = useSelector(
    (state: RootState) => Object.values(state.bookmarks.bookmarks)
  );
  if (!authenticated) return <div>Sign in to start saving recipes.</div>
  return (
    <div>
      <ul>
        {bookmarks.map((recipe, i) => (
          <li className="mb-2" key={i}>
            <RecipeHeader variant="bookmark" recipe={recipe} />
          </li>
        ))}
      </ul>
    </div>
  );
}