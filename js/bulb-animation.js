(function () {
  const leftPoints = [
    "0.9,94.9 23,105.9 26.4,106.8 28.5,106.8 30.7,106.3 33.2,104.9 35.4,103.9 77.9,80.4 81.6,78.4 83.4,78 85.6,77.6 89.9,77.7 94.7,79.9 136.9,115.4 140,116.3 142.6,116.6 146.9,114.8 154.4,109.9 157.1,108.9 160.1,106.5 163.7,104.9 174.9,98.9 216.5,73.8 226,70.1 231.9,68.6 236.9,68.6 240.2,69.3 244.9,70.6 248.7,75.4 250.1,76.4",
    "0.9,94.9 17.5,66.9 20.2,64.3 24.2,62.1 28.5,61.1 35,61.4 38.5,62.3 79.2,95.3 82.4,96.8 84.9,96.9 87.2,96.8 89.5,96.6 93,94.8 128,77.4 131,77.1 133.5,76.8 137,76.9 139.7,77.1 142.7,77.4 145.6,77.9 149.1,78.4 174.9,98.9 210.9,109.9 220.1,105.9 228.1,100.7 234.1,94.9 239.9,89.2 243.6,85.9 247.1,77.6 249.1,76.2",
    "0.9,94.9 21.1,107.7 24,109.1 27.1,109.6 31.9,109.7 38.5,109.7 42.1,107.4 80.1,72.4 82.4,70.8 85.2,68.9 87.6,68.8 90.4,68.8 93.6,70.2 128.1,103.2 131.2,105.3 134.2,107.3 137.1,107.8 140.9,107.9 143.3,107.4 146,107.3 148.9,106.7 181.1,83.7 207.6,77.7 216.9,75.7 226.9,74.4 233.4,74.4 238.9,74.9 244.1,74.9 246.9,75.7 249.1,76.2",
    "0.9,94.9 25.4,77.7 28.4,76.7 32.1,75.9 36.6,75.4 42.3,75.9 46.4,77.4 78,92.4 81.4,93.4 84,94 87.8,94.9 90.2,94.4 93.4,93.1 130.9,77.9 133.6,76.7 135.7,76.2 138.7,75.7 141.2,75.8 143.9,76.1 146,76.7 147.4,77.4 181.7,90.4 207.7,90.4 215.7,88.8 227.4,83.8 233.7,81.8 240,78.4 244.4,77.4 247.1,76.4 249.1,76.2",
    "0.6,108.4 27.6,133.9 31.6,135.7 34.9,135.9 39.4,135.9 45.1,133.2 51.4,125.4 77.9,58.2 81.9,55.7 87.9,55.4 92.1,56.2 94.4,57.9 96.9,61.9 131.6,129.7 135.4,134.7 138.9,137.7 140.9,138.2 142.9,138.7 145.7,138.4 149.4,136.4 151.9,133.3 189.4,66.3 197.4,61.4 210.7,57.3 220,57.8 231.9,61.9 240.7,69.9 243.9,73.3 247.2,75.8 249.5,76.1",
  ];

  const rightPoints = [
    "419.7,104.3 428.9,111.4 437.4,114.9 450.9,116.9 464.4,114.4 483.9,105.4 527.4,75.4 539.4,72.4 551.4,72.4 564.4,75.4 573.4,81.4 630.4,140.4 637.4,144.4 646.4,146.4 659.4,144.4 666.4,139.4 706.4,97.4 712.4,93.4 718.4,91.4 724.4,92.4 ",
    "419.2,103.9 436.4,101.3 453.6,85.6 464.6,74.6 477.1,68.9 489.4,71.1 523.4,95.4 541.9,96.4 552.4,93.4 563.4,90.9 573.9,87.9 628.4,70.9 641.4,67.4 653.7,67.1 662.4,69.1 679.4,79.9 709.4,109.8 715.4,112.4 719.9,113.9 724.4,92.4",
  ];

  var pathContainer = document.getElementById("changePath");
  var index = 0;

  const topPoints = [
    "248.5,75.8 252.5,76.7 275.6,92.8 285.4,96.7 293.9,97.2 303.6,92.1 308.1,84.6 313,67.6 313.4,50.6   314.2,47.6 321.7,37.1 330.9,30.9 334.2,24.1 334.2,11.9 331,6.8 327.2,6.6 322.7,8.3 316.9,14.9 312,23.1 301.5,35.3 288.2,47.4   270.2,56.3 267.9,53.3 269.7,47.4 274.2,44.1 287.4,32.6 294.2,22.6 303.4,20.3 321.5,18.6 352.5,13.4 362.9,14.1 373.7,22.1   383.7,27.3 385.9,31.4 383,38.6 377.2,40.4 374,39.6",
    "248.5,75.8 250.4,81.7 271.1,98.7 282.6,101.7 294.1,102.9 301.4,93.8 304.4,80.1 322.7,42.4 346.4,37.4 360.4,31.7 358.1,24.2 347.9,21.7 331.6,29.9 319.9,34.2 308.4,42.4 303.6,57.7 296.9,72.2 291.6,70.7 287.6,74.9 282.9,69.4 282.1,59.2 270.2,56.3 267.9,53.3 270.9,46.4 288.6,41.2 292.6,29.4 295.9,19.9 304.6,14.7 321.9,11.7 352.5,13.4 362.9,14.1 370.1,26.2 378.9,29.9 380.9,33.2 380.6,36.9 377.2,40.4 374,39.6",
    "248.5,75.8 252.5,76.7 284,80.4 294.4,72.8 298.7,62.8 307.4,60.1 311.2,55.8 317.9,55.6 320.9,52.3 324.4,44.9 331.2,40.4 338,34.1 342.4,25.4 344.7,7.8 333,4.1 325,2.8 317.4,4.4 312.4,10.8 312,23.1 308.7,42.1 291.4,52.8 271.7,59.8 266.7,56.1 263.7,49.1 265,36.8 276.4,26.8 287.7,18.8 302.7,14.8 321.5,18.6 352.5,13.4 374.7,9.1 385.4,13.8 392,22.8 395.4,29.1 389.7,39.1 377.2,40.4 374,39.6 ",
  ];

  const bottomPoints = [
    "419,103.4 408.3,99.4 401,99.9 392.2,104.2 385.5,108.2 376.5,118.7 375.5,130.9   371,144.4 348.5,160.9 345.2,170.1 347.5,175.9 353,177.2 363.8,170.9 398,144.4 413.3,142.7 417.7,144.6 416.5,149.4 402.5,159.6   392.3,164.9 378.7,167.6 332.8,156.7 285.7,133.2 280.2,127.4 281.5,122.2 285.8,119.2 294.2,120.7 315.5,132.2 324.8,135.2   336.2,135.2 ",
    "420,104 409.8,109 397.4,114.3 395.5,124.8 391.3,133 385.3,139.3 380.9,145   371,144.4 322.7,159.4 315.5,169.2 327.3,176.1 349,170.2 351.5,164.2 379.7,150.1 397.2,150.6 399.5,154.4 396,158.6 389.2,162.2   381.8,164.6 375.3,164.1 324,150.1 278.2,147.1 253.7,136.7 266.7,126.1 280.5,125.1 293,132.1 311.3,139.4 325.3,137.1   336.2,135.2 ",
  ];

  anime({
    targets: "#LeftPath",
    points: [
      { value: leftPoints[2] },
      { value: leftPoints[1] },
      { value: leftPoints[3] },
      { value: leftPoints[1] },
      { value: leftPoints[2] },
      { value: leftPoints[0] },
    ],
    easing: "linear",
    duration: 26000,
    loop: true,
  });

  anime({
    targets: "#RightPath",
    points: [{ value: rightPoints[0] }, { value: rightPoints[1] }],
    easing: "linear",
    duration: 20000,
    loop: true,
  });

  anime({
    targets: "#TopLine",
    points: [
      { value: topPoints[0] },
      { value: topPoints[1] },
      { value: topPoints[2] },
    ],
    easing: "linear",
    duration: 33000,
    loop: true,
  });

  anime({
    targets: "#BottomLine",
    points: [{ value: bottomPoints[0] }, { value: bottomPoints[1] }],
    easing: "linear",
    duration: 20000,
    loop: true,
  });
  var shopNowBtn = document.getElementById("shopNowBtn");
  var Bulb = document.getElementById("Bulb");
  shopNowBtn.onmouseenter = function () {
    Bulb.classList.add("active");
  };
  shopNowBtn.onmouseleave = function () {
    Bulb.classList.remove("active");
  };
})();