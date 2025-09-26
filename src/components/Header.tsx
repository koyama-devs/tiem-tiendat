
export default function Header(){
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">Tiệm sửa chữa Tiến Đạt</div>
        <nav className="space-x-4">
          <a href="#services" className="hover:underline">Dịch vụ</a>
          <a href="#contact" className="hover:underline">Liên hệ</a>
        </nav>
      </div>
    </header>
  )
}