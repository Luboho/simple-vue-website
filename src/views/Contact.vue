<template>
    <div class="text-gray-200 w-full xs:pb-20 sm:pt-32 md:pb-48 lg:pb-48 contact-bg">
        <div class="pb-72 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 xs:justify-items-center">
            <div class="p-10 mt-10 bg-gray-700 bg-opacity-50">
                <h1 class="pb-2 font-bold text-xl">Flores s.r.o.</h1>
                <p class="whitespace-nowrap">Ulica P.J.Šafárika 143/34</p>
                <p class="whitespace-nowrap">Banská Bystrica</p>
                <p class="whitespace-nowrap">457 87</p>     
            </div>
  
            <div class="p-10 mt-10 bg-gray-700 bg-opacity-50">
                <h2 class="pb-2 font-bold text-xl">Otváracie hodiny:</h2>
                <div class="flex">
                    <div class="">
                        <p>Pondelok:</p> 
                        <p>Utorok: </p>
                        <p>Streda: </p>
                        <p>Štvrtok: </p>
                        <p>Piatok: </p>
                        <p>Sobota: </p>
                        <p>Nedeľa: </p>
                    </div>
                    <div>
                        <p class="whitespace-nowrap text-right ml-2"> 7:30 - 18:00</p>
                        <p class="whitespace-nowrap text-right ml-2"> 7:30 - 18:00</p>
                        <p class="whitespace-nowrap text-right ml-2"> 7:30 - 18:00</p>
                        <p class="whitespace-nowrap text-right ml-2"> 7:30 - 18:00</p>
                        <p class="whitespace-nowrap text-right ml-2"> 7:30 - 18:00</p>
                        <p class="whitespace-nowrap text-right ml-2"> 7:30 - 12:00</p>
                        <p class="whitespace-nowrap text-right ml-2">Zatvorené </p>
                    </div>
                </div>
            </div>

            <div class="p-10 mt-10 bg-gray-700 bg-opacity-50">
                <h2 class="pb-2 font-bold text-xl">Kontaktné údaje:</h2>
                <div class="flex">
                    <div class="">
                        <p><font-awesome-icon :icon="['fas', 'phone-alt']" /></p> 
                        <p><font-awesome-icon :icon="['fas', 'mobile-alt']" /></p>
                        <p><font-awesome-icon :icon="['fas', 'envelope']" /></p>
                    </div>
                    <div>
                        <p class="whitespace-nowrap text-right  ml-2">
                            <a href="tel:022313445" > 02/231 34 45</a>
                        </p>
                        <p class="whitespace-nowrap text-right  ml-2">
                            <a href="tel:+421903125678"> +421 903 125 678</a>
                        </p>
                        <p class="whitespace-nowrap text-right  ml-2">
                            <a href="mailto:flores@gmail.com"> flores@gmail.com</a>
                        </p>
                        <p class="ml-12 mt-5">
                            <ShareNetwork
                                network="facebook"
                                url="https://floressro.site/contact"
                                title="Rodinná firma Flores sa venuje úprave záhrad, dvorov, okolia domov a mnoho ďalším"
                                description="Quisque ac condimentum nisl, et dapibus magna. Donec vitae viverra purus. Vivamus vel felis tempor, eleifend est eu, vestibulum lacus. Ut dignissim, nibh et hendrerit semper, elit purus dictum felis, quis auctor velit massa sed magna."
                                quote="Rodinná firma Flores sa venuje úprave záhrad, dvorov a okolia domov."
                                hashtags="Záhrada, Moja Záhrada"
                                :popup="{width: 150, height: 100}"
                            >   
                                <button class="flex flex-row bg-blue-600 hover:bg-blue-700 rounded-md px-2 pb-0.5 shadow">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" class="text-xl mt-1 svg-inline--fa fa-facebook fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                                    <div class="ml-1 mt-0.5 align-middle">Zdieľať</div>
                                </button >
                            </ShareNetwork>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>

.contact-bg {
    background-image: url('~@/assets/pics/contact-bg.jpg');
    background-repeat: repeat-x;
}

</style>