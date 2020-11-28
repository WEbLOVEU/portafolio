// WEB

let web0 = `
<div class="ic-image image-modal-0-1 move-slide"></div>
<div class="ic-image image-modal-0-2 move-slide"></div>
`;

let web1 = `
<div class="ic-image image-modal-1-1 move-slide"></div>
<div class="ic-image image-modal-1-2 move-slide"></div>
`;

let web2 = `
<div class="ic-image image-modal-2-1 move-slide"></div>
<div class="ic-image image-modal-2-2 move-slide"></div>
<div class="ic-image image-modal-2-3 move-slide"></div>
`;

let web3 = `
<div class="ic-image image-modal-3-1 move-slide"></div>
<div class="ic-image image-modal-3-2 move-slide"></div>
<div class="ic-image image-modal-3-3 move-slide"></div>
`;

let web4 = `
<div class="ic-image image-modal-4-1 move-slide"></div>
<div class="ic-image image-modal-4-2 move-slide"></div>
`;

let web5 = `
<div class="ic-image image-modal-5-1 move-slide"></div>
`;

// DESIGN

let design6 = `
<div class="ic-image image-modal-6-1 move-slide"></div>
<div class="ic-image image-modal-6-2 move-slide"></div>
<div class="ic-image image-modal-6-3 move-slide"></div>
<div class="ic-image image-modal-6-4 move-slide"></div>
<div class="ic-image image-modal-6-5 move-slide"></div>
`;

let design7 = `
<div class="ic-image image-modal-7-1 move-slide"></div>
<div class="ic-image image-modal-7-2 move-slide"></div>
`;

let design8 = `
<div class="ic-image image-modal-8-1 move-slide"></div>
`;

let design9 = `
<div class="ic-image image-modal-9-1 move-slide"></div>
`;

let design10 = `
<div class="ic-image image-modal-10-1 move-slide"></div>
`;

let design11 = `
<div class="ic-image image-modal-11-1 move-slide"></div>
<div class="ic-image image-modal-11-2 move-slide"></div>
<div class="ic-image image-modal-11-3 move-slide"></div>
`;

let pGM = {

   btnOpen: $$('.open-gallery-modal'),
   btnExit: $('.exit-gallery-modal'),
   getSlide: null,
   titulo: $('.titulo-modal'),
   image: $('.img-container-slide'),
   modal: $('#modal'),
   body: $('body'),
   item: 0,
   web: `
   <div class="line-modal"></div>
   <p>Desarrollo Web</p>
   `,
   design: `
   <div class="line-modal"></div>
   <p>Diseño Grafico</p>
   `,
   list: [],
   lastList: 0,
   longList: 0,
   next: $('.btn-next'),
   prev: $('.btn-prev'),
   itemModal: 0

}

let mGM = {

   start: () => {

      pGM.btnOpen.forEach( e => {

         e.addEventListener(
            'click',
            mGM.openModal
         );

      });

      pGM.btnExit.addEventListener(
         'click',
         mGM.exitModal
      );

      pGM.next.addEventListener(
         'click',
         mGM.next
      );

      pGM.prev.addEventListener(
         'click',
         mGM.prev
      );

   },

   openModal: e => {

      e.preventDefault();

      pGM.item = e.target.getAttribute("itemGM") - 1;
      pGM.modal.style.display = "flex";
      pGM.body.style.overflow = "hidden";

      switch (pGM.item) {
         case 0:
            pGM.titulo.innerHTML = pGM.web;
            pGM.image.innerHTML = web0;
         break;

         case 1:
            pGM.titulo.innerHTML = pGM.web;
            pGM.image.innerHTML = web1;
         break;

         case 2:
            pGM.titulo.innerHTML = pGM.web;
            pGM.image.innerHTML = web2;
         break;

         case 3:
            pGM.titulo.innerHTML = pGM.web;
            pGM.image.innerHTML = web3;
         break;

         case 4:
            pGM.titulo.innerHTML = pGM.web;
            pGM.image.innerHTML = web4;
         break;

         case 5:
            pGM.titulo.innerHTML = pGM.web;
            pGM.image.innerHTML = web5;
         break;

         case 6:
            pGM.titulo.innerHTML = pGM.design;
            pGM.image.innerHTML = design6;
         break;

         case 7:
            pGM.titulo.innerHTML = pGM.design;
            pGM.image.innerHTML = design7;
         break;

         case 8:
            pGM.titulo.innerHTML = pGM.design;
            pGM.image.innerHTML = design8;
         break;

         case 9:
            pGM.titulo.innerHTML = pGM.design;
            pGM.image.innerHTML = design9;
         break;

         case 10:
            pGM.titulo.innerHTML = pGM.design;
            pGM.image.innerHTML = design10;
         break;
      
         default:
            pGM.titulo.innerHTML = pGM.design;
            pGM.image.innerHTML = design11;
         break;
      }

      pGM.getSlide = $$('.move-slide');

      pGM.getSlide.forEach( e => {

         pGM.list.push(e);

      });

      pGM.lastList = pGM.list.length;
      pGM.longList = pGM.list.length - 1;

   },

   exitModal: () => {

      pGM.modal.style.display = "none";
      pGM.body.style.overflow = "initial";

      pGM.list = pGM.list.splice(pGM.lastList);
      pGM.itemModal = 0;
      pGM.image.style.left = '0%';

   },

   next: () => {

      if ( pGM.itemModal == pGM.longList ) {

         pGM.itemModal = 0;

      } else {

         pGM.itemModal++;

      }

      mGM.moveSlide(pGM.itemModal);

   },

   prev: () => {

      if ( pGM.itemModal == 0 ) {

         pGM.itemModal = pGM.longList;

      } else {

         pGM.itemModal--;

      }

      mGM.moveSlide(pGM.itemModal);  
      
   },

   moveSlide: item => {
      
      pGM.image.style.left = ` ${ item * -100 }% `;

   }

}

mGM.start();