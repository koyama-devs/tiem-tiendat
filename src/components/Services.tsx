const items = [
  {title:'Sửa tivi', desc:'Sửa nhanh mọi lỗi phần cứng/soft'},
  {title:'Sửa máy giặt', desc:'Thay bơm, sửa board, rò nước'},
  {title:'Sửa tủ lạnh', desc:'Sửa block, gas, bảo dưỡng'},
]

export default function Services(){
  return (
    <section id="services" className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Dịch vụ của chúng tôi</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map(i=> (
          <div key={i.title} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{i.title}</h3>
            <p className="text-sm text-gray-600">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}