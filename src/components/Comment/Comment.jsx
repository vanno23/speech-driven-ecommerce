import React, { useEffect, useState } from "react";
import annyang from "annyang";
import "./Comment.css";
import VoiceNavigation from "../../VoiceNavigation";

const Comment = ({ productId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = localStorage.getItem("allComments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  useEffect(() => {
    const addVoiceCommands = () => {
      annyang.addCommands({
        [`add a comment *comment`]: (comment) => {
          const timestamp = new Date().getTime();
          const newComment = { productId, comment, timestamp };
          setComments((prevComments) => [...prevComments, newComment]);
          localStorage.setItem(
            "allComments",
            JSON.stringify([...comments, newComment])
          );
          // Refresh the page after adding a comment
          // window.location.reload();
        },
      });
      annyang.start();
    };

    addVoiceCommands();

    return () => {
      annyang.removeCommands();
      annyang.abort();
    };
  }, [productId, comments]);

  useEffect(() => {
    const timer = setInterval(() => {
      setComments((prevComments) => [...prevComments]);
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const calculateTimeAgo = (timestamp) => {
    const now = new Date().getTime();
    const difference = now - timestamp;
    const minutesAgo = Math.round(difference / (1000 * 60));

    if (minutesAgo >= 60) {
      const hours = Math.floor(minutesAgo / 60);
      const remainingMinutes = minutesAgo % 60;
      const hourText = hours > 1 ? "hours" : "hour";
      const minuteText = remainingMinutes > 1 ? "minutes" : "minute";
      return `${hours} ${hourText} and ${remainingMinutes} ${minuteText} ago`;
    } else {
      return `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
    }
  };

  const filteredComments = comments.filter(
    (comment) => comment.productId === productId
  );

  return (
    <div className="productReviews">
      <VoiceNavigation />
      <h3>Comments</h3>
      <ul>
        {filteredComments.map((commentObj, index) => (
          <li key={index}>
            <div className="productReviewsLogo">
              <p>UO</p>
            </div>
            <div>
              <p className="productReviewsName">User One</p>
              <p className="productReviewsTime">
                {calculateTimeAgo(commentObj.timestamp)}
              </p>
              <p className="productReviewsComment">{commentObj.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comment;
