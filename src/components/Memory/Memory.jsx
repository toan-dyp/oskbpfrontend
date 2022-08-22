import { Progressbar } from "framework7-react";
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import "./Memory.scss";
import MemoryLabel from "../MemoryLabel/MemoryLabel";

const Memory = ({ STEP, PERCENT }) => {
  //Completed when percent = 100%
  const COLORS = useMemo(
    () => ({
      active: "#005EB8",
      completed: "#335A75",
      default: "#C3CACF",
    }),
    []
  );
  const COLOR_OF_STEP = {
    STEP_1: COLORS.default,
    STEP_2: COLORS.default,
    STEP_3: COLORS.default,
    STEP_4: COLORS.active,
  };
  const isCompleted = PERCENT === 100;

  if (!isCompleted) {
    const TOTAL_STEP = 3;

    //Set Color Step following Prop Step
    for (var index = 0; index < STEP; index++) {
      COLOR_OF_STEP[`STEP_${index}`] = COLORS.completed;
    }
    COLOR_OF_STEP[`STEP_${STEP}`] = COLORS.active;
  }

  return (
    <div className="memory">
      <div className="memory_label">
        {isCompleted ? (
          <MemoryLabel color={COLOR_OF_STEP.STEP_4} isCompleted={isCompleted}>
            Hoàn Thành
          </MemoryLabel>
        ) : (
          <>
            <MemoryLabel color={COLOR_OF_STEP.STEP_1}>Công việc 1</MemoryLabel>
            <MemoryLabel color={COLOR_OF_STEP.STEP_2}>Công việc 2</MemoryLabel>
            <MemoryLabel color={COLOR_OF_STEP.STEP_3}>Công việc 3</MemoryLabel>
          </>
        )}
      </div>
      <div className="memory_progressbar">
        <Progressbar progress={PERCENT} />
      </div>
    </div>
  );
};
export default Memory;

Memory.propTypes = {
  STEP: PropTypes.number,
  PERCENT: PropTypes.number,
};
