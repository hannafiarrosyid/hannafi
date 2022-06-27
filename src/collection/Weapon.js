import Footer from '../Footer'
import gambar from '../img/katana.png'
import gambar2 from '../img/sabit.png'
import gambar3 from '../img/gun.jpg'
import gambar4 from '../img/bloxing gloves.jpg'
import gambar5 from '../img/robot.jpg'
import gambar6 from '../img/katana.png'
export default function App() {
    return(
        <>
    
<section class="overflow-hidden text-gray-700 ">
  <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <a href="katana">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={gambar}/>
            </a>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <a href="sabit">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={gambar2}/>
            </a>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <a href="gun">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={gambar3}/>
            </a>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <a href="bloxing gloves">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={gambar4}/>
            </a>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <a href="robot">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={gambar5}/>
            </a>
        </div>
      </div>
      <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
          <a href="katana">
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