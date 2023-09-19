function resolveData( data: any ) {
  return data.toLocaleDateString( 'pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  } )
}

export default resolveData;