import React from "react";

const Link = ({ href, children }) => {
  const onLinkClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", href);

    const navEevent = new PopStateEvent("popstate");
    window.dispatchEvent(navEevent);
  };

  return (
    <a href={href} onClick={onLinkClick}>
      {children}
    </a>
  );
};

export default Link;
