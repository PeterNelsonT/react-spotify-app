import React from "react";
import "./AlbumFooter.css";
import PlayIcon from "../../PlayIcon/PlayIcon";
function AlbumFooter(props) {
  return (
    <div className="tracks style1">
      {props.tracklist.map((item, index) =>
        item.track ? (
          <div className="tracklist-row" role="button" key={item.track.id}>
            <div className="trackcon">
              <div className="tracklist-play-pause tracklist-top-align">
                <PlayIcon />
              </div>
              <div className="track-name-wrapper tracklist-top-align">
                <a
                  className="tracklist-name"
                  href="/episode/6roJUCIX5Gqs8j4QkDHEWT"
                >
                  {item.track.album.name}
                </a>
                <div className="second-line">
                  <span className="second-line__main">
                    {item.track.artists.map((artist, idx) => (
                      <span key={artist.id} className="track-row__episode-date">
                        {idx !== item.track.artists.length - 1
                          ? artist.name + " • "
                          : artist.name}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
              <div className="tracklist-duration tracklist-top-align">
                <span>
                  {(Math.floor(item.track.duration_ms / 60000) > 9
                    ? Math.floor(item.track.duration_ms / 60000)
                    : "0" + Math.floor(item.track.duration_ms / 60000)) +
                    ":" +
                    (((item.track.duration_ms % 60000) / 1000).toFixed(0) > 9
                      ? ((item.track.duration_ms % 60000) / 1000).toFixed(0)
                      : "0" +
                        ((item.track.duration_ms % 60000) / 1000).toFixed(0))}
                </span>
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default AlbumFooter;
