import Link from "next/link";


const mockUrls = [
  "https://utfs.io/f/bc9aLWGXt2mZLbcgRg3HK5c2bJ93Ty6VAEFNCh1SwPzxu4on",
  "https://utfs.io/f/bc9aLWGXt2mZ7npOErSanNpqQU8LBK45ofsVMyWTb3rXSRZH"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
        {mockImages.map((image) => (
          <div key={image.id} className='w-1/2 p-4'>
            <img src={image.url} alt="image" />
          </div>
        ))}
        hello (gallery in progress)
      </div>
    </main>
  );
}
