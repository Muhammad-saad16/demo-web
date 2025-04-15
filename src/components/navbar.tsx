import Link from "next/link"
import { Search } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="navbar text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            <div className="text-right">
              <h1 className="text-xl font-bold">جامعۃ العلوم الاسلامیۃ</h1>
              <p className="text-xs">جامعہ علوم اسلامیہ علامہ محمد یوسف بنوری ٹاؤن</p>
            </div>
          </Link>
        </div>

        <div className="flex-1 flex justify-end items-center gap-6 text-base">
          <Link href="#" className="hover:underline flex items-center gap-1">
            <span>سروس</span>
            <span className="text-xs">▼</span>
          </Link>
          <Link href="#" className="hover:underline flex items-center gap-1">
            <span>دارالافتاء</span>
            <span className="text-xs">▼</span>
          </Link>
          <Link href="#" className="hover:underline flex items-center gap-1">
            <span>بیانات</span>
            <span className="text-xs">▼</span>
          </Link>
          <Link href="#" className="hover:underline flex items-center gap-1">
            <span>کتابیں</span>
            <span className="text-xs">▼</span>
          </Link>
          <Link href="#" className="hover:underline flex items-center gap-1">
            <span>دعائیں</span>
            <span className="text-xs">▼</span>
          </Link>
          <Link href="#" className="hover:underline flex items-center gap-1">
            <span>آن لائن داخلہ</span>
            <span className="text-xs">▼</span>
          </Link>
        </div>

        <div className="relative ml-4">
          <input
            type="text"
            placeholder="تلاش کریں"
            className="bg-white/20 rounded-full py-1 px-4 pr-10 text-white placeholder-white/70 text-sm w-40"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
        </div>

        <div className="mr-4 text-xs">
          <span>13 شوال 1446ھ</span>
          <span className="mx-1">|</span>
          <span>12 اپریل 2025ء</span>
        </div>
      </div>
    </nav>
  )
}
