export default function Questions() {
  const questions = [
    {
      id: 1,
      date: "2024-02-25",
      title: "جامعہ کے قوانین اور دیگر مواد کو کسی دوسرے فورم پر",
      content: "جامعہ کے قوانین اور دیگر مواد کو کسی دوسرے فورم پر",
    },
    {
      id: 2,
      date: "2024-02-25",
      title: "جامعہ کے قوانین اور دیگر مواد کو کسی دوسرے فورم پر",
      content: "جامعہ کے قوانین اور دیگر مواد کو کسی دوسرے فورم پر",
    },
    {
      id: 3,
      date: "2024-02-25",
      title: "جامعہ کے قوانین اور دیگر مواد کو کسی دوسرے فورم پر",
      content: "جامعہ کے قوانین اور دیگر مواد کو کسی دوسرے فورم پر",
    },
    {
      id: 4,
      date: "2024-02-25",
      title: "جامعہ کے قوانین اور دیگر مواد کو کسی دوسرے فورم پر",
      content: "جامعہ کے قوانین اور دیگر مواد کو کسی دوسرے فورم پر",
    },
  ]

  return (
    <div className="pattern-bg p-8 rounded-xl my-12"style={{ backgroundImage: "url('/b.png')" }}>
      <div className="bg-gray-100/90 rounded-xl p-6">
        <div className="bg-[#0a8678] text-white text-center py-3 px-6 rounded-full w-48 mx-auto mb-8">
          <h2 className="text-2xl">سوالات</h2>
        </div>
        
        <div className="space-y-4">
          {questions.map((question) => (
            <div key={question.id} className="question-item">
              <div className="flex justify-between items-start">
                <div className="text-left text-sm text-gray-500">تاریخ: {question.date}</div>
                <div className="text-right">
                  <h3 className="text-xl mb-2">{question.title}</h3>
                  <p className="text-gray-700 mb-2">{question.content}</p>
                  <button className="read-more">مزید پڑھیں</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
