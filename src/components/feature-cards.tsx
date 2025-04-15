import Image from "next/image"

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
      <div className="white-card p-6 flex items-center justify-between">
        <div className="text-right">
          <h3 className="text-2xl mb-2">تعارف جامعہ نوریہ ٹاؤن</h3>
          <p className="text-lg">جامعہ اور اس کی خصوصیات ایک نظر میں</p>
        </div>
        <div className="w-24 h-24 flex items-center justify-center">
          <Image src="/islamic-column.png" alt="Islamic Pattern" width={80} height={80} className="w-20 h-20" />
        </div>
      </div>

      <div className="primary-card p-6 flex items-center justify-between">
        <div className="text-right">
          <h3 className="text-2xl mb-2">بانی جامعہ حضرت نوری رحمہ اللہ</h3>
          <p className="text-lg">تعارف، علمی و تحقیقی مقالات</p>
        </div>
        <div className="w-24 h-24 flex items-center justify-center">
          <Image src="/islamic-pattern.png" alt="Islamic Column" width={80} height={80} className="w-20 h-20" />
        </div>
      </div>

      <div className="white-card p-6 flex items-center justify-between">
        <div className="text-right">
          <h3 className="text-2xl mb-2">مہتمم</h3>
          <p className="text-lg">بانی جامعہ حضرت نوری رحمہ اللہ</p>
        </div>
        <div className="w-24 h-24 flex items-center justify-center">
          <Image src="/books-icon.png" alt="Person Icon" width={80} height={80} className="w-20 h-20" />
        </div>
      </div>

      <div className="white-card p-6 flex items-center justify-between">
        <div className="text-right">
          <h3 className="text-2xl mb-2">دارالافتاء</h3>
          <p className="text-lg">آپ کے مسائل اور ان کا حل</p>
        </div>
        <div className="w-24 h-24 flex items-center justify-center">
          <Image src="/person-icon.png" alt="Books Icon" width={80} height={80} className="w-20 h-20" />
        </div>
      </div>
    </div>
  )
}
