import{a as m,i as f,S as p}from"./assets/vendor-w2JwYdZo.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g="https://pixabay.com/api/",d="51625695-85db02b03381982e3fb3bbea7",y=i=>m.get(g,{params:{key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(({data:t})=>!t.hits||t.hits.length===0?(f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),null):t.hits).catch(t=>(console.log(t),null)),l={searchForm:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")},h=i=>{const t=i.map(({webformatURL:a,largeImageURL:e,tags:r,likes:s,views:n,comments:c,downloads:u})=>`<li class="gallery-item">
            <a
              class="gallery-link"
              href="${e}"
            >
              <img
                class="gallery-image"
                src="${a}"
                alt="${r}"
              />

              <ul class="img-info">
                <li>
                  <p class="img-info-title">Likes</p>
                  <p class="img-info-value">${s}</p>
                </li>
                <li>
                  <p class="img-info-title">Views</p>
                  <p class="img-info-value">${n}</p>
                </li>
                <li>
                  <p class="img-info-title">Comments</p>
                  <p class="img-info-value">${c}</p>
                </li>
                <li>
                  <p class="img-info-title">Downloads</p>
                  <p class="img-info-value">${u}</p>
                </li>
              </ul>
            </a>
          </li>`).join(`
`);l.gallery.innerHTML=t,new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()},L=()=>{l.loader.classList.remove("hidden")},b=()=>{l.loader.classList.add("hidden")},v=()=>{l.gallery.innerHTML=""};l.searchForm.addEventListener("submit",i=>{i.preventDefault(),v();const t=i.target.elements["search-text"].value.trim();t&&(L(),y(t).then(o=>{o&&h(o)}).catch(o=>console.log(o)).finally(()=>{b(),i.target.reset()}))});
//# sourceMappingURL=index.js.map
