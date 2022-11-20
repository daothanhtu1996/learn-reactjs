import React from "react";
import PropTypes from "prop-types";
import Album from "../Album";
import "./styles.scss";


AlbumList.propTypes = {
  albumlList: PropTypes.array.isRequired,
};

function AlbumList({ albumlList }) {
  return (
    <ul className="album-list">
      {albumlList.map(album => (
        <li key={album.id}>
          <Album album={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
