import RecipeHeader from "./RecipeHeader";
import type { RootState } from '../app/store';
import { useSelector } from "react-redux";

export default function Bookmarks() {
  const bookmarks = useSelector(
    (state: RootState) => Object.values(state.bookmarks.bookmarks)
  );
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