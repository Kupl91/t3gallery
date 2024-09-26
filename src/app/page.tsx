import Link from "next/link";


const mockUrls = [
  "https://utfs.io/f/bc9aLWGXt2mZj37t8TGZz6E9ZPIpJtiS21xoKnfvQdWBgATN",
  "https://utfs.io/f/bc9aLWGXt2mZ8IfvDBMr90wXtM2BDsSmlqOU3WucCbpPxIAy",
  "https://utfs.io/f/bc9aLWGXt2mZ9D1JA3dGYHBJVURWTat6d7A4IxmEzZFXgs95",
  "https://utfs.io/f/bc9aLWGXt2mZilI7OYZuQbnmKOhAWIutPe3cTpGXELqg4H28",
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
