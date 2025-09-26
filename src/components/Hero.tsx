export default function Hero(){
  return (
    <section className="py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold">Sửa chữa điện tử - Uy tín & Nhanh chóng</h1>
          <p className="mt-4 text-gray-700">Sửa tivi, tủ lạnh, máy giặt, máy lạnh... Giá hợp lý, bảo hành rõ ràng.</p>
          <div className="mt-6 flex gap-3">
            <a href="#contact" className="px-4 py-2 bg-blue-600 text-white rounded">Liên hệ ngay</a>
            <a href="#services" className="px-4 py-2 border rounded">Xem dịch vụ</a>
          </div>
        </div>
        <div>
          <img src="/hero-image.jpg" alt="hero" className="rounded shadow" />
        </div>
      </div>
    </section>
  )
}