import Footer from '../Footer'
import gambar from '../img/keqing 4k.jpg'
import gambar2 from '../img/traveller.jpg'
import gambar3 from '../img/raiden.jpg'
import gambar4 from '../img/kokomi.jpg'
import gambar5 from '../img/yae miko.png'
import gambar6 from '../img/xiangling.jpg'
export default function App() {
    return(
        <>
    
<section class="overflow-hidden text-gray-700 ">
  <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <a href="Keqing">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={gambar}/>
            </a>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <a href="Raidenmei">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={gambar2}/>
            </a>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <a href="Durandal">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={gambar3}/>
            </a>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <a href="Sakurayae">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={gambar4}/>
            </a>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <a href="Rita">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={gambar5}/>
            </a>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <a href="Seele">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={gambar6}/>
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