const ProductsSkeleton = () => {
  return (
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {Array.from({length: 10}).map((_, i) => {
    return <div key={i} className="flex *:rounded-lg flex-col gap-3 relative animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="h-5 max-w-40 bg-gray-300"></div>
      <div className="h-5 max-w-20 bg-gray-300"></div>
      <div className="h-10 bg-gray-300"></div>
    </div>
    })}
    </div>
  )
}

export default ProductsSkeleton