import FastAverageColor from 'fast-average-color';

const fac = new FastAverageColor();

const getBackgroundColor = async (image:any) => fac.getColorAsync(image)
  .then((color) => color.rgb)
  .catch((e) => {
    console.log(e);
  });

export default getBackgroundColor;
