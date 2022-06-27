import Footer from '../Footer'
import gambar from '../collection/typemusuh/psyhic.jpg'
import gambar2 from '../collection/typemusuh/bio.png'
import gambar3 from '../collection/typemusuh/type robot.jpg'
export default function App() {
    return(
        <>
    
<section class="overflow-hidden text-gray-700 ">
  <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <a href="Psychic">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={gambar}/>
            </a>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <a href="Biologi">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={gambar2}/>
            </a>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <a href="Robot">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={gambar3}/>
            </a>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
</>
)
}