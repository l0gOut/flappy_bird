const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "./sprites/sprite.png";

const fixImage = new Image();
fixImage.src = "./sprites/Screenshot_17.png";

const imageBackground = {
  x: 276,
  y: 227,
};

const imageRoad = {
  x: 224,
  y: 112,
};

const imageBird = {
  x: 35,
  y: 25,
};

const birdCoord = {
  x: Math.floor(canvas.width / 2),
  y: Math.floor(canvas.height / 2),
};

const flyPX = 35;

const SPEED = 3.1;

let index = 0;

const pipes = [];

let score = 0;

document.addEventListener("keyup", () => {
  birdCoord.y -= flyPX;
});

addPipe();

const render = () => {
  index += 0.3;

  ctx.drawImage(fixImage, 0, 0, canvas.width, canvas.height);

  drawBackground(index);
  drawPipe();
  drawRoad(index);

  requestAnimationFrame(render);
};

img.onload = render;

function drawBackground(index) {
  const backgroundX = Math.floor(-((index * SPEED) % canvas.width));

  const backgroundCord = {
    x: 0,
    y: 0,
    width: imageBackground.x,
    height: imageBackground.y,
  };

  const bgImageResult = {
    x: backgroundX + imageBackground.x,
    y: canvas.height - imageBackground.y,
    width: imageBackground.x,
    height: imageBackground.y,
  };

  const bgImageTwoResult = {
    x: backgroundX,
    y: canvas.height - imageBackground.y,
    width: imageBackground.x,
    height: imageBackground.y,
  };

  const bgImageThreeResult = {
    x: backgroundX + imageBackground.x * 2,
    y: canvas.height - imageBackground.y,
    width: imageBackground.x,
    height: imageBackground.y,
  };

  const bgImageFourResult = {
    x: backgroundX + imageBackground.x * 3,
    y: canvas.height - imageBackground.y,
    width: imageBackground.x,
    height: imageBackground.y,
  };

  ctx.drawImage(
    img,

    backgroundCord.x,
    backgroundCord.y,
    backgroundCord.width,
    backgroundCord.height,

    bgImageResult.x,
    bgImageResult.y,
    bgImageResult.width,
    bgImageResult.height
  );

  ctx.drawImage(
    img,

    backgroundCord.x,
    backgroundCord.y,
    backgroundCord.width,
    backgroundCord.height,

    bgImageTwoResult.x,
    bgImageTwoResult.y,
    bgImageTwoResult.width,
    bgImageTwoResult.height
  );

  ctx.drawImage(
    img,

    backgroundCord.x,
    backgroundCord.y,
    backgroundCord.width,
    backgroundCord.height,

    bgImageThreeResult.x,
    bgImageThreeResult.y,
    bgImageThreeResult.width,
    bgImageThreeResult.height
  );

  ctx.drawImage(
    img,

    backgroundCord.x,
    backgroundCord.y,
    backgroundCord.width,
    backgroundCord.height,

    bgImageFourResult.x,
    bgImageFourResult.y,
    bgImageFourResult.width,
    bgImageFourResult.height
  );
}

function drawRoad(index) {
  const backgroundX = Math.floor(-((index * SPEED) % canvas.width));

  const roadCord = {
    x: imageBackground.x,
    y: 0,
    width: imageRoad.x,
    height: imageRoad.y,
  };

  const bgRoadResult = {
    x: backgroundX,
    y: canvas.height - imageRoad.y,
    width: imageRoad.x,
    height: imageRoad.y,
  };

  ctx.drawImage(
    img,

    roadCord.x,
    roadCord.y,
    roadCord.width,
    roadCord.height,

    bgRoadResult.x,
    bgRoadResult.y,
    bgRoadResult.width,
    bgRoadResult.height
  );

  ctx.drawImage(
    img,

    roadCord.x,
    roadCord.y,
    roadCord.width,
    roadCord.height,

    bgRoadResult.x + 224,
    bgRoadResult.y,
    bgRoadResult.width,
    bgRoadResult.height
  );

  ctx.drawImage(
    img,

    roadCord.x,
    roadCord.y,
    roadCord.width,
    roadCord.height,

    bgRoadResult.x + 224 * 2,
    bgRoadResult.y,
    bgRoadResult.width,
    bgRoadResult.height
  );

  ctx.drawImage(
    img,

    roadCord.x,
    roadCord.y,
    roadCord.width,
    roadCord.height,

    bgRoadResult.x + 224 * 3,
    bgRoadResult.y,
    bgRoadResult.width,
    bgRoadResult.height
  );
}

function drawPipe() {
  const birdCord = {
    x: 277,
    y: 113,
    width: imageBird.x,
    height: imageBird.y,
  };

  const bgBirdResult = {
    x: birdCoord.x,
    y: birdCoord.y,
    width: imageBird.x,
    height: imageBird.y,
  };

  birdCoord.y += 1;

  ctx.drawImage(
    img,

    birdCord.x,
    birdCord.y,
    birdCord.width,
    birdCord.height,

    bgBirdResult.x,
    bgBirdResult.y,
    bgBirdResult.width,
    bgBirdResult.height
  );

  pipes.forEach(coord => {
    const backgroundX = Math.floor(-((index * SPEED) % canvas.width));

    const coordPipe = {
      x: 500,
      y: 0,
      width: 54,
      height: 500,
    };

    const bgPipeResult = {
      x: backgroundX + canvas.width,
      y: coord,
      width: 54,
      height: 700,
    };

    const coordPipeTwo = {
      x: 554,
      y: 0,
      width: 54,
      height: 500,
    };

    const bgPipeTwoResult = {
      x: backgroundX + canvas.width,
      y: -700 + coord + flyPX,
      width: 54,
      height: 700,
    };

    ctx.drawImage(
      img,
      coordPipe.x,
      coordPipe.y,
      coordPipe.width,
      coordPipe.height,

      bgPipeResult.x,
      bgPipeResult.y,
      bgPipeResult.width,
      bgPipeResult.height
    );

    ctx.drawImage(
      img,

      coordPipeTwo.x,
      coordPipeTwo.y,
      coordPipeTwo.width,
      coordPipeTwo.height,

      bgPipeTwoResult.x,
      bgPipeTwoResult.y,
      bgPipeTwoResult.width,
      bgPipeTwoResult.height
    );

    if (
      (birdCoord.x + imageBird.x >= bgPipeResult.x &&
        birdCoord.y + imageBird.y >= bgPipeResult.y &&
        birdCoord.x + imageBird.y <= bgPipeResult.x + 70) ||
      (birdCoord.x + imageBird.x >= bgPipeResult.x &&
        birdCoord.y <= bgPipeResult.y - flyPX * 3 &&
        birdCoord.x + imageBird.y <= bgPipeResult.x + 70) ||
      birdCoord.y + imageBird.y >= canvas.height - imageRoad.y
    ) {
      location.reload();
    }

    if (birdCoord.x == bgPipeResult.x + 70) {
      score += 1;
      console.log(score);
    }
  });
}

function addPipe() {
  pipes.push(Math.floor(Math.random() * (600 - 100) + 100));
}
