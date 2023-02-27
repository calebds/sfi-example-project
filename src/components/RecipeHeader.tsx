import { Recipe } from "../types/types";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from '../app/store';
import { addBookmark, removeBookmark } from '../app/bookmarksSlice';
import {
  Link
} from "react-router-dom";

export default function RecipeHeader({ recipe, variant }: {
  recipe: Recipe,
  variant: 'bookmark' | 'detail' | 'list'
}) {
  const dispatch = useDispatch();
  const authenticated = useSelector((state: RootState) => state.auth.authenticated);
  const isBookmarked = useSelector((state: RootState) => state.bookmarks.bookmarks.hasOwnProperty(recipe.slug));
  const handleEditBookmark = () => {
    if (isBookmarked) {
      dispatch(removeBookmark(recipe.slug));
    } else {
      dispatch(addBookmark(recipe));
    }
  }
  return (
    <div className="flex">
      {variant !== "detail" && <div className="w-1/4">
        <img alt={recipe.title} height="150" width="150" src={recipe.previewImage} />
      </div>}
      <div>
        <div className="flex flex-row items-center">
          {authenticated && <IconButton
            color="inherit"
            aria-label="add bookmark"
            onClick={handleEditBookmark}
            edge="start"
          >
            {isBookmarked ? <BookmarkAddedIcon /> : <BookmarkBorderIcon />}
          </IconButton>}
          <Link to={`/recipe/${recipe.slug}`}>
            <h2 className="text-xl">{recipe.title}</h2>
          </Link>
        </div>
        <div>{recipe.authorName} &middot; {recipe.publishDate} &middot; {recipe.ingredients.length} ingredients</div>
        <div className="flex flex-row space-x-1">{recipe.tags.map((tag, j) => (
          <span key={j} className="text-white bg-gray-400 rounded rounded-xl text-xs px-2 py-1">{tag}</span>
        ))}</div>
        {variant === "detail" && <img height="300" width="400" alt={recipe.title} src={recipe.image} />}
      </div>
    </div>
  );
}