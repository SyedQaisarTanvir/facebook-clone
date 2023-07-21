import React from "react";
import "../Header.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../StatePovider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="data:image/jpeg;base64,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"
          alt="Facebook Logo"
        />

        <div class="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon />
        </div>
        <div className="header__option">
          <FlagIcon />
        </div>
        <div className="header__option">
          <SubscriptionsIcon />
        </div>
        <div className="header__option">
          <StorefrontIcon />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
