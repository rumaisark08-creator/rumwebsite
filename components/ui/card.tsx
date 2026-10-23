type Props = {
  icon: any
  title: string
  desc: string
}

export default function Card({ icon: Icon, title, desc }: Props) {
  return (
    <div className="bg-[#f5eaff] rounded-2xl p-7 border border-purple-100 hover:shadow-md transition">
      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-6">
        <Icon className="w-5 h-5 text-purple-600" />
      </div>
      <h3 className="font-black text-[13px] mb-2 tracking-wide">{title}</h3>
      <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
      <div className="w-8 h-[2px] bg-purple-200 mt-6"></div>
    </div>
  )
}