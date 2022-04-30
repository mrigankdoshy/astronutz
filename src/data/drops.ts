// eslint-disable-next-line prefer-spread
const drops = Array.apply(null, Array(4)).map((x, i) => ({
  id: i,
  title: 'NFT Marketplace',
  artist: 'artistname',
  price: 0.5,
  image:
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
}));

export default drops;
