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

function renderTitle(variant: string, title: string) {
  switch (variant) {
    case 'detail':
      return <h1 className="text-3xl font-bold">{title}</h1>;
    case 'bookmark':
      return <header className="font-semibold">{title}</header>
    default:
      return <header className="text-xl font-semibold">{title}</header>
  }
}

function renderTags(variant: string, tags: string[]) {
  const tagElements = [];
  for (let i = 0; i < tags.length; i++) {
    if (i > 1 && variant !== 'detail') {
      const remainingTags = tags.length - i;
      tagElements.push(<span key={i} className="text-white bg-[#6398D9] rounded rounded-xl text-xs px-2 py-1">+{remainingTags}</span>);
      break;
    }
    tagElements.push(<span key={i} className="text-white bg-[#3A7BCF] rounded rounded-xl text-xs px-2 py-1">{tags[i]}</span>);
  }
  return tagElements;
}

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
      {variant !== "detail" && <div className="mr-4 w-[100px] flex-shrink-0">
        <img alt={recipe.title} height="100" width="100" src={recipe.previewImage} />
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
            {renderTitle(variant, recipe.title)}
          </Link>
        </div>
        {variant !== 'bookmark' && <div className="text-sm text-gray-600">
          {recipe.authorName} &middot; {recipe.publishDate} &middot; {recipe.ingredients.length} ingredients
        </div>}
        <div className="flex my-2 flex-row space-x-1">{renderTags(variant, recipe.tags)}</div>
        {variant === "detail" && <img height="600" width="800" alt={recipe.title} src={recipe.image} />}
      </div>
    </div>
  );
}