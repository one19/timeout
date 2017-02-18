import React, { Component } from 'react';
import DigitRoller from './digit_roller';
import { TimerWrapperDefault } from './timer_wrapper.css';

class YearTimer extends Component {
  props: {
    date: string|Date;
  };

  // TODO: THIS SHIT IS WAY TOO HUGE AND BRITTLE
  // REFACTOR INTO NICER DIGITS AND SINGLUAR ELEMENTS LIKE YEAR - MO - DAY - HOURS

  render() {
    const leftPad = tim => ((tim.length === 1) ? [0, Number(tim)] : tim.split('').map(e => Number(e)));
    const { date } = this.props;
    const safeDate = new Date(date);

    const year = safeDate.getFullYear().toString().split('').map(e => Number(e));
    const months = [31, (Number(year.join('')) % 4 === 0) ? 29 : 28,
      31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const month = leftPad((safeDate.getMonth() + 1).toString());
    const currentMonth = months[Number(month.join('')) - 1];
    const currentMonthMax = Number(currentMonth.toString().slice(0, 1));
    const firstNine = months.slice(0, 9).reduce((a, b) => a + b, 0);
    const lastThree = months.slice(9, 12).reduce((a, b) => a + b, 0);
    const tensMonth = (month[0] === 0) ? firstNine : lastThree;
    const numberDay = safeDate.getDate();
    const numberHour = safeDate.getHours();
    const numberMinute = safeDate.getMinutes();
    const numberSecond = safeDate.getSeconds();
    const milliSecond = safeDate.getMilliseconds();

    const day = leftPad(numberDay.toString());
    const hour = leftPad(numberHour.toString());
    const minute = leftPad(numberMinute.toString());
    const second = leftPad(numberSecond.toString());

    const secondOffset = (0 - milliSecond) / 1000;
    const tensecondOffset = ((10
      - second[1]) * 1000 - milliSecond) / 1000;
    const minuteOffset = 60
      - numberSecond;
    const tenminuteOffset = (60 * (10 - minute[1]))
      - numberSecond;
    const hourOffset = (60 * 60)
      - (60 * numberMinute)
      - numberSecond;
    const tenhourOffset = ((10 - hour[1]) * 60 * 60)
      - (60 * numberMinute)
      - numberSecond;
    const dayOffset = (24 * 60 * 60)
      - (60 * 60 * numberHour)
      - (60 * numberMinute)
      - numberSecond;
    const tendayOffset = ((10 - day[1]) * 24 * 60 * 60)
      - (60 * 60 * numberHour)
      - (60 * numberMinute)
      - numberSecond;

    return (
      <TimerWrapperDefault>
        <DigitRoller
          secondPer={1000 * 365.25 * 24 * 60 * 60}
          startValue={year[0]}
        />
        <DigitRoller
          secondPer={100 * 365.25 * 24 * 60 * 60}
          startValue={year[1]}
        />
        <DigitRoller
          secondPer={10 * 365.25 * 24 * 60 * 60}
          startValue={year[2]}
        />
        <DigitRoller
          secondPer={365.25 * 24 * 60 * 60}
          startValue={year[3]}
        />
        -
        <DigitRoller
          max={1}
          secondPer={tensMonth * 24 * 60 * 60}
          startValue={month[0]}
        />
        <DigitRoller
          secondPer={currentMonth * 24 * 60 * 60}
          startValue={month[1]}
        />
        -
        <DigitRoller
          max={currentMonthMax}
          secondPer={10 * 24 * 60 * 60}
          startValue={day[0]}
          initDelay={tendayOffset}
        />
        <DigitRoller
          secondPer={24 * 60 * 60}
          startValue={day[1]}
          initDelay={dayOffset}
        />
        ,
        <DigitRoller
          max={2}
          secondPer={10 * 60 * 60}
          startValue={hour[0]}
          initDelay={tenhourOffset}
        />
        <DigitRoller
          secondPer={60 * 60}
          startValue={hour[1]}
          initDelay={hourOffset}
        />
        :
        <DigitRoller
          max={5}
          secondPer={10 * 60}
          startValue={minute[0]}
          initDelay={tenminuteOffset}
          reverse
        />
        <DigitRoller
          secondPer={60}
          startValue={minute[1]}
          initDelay={minuteOffset}
          reverse
        />
        .
        <DigitRoller
          max={5}
          secondPer={10}
          startValue={second[0]}
          initDelay={tensecondOffset}
          reverse
        />
        <DigitRoller
          secondPer={1}
          startValue={second[1]}
          initDelay={secondOffset}
          reverse
        />
      </TimerWrapperDefault>
    );
  }
}

export default YearTimer;
