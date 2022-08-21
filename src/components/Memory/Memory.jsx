import { Progressbar } from "framework7-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import "./Memory.scss";
import MemoryLabel from "../MemoryLabel/MemoryLabel";

const Memory = ({ x }) => {
  const [y, setY] = useState(0);

  const TOTAL_STEPS = 8;

  const PERCENT = [100 * (TOTAL_STEPS / 100)] * y;

  const COLORS = useMemo(
    () => ({
      active: "#005EB8",
      completed: "#335A75",
      default: "#C3CACF",
    }),
    []
  );

  const COMPARE_STEPS = useMemo(
    () => ({
      COMPARE_1: 0,
      COMPARE_2: 2,
      COMPARE_3: 4,
      COMPARE_4: 6,
      COMPARE_5: 7,
    }),
    []
  );

  const PERCENTAGE_OF_PROGREESBAR = useMemo(
    () => [
      { STEP: 1, PERCENT: 0.15 },
      { STEP: 2, PERCENT: 2.15 },
      { STEP: 3, PERCENT: 4.3 },
      { STEP: 4, PERCENT: 6.3 },
      { STEP: 5, PERCENT: 8.5 },
      { STEP: 6, PERCENT: 9.5 },
      { STEP: 7, PERCENT: 11 },
      { STEP: 8, PERCENT: 12.5 },
    ],
    []
  );

  const MemoryLabelList = useMemo(
    () => [
      {
        start: COMPARE_STEPS.COMPARE_1,
        end: COMPARE_STEPS.COMPARE_2,
        label: "STEP 1",
      },
      {
        start: COMPARE_STEPS.COMPARE_2,
        end: COMPARE_STEPS.COMPARE_3,
        label: "STEP 2",
      },
      {
        start: COMPARE_STEPS.COMPARE_3,
        end: COMPARE_STEPS.COMPARE_4,
        label: "STEP 3",
      },
      {
        complete: true,
        label: "STEP 4",
      },
    ],
    []
  );

  useEffect(() => {
    x < TOTAL_STEPS && setY(PERCENTAGE_OF_PROGREESBAR[x].PERCENT);
  }, [x]);

  const handleChooseColor = useCallback(
    (start = 0, end = 0) => {
      let color = COLORS.default;

      if (x >= start) {
        color = x < end ? COLORS.active : COLORS.completed;
      }

      return color;
    },
    [x]
  );

  return (
    <div className="memory">
      <div className="memory_label">
        {MemoryLabelList.map((item, index) => (
          <MemoryLabel
            key={index}
            color={handleChooseColor(item.start, item.end)}
            label={item.label}
            itemComplete={item.complete || false}
            showItemComplete={x > COMPARE_STEPS.COMPARE_5}
          />
        ))}
      </div>
      <div className="memory_progressbar">
        <Progressbar progress={PERCENT} />
      </div>
    </div>
  );
};
export default Memory;

Memory.propTypes = {
  x: PropTypes.number,
};
