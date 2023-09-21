function resolveData( data: any ) {
  const today = Number(new Date());
  const date = Number(new Date( data ));

  return ((today - date) / 1000 /24 /60 /60).toFixed(0);
}

export default resolveData;