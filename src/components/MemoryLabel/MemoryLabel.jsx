import PropTypes from "prop-types";
import { memo } from "react";

MemoryLabel.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  complete: PropTypes.bool,
};

MemoryLabel.defaultProps = {
  color: "",
  label: "",
  complete: false,
};

function MemoryLabel({ color, label, itemComplete, showItemComplete }) {
  console.log({ color, label, itemComplete, showItemComplete });
  return (
    <>
      {itemComplete && showItemComplete && (
        <div
          className="memory_label_wrap_complete"
          style={{
            color: color,
          }}
        >
          {label}
        </div>
      )}
      {!itemComplete && !showItemComplete && (
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
            {label}
          </div>
        </div>
      )}
    </>
  );
}

export default memo(MemoryLabel);
