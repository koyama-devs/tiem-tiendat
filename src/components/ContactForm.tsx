import React, { useState } from 'react'
import { saveContact } from '../firebase'

export default function ContactForm(){
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string|null>(null)
  const [error, setError] = useState<string|null>(null)

  async function submit(e: React.FormEvent){
    e.preventDefault();
    setLoading(true); setError(null); setSuccess(null)
    try{
      await saveContact({ name, phone, message })
      setSuccess('Gửi liên hệ thành công. Chúng tôi sẽ liên hệ lại sớm!')
      setName(''); setPhone(''); setMessage('')
    }catch(err){
      setError('Có lỗi khi gửi. Vui lòng thử lại sau.');
      console.error(err)
    }finally{ setLoading(false) }
  }

  return (
    <section id="contact" className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Liên hệ</h2>
      <form onSubmit={submit} className="grid gap-3 max-w-md">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Họ và tên" className="p-2 border rounded" required />
        <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Số điện thoại" className="p-2 border rounded" />
        <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Mô tả lỗi / yêu cầu" className="p-2 border rounded" rows={5} required />
        <button disabled={loading} className="px-4 py-2 bg-green-600 text-white rounded">{loading? 'Đang gửi...':'Gửi'}</button>
        {success && <div className="text-green-700">{success}</div>}
        {error && <div className="text-red-700">{error}</div>}
      </form>
    </section>
  )
}