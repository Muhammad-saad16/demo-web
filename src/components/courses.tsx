import Image from "next/image"

export default function Courses() {
  const courses = [
    { id: 1, title: "درس نظامی", description: "مدرسہ عربی منظم طریقہ کار پر" },
    { id: 2, title: "درس نظامی", description: "مدرسہ عربی منظم طریقہ کار پر" },
    { id: 3, title: "درس نظامی", description: "مدرسہ عربی منظم طریقہ کار پر" },
    { id: 4, title: "درس نظامی", description: "مدرسہ عربی منظم طریقہ کار پر" },
  ]

  return (
    <div className="my-12">
      <h2 className="text-3xl text-[#0a8678] text-center mb-8">کورسز</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="card bg-white shadow-md">
            <Image
              src="/classroom.jpg"
              alt={course.title}
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl text-[#0a8678] mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{course.description}</p>
              <button className="read-more">دیکھیں</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
