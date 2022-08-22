import PropTypes from "prop-types";
import { memo } from "react";

MemoryLabel.propTypes = {
  color: PropTypes.string,
  isCompleted: PropTypes.bool,
  children: PropTypes.node,
};

MemoryLabel.defaultProps = {
  color: "",
  isCompleted: false,
  children: "",
};

function MemoryLabel({ color, isCompleted, children }) {
  console.log({ color, isCompleted, children });
  return (
    <>
      {isCompleted ? (
        <div
          className="memory_label_wrap_complete"
          style={{
            color: color,
          }}
        >
          {children}
        </div>
      ) : (
        <div className="memory_label_wrap">
          <div
            className="memory_label_wrap_bar"
            style={{
              background: color,
            }}
          ></div>
          <div
            className="memory_label_wrap_title"
            style={{
              color: color,
            }}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default memo(MemoryLabel);
