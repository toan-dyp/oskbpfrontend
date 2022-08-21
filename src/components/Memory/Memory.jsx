/**
 * Memory.jsx
 * BP_PREMIUM_WEBVIEW
 * Created by tienld@vitalify.asia on 26/07/2022
 * Copyright (c) 2022 OMRON HEALTHCARE Co.,Ltd. All rights reserved.
 */
import { Progressbar } from "framework7-react";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useMemo } from "react";
import "./Memory.scss";

const Memory = ({ x }) => {
  /* A constant variable that is used to set the color of the progressbar. */
  const COLORS = {
    active: "#005EB8",
    completed: "#335A75",
    default: "#C3CACF",
  };
  /* Used to compare the value of the progressbar. */
  const COMPARE_STEPS = {
    COMPARE_1: 0,
    COMPARE_2: 2,
    COMPARE_3: 4,
    COMPARE_4: 6,
    COMPARE_5: 7,
  };
  /* Used to represent the percentage of the progressbar increasing gradually. */
  const PERCENTAGE_OF_PROGREESBAR = {
    STEP_1: 0.15,
    STEP_2: 2.15,
    STEP_3: 4.3,
    STEP_4: 6.3,
    STEP_5: 8.5,
    STEP_6: 9.5,
    STEP_7: 11,
    STEP_8: 12.5,
  };
  const [y, setY] = useState(0);
  useMemo(() => {
    // eslint-disable-next-line default-case
    switch (x) {
      case 0: {
        setY(PERCENTAGE_OF_PROGREESBAR.STEP_1);
        break;
      }
      case 1: {
        setY(PERCENTAGE_OF_PROGREESBAR.STEP_2);
        break;
      }
      case 2: {
        setY(PERCENTAGE_OF_PROGREESBAR.STEP_3);
        break;
      }
      case 3: {
        setY(PERCENTAGE_OF_PROGREESBAR.STEP_4);
        break;
      }
      case 4: {
        setY(PERCENTAGE_OF_PROGREESBAR.STEP_5);
        break;
      }
      case 5: {
        setY(PERCENTAGE_OF_PROGREESBAR.STEP_6);
        break;
      }
      case 6: {
        setY(PERCENTAGE_OF_PROGREESBAR.STEP_7);
        break;
      }
      case 7: {
        setY(PERCENTAGE_OF_PROGREESBAR.STEP_8);
        break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [x]);
  /* Used to sum the progress bar steps. */
  const TOTAL_STEPS = 8;
  // /* Used to calculate the percentage of the progressbar. */
  const PERCENT = [100 * (TOTAL_STEPS / 100)] * y;

  return (
    <div className="memory">
      <div className="memory_label">
        {x < COMPARE_STEPS.COMPARE_5 ? (
          <>
            <div className="memory_label_wrap">
              <div
                className="memory_label_wrap_bar"
                style={{
                  background:
                    x >= COMPARE_STEPS.COMPARE_1 && x < COMPARE_STEPS.COMPARE_2
                      ? COLORS.active
                      : COLORS.completed,
                }}
              ></div>
              <div
                className="memory_label_wrap_title"
                style={{
                  color:
                    x >= COMPARE_STEPS.COMPARE_1 && x < COMPARE_STEPS.COMPARE_2
                      ? COLORS.active
                      : COLORS.completed,
                }}
              >
                Step 1
              </div>
            </div>
            <div className="memory_label_wrap">
              <div
                className="memory_label_wrap_bar"
                style={{
                  background:
                    x >= COMPARE_STEPS.COMPARE_2 && x < COMPARE_STEPS.COMPARE_3
                      ? COLORS.active
                      : x < COMPARE_STEPS.COMPARE_2
                      ? COLORS.default
                      : COLORS.completed,
                }}
              ></div>
              <div
                className="memory_label_wrap_title"
                style={{
                  color:
                    x >= COMPARE_STEPS.COMPARE_2 && x < COMPARE_STEPS.COMPARE_3
                      ? COLORS.active
                      : x < COMPARE_STEPS.COMPARE_2
                      ? COLORS.default
                      : COLORS.completed,
                }}
              >
                Step 2
              </div>
            </div>
            <div className="memory_label_wrap">
              <div
                className="memory_label_wrap_bar"
                style={{
                  background:
                    x >= COMPARE_STEPS.COMPARE_3 && x <= COMPARE_STEPS.COMPARE_4
                      ? COLORS.active
                      : x < COMPARE_STEPS.COMPARE_3
                      ? COLORS.default
                      : COLORS.completed,
                }}
              ></div>
              <div
                className="memory_label_wrap_title"
                style={{
                  color:
                    x >= COMPARE_STEPS.COMPARE_3 && x <= COMPARE_STEPS.COMPARE_4
                      ? COLORS.active
                      : x < COMPARE_STEPS.COMPARE_3
                      ? COLORS.default
                      : COLORS.completed,
                }}
              >
                Step 3
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className="memory_label_wrap_complete"
              style={{
                color: COLORS.active,
              }}
            >
              Step 4
            </div>
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
  x: PropTypes.number,
};
