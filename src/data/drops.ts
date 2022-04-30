// eslint-disable-next-line prefer-spread
const drops = Array.apply(null, Array(4)).map((x, i) => ({
  id: i,
  title: 'Lorem ipsum dolor sit amet',
  text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
}));

export default drops;
