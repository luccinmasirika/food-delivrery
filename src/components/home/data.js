export default function chartData(data) {
  const months = data.map((el, i) => {
    return el.x.month;
  });

  const monthsName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const monthsData = [...new Set(months)];

  const LABELS = monthsData.map((i, j) => {
    return monthsName[i - 1];
  });

  const payiedData = [];
  const deniedData = [];
  const canceledData = [];

  data.map((el) => {
    if (el.color === 'PAYIED') {
      payiedData.push({ x: el.x.month, y: el.y });
    }
    if (el.color === 'DENIED') {
      deniedData.push({ x: el.x.month, y: el.y });
    }
    if (el.color === 'CANCELED') {
      canceledData.push({ x: el.x.month, y: el.y });
    }
    return null;
  });

  const PAYIED = [];
  const CANCELED = [];
  const DENIED = [];

  monthsDataLoop: for (let i = 0; i < monthsData.length; i++) {
    for (let j = 0; j < payiedData.length; j++) {
      if (payiedData[j].x === monthsData[i]) {
        PAYIED.push(payiedData[j].y);
        continue monthsDataLoop;
      }
    }
    PAYIED.push(0);
  }

  monthsDataLoop: for (let i = 0; i < monthsData.length; i++) {
    for (let j = 0; j < deniedData.length; j++) {
      if (deniedData[j].x === monthsData[i]) {
        CANCELED.push(deniedData[j].y);
        continue monthsDataLoop;
      }
    }
    CANCELED.push(0);
  }

  monthsDataLoop: for (let i = 0; i < monthsData.length; i++) {
    for (let j = 0; j < canceledData.length; j++) {
      if (canceledData[j].x === monthsData[i]) {
        DENIED.push(canceledData[j].y);
        continue monthsDataLoop;
      }
    }
    DENIED.push(0);
  }

  return { PAYIED, CANCELED, DENIED, LABELS };
}
